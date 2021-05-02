var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

var navbar = document.getElementById('navbar');
var itemsToggle = document.getElementsByName('itemToggle');

const changeClass = (even) => {
  console.log(`entra ${even}`);
  navbar.classList.remove('show');
};

itemsToggle.forEach((item) => {
  item.addEventListener('click', changeClass);
});
