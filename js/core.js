function getEmailHidden() {
  return "contact" + "@" + "franciscotech" + "." + "xyz";
}

function getPhoneUsaHidden() {
  return "(+1)" + " 619-354" + "-5535";
}

function getPhoneMexHidden() {
  return "(+52)" + " 665-515" + "-16820";
}

// JavaScript to alternate between Spanish and English content and load email/phone numbers
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleLang');
  const langEsElements = document.querySelectorAll('.lang-es');
  const langEnElements = document.querySelectorAll('.lang-en');

  // Function to set the language
  function setLanguage(isSpanish) {
    if (isSpanish) {
      langEsElements.forEach(el => el.classList.add('active'));
      langEnElements.forEach(el => el.classList.remove('active'));
      toggleBtn.textContent = 'English';
    } else {
      langEsElements.forEach(el => el.classList.remove('active'));
      langEnElements.forEach(el => el.classList.add('active'));
      toggleBtn.textContent = 'Español';
    }
  }

  // Detect the user's language preference
  const userLang = navigator.language || navigator.userLanguage;
  const isSpanish = userLang.startsWith('es'); // Check if the language is Spanish
  setLanguage(isSpanish);

  // Add event listener for the toggle button
  toggleBtn.addEventListener('click', function () {
    const showingSpanish = langEsElements[0].classList.contains('active');
    setLanguage(!showingSpanish);
  });

  // JavaScript to dynamically load email and phone numbers
  const email = getEmailHidden();
  const phoneUS = getPhoneUsaHidden();
  const phoneMX = getPhoneMexHidden();

  document.getElementById('email').textContent = email;
  document.getElementById('email').href = `mailto:${email}`;
  document.getElementById('phone-us').textContent = phoneUS;
  document.getElementById('phone-mx').textContent = phoneMX;
});