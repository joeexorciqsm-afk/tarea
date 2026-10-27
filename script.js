(function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                alert('¡Mensaje enviado correctamente!');
                form.reset();
                form.classList.remove('was-validated');
                return;
            }
            form.classList.add('was-validated');
        }, false);
    });
})();