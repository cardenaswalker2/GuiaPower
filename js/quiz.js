/**
 * Interactive Quiz Engine with real-time scoring, instant explanations,
 * retry mechanisms, and local storage state persistence.
 */

class QuizEngine {
  constructor(containerId, quizData) {
    this.container = document.getElementById(containerId);
    this.quiz = quizData;
    this.currentQuestionIndex = 0;
    this.userAnswers = {};
    this.isSubmitted = false;
  }

  render() {
    if (!this.container || !this.quiz) return;

    if (this.isSubmitted) {
      this.renderResults();
      return;
    }

    const q = this.quiz.questions[this.currentQuestionIndex];
    const totalQ = this.quiz.questions.length;
    const currentAnswer = this.userAnswers[q.id];

    let optionsHtml = '';
    q.options.forEach((opt, idx) => {
      const isSelected = currentAnswer === idx;
      optionsHtml += `
        <div class="quiz-option ${isSelected ? 'selected' : ''}" onclick="window.quizApp.selectOption('${q.id}', ${idx})">
          <div class="option-radio-circle"></div>
          <div>${opt}</div>
        </div>
      `;
    });

    this.container.innerHTML = `
      <div class="quiz-card">
        <div class="quiz-question-header">
          <span class="badge-tag tag-emerald">Pregunta ${this.currentQuestionIndex + 1} de ${totalQ}</span>
          <span class="badge-tag tag-gray">${this.quiz.title}</span>
        </div>

        <div class="quiz-question-text">${q.question}</div>
        <div class="quiz-options-list">${optionsHtml}</div>

        <div class="module-hero-actions" style="margin-top: 2rem;">
          ${this.currentQuestionIndex > 0 ? `
            <button class="btn btn-secondary" onclick="window.quizApp.prevQuestion()">
              ← Anterior
            </button>
          ` : '<div></div>'}

          ${this.currentQuestionIndex < totalQ - 1 ? `
            <button class="btn btn-primary" onclick="window.quizApp.nextQuestion()" ${currentAnswer === undefined ? 'disabled style="opacity: 0.5;"' : ''}>
              Siguiente →
            </button>
          ` : `
            <button class="btn btn-primary" onclick="window.quizApp.submitQuiz()" ${currentAnswer === undefined ? 'disabled style="opacity: 0.5;"' : ''}>
              Finalizar y Ver Resultados
            </button>
          `}
        </div>
      </div>
    `;
  }

  selectOption(qId, optionIdx) {
    this.userAnswers[qId] = optionIdx;
    this.render();
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.quiz.questions.length - 1) {
      this.currentQuestionIndex++;
      this.render();
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.render();
    }
  }

  submitQuiz() {
    this.isSubmitted = true;
    let score = 0;
    this.quiz.questions.forEach(q => {
      if (this.userAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });

    StorageManager.saveQuizScore(this.quiz.id, score, this.quiz.questions.length);
    this.render();
    if (window.app) window.app.updateProgressStats();
  }

  retry() {
    this.userAnswers = {};
    this.currentQuestionIndex = 0;
    this.isSubmitted = false;
    this.render();
  }

  renderResults() {
    let score = 0;
    let questionsReviewHtml = '';

    this.quiz.questions.forEach((q, idx) => {
      const userAns = this.userAnswers[q.id];
      const isCorrect = userAns === q.correctIndex;
      if (isCorrect) score++;

      questionsReviewHtml += `
        <div class="quiz-card" style="margin-bottom: 1.5rem;">
          <div class="quiz-question-header">
            <span class="badge-tag ${isCorrect ? 'tag-emerald' : 'tag-amber'}">
              ${isCorrect ? '✓ Correcta' : '✗ Incorrecta'}
            </span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">Pregunta ${idx + 1}</span>
          </div>
          <div class="quiz-question-text" style="font-size: 1.05rem;">${q.question}</div>
          
          <div class="quiz-options-list">
            ${q.options.map((opt, i) => {
              let styleClass = '';
              if (i === q.correctIndex) styleClass = 'correct';
              else if (i === userAns && !isCorrect) styleClass = 'incorrect';
              return `
                <div class="quiz-option ${styleClass}" style="cursor: default;">
                  <div>${opt}</div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="quiz-explanation-box">
            <strong>Explicación detallada:</strong> ${q.explanation}
          </div>
        </div>
      `;
    });

    const percent = Math.round((score / this.quiz.questions.length) * 100);

    this.container.innerHTML = `
      <div class="module-hero" style="text-align: center; margin-bottom: 2rem;">
        <span class="badge-tag ${percent >= 70 ? 'tag-emerald' : 'tag-amber'}">
          ${percent >= 70 ? '¡Excelente Trabajo!' : 'Requiere Repaso'}
        </span>
        <h2 class="module-title" style="margin-top: 0.75rem;">Resultado: ${score} / ${this.quiz.questions.length} (${percent}%)</h2>
        <p class="module-subtitle" style="margin: 0 auto 1.5rem auto;">
          ${percent >= 70 
            ? 'Has demostrado un sólido entendimiento de los conceptos evaluados.' 
            : 'Te recomendamos repasar las lecciones y volver a intentar el cuestionario.'}
        </p>
        <button class="btn btn-primary" onclick="window.quizApp.retry()">Reintentar Cuestionario</button>
      </div>

      <h3 class="section-heading"><span class="heading-num">📋</span> Desglose de Respuestas y Explicaciones</h3>
      ${questionsReviewHtml}
    `;
  }
}
