document.addEventListener('DOMContentLoaded', () => {
  const selectors = ['h1', 'h2', 'h3', 'p', 'li', '.info', '.tag'];

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      const key = `editable-${selector}-${index}`;
      el.setAttribute('contenteditable', 'true');
      el.classList.add('editable');
      el.dataset.key = key;

      const saved = localStorage.getItem(key);
      if (saved) {
        el.innerHTML = saved;
      }

      el.addEventListener('blur', () => {
        localStorage.setItem(key, el.innerHTML);
        el.style.animation = 'fadeInBg 0.35s ease forwards';
        setTimeout(() => (el.style.animation = ''), 350);
      });
    });
  });

  document.body.addEventListener('click', (e) => {
    const el = e.target.closest('.editable');
    if (!el) {
      return;
    }

    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
    ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
