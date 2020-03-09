// Navbar dropdowns !

const language = document.querySelector('.language');
const languageDropdown = document.querySelector('.language-dropdown');

const account = document.querySelector('.account');
const accountDropdown = document.querySelector('.account-dropdown');

function openAccountDropdown() {
  accountDropdown.style.display = 'flex';
  document.body.classList.add('overlay');
}

function closeAccountDropdown() {
  accountDropdown.style.display = 'none';
  document.body.classList.remove('overlay');
}


function openLanguageDropdown() {
  languageDropdown.style.display = "flex";
  document.body.classList.add('overlay');
}

function closeLanguageDropdown(el) {
  languageDropdown.style.display = "none";
  document.body.classList.remove('overlay');
}
language.addEventListener('mouseover', openLanguageDropdown);
language.addEventListener('mouseleave', closeLanguageDropdown);
languageDropdown.addEventListener('mouseover', openLanguageDropdown);
languageDropdown.addEventListener('mouseleave', closeLanguageDropdown);

account.addEventListener('mouseover', openAccountDropdown);
account.addEventListener('mouseleave', closeAccountDropdown);
accountDropdown.addEventListener('mouseover', openAccountDropdown);
accountDropdown.addEventListener('mouseleave', closeAccountDropdown);

//