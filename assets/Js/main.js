/* =====================================================
   SMOOTH SCROLL (ANCHOR LINK)
===================================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
  
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  
  /* =====================================================
     REVEAL ON SCROLL
  ===================================================== */
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
  
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
  
      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
  
  /* =====================================================
     SKILL BAR ANIMATION
  ===================================================== */
  window.addEventListener("load", () => {
    document.querySelectorAll(".progress-fill").forEach(bar => {
      const value = bar.dataset.progress;
      if (value) {
        bar.style.width = value + "%";
      }
    });
  });
  
  
  /* =====================================================
     CARD 3D TILT EFFECT
     (Tambahkan class: tilt-card)
  ===================================================== */
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
  
      const rotateX = ((y - centerY) / 15) * -1;
      const rotateY = (x - centerX) / 15;
  
      card.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
      `;
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
  });
  
  
  /* =====================================================
     BUTTON RIPPLE EFFECT
     (Tambahkan class: ripple-btn)
  ===================================================== */
  document.querySelectorAll('.ripple-btn').forEach(button => {
    button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
  
      const rect = this.getBoundingClientRect();
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
  
      this.appendChild(ripple);
  
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  
  /* =====================================================
     HOVER PARALLAX (SUBTLE FLOAT)
     (Tambahkan class: hover-float)
  ===================================================== */
  document.querySelectorAll('.hover-float').forEach(el => {
    el.addEventListener('mousemove', e => {
      const x = (e.offsetX - el.offsetWidth / 2) / 20;
      const y = (e.offsetY - el.offsetHeight / 2) / 20;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });
  
  
  /* =====================================================
     PORTFOLIO TAB SWITCHER
  ===================================================== */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
  
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab)?.classList.add('active');
    });
  });
  