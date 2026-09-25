const buttons = document.querySelectorAll('.topic-bar');
const panels = document.querySelectorAll('.panel');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    buttons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-expanded', selected);
    });
    panels.forEach((panel) => {
      const selected = panel.id === target;
      panel.hidden = !selected;
      panel.classList.toggle('active', selected);
    });
  });
});
