// scroll into targeted id

const scrollPage = (clickedElement, targetElement) => {
  const links = document.querySelectorAll(clickedElement);
  links.forEach((item) => {
    item.addEventListener('click', () => {
      const el = document.getElementById(item.getAttribute(targetElement));
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
};

const focustoElement = (clickedEl, focusEl) => {
  const clickElement = document.querySelector(clickedEl);
  const focusElement = document.querySelector(focusEl);
  clickElement.addEventListener('click', () => {
    focusElement.focus({ preventScroll: false });
  });
};

export { scrollPage, focustoElement };
