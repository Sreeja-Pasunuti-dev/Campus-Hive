// Get club ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const clubId = parseInt(urlParams.get('club'));

// DOM Elements
const clubName = document.getElementById('clubName');
const clubDescription = document.getElementById('clubDescription');
const clubCategory = document.getElementById('clubCategory');
const eventsGrid = document.getElementById('eventsGrid');
const loginBtn = document.getElementById('loginBtn');
const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
const loginForm = document.getElementById('loginForm');

// Format date
function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
}

// Load club data
function loadClubEvents() {
    // Find the club by ID
    const club = clubsData.find(c => c.id === clubId);
    
    if (!club) {
        console.error('Club not found');
        return;
    }
    
    // Set page title
    document.title = `${club.name} Events - Campus Hive`;
    
    // Update club information
    clubName.textContent = club.name;
    clubDescription.textContent = club.description;
    clubCategory.textContent = club.category;

    // Check if it's Sports or RHYTHMS club
    if (club.id === 1 || club.id === 5) { // RHYTHMS (id:1) or Sports (id:5)
        // Create Epitome-style event cards
        const epitomeStyleHtml = `
            
            <div class="epitome-events-grid">
                ${club.events.map(event => `
                    <div class="epitome-event-card">
                        <div class="event-image-container">
                            <img src="${event.image || club.image}" alt="${event.title}" class="event-image">
                            <div class="event-overlay">
                                <div class="event-status">${event.status || 'Upcoming'}</div>
                            </div>
                        </div>
                        <div class="event-info">
                            <h3 class="event-title">${event.title}</h3>
                            <div class="event-meta">
                                <div class="event-date">
                                    <i class="far fa-calendar"></i> ${formatDate(event.date)}
                                </div>
                                <div class="event-time">
                                    <i class="far fa-clock"></i> ${event.time}
                                </div>
                                <div class="event-location">
                                    <i class="fas fa-map-marker-alt"></i> ${event.location}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        eventsGrid.innerHTML = epitomeStyleHtml;
        
        // Add event listeners for gallery navigation
        setTimeout(() => {
            const dots = document.querySelectorAll('.gallery-dot');
            const items = document.querySelectorAll('.gallery-item');
            
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const index = parseInt(dot.getAttribute('data-index'));
                    
                    // Update active states
                    dots.forEach(d => d.classList.remove('active'));
                    items.forEach(i => i.classList.remove('active'));
                    
                    dot.classList.add('active');
                    items[index].classList.add('active');
                });
            });
        }, 100);
    } else {
        // Regular view for other clubs with detailed events
        const eventsHtml = club.events.map(event => `
            <div class="event-card">
                <div class="event-header">
                    ${event.image ? `<img src="${event.image}" alt="${event.title}" class="event-image">` : ''}
                    <div class="event-status ${event.status?.toLowerCase().replace(' ', '-') || 'upcoming'}">${event.status || 'Upcoming'}</div>
                </div>
                <div class="event-content">
                    <h3 class="event-title">${event.title}</h3>
                    <div class="event-meta">
                        <div class="event-date">
                            <i class="far fa-calendar"></i> ${formatDate(event.date)} at ${event.time}
                        </div>
                        <div class="event-location">
                            <i class="fas fa-map-marker-alt"></i> ${event.location}
                        </div>
                    </div>
                    <p class="event-description">${event.description}</p>
                    
                    ${event.highlights ? `
                        <div class="event-highlights">
                            <h4>Event Highlights</h4>
                            <ul>
                                ${event.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    
                    ${event.timeline ? `
                        <div class="event-timeline">
                            <h4>Event Timeline</h4>
                            <div class="timeline">
                                ${event.timeline.map(item => `
                                    <div class="timeline-item">
                                        <div class="timeline-time">${item.time}</div>
                                        <div class="timeline-content">${item.event}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    ${event.tracks ? `
                        <div class="event-tracks">
                            <h4>Event Tracks</h4>
                            <div class="tracks-grid">
                                ${event.tracks.map(track => `<div class="track-item">${track}</div>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="event-actions">
                        <a href="${event.registrationLink}" target="_blank" class="btn btn-primary">
                            ${event.status === 'Registration Open' ? 'Register Now' : event.status === 'Registration Closed' ? 'Registration Closed' : 'Wait for Registration to Open'}
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        eventsGrid.innerHTML = eventsHtml;
    }
}

// Login form handler
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add login logic here
    loginModal.hide();
});

loginBtn.addEventListener('click', () => {
    loginModal.show();
});

// Load events when page loads
document.addEventListener('DOMContentLoaded', loadClubEvents);
