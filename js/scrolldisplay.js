let scrollTimeout;

window.addEventListener('DOMContentLoaded', () => {
  hideScrollbar();
});

window.addEventListener('scroll', () => {
  showScrollbar();
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(hideScrollbar, 1500);
});

function hideScrollbar() {
  document.documentElement.style.setProperty('--scrollbar-color-thumb', 'rgba(0, 0, 0, 0)');
  document.documentElement.style.setProperty('--global-color-thumb', 'var(--anzhiyu-background)');
}

function showScrollbar() {
  document.documentElement.style.setProperty('--scrollbar-color-thumb', 'repeating-linear-gradient(45deg, #f771e8, #f7c6f2 5px, #21809c 5px, #21809c 10px, #f7c6f2 10px, #f771e8 15px)');
  document.documentElement.style.setProperty('--global-color-thumb', 'darken(#f771e8, 2)');
}  