const clubsData = [
    {
        id: 4,
        name: "Skill Development Center(SDC)",
        description: "Skill Development Cell has been entrusted with the responsibility to train students by providing them with various courses to enhance their Employment/ Self-Employment opportunities.",
        image: "images/sdc-logo.png",
        category: "Skill Development",
        events: [
            {
                id: 7,
                title: "Epitome'25: Innovate Your Way to a Better Tomorrow",
                date: "2025-02-22",
                time: "10:00",
                location: "GRIET Main Auditorium",
                description: "A thrilling 24-hour hackathon where creativity meets purpose — solve real-world problems and shape a brighter future!",
                image: "images/sdc1.jpg",
                registrationLink: "#",
                status: "Registrations Closed",
                highlights: [
                    "24-hour non-stop hackathon",
                    "Problem-solving across Smart EdTech, Healthcare, Agrotech, and more",
                    "Software & hardware prototype building",
                    "Organized by the Skill Development Cell (SDC), GRIET"
                ],
                timeline: [
                    { time: "10:00", event: "Hackathon Kickoff" },
                    { time: "11:30", event: "Ideation & Mentorship Sessions" },
                    { time: "12:30", event: "Lunch Break" },
                    { time: "13:30", event: "Coding & Prototyping" },
                    { time: "15:30", event: "Project Showcase" },
                    { time: "17:30", event: "Closing Ceremony" },
                    { time: "19:30", event: "Prizes Announced" }
                ]
            },
            {
                id: 8,
                title: "Microsoft Azure Workshop",
                date: "2025-06-25",
                time: "10:00",
                location: "GRIET Main Auditorium",
                description: "A hands-on cloud computing workshop designed to introduce students to the world of Microsoft Azure, its services, and real-time deployment capabilities.",
                image: "images/sdc2.jpg",
                registrationLink: "https://www.grietsdc.in/index.html",
                status: "Registration Open",
                highlights: [
                    "Introduction to Microsoft Azure and Cloud Fundamentals",
                    "Live deployment of web apps on Azure",
                    "Hands-on cloud computing experience",
                    "Real-world use cases in AI, ML, and DevOps on Azure"
                ],
                timeline: [
                {time: "10:00", event: "Introduction to Microsoft Azure" },
                { time: "10:30", event: "Live Deployment" },
                { time: "12:00", event: "Cloud Computing Experience" },
{ time: "13:30", event: "Real-World Use Cases" }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Advanced Academic Center",
        description: "We are a student-centric club aiming to develop our skills and share our proficiency among our peers. We work on evergreen technologies like ML, Computer Vision, IOT, Web development, and App development.",
        image: "images/aac-logo.png",
        category: "Academic",
        events: [
            {
                id: 3,
                title: "AAC’s 2024 Expo: A Showcase of Innovation",
                date: "2024-12-10",
                time: "10:00",
                location: "Hall 1",
                description: "A spectacular showcase of technology, creativity, and impact — highlighting the boundless potential of young minds",
                image: "images/aac1.jpg",
                registrationLink: "#",
                status: "Registration Closed",
                highlights: [
                    "Innovative apps and interactive websites",
                    "Intelligent systems with visual data recognition",
                    "Real-world applications of smart technology",
                    "Passion-driven project development"
                ],
                timeline: [
                    { time: "10:00", event: "Inauguration Ceremony" },
                    { time: "10:30", event: "Project Displays Open" },
                    { time: "12:00", event: "Project Showcase" },
                    { time: "13:30", event: "Project Displays Close" }
                ]
            },
            {
                id: 4,
                title: "Opulence: A Celebration of Innovation and Knowledge",
                date: "2025-02-22",
                time: "9:00",
                location: "GRIET Main Auditorium",
                description: "An inspiring platform designed to educate and empower the next generation of innovators and leaders.",
                image: "images/aac2.jpg",
                registrationLink: "#",
                status: "Registration Closed",
                highlights: [
                    "Keynote talks by industry experts",
                    "Ideathon featuring 21 innovative teams",
                    "G-Prime Coding Contest with 42 participating teams",
                    "Opportunities for networking and collaboration"
                ],
                timeline: [
                    { time: "9:00", event: "Registration" },
                    { time: "9:30", event: "Keynote Speech" },
                    { time: "11:00", event: "Ideathon" },
                    { time: "12:30", event: "G-Prime Coding Contest" },
                    { time: "14:30", event: "Closing Ceremony" }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "National Service Scheme (NSS)",
        description: "Promoting physical fitness and sportsmanship",
        image: "images/nss.jpg",
        category: "Youth Affairs and Sports",
        events: [
            {
                id: 5,
                title: "Mega Blood Donation Camp",
                date: "2025-02-25",
                time: "09:00",
                location: "College Health Center",
                description: "A noble initiative encouraging students, faculty, and staff to contribute to saving lives by donating blood. The event is organized in collaboration with local hospitals and blood banks.",
                image: "images/nss1.jpg",
                registrationLink: "#",
                status: "Registration Closed",
                highlights: [
                    "Free health check-ups before donation",
                    "Certificates and refreshments for donors",
                    "Awareness talks on the importance of blood donation",
                    "Awareness talks on the importance of blood donation"
                ],
                timeline: [
                    { time: "9:00", event: " Inauguration & Opening Remarks" },
                    { time: "9:30", event: " Health Check-up & Donor Registration" },
                    { time: "10:00", event: "Blood Donation Drive Begins" },
                    { time: "11:00", event: "Awareness Session & Q&A" }
                ]
            },
            {
                id: 6,
                title: "Ruedo’25 – Project Expo: Where Innovation Meets Sustainable Development!",
                date: "2025-03-22",
                time: "10:00",
                location: "AI-ML Seminar Hall",
                description: "Join us as young minds showcase groundbreaking ideas that pave the way for a greener, smarter, and more sustainable future.",
                image: "images/nss2.jpg",
                registrationLink: "#",
                status: "Registration closed",
                highlights: [
                    "Innovative student projects focused on sustainable development",
                    "Interactive mini-games and contests",
                    "Vibrant food and craft stalls",
                    "Live demos and eco-friendly product exhibits"
                ],
                timeline: [
                    { time: "10:00", event: "Opening Ceremony & Expo Launch" },
                    { time: "10:30", event: "Project Exhibits & Live Demos" },
                    { time: "12:00", event: "Fun Mini-Games & Interactive Activities" },
                    { time: "13:30", event: "Lunch Break & Stall Visit" },
                    { time: "14:30", event: "Expert Panel Visit & Project Evaluations" },
                    { time: "16:00", event: "Award Ceremony & Closing Remarks" }
                ]
            }
        ]
    },
    {
        id: 1,
        name: "RHYTHMS",
        description: "Explore and celebrate the rich tapestry of arts and culture. Join us in creating, performing, and appreciating various art forms.",
        image: "images/rhythms.jpg",
        category: "Arts & Culture",
        events: [
            {
                id: 1,
                title: "SPECTRA",
                date: "2024-05-15",
                time: "20:00",
                location: "College Grounds",
                image: "images/ry1.jpg",
                status:"Registration Closed",
                registrationLink: "#",
                
            },
            {
                id: 2,
                title: "NAVOTHSAV",
                date: "2025-08-20",
                time: "10:00",
                location: "Griet Amphitheater",
                image: "images/ry2.jpg",
                
                
            },
            {
                id: 3,
                title: "PUSLE",
                date: "2025-04-26",
                time: "19:00",
                location: "College Grounds",
                image: "images/ry3.jpg",
                
            },
            {
                id: 4,
                title: "70 MM Short Film Contest",
                date: "2024-03-26",
                time: "11:00",
                location: "CSE Seminar Hall",
                image: "images/ry4.jpg",
                status: "Registration Closed",
                registrationLink: "#",
                
            }
        ]
    },
    
    {
        id: 5,
        name: "Sports Clubs",
        description: "Unleash your energy and passion for the game.\nSports clubs on campus offer a dynamic environment for students to stay active,\nThese clubs regularly host practice sessions, friendly matches, tournaments, and inter-college competitions",
        image: "images/sports.jpg",
        category: "Sports",
        events: [
            {
                id: 9,
                title: "INVICTUS",
                date: "2025-06-30",
                time: "10:00",
                location: "Hall 1",
                image: "images/inv.jpg",
                status: "Registration Closed",
                registrationLink: "#",
                
            },
            {
                id: 10,
                title: "KHELOSTAV",
                date: "2024-04-30",
                time: "10:00",
                location: "GRIET Grounds",
                image: "images/kal.jpg",
                status: "Registration Closed",
                registrationLink: "#",
            },,
            {
                id: 11,
                title: "ANUAL DAY",
                date: "2024-08-30",
                time: "10:00",
                location: "GRIET Grounds",
                image: "images/anu.jpg",
                status: "Registration Closed",
                registrationLink: "#",
            },,
            {
                id: 10,
                title: "YOGA",
                date: "2024-03-10",
                time: "10:00",
                location: "Hall 1",
                image: "images/yoga.jpg",
                status: "Registration Closed",
                registrationLink: "#",
            }
        ]
    },
    
];
