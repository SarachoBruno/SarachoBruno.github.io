document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const form = document.querySelector('form');
const confirmationMessage = document.querySelector('.confirmation-message');
const errorMessage = document.querySelector('.error-message');


// Configura EmailJS
emailjs.init('UrBsR6N9zk2KYbfrj'); // Sustituye con tu User ID de EmailJS

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.send('service_xr5vmd3', 'template_1v4wfrn', {
            name: name,
            email: email,
            message: message
        })
        .then(() => {
            document.getElementById('responseMessage').textContent = '¡Mensaje enviado exitosamente!';
            document.getElementById('contactForm').reset();
        })
        .catch((error) => {
            console.error('Error al enviar el mensaje:', error); // Muestra el error completo
            document.getElementById('responseMessage').textContent = 'Hubo un error al enviar el mensaje.';
        });
    });



    //mas imagenes del proyecto
    document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todas las imágenes principales
    const mainImages = document.querySelectorAll(".main-image");

    mainImages.forEach((image) => {
        // Agrega un evento de clic a cada imagen principal
        image.addEventListener("click", () => {
            const modal = image.nextElementSibling; // Selecciona el modal correspondiente
            modal.style.display = "flex";
            modal.style.flexDirection = "column";

            // Selecciona el botón de cerrar dentro del modal
            const closeModal = modal.querySelector(".close");
            closeModal.addEventListener("click", () => {
                modal.style.display = "none";
            });

            // Cerrar el modal al hacer clic fuera del contenido
            modal.addEventListener("click", (e) => {
                if (e.target === modal) {
                    modal.style.display = "none";
                }
            });
        });
    });
});
