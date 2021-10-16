export const getParams = (paramName) => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get(paramName);
  return id;
};

export const drawerHelper = () => {
  const hamburgerButtonElement = document.querySelector('#hamburger');
  const drawerElement = document.querySelector('#drawer');
  const bodyElement = document.querySelector('body');
  const iconMenu = document.querySelector('.icon-menu');
  
  hamburgerButtonElement.addEventListener('click', (event) => {
    drawerElement.classList.toggle('open');
    const iconLabel = iconMenu.ariaLabel;
  
    if (iconLabel === 'buka menu') {
      iconMenu.ariaLabel = 'tutup menu';
    } else {
      iconMenu.ariaLabel = 'buka menu';
    }
    event.stopPropagation();
  });
  
  bodyElement.addEventListener('click', (event) => {
    drawerElement.classList.remove('open');
    iconMenu.ariaLabel = 'buka menu';
    event.stopPropagation();
  });
  
}


