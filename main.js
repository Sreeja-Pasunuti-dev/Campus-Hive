// DOM Elements
const clubsList = document.getElementById('clubsList');
const selectedClub = document.getElementById('selectedClub');
const clubDetails = document.getElementById('clubDetails');
const backToClubs = document.getElementById('backToClubs');
const loginBtn = document.getElementById('loginBtn');
const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
const loginForm = document.getElementById('loginForm');

// Hero Slider
const slides = document.querySelectorAll('.hero-slide');
const navBtns = document.querySelectorAll('.hero-nav-btn');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    navBtns.forEach(btn => btn.classList.remove('active'));
    
    slides[index].classList.add('active');
    navBtns[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Event Listeners for Hero Slider
navBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        stopSlideShow();
        showSlide(index);
        startSlideShow();
    });
});

// Initialize slider
startSlideShow();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Display all clubs
function displayClubs() {
    clubsList.innerHTML = '';
    clubsData.forEach(club => {
        const clubCard = `
            <div class="col-md-6 col-lg-4 fade-in">
                <div class="club-card card">
                    <img src="${club.image}" class="card-img-top" alt="${club.name}">
                    <div class="card-body">
                        <h5 class="card-title">${club.name}</h5>
                        <p class="card-text">${club.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="badge bg-primary">${club.category}</span>
                        </div>
                        <button class="btn btn-primary mt-3" onclick="showClubDetails(${club.id})">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `;
        clubsList.innerHTML += clubCard;
    });
}

// Show specific club details and events
function showClubDetails(clubId) {
    window.location.href = `events.html?club=${clubId}`;
}

// Format date to a more readable format
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Event Listeners
backToClubs.addEventListener('click', () => {
    selectedClub.classList.add('d-none');
    document.getElementById('clubs').classList.remove('d-none');
});

// Login button handlers
[loginBtn, document.getElementById('loginBtnHero')].forEach(btn => {
    if (btn) {
        btn.addEventListener('click', () => {
            loginModal.show();
        });
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Mock login - in a real app, this would communicate with a backend
    alert('Login successful!');
    loginModal.hide();
    loginForm.reset();
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    displayClubs();
});
