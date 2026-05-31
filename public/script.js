const BOOKS_DATA = [
  {
    id: 1,
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    categoria: "Literatura Estrangeira",
    origem: "Internacional",
    descricao: "Uma obra poética e filosófica que fala sobre amizade, amor, responsabilidade e o verdadeiro sentido da vida através de uma narrativa aparentemente infantil, mas profundamente simbólica.",
    sinopse: "Após uma pane no deserto do Saara, um aviador conhece um pequeno príncipe vindo de outro planeta. Durante suas conversas, o garoto revela suas viagens por diferentes mundos e compartilha reflexões sobre relações humanas, solidão e valores essenciais que os adultos frequentemente esquecem.",
    paginas: 96,
    editora: "Agir",
    anoPublicacao: 2018,
    anoEscrita: 1943,
    destaque: true,
    imagem: "https://covers.openlibrary.org/b/title/O%20Pequeno%20Príncipe-L.jpg",
  },
  {
    id: 2,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    categoria: "Literatura Brasileira",
    origem: "Nacional",
    descricao: "Um dos maiores clássicos da literatura brasileira, conhecido por sua narrativa introspectiva e pela dúvida central que atravessa toda a obra.",
    sinopse: "Bentinho reconstrói sua vida e seu relacionamento com Capitu, sua grande paixão. Entre lembranças fragmentadas e interpretações subjetivas, surge a dúvida eterna sobre a possível traição de Capitu, tornando o narrador ao mesmo tempo juiz e réu de sua própria história.",
    paginas: 256,
    editora: "Principis",
    anoPublicacao: 2019,
    anoEscrita: 1899,
    destaque: true,
    imagem: "https://covers.openlibrary.org/b/isbn/9788594318602-L.jpg",
  },
  {
    id: 3,
    titulo: "Torto Arado",
    autor: "Itamar Vieira Junior",
    categoria: "Literatura Brasileira",
    origem: "Nacional",
    descricao: "Um romance contemporâneo poderoso sobre trabalho, terra, ancestralidade e resistência no sertão brasileiro.",
    sinopse: "Bibiana e Belonísia crescem em uma comunidade rural marcada pela exploração e pela desigualdade. Um acidente na infância muda suas vidas para sempre, revelando segredos familiares e a luta histórica de sua comunidade por dignidade e sobrevivência.",
    paginas: 264,
    editora: "Todavia",
    anoPublicacao: 2019,
    anoEscrita: 2017,
    destaque: true,
    imagem: "https://covers.openlibrary.org/b/title/Torto%20Arado-L.jpg",
  },
  {
    id: 4,
    titulo: "Um Estudo em Vermelho",
    autor: "Arthur Conan Doyle",
    categoria: "Mistério e Suspense",
    origem: "Internacional",
    descricao: "O primeiro caso de Sherlock Holmes, marcando o início de uma das maiores séries de investigação da literatura.",
    sinopse: "O detetive Sherlock Holmes e o Dr. Watson investigam um assassinato aparentemente sem explicação. A investigação revela conexões inesperadas e apresenta o método lógico e dedutivo de Holmes.",
    paginas: 192,
    editora: "Zahar",
    anoPublicacao: 2019,
    anoEscrita: 1887,
    destaque: true,
    imagem: "https://covers.openlibrary.org/b/title/A%20Study%20in%20Scarlet-L.jpg",
  },
  {
    id: 5,
    titulo: "Capitães da Areia",
    autor: "Jorge Amado",
    categoria: "Literatura Brasileira",
    origem: "Nacional",
    descricao: "Um retrato sensível e crítico da infância abandonada e das desigualdades sociais no Brasil.",
    sinopse: "Um grupo de meninos vive em um trapiche abandonado em Salvador. Liderados por Pedro Bala, eles enfrentam a fome, a violência e o preconceito enquanto constroem laços de amizade e buscam formas de sobreviver em uma sociedade que os marginaliza.",
    paginas: 280,
    editora: "Companhia das Letras",
    anoPublicacao: 2008,
    anoEscrita: 1937,
    destaque: false,
    imagem: "https://covers.openlibrary.org/b/title/Capit%C3%A3es%20da%20Areia-L.jpg",
  },
  {
    id: 6,
    titulo: "A Hora da Estrela",
    autor: "Clarice Lispector",
    categoria: "Literatura Brasileira",
    origem: "Nacional",
    descricao: "Uma narrativa existencialista que explora solidão, identidade e invisibilidade social.",
    sinopse: "Macabéa é uma jovem nordestina que vive no Rio de Janeiro em condições simples e solitárias. Sua história é narrada por um escritor que questiona constantemente o sentido da vida, da linguagem e da própria criação literária.",
    paginas: 88,
    editora: "Rocco",
    anoPublicacao: 2020,
    anoEscrita: 1977,
    destaque: false,
    imagem: "https://covers.openlibrary.org/b/title/A%20Hora%20da%20Estrela-L.jpg",
  },
  {
    id: 7,
    titulo: "Duna",
    autor: "Frank Herbert",
    categoria: "Ficção Científica",
    origem: "Internacional",
    descricao: "Um épico de ficção científica que mistura política, religião, ecologia e disputas por poder em um universo complexo.",
    sinopse: "No planeta desértico Arrakis, a única fonte da valiosa especiaria melange, Paul Atreides é envolvido em uma conspiração que muda o destino de impérios inteiros e o leva a um caminho de profecias e guerras.",
    paginas: 680,
    editora: "Aleph",
    anoPublicacao: 2017,
    anoEscrita: 1965,
    destaque: true,
    imagem: "https://covers.openlibrary.org/b/title/Duna-L.jpg",
  },
  {
    id: 8,
    titulo: "1984",
    autor: "George Orwell",
    categoria: "Ficção Científica",
    origem: "Internacional",
    descricao: "Uma das distopias mais influentes da história, com reflexões sobre vigilância, censura e manipulação da informação.",
    sinopse: "Winston Smith vive sob um regime totalitário que controla todos os aspectos da vida. Ao questionar o sistema, inicia uma perigosa jornada em busca da verdade e da liberdade.",
    paginas: 416,
    editora: "Companhia das Letras",
    anoPublicacao: 2021,
    anoEscrita: 1949,
    destaque: true,
    imagem: "https://covers.openlibrary.org/b/title/1984-L.jpg",
  },
  {
    id: 9,
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    categoria: "Fantasia",
    origem: "Internacional",
    descricao: "O início de uma das sagas mais populares da literatura moderna, repleta de magia, amizade e aventura.",
    sinopse: "Harry Potter descobre que é um bruxo e ingressa em Hogwarts, onde faz amigos, enfrenta desafios e começa a descobrir segredos sobre seu passado e o mundo mágico.",
    paginas: 264,
    editora: "Rocco",
    anoPublicacao: 2017,
    anoEscrita: 1997,
    destaque: true,
    imagem: "https://covers.openlibrary.org/b/isbn/9780439554930-L.jpg",
  },
  {
    id: 10,
    titulo: "O Código Da Vinci",
    autor: "Dan Brown",
    categoria: "Mistério e Suspense",
    origem: "Internacional",
    descricao: "Um thriller cheio de enigmas, símbolos e conspirações envolvendo arte, religião e história.",
    sinopse: "Após um assassinato no Museu do Louvre, o professor Robert Langdon se vê envolvido em uma investigação que revela códigos ocultos em obras de arte e segredos capazes de abalar instituições milenares.",
    paginas: 480,
    editora: "Arqueiro",
    anoPublicacao: 2014,
    anoEscrita: 2003,
    destaque: false,
    imagem: "https://covers.openlibrary.org/b/title/The%20Da%20Vinci%20Code-L.jpg",
  },
];

const STUDENT_INFO = {
  nome: "Felipe de Carvalho Andrade",
  curso: "Sistemas de Informação",
  turma: "2026.1",
  redes: [
    { nome: "LinkedIn", url: "https://www.linkedin.com/in/felipe-de-carvalho-andrade-it" },
    { nome: "GitHub", url: "https://github.com/Felipe-de-Carvalho-Andrade" },
    { nome: "Instagram", url: "#" },
  ],
};

const STATE = {
  category: "Todos",
  search: "",
  theme: "light",
  page: "home",
};

const selectors = {
  header: "#header",
  footer: "#footer",
  banner: "#banner-section",
  filters: "#filter-section",
  cards: "#cards-section",
  emptyState: "#empty-state",
  detail: "#detail-section",
};

const elements = {
  header: document.querySelector(selectors.header),
  footer: document.querySelector(selectors.footer),
  banner: document.querySelector(selectors.banner),
  filters: document.querySelector(selectors.filters),
  cards: document.querySelector(selectors.cards),
  emptyState: document.querySelector(selectors.emptyState),
  detail: document.querySelector(selectors.detail),
};

function getBookById(id) {
  return BOOKS_DATA.find((book) => book.id === Number(id));
}

function getCategories() {
  const categories = BOOKS_DATA.map((book) => book.categoria);
  return ["Todos", ...new Set(categories)];
}

function getFilteredResults() {
  const query = STATE.search.toLowerCase().trim();

  return BOOKS_DATA.filter((book) => {
    const matchesCategory =
      STATE.category === "Todos" || book.categoria === STATE.category;

    if (!query) {
      return matchesCategory;
    }

    const searchableFields = [
      book.titulo,
      book.autor,
      book.categoria,
      book.descricao,
      book.sinopse,
      book.editora,
      String(book.anoPublicacao)
    ];

    const matchesQuery = searchableFields.some(
      (field) => field && field.toLowerCase().includes(query),
    );

    return matchesCategory && matchesQuery;
  });
}

function saveTheme(value) {
  STATE.theme = value;
  document.body.classList.toggle("theme-dark", value === "dark");
  window.localStorage.setItem("biblioteca-theme", value);
}

function loadTheme() {
  const storedTheme = window.localStorage.getItem("biblioteca-theme") || window.localStorage.getItem("atlas-theme");
  const defaultTheme = storedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  saveTheme(defaultTheme);
}

function renderHeader(isDetail = false) {
  if (!elements.header) return;

  const themeLabel =
    STATE.theme === "dark"
      ? "Alternar para modo claro"
      : "Alternar para modo escuro";

elements.header.innerHTML = `
  <nav class="navbar navbar-expand-lg sticky-top shadow-sm">
    <div class="container">
      <a class="navbar-brand" href="index.html">Atlas<span>Livros</span></a>
      
      <div class="d-flex align-items-center gap-2 order-lg-last">
        <div>
          <button id="themeToggle" class="theme-toggle" type="button" title="${themeLabel}">
            ${STATE.theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav" aria-controls="menuNav" aria-expanded="false" aria-label="Abrir navegação" ${STATE.theme === "dark" ? `style="color: white"`: ""}>
          ☰
        </button>
      </div>

      <div class="collapse navbar-collapse" id="menuNav">
        <ul class="navbar-nav ms-auto align-items-center gap-2 mb-2 mb-lg-0 me-lg-3">
          ${isDetail ? "" : `<li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>`}
          ${isDetail ? `<li class="nav-item"><a class="nav-link" href="index.html">Voltar</a></li>` : ""}
        </ul>
      </div>
    </div>
  </nav>
`;
}

function renderFooter() {
  if (!elements.footer) return;

  const linkedinUrl = STUDENT_INFO.redes.find((r) => r.nome.toLowerCase() === "linkedin")?.url || "#";
  const githubUrl = STUDENT_INFO.redes.find((r) => r.nome.toLowerCase() === "github")?.url ||"#";
  const instagramUrl = STUDENT_INFO.redes.find((r) => r.nome.toLowerCase() === "instagram")?.url || "#";
  const fotoPerfilUrl = "https://avatars.githubusercontent.com/u/108103633?s=400&u=432c7d9ea79269cd68538f69b0e65f10f12b0849&v=4";

  elements.footer.innerHTML = `
    <footer class="footer-wrapper py-5">
      <div class="container">
        <div class="row gy-4 gx-lg-5">
          <div class="col-12 col-lg-8">
            <h3 mb-3">Sobre</h3>
            <p class="footer-description">
              Catálogo de livros.
            </p>
          </div>
          <div class="col-12 col-lg-4">
            <h3 mb-3 me-5 text-center">Autoria</h3>
            <div class="d-flex align-items-start gap-3 mb-4">
              <div>
                <img src="${fotoPerfilUrl}" alt="Foto de ${STUDENT_INFO.nome}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'" style="border-radius: 50%; width: 150px">
              </div>
              <div class="footer-author-info">
                <p class="mb-1"><strong>Aluno:</strong> ${STUDENT_INFO.nome}</p>
                <p class="mb-1"><strong>Curso:</strong> ${STUDENT_INFO.curso}</p>
                <p class="mb-0"><strong>Turma:</strong> ${STUDENT_INFO.turma}</p>
              </div>
            </div>
            <div class="d-flex align-items-center gap-3">
              <span><strong>Redes Sociais:</strong></span>
              <div class="d-flex gap-3">
                <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" class="footer-social-link">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="footer-social-link">
                  <i class="bi bi-github"></i>
                </a>
                <a href="${instagramUrl}" target="_blank" rel="noopener noreferrer" class="footer-social-link">
                  <i class="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-credits mt-5 pt-4 border-top text-center text-muted">
          <p class="mb-0 small">© 2026 Atlas Livros — Catálogo de livros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `;
}

function renderBanner() {
  if (!elements.banner) return;

  const highlight = BOOKS_DATA.filter((book) => book.destaque).slice(0, 7);
  if (!highlight.length) {
    elements.banner.innerHTML = "";
    return;
  }

  const slides = highlight
    .map((book, index) => `
      <div class="carousel-item ${index === 0 ? "active" : ""}" style="background-image: url('${book.imagem}')">
        <div class="carousel-caption">
          <span class="total-itens"><span></span>${book.categoria}</span>
          <h1>${book.titulo}</h1>
          <p>${book.descricao}</p>
          <a class="btn btn-primary" href="detalhes.html?id=${book.id}">Ver detalhes</a>
        </div>
      </div>
    `,
    ).join("");

  const indicators = highlight
    .map((_, index) => `
      <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ""}></button>
    `,
    ).join("");

  elements.banner.innerHTML = `
    <div id="bannerCarousel" class="carousel slide banner" data-bs-ride="carousel" data-bs-interval="3000">
      <div class="carousel-indicators">${indicators}</div>
      <div class="carousel-inner">${slides}</div>
      <button class="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  `;
}

function renderFilterSection() {
  if (!elements.filters) return;

  const categories = getCategories();
  const pills = categories
    .map(
      (category) => `
      <button type="button" class="btn-filtro ${STATE.category === category ? "active" : ""}" data-category="${category}">${category}</button>
    `,
    )
    .join("");

  elements.filters.innerHTML = `
    <div class="section-header mb-4">
      <div>
        <h2 class="section-headline">Explore o catálogo de livros</h2>
        <p class="section-subtitle">Use os filtros por categoria ou pesquise por título, autor e editora.</p>
      </div>
      <div class="total-itens"><span></span>${getFilteredResults().length} resultados</div>
    </div>
    <div class="filter-dashboard">
      <div class="search-wrapper">
        <label class="visually-hidden" for="searchInput">Pesquisar</label>
        <input id="searchInput" class="search-input" type="search" placeholder="🔍 Digite para buscar por título, autor, editora ou categoria..." value="${STATE.search}"/>
      </div>
      <div class="category-list">${pills}</div>
    </div>
  `;
}

function renderGrid(items) {
  if (!elements.cards || !elements.emptyState) return;

  if (!items.length) {
    elements.cards.innerHTML = "";
    elements.emptyState.classList.remove("d-none");
    return;
  }

  elements.emptyState.classList.add("d-none");

  elements.cards.innerHTML = items
    .map(
      (book) => `
      <div class="col-12 col-md-6 col-lg-4">
        <a class="card-link" href="detalhes.html?id=${book.id}">
          <article class="book-card" tabindex="0">
            <div class="card-img-wrapper">
              <img src="${book.imagem}" alt="Capa do livro ${book.titulo}" loading="lazy" onerror="this.src='https://placehold.co/360x240?text=Capa+indisponível'" />
            </div>
            <div class="card-content">
              <span class="card-type">${book.categoria}</span>
              <h3 class="card-title-large">${book.titulo}</h3>
              <p class="card-text">${book.descricao}</p>
              <div class="card-meta">
                <small>${book.autor}</small>
                <span class="total-itens"><span></span>${book.anoEscrita}</span>
              </div>
            </div>
          </article>
        </a>
      </div>
    `,
    )
    .join("");
}

function renderDetailPage() {
  if (!elements.detail) return;

  const params = new URLSearchParams(window.location.search);
  const itemId = Number(params.get("id"));

  if (!itemId) {
    elements.detail.innerHTML = `
      <div class="text-center py-5">
        <p class="text-muted">Nenhum identificador de livro foi informado na URL.</p>
        <a class="btn btn-outline-primary" href="index.html">Voltar à página inicial</a>
      </div>
    `;
    return;
  }

  const book = getBookById(itemId);

  if (!book) {
    elements.detail.innerHTML = `
      <div class="text-center py-5">
        <h2 class="fw-bold">Livro não encontrado</h2>
        <p class="text-muted">O livro solicitado não foi localizado no catálogo.</p>
        <a class="btn btn-outline-primary" href="index.html">Retornar ao catálogo</a>
      </div>
    `;
    return;
  }

  document.title = `${book.titulo} – ${book.autor} | Atlas Livros`;

  const relatedBooks = BOOKS_DATA.filter(
    (item) => item.categoria === book.categoria && item.id !== book.id,
  ).slice(0, 6);
  const recommendations = BOOKS_DATA.filter(
    (item) => item.id !== book.id,
  ).slice(0, 8);

  const buyLink = `https://www.amazon.com.br/s?k=${encodeURIComponent(book.titulo + " " + book.autor)}`;
  const renderHorizontalCard = (item) => {
    const itemBuyLink = `https://www.amazon.com.br/s?k=${encodeURIComponent(item.titulo + " " + item.autor)}`;
    return `
      <article class="related-book-card shadow-sm">
        <div class="related-book-card__media">
          <img src="${item.imagem}" alt="Capa do livro ${item.titulo}" loading="lazy" onerror="this.src='https://placehold.co/260x360?text=Capa+indisponível'" />
        </div>
        <div class="related-book-card__body">
          <div class="related-book-card__info">
            <span class="book-origin-badge">${item.origem}</span>
            <div>
              <h3>${item.titulo}</h3>
              <p>${item.autor}</p>
            </div>
          </div>
          <div class="related-book-actions">
            <a class="btn btn-sm btn-outline-primary" href="detalhes.html?id=${item.id}">Ver Livro</a>
            <a class="btn btn-sm btn-primary" href="${itemBuyLink}" target="_blank" rel="noopener noreferrer">Comprar</a>
          </div>
        </div>
      </article>
    `;
  };

  elements.detail.innerHTML = `
    <div class="detail-top mb-5">
      <div class="breadcrumb">
        <a class="breadcrumb-link" href="index.html">Catálogo</a>
        <span>›</span>
        <span class="breadcrumb-current">${book.categoria}</span>
      </div>
      <div class="detail-actions">
        <span class="category-tag detail-category">${book.categoria}</span>
      </div>
    </div>

    <div class="detail-grid gap-4">
      <aside class="detail-visual-panel">
        <div class="detail-image-card">
          <img src="${book.imagem}" alt="Capa do livro ${book.titulo}" onerror="this.src='https://placehold.co/720x480?text=Capa+indisponível'" />
        </div>

        <div class="detail-summary-card">
          <h2 class="detail-summary-title">Resumo Rápido</h2>
          <p class="detail-summary-text">${book.descricao}</p>
          <div class="detail-quick-info">
            <span>${book.paginas} páginas</span>
            <span>${book.anoPublicacao}</span>
          </div>
          <a class="btn btn-primary btn-lg w-100" href="${buyLink}" target="_blank" rel="noopener noreferrer">Comprar agora</a>
        </div>
      </aside>

      <article class="detail-content-panel">
        <div class="detail-heading">
          <h1 class="detail-headline">${book.titulo}</h1>
          <p class="detail-author">por ${book.autor}</p>
        </div>

        <section class="detail-meta-card">
          <h2 class="detail-section-title">Ficha Técnica <span class="detail-meta-origin">${book.origem}</span></h2>
          <div class="detail-meta-grid">
            <div class="meta-item">
              <span>Editora</span>
              <strong>${book.editora}</strong>
            </div>
            <div class="meta-item">
              <span>Ano de publicação</span>
              <strong>${book.anoPublicacao || book.anoPublicacao}</strong>
            </div>
            <div class="meta-item">
              <span>Ano de escrita</span>
              <strong>${book.anoEscrita || book.anoPublicacao}</strong>
            </div>
            <div class="meta-item">
              <span>Páginas</span>
              <strong>${book.paginas}</strong>
            </div>
            <div class="meta-item meta-item-full">
              <span>Categorias</span>
              <strong>${book.categoria}</strong>
            </div>
          </div>
        </section>

        <section class="detail-story-card">
          <div class="section-headline-sm mb-3">Sinopse Completa</div>
          <p class="detail-description">${book.sinopse}</p>
        </section>
      </article>
    </div>

    <section class="recommendations-section mt-5">
      <div class="section-header detail-section-header">
        <div>
          <h2 class="section-headline-sm">Você Também Pode Gostar</h2>
          <p class="section-subtitle-sm">Sugestões selecionadas para sua próxima leitura.</p>
        </div>
      </div>
      <div class="scrollable-slider-wrapper">
        <div class="scrollable-slider-inner">
          ${recommendations.map(renderHorizontalCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function attachEvents() {
  const themeToggle = document.querySelector("#themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      saveTheme(STATE.theme === "dark" ? "light" : "dark");
      renderHeader(STATE.page === "detail");
      attachEvents();
    });
  }

  const searchInput = document.querySelector("#searchInput");

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      STATE.search = event.target.value;
      updateGrid();
    });
  }

  document.querySelectorAll(".btn-filtro").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      STATE.category = button.dataset.category;
      document.querySelectorAll(".btn-filtro").forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
      updateGrid();
    });
  });
}

function updateGrid() {
  const results = getFilteredResults();
  renderGrid(results);

  const contador = document.querySelector(".section-header .total-itens");
  if (contador) {
    contador.innerHTML = `<span></span>${results.length} resultados`;
  }
}

function initializePage() {
  STATE.page = elements.detail ? "detail" : "home";

  loadTheme();
  renderHeader(STATE.page === "detail");
  renderFooter();

  if (STATE.page === "home") {
    if (elements.banner) renderBanner();
    renderFilterSection();
    renderGrid(getFilteredResults());
  }

  if (STATE.page === "detail") {
    renderDetailPage();
  }

  attachEvents();
}

window.addEventListener("DOMContentLoaded", initializePage);