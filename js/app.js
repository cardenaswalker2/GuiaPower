/**
 * Main Application Controller, Router and View Renderer
 */

class App {
  constructor() {
    this.searchEngine = new SearchEngine(COURSE_DATA.modules, COURSE_DATA.flashcards);
    this.currentRoute = '';
    this.currentFlashcardIndex = 0;
    this.flashcardFilter = 'all'; // all | to_learn | learning | learned

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupStudyTimer();
    this.renderSidebar();
    this.handleRoute();

    window.addEventListener('hashchange', () => this.handleRoute());
  }

  setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });
      searchInput.addEventListener('focus', (e) => {
        if (e.target.value.trim().length > 1) {
          this.handleSearch(e.target.value);
        }
      });
    }

    // Modal background close
    const searchModal = document.getElementById('search-modal');
    if (searchModal) {
      searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) this.closeSearchModal();
      });
    }

    // Keyboard shortcut (Cmd/Ctrl + K for search)
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const input = document.getElementById('global-search-input');
        if (input) input.focus();
      }
      if (e.key === 'Escape') {
        this.closeSearchModal();
      }
    });

    // Theme toggle button
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        themeBtn.innerText = newTheme === 'dark' ? '☀️' : '🌙';
      });
    }

    // Mobile Sidebar Drawer Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('main-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');

    const toggleSidebar = () => {
      const isOpen = sidebar.classList.toggle('open');
      backdrop.classList.toggle('active', isOpen);
    };

    const closeSidebar = () => {
      sidebar.classList.remove('open');
      backdrop.classList.remove('active');
    };

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', toggleSidebar);
    }
    if (backdrop) {
      backdrop.addEventListener('click', closeSidebar);
    }

    // Mobile search button triggers modal search
    const mobileSearchBtn = document.getElementById('mobile-search-btn');
    if (mobileSearchBtn) {
      mobileSearchBtn.addEventListener('click', () => {
        const modal = document.getElementById('search-modal');
        const input = document.getElementById('global-search-input');
        if (modal) modal.classList.add('active');
        if (input) input.focus();
      });
    }
  }

  setupStudyTimer() {
    setInterval(() => {
      StorageManager.incrementStudyTime(1);
      const timerDisplay = document.getElementById('header-study-timer');
      if (timerDisplay) {
        timerDisplay.innerText = ProgressTracker.formatStudyTime(StorageManager.getStudyTime());
      }
    }, 1000);
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    this.currentRoute = hash;

    // Highlight active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${hash}`) {
        item.classList.add('active');
      }
    });

    if (hash === '/' || hash === '/dashboard') {
      this.renderDashboard();
    } else if (hash === '/flashcards') {
      this.renderFlashcardsView();
    } else if (hash === '/quiz') {
      this.renderQuizView();
    } else if (hash === '/checklist') {
      this.renderChecklistView();
    } else if (hash.startsWith('/mod-')) {
      const modId = hash.replace('/', '');
      this.renderModuleView(modId);
    } else {
      this.renderDashboard();
    }

    // Auto-close sidebar on mobile after navigating
    const sidebar = document.getElementById('main-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderSidebar() {
    const navModulesContainer = document.getElementById('sidebar-modules-list');
    if (!navModulesContainer) return;

    const completed = StorageManager.getCompletedModules();

    navModulesContainer.innerHTML = COURSE_DATA.modules.map(mod => {
      const isDone = completed.includes(mod.id);
      return `
        <a href="#/${mod.id}" class="nav-item ${this.currentRoute === `/${mod.id}` ? 'active' : ''}">
          <span class="nav-icon">${isDone ? '✓' : '📄'}</span>
          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            ${mod.number}. ${mod.title}
          </span>
          ${isDone ? `<span class="completed-check">●</span>` : ''}
        </a>
      `;
    }).join('');
  }

  renderDashboard() {
    const container = document.getElementById('main-content-area');
    const stats = ProgressTracker.getOverallProgress();
    const completed = StorageManager.getCompletedModules();

    container.innerHTML = `
      <div class="module-hero">
        <div class="module-meta-row">
          <span class="badge-tag tag-emerald">Plataforma de Aprendizaje Activo</span>
          <span class="badge-tag tag-gray">Microsoft Power Platform 2026</span>
        </div>
        <h1 class="module-title">Aprende Power Apps, Automate, Lists y SharePoint</h1>
        <p class="module-subtitle">
          Domina la arquitectura empresarial, modelado de datos, fórmulas Power Fx, flujos de aprobación y buenas prácticas con cobertura 100% fiel al manual oficial.
        </p>

        <div class="module-hero-actions">
          <a href="#/mod-1" class="btn btn-primary">
            🚀 Comenzar / Continuar Estudio
          </a>
          <a href="#/flashcards" class="btn btn-secondary">
            🎴 Repasar con Flashcards
          </a>
          <a href="#/quiz" class="btn btn-secondary">
            📝 Evaluación Global
          </a>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon-wrapper">📊</div>
          <div class="stat-content">
            <div class="stat-value">${stats.overallPercent}%</div>
            <div class="stat-label">Progreso General</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper">📚</div>
          <div class="stat-content">
            <div class="stat-value">${stats.completedModules} / ${stats.totalModules}</div>
            <div class="stat-label">Módulos Completados</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper">⏱️</div>
          <div class="stat-content">
            <div class="stat-value" id="dashboard-study-timer">${ProgressTracker.formatStudyTime(StorageManager.getStudyTime())}</div>
            <div class="stat-label">Tiempo de Estudio</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper">🎯</div>
          <div class="stat-content">
            <div class="stat-value">${stats.checkedCount} / ${stats.totalChecklist}</div>
            <div class="stat-label">Hitos de Acción</div>
          </div>
        </div>
      </div>

      <!-- Modules Catalog -->
      <h2 class="section-heading"><span class="heading-num">📂</span> Módulos y Unidades de Estudio</h2>
      <div class="modules-grid">
        ${COURSE_DATA.modules.map(mod => {
          const isDone = completed.includes(mod.id);
          return `
            <div class="module-card" onclick="window.location.hash='#/${mod.id}'">
              <div>
                <div class="module-card-header">
                  <span class="module-card-num">Capítulo ${mod.number}</span>
                  <span class="badge-tag tag-gray">${mod.category}</span>
                </div>
                <div class="module-card-title">${mod.title}</div>
                <div class="module-card-desc">${mod.description}</div>
              </div>
              <div class="module-card-footer">
                <span class="module-status-pill ${isDone ? 'status-completed' : 'status-pending'}">
                  ${isDone ? '✓ Completado' : '○ Pendiente'}
                </span>
                <span style="color: var(--accent); font-weight: 600;">Estudiar →</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  renderModuleView(moduleId) {
    const mod = COURSE_DATA.modules.find(m => m.id === moduleId);
    if (!mod) {
      this.renderDashboard();
      return;
    }

    const container = document.getElementById('main-content-area');
    const isCompleted = StorageManager.getCompletedModules().includes(mod.id);
    const modIdx = COURSE_DATA.modules.findIndex(m => m.id === moduleId);
    const prevMod = modIdx > 0 ? COURSE_DATA.modules[modIdx - 1] : null;
    const nextMod = modIdx < COURSE_DATA.modules.length - 1 ? COURSE_DATA.modules[modIdx + 1] : null;

    const userNote = StorageManager.getNotes()[mod.id] || '';

    container.innerHTML = `
      <div class="breadcrumb-bar">
        <a href="#/dashboard">Inicio</a>
        <span class="separator">/</span>
        <span>${mod.category}</span>
        <span class="separator">/</span>
        <span class="current">Capítulo ${mod.number}: ${mod.title}</span>
      </div>

      <div class="module-hero">
        <div class="module-meta-row">
          <span class="badge-tag tag-emerald">Capítulo ${mod.number}</span>
          <span class="badge-tag tag-gray">${mod.category}</span>
          ${isCompleted ? `<span class="badge-tag tag-emerald">✓ Completado</span>` : ''}
        </div>
        <h1 class="module-title">${mod.title}</h1>
        <p class="module-subtitle">${mod.description}</p>

        <div class="module-hero-actions">
          <button id="toggle-complete-btn" class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}" onclick="window.app.toggleComplete('${mod.id}')">
            ${isCompleted ? '✓ Marcar como Pendiente' : '✓ Marcar Unidad como Completada'}
          </button>
        </div>
      </div>

      <!-- Objectives Card -->
      <div class="callout callout-info" style="margin-bottom: 2rem;">
        <div class="callout-icon">🎯</div>
        <div class="callout-body">
          <div class="callout-title">Objetivos Específicos de Aprendizaje</div>
          <ul style="margin-left: 1.25rem; margin-top: 0.5rem;">
            ${mod.objectives.map(obj => `<li>${obj}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Main Body Content (HTML from content.js) -->
      ${mod.contentHtml}

      <!-- Key Takeaways -->
      <div class="callout callout-golden" style="margin-top: 2rem;">
        <div class="callout-icon">📌</div>
        <div class="callout-body">
          <div class="callout-title">Resumen de Conocimientos Fundamentales</div>
          <ul style="margin-left: 1.25rem; margin-top: 0.5rem;">
            ${mod.keyTakeaways.map(k => `<li>${k}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Personal Notes Box for this module -->
      <div class="notes-panel">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h4 style="font-weight: 700;">📝 Mis Notas Personales para este Capítulo</h4>
          <span id="notes-save-status" style="font-size: 0.8rem; color: var(--text-muted);">Auto-guardado local</span>
        </div>
        <textarea 
          id="module-note-textarea" 
          class="notes-textarea" 
          placeholder="Escribe aquí tus apuntes, dudas, fórmulas aprendidas o recordatorios de este módulo..."
          oninput="window.app.saveNote('${mod.id}', this.value)"
        >${userNote}</textarea>
      </div>

      <!-- Module Navigation Footer -->
      <div class="module-nav-footer">
        ${prevMod ? `
          <a href="#/${prevMod.id}" class="nav-link-card">
            <span class="nav-direction">← Capítulo Anterior</span>
            <span class="nav-topic-title">${prevMod.number}. ${prevMod.title}</span>
          </a>
        ` : '<div></div>'}

        ${nextMod ? `
          <a href="#/${nextMod.id}" class="nav-link-card next">
            <span class="nav-direction">Siguiente Capítulo →</span>
            <span class="nav-topic-title">${nextMod.number}. ${nextMod.title}</span>
          </a>
        ` : `
          <a href="#/checklist" class="nav-link-card next">
            <span class="nav-direction">Paso Final →</span>
            <span class="nav-topic-title">Plan Personal de Acción</span>
          </a>
        `}
      </div>
    `;

    // Render interactive checklist if this is module 15
    if (mod.id === 'mod-15') {
      this.renderInteractiveChecklist();
    }
  }

  toggleComplete(modId) {
    const isNowDone = StorageManager.toggleModuleCompleted(modId);
    this.renderSidebar();
    this.renderModuleView(modId);
    this.showToast(isNowDone ? '¡Capítulo marcado como completado!' : 'Capítulo marcado como pendiente');
  }

  saveNote(modId, text) {
    StorageManager.saveNote(modId, text);
    const status = document.getElementById('notes-save-status');
    if (status) {
      status.innerText = 'Guardado ✓';
      setTimeout(() => {
        if (status) status.innerText = 'Auto-guardado local';
      }, 1200);
    }
  }

  renderFlashcardsView() {
    const container = document.getElementById('main-content-area');
    const cards = COURSE_DATA.flashcards;
    const states = StorageManager.getFlashcardStates();

    const card = cards[this.currentFlashcardIndex];
    const currentState = states[card.id] || 'to_learn';

    container.innerHTML = `
      <div class="breadcrumb-bar">
        <a href="#/dashboard">Inicio</a>
        <span class="separator">/</span>
        <span class="current">Tarjetas de Memoria Activa (Flashcards)</span>
      </div>

      <div class="module-hero" style="text-align: center;">
        <span class="badge-tag tag-emerald">Repaso Espaciado</span>
        <h1 class="module-title" style="margin-top: 0.5rem;">Tarjetas de Estudio Interactivas</h1>
        <p class="module-subtitle" style="margin: 0 auto;">
          Pon a prueba tu retención conceptual. Haz clic en la tarjeta para revelar la respuesta y clasifícala según tu nivel de dominio.
        </p>
      </div>

      <div class="flashcards-container">
        <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span style="font-weight: 600; font-size: 0.9rem; color: var(--text-muted);">
            Tarjeta ${this.currentFlashcardIndex + 1} de ${cards.length}
          </span>
          <span class="badge-tag ${currentState === 'learned' ? 'tag-emerald' : (currentState === 'learning' ? 'tag-amber' : 'tag-gray')}">
            ${currentState === 'learned' ? '✓ Aprendida' : (currentState === 'learning' ? '⏳ En proceso' : '📌 Por aprender')}
          </span>
        </div>

        <div id="active-flashcard" class="flashcard-wrapper" onclick="this.classList.toggle('flipped')">
          <div class="flashcard-inner">
            <div class="flashcard-front">
              <span class="badge-tag tag-gray flashcard-tag">${card.topic}</span>
              <h3 style="font-size: 1.35rem; line-height: 1.4; color: var(--text-primary); font-weight: 700;">
                ${card.front}
              </h3>
              <div class="flashcard-flip-prompt">🔄 Haz clic para ver la respuesta</div>
            </div>
            <div class="flashcard-back">
              <span class="badge-tag tag-emerald flashcard-tag">Explicación</span>
              <p style="font-size: 1.1rem; line-height: 1.6; color: var(--text-primary); font-weight: 500;">
                ${card.back}
              </p>
              <div class="flashcard-flip-prompt">🔄 Haz clic para girar</div>
            </div>
          </div>
        </div>

        <div class="flashcard-controls">
          <button class="btn btn-secondary" onclick="window.app.prevFlashcard()">← Anterior</button>

          <div class="flashcard-actions-group">
            <button class="btn btn-sm btn-secondary" onclick="window.app.setFlashcardStatus('${card.id}', 'to_learn')">Por Aprender</button>
            <button class="btn btn-sm btn-secondary" onclick="window.app.setFlashcardStatus('${card.id}', 'learning')">En Proceso</button>
            <button class="btn btn-sm btn-primary" onclick="window.app.setFlashcardStatus('${card.id}', 'learned')">✓ Dominada</button>
          </div>

          <button class="btn btn-secondary" onclick="window.app.nextFlashcard()">Siguiente →</button>
        </div>
      </div>
    `;
  }

  nextFlashcard() {
    if (this.currentFlashcardIndex < COURSE_DATA.flashcards.length - 1) {
      this.currentFlashcardIndex++;
      this.renderFlashcardsView();
    } else {
      this.currentFlashcardIndex = 0;
      this.renderFlashcardsView();
    }
  }

  prevFlashcard() {
    if (this.currentFlashcardIndex > 0) {
      this.currentFlashcardIndex--;
      this.renderFlashcardsView();
    }
  }

  setFlashcardStatus(cardId, status) {
    StorageManager.setFlashcardState(cardId, status);
    this.showToast(`Tarjeta marcada como: ${status === 'learned' ? 'Aprendida' : (status === 'learning' ? 'En proceso' : 'Por aprender')}`);
    this.nextFlashcard();
  }

  renderQuizView() {
    const container = document.getElementById('main-content-area');
    container.innerHTML = `
      <div class="breadcrumb-bar">
        <a href="#/dashboard">Inicio</a>
        <span class="separator">/</span>
        <span class="current">Cuestionario de Evaluación</span>
      </div>

      <div class="quiz-container">
        <div id="quiz-mount-point"></div>
      </div>
    `;

    window.quizApp = new QuizEngine('quiz-mount-point', COURSE_DATA.quizzes[0]);
    window.quizApp.render();
  }

  renderChecklistView() {
    const container = document.getElementById('main-content-area');
    container.innerHTML = `
      <div class="breadcrumb-bar">
        <a href="#/dashboard">Inicio</a>
        <span class="separator">/</span>
        <span class="current">Plan Personal de Acción</span>
      </div>

      <div class="module-hero">
        <span class="badge-tag tag-emerald">Autoevaluación Práctica</span>
        <h1 class="module-title" style="margin-top: 0.5rem;">Plan Personal de Acción</h1>
        <p class="module-subtitle">
          Marca cada punto cuando lo hayas practicado; leer sin construir ejemplos da una falsa sensación de dominio.
        </p>
      </div>

      <div id="interactive-action-checklist"></div>
    `;
    this.renderInteractiveChecklist();
  }

  renderInteractiveChecklist() {
    const container = document.getElementById('interactive-action-checklist');
    if (!container) return;

    const state = StorageManager.getChecklistState();

    container.innerHTML = `
      <ul class="action-checklist">
        ${COURSE_DATA.checklistItems.map((item, idx) => {
          const isChecked = !!state[idx];
          return `
            <li class="checklist-item ${isChecked ? 'checked' : ''}" onclick="window.app.toggleChecklist(${idx})">
              <span class="custom-checkbox">${isChecked ? '✓' : ''}</span>
              <span class="checklist-text">${item}</span>
            </li>
          `;
        }).join('')}
      </ul>
    `;
  }

  toggleChecklist(index) {
    StorageManager.toggleChecklistItem(index);
    this.renderInteractiveChecklist();
    this.showToast('Hito de acción actualizado');
  }

  handleSearch(query) {
    const modal = document.getElementById('search-modal');
    const resultsContainer = document.getElementById('search-results-container');
    if (!modal || !resultsContainer) return;

    if (!query || query.trim().length < 2) {
      modal.classList.remove('active');
      return;
    }

    const results = this.searchEngine.search(query);
    modal.classList.add('active');

    if (results.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
          No se encontraron resultados para "<strong>${query}</strong>".
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = results.map(r => `
      <div class="search-result-item" onclick="window.app.navigateFromSearch('${r.targetUrl}')">
        <div class="search-result-category">${r.type} • ${r.category}</div>
        <div class="search-result-title">${r.title}</div>
        <div class="search-result-snippet">${r.snippet}</div>
      </div>
    `).join('');
  }

  navigateFromSearch(url) {
    this.closeSearchModal();
    window.location.hash = url;
  }

  closeSearchModal() {
    const modal = document.getElementById('search-modal');
    if (modal) modal.classList.remove('active');
  }

  showToast(message) {
    const toastContainer = document.getElementById('toast-container') || document.body;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
