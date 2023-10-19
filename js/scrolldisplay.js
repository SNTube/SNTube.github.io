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
  document.documentElement.style.setProperty('--scrollbar-width', '0');
}

function showScrollbar() {
  document.documentElement.style.setProperty('--scrollbar-width', '6px');
}  