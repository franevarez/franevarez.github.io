const translations = {
    es: {
      title: "Bienvenido",
      description: "Soy desarrollador de software con experiencia internacional.",
      contact: "Contáctame",
    },
    en: {
      title: "Welcome",
      description: "I'm a software developer with international experience.",
      contact: "Contact Me",
    }
  };
  
  function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key];
    });
  }
  