// Funciones comunes para todas las páginas
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada correctamente");
    
    // Efecto de aparición suave para los proyectos (solo en perfil.html)
    const projects = document.querySelectorAll('.project');
    if (projects.length > 0) {
        projects.forEach((project, index) => {
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                project.style.transition = 'all 0.6s ease';
                project.style.opacity = '1';
                project.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }
    
    // Animación para las tarjetas de contacto
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, 300 + (100 * index));
    });
    
    // Efecto de hover mejorado para las tarjetas de posts
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Navegación suave para enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efecto de carga para imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Establecer opacidad inicial
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        // Si la imagen ya está cargada, mostrar inmediatamente
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Función para mostrar mensajes de confirmación
function showConfirmation(message) {
    const confirmation = document.createElement('div');
    confirmation.textContent = message;
    confirmation.style.position = 'fixed';
    confirmation.style.top = '20px';
    confirmation.style.right = '20px';
    confirmation.style.background = '#d32f2f';
    confirmation.style.color = 'white';
    confirmation.style.padding = '15px 20px';
    confirmation.style.borderRadius = '5px';
    confirmation.style.zIndex = '1000';
    confirmation.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
    confirmation.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(confirmation);
    
    setTimeout(() => {
        confirmation.style.opacity = '0';
        confirmation.style.transform = 'translateX(100px)';
        setTimeout(() => {
            document.body.removeChild(confirmation);
        }, 300);
    }, 3000);
}

// Función para manejar formularios de contacto
function handleContactForm(event) {
    event.preventDefault();
    showConfirmation('Mensaje enviado. Godzilla podría responder... o no.');
    
    // Limpiar formulario
    event.target.reset();
}

// Función para alternar modo oscuro/claro (si se implementa en el futuro)
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('light-mode') ? 'false' : 'true');
}

// Verificar preferencia de modo oscuro al cargar
if (localStorage.getItem('darkMode') === 'false') {
    document.body.classList.add('light-mode');
}