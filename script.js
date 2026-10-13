const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get('name') || '').trim();
  const lesson = String(form.get('lesson') || '').trim();
  const message = String(form.get('message') || '').trim();
  const text = `Hi Shellar's Driving School, my name is ${name}. I'm interested in: ${lesson}.${message ? ` Additional details: ${message}` : ''} Please let me know about availability and pricing. Thank you.`;
  const whatsappUrl = `https://wa.me/27799796882?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});
