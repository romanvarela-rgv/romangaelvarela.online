document.addEventListener('DOMContentLoaded', () => {

  // ---------- Footer year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Navigation Menu ----------
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const navItems = document.querySelectorAll('.nav-item.has-mega');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('is-open');
    });

    navItems.forEach(item => {
      const trigger = item.querySelector('.nav-trigger');
      let timeoutId;

      // Hover interactions (Desktop)
      item.addEventListener('mouseenter', () => {
        if (window.innerWidth > 780) {
          clearTimeout(timeoutId);
          navItems.forEach(other => {
            if (other !== item) {
              other.classList.remove('is-open');
              const t = other.querySelector('.nav-trigger');
              if (t) t.setAttribute('aria-expanded', 'false');
            }
          });
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });

      item.addEventListener('mouseleave', () => {
        if (window.innerWidth > 780) {
          timeoutId = setTimeout(() => {
            item.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');
          }, 150); // Delay for smooth transition
        }
      });

      // Click interactions (Mobile)
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 780) {
          e.preventDefault();
          const isOpen = item.classList.contains('is-open');
          item.classList.toggle('is-open');
          trigger.setAttribute('aria-expanded', !isOpen);
        }
      });
    });
  }

  // ---------- Slider ----------
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dotsWrap = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  let current = slides.findIndex(s => s.classList.contains('is-active'));
  if (current < 0) current = 0;
  let autoTimer;

  if (slides.length) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      if (i === current) dot.classList.add('is-active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsWrap.appendChild(dot);
    });

    function render() {
      slides.forEach((s, i) => s.classList.toggle('is-active', i === current));
      Array.from(dotsWrap.children).forEach((d, i) => d.classList.toggle('is-active', i === current));
    }

    function goToSlide(i) {
      current = (i + slides.length) % slides.length;
      render();
      restartAuto();
    }

    function restartAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(() => goToSlide(current + 1), 6000);
    }

    prevBtn.addEventListener('click', () => goToSlide(current - 1));
    nextBtn.addEventListener('click', () => goToSlide(current + 1));

    restartAuto();
  }

  // ---------- Quote wizard ----------
  const wizard = document.getElementById('wizard');
  if (wizard) {
    const steps = Array.from(wizard.querySelectorAll('.wizard-step'));
    const panes = Array.from(wizard.querySelectorAll('.wizard-pane'));
    const backBtn = document.getElementById('wizardBack');
    const nextBtn2 = document.getElementById('wizardNext');
    const submitBtn = document.getElementById('wizardSubmit');
    const progressBar = document.getElementById('wizardProgress');
    let step = 1;
    const total = steps.length;

    function renderWizard() {
      steps.forEach(s => {
        const n = Number(s.dataset.step);
        s.classList.toggle('is-active', n === step);
        s.classList.toggle('is-done', n < step);
      });
      panes.forEach(p => p.classList.toggle('is-active', Number(p.dataset.pane) === step));

      backBtn.hidden = step === 1;
      nextBtn2.hidden = step === total;
      submitBtn.hidden = step !== total;

      if (progressBar) {
        const percent = ((step - 1) / (total - 1)) * 100;
        progressBar.style.width = percent + '%';
      }
    }

    backBtn.addEventListener('click', () => {
      step = Math.max(1, step - 1);
      renderWizard();
    });

    nextBtn2.addEventListener('click', () => {
      step = Math.min(total, step + 1);
      renderWizard();
    });

    wizard.querySelector('#wizardForm').addEventListener('submit', (e) => {
      e.preventDefault();
      // Placeholder: reemplazar con integración real (email, CRM, backend, etc.)
      alert('Formulario de ejemplo. Conectar con backend / servicio de envío real.');
    });

    renderWizard();
  }

  // ---------- FAQ Accordion ----------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('is-active');
      
      faqItems.forEach(other => {
        other.classList.remove('is-active');
        other.querySelector('.faq-content').style.maxHeight = null;
      });
      
      if (!isActive) {
        item.classList.add('is-active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // ---------- Scroll Animations ----------
  const fadeElements = document.querySelectorAll('.fade-in');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));

});
