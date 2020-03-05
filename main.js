var language = document.querySelector('.language');
var languageDropdown = document.querySelector('.language-dropdown');

function openDropdown() {
  languageDropdown.style.display = "flex";
  document.body.classList.add('overlay');
}

function closeDropdown(el) {
  languageDropdown.style.display = "none";
  document.body.classList.remove('overlay');
}
language.addEventListener('mouseover', openDropdown);
language.addEventListener('mouseleave', closeDropdown);
languageDropdown.addEventListener('mouseover', openDropdown)
languageDropdown.addEventListener('mouseleave', closeDropdown)