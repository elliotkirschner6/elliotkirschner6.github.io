document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

document.querySelectorAll('.menu-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const nav = toggle.parentElement.querySelector('.site-nav-links');
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});

document.querySelectorAll('.site-nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = link.closest('.site-nav-links');
    const toggle = nav.parentElement.querySelector('.menu-toggle');
    nav.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.js-contact').forEach(link => {
  const user = 'contact';
  const domain = ['elliotkirschner','com'].join('.');
  link.addEventListener('click', event => {
    event.preventDefault();
    window.location.href = 'mailto:' + user + '@' + domain;
  });
});
