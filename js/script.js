(() => {
  "use strict";

  const form = document.querySelector("#contactForm");
  const message = document.querySelector("#mensaje");
  const counter = document.querySelector("#contador-mensaje");
  const status = document.querySelector("#formStatus");
  const dateInput = document.querySelector("#fecha");
  const menu = document.querySelector("#menuPrincipal");

  if (!form || !message || !counter || !status || !dateInput) return;

  // Evita elegir fechas anteriores al día actual.
  const today = new Date();
  const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
  dateInput.min = localDate;

  const updateCounter = () => {
    counter.textContent = `${message.value.length}/500`;
  };

  const clearStatus = () => {
    status.textContent = "";
    status.className = "form-status";
  };

  message.addEventListener("input", updateCounter);

  form.addEventListener("input", (event) => {
    clearStatus();
    if (event.target.matches("input, select, textarea")) {
      event.target.classList.remove("is-invalid");
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("was-validated");

    if (!form.checkValidity()) {
      status.textContent = "Revisa los campos señalados antes de enviar la solicitud.";
      status.className = "form-status is-visible is-error";
      const firstInvalid = form.querySelector(":invalid");
      firstInvalid?.focus();
      return;
    }

    const firstName = document.querySelector("#nombre").value.trim();
    status.textContent = `Gracias, ${firstName}. Tu solicitud fue validada correctamente. En este proyecto académico no se envían datos a un servidor.`;
    status.className = "form-status is-visible is-success";
    status.focus();
    form.reset();
    form.classList.remove("was-validated");
    updateCounter();
  });

  form.addEventListener("reset", () => {
    window.requestAnimationFrame(() => {
      form.classList.remove("was-validated");
      clearStatus();
      updateCounter();
    });
  });

  // Cierra el menú Bootstrap después de elegir una sección en pantallas pequeñas.
  menu?.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => {
      const collapse = window.bootstrap?.Collapse.getInstance(menu);
      if (collapse && window.innerWidth < 992) collapse.hide();
    });
  });

  updateCounter();
})();
