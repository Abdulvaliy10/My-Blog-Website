        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
        
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        hamburger.addEventListener('click', function() {
            this.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (hamburger.classList.contains('open')) {
                        hamburger.classList.remove('open');
                        mobileMenu.classList.remove('open');
                    }
                }
            });
        });
        
        // Typing animation
        const typingText = document.getElementById('typing-text');
        const text = "Welcome to Abdulvaliy's Blog";
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                typingText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                document.querySelector('.typing').style.display = 'none';
            }
        }
        
        // Start typing animation after 500ms
        setTimeout(() => {
            typingText.innerHTML = '';
            typeWriter();
        }, 500);
        
        // Fade up animation on scroll
        function checkFadeUp() {
            const fadeUpElements = document.querySelectorAll('.fade-up');
            
            fadeUpElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  
  // rang turini aniqlash
  if (type === "success") toast.style.background = "#16a34a"; // yashil
  if (type === "error") toast.style.background = "#dc2626";   // qizil
  
  toast.innerText = message;
  container.appendChild(toast);

  // animatsiya
  setTimeout(() => toast.classList.add("show"), 100);

  // 3 soniyadan keyin o‘chib ketadi
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}


// Bot token va chat_id ni shu yerga yozasiz
const botToken = "8355034460:AAHwsQyuuDTNHjIXpR60dJgdGvhCjIpic9Y";
const chatId = "6664884092";

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  // Telegramga yuboriladigan text
  const text = `📩 Yangi xabar:\n👤 Ism: ${name}\n📧 Email: ${email}\n💬 Xabar: ${message}`;

  // API chaqirish
fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chat_id: chatId,
    text: text
  })
})
.then(res => {
  if(res.ok) {
    showToast("✅ Message sent successfully!", "success");
    document.getElementById("contactForm").reset();
  } else {
    showToast("❌ Error sending message!", "error");
  }
})
.catch(err => showToast("❌ Internet error!", "error"));
});

// Smooth scrolling functions for new sections
function goToAbout() {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function goToProjects() {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function goToAchievements() {
    const el = document.getElementById('isk-achievements');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Initial check
checkFadeUp();

// Check on scroll
window.addEventListener('scroll', checkFadeUp);

// Particle.js configuration
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#08d9d6"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#08d9d6",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});