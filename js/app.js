// Простая логика меню, модала и валидации формы
(function(){
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const openDemo = document.getElementById('openDemo');
  const demoModal = document.getElementById('demoModal');
  const closeModal = document.getElementById('closeModal');
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  navToggle && navToggle.addEventListener('click', ()=>{
    const shown = siteNav.style.display === 'flex';
    siteNav.style.display = shown ? 'none' : 'flex';
  });

  openDemo && openDemo.addEventListener('click', ()=>{
    demoModal.setAttribute('aria-hidden','false');
  });
  closeModal && closeModal.addEventListener('click', ()=>{
    demoModal.setAttribute('aria-hidden','true');
  });
  window.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') demoModal.setAttribute('aria-hidden','true');
  });

  // Простая валидация формы
  form && form.addEventListener('submit', (e)=>{
    e.preventDefault();
    status.textContent = '';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    if(!name){ status.textContent = 'Пожалуйста, введите имя.'; return }
    if(!email || !/^\S+@\S+\.\S+$/.test(email)){ status.textContent = 'Пожалуйста, введите корректный email.'; return }

    // эмулируем отправку
    status.textContent = 'Отправка...';
    setTimeout(()=>{
      status.textContent = 'Сообщение отправлено. Спасибо!';
      form.reset();
    },800);
  });
})();
