import { projetos } from './projetos.js';

let input = document.getElementById("clrinput");

const card = document.getElementById("projetos-card");
const filtroTechs = document.getElementById("filtro-techs");
const filtroTechsMenu = document.getElementById("filtro-techs-menu");

document.getElementById('totalProjetos').innerHTML = projetos.length

const elementosPorPagina = 5;
let paginaAtual = 1;

// Função de renderização dos projetos
function renderizarProjetos(filtrados) {
  const data = filtrados ? filtrados : projetos;

  if (data.length > 0) {
    const inicio = (paginaAtual - 1) * elementosPorPagina;
    const fim = inicio + elementosPorPagina;
    const projetosPagina = data.slice(inicio, fim);
    
    card.innerHTML = '';

    projetosPagina.forEach((item) => {
      card.innerHTML += `
        <div class="col-12 d-flex pt-5 cards" style="border: 1px solid white; border-radius: 5px">
            <div class="column col-9">
                <p class="h4 mb-4">${item.titulo}</p>
                <p>${item.descricao}</p>
                <strong>${item.tecnologias}</strong>
                <div class="d-flex justify-content-center py-3 gap-4">
                    <a data-toggle="tooltip" data-placement="top" title="Visualizar Repositório" class="buttons-card" href="${item.github}" target="_blank">
                        Repositório
                        <i class="fa-brands fa-github icon"></i>
                    </a>
                    <a data-toggle="tooltip" data-placement="top" title="Visualizar Projeto" class="buttons-card" href="${item.site}" target="_blank">
                        Visitar projeto
                        <i class="fa-solid fa-eye icon"></i>
                    </a>
                </div>
            </div>
            <div class="col-3">
              <i-frame url="https://upload.wikimedia.org/wikipedia/commons/d/de/Scorpions_in_Melbourne%2C_Australia_17.10.2016.jpg" />
            </div>
        </div>`;
    });
    const elems = document.querySelectorAll(".hidden");
    for (const elem of elems) {
      elem.style.display = "none";
    }
  } else {
    card.innerHTML = '<strong>Nenhum projeto encontrado com esta tecnologia ou descrição!</strong>';
  }
}

gerarPaginacao();

function gerarPaginacao(filtrados) {
  const data = filtrados ? filtrados : projetos;

  const paginacao = document.getElementById('paginacao');
  paginacao.innerHTML = "";

  const totalPaginas = Math.ceil(data.length / elementosPorPagina);

  for (let i = 1; i <= totalPaginas; i++) {
    const li = document.createElement("li");
    li.classList.add("page-item");
    if (i === paginaAtual) li.classList.add("active");

    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.addEventListener("click", () => {
      paginaAtual = i;
      gerarPaginacao();
      renderizarProjetos();
    });

    paginacao.appendChild(li);
  }

  document.getElementById("prevPage").classList.toggle("disabled", paginaAtual === 1);
  document.getElementById("nextPage").classList.toggle("disabled", paginaAtual === totalPaginas);
};

document.getElementById("prevPage").addEventListener("click", () => {
  if (paginaAtual > 1) {
    paginaAtual--;
    gerarPaginacao();
    renderizarProjetos();
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  const totalPaginas = Math.ceil(projetos.length / elementosPorPagina);
  if (paginaAtual < totalPaginas) {
    paginaAtual++;
    gerarPaginacao();
    renderizarProjetos();
  }
});

// Função para separar as tecnologias
function separarTechs() {
  let techsSeparadas = new Map();

  projetos.forEach((tech) => {
    const techsDesestructed = tech.tecnologias.split('-');

    techsDesestructed.forEach((techDesestruct) => {
      techsSeparadas.set(techDesestruct.trim(), techDesestruct.trim());
    })
  });

  renderizarFiltrosCheckboxes(techsSeparadas);
}

// Função para renderizar os filtros de checkbox
function renderizarFiltrosCheckboxes(techsSeparadas) {
  for (const valor of techsSeparadas.values()) {
    const htmlCheckbox = `
      <div class="form-check form-check-inline d-flex">
        <input id="checkboxInpt" class="form-check-input checkbox" type="checkbox" id="techs${valor}" value="${ valor }">
        <label class="form-check-label px-3" for="techs${valor}">${ valor }</label>
      </div>
    `;

    filtroTechs.innerHTML += htmlCheckbox;

    filtroTechsMenu.innerHTML += htmlCheckbox;
  }
}

// Função para filtrar os projetos
function filtrarCheckbox() {
  let techsSelecionadas = [];

  document.querySelectorAll('.form-check-input:checked').forEach((checkbox) => {
    techsSelecionadas.push(checkbox.value);
  });

  const filtrados = projetos.filter(proj =>
    techsSelecionadas.some(tech => proj.tecnologias.includes(tech))
  );

  let result = []

  result = filtrados.length ? filtrados : projetos;

  gerarPaginacao(result)
  renderizarProjetos(result);
}

// Função para limpar os checkboxes
function limparCheckboxes() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
}

// Adicionando o evento de input para o campo de busca
input.addEventListener("input", () => {
  card.innerHTML = "";

  limparCheckboxes();
  
  if (input.value) {
    click = false;
    const inputSearch = input.value.toLowerCase()
    const filtrados = projetos.filter((item) => item.tecnologias.toLowerCase().match(inputSearch) || item.titulo.toLowerCase().match(inputSearch))
    renderizarProjetos(filtrados);
  } else {
    renderizarProjetos();
  }
});

// Iniciando o processo
renderizarProjetos();
separarTechs();

document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os checkboxes com a classe 'checkbox'
  let checkboxes = document.querySelectorAll('.checkbox');

  // Itera sobre todos os checkboxes e adiciona um ouvinte de evento para o 'change'
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      filtrarCheckbox();
    });
  });
});