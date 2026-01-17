// data.js
const NOW = Date.now();
const HOUR_MS = 60 * 60 * 1000;

// Helper to rewind time relative to now
const hoursAgo = (h) => NOW - (h * HOUR_MS);

// Detailed Mock Data
const slackData = [
    {
        id: "MSG-1001",
        channel: "#proj-login-redesign",
        author: {
            name: "Sarah Chen",
            role: "Product Manager",
            avatar: "https://i.pravatar.cc/150?u=sarah" // Real Avatar
        },
        text: "Here is the final design for the login flow v2. Do we go ahead with this version for the sprint?",
        timestamp: hoursAgo(50), // Critical
        replies: [
            { 
                author: "Mike Ross", 
                avatar: "https://i.pravatar.cc/150?u=mike",
                text: "Looks good to me but unsure about legal compliance on the cookie banner.", 
                timestamp: hoursAgo(49) 
            },
            { 
                author: "Legal Bot", 
                avatar: "https://ui-avatars.com/api/?name=Legal+Bot&background=random", // Bot avatar
                text: "I'll check with the legal team.", 
                timestamp: hoursAgo(48) 
            }
        ]
    },
    {
        id: "MSG-1002",
        channel: "#eng-backend",
        author: {
            name: "Mike Ross",
            role: "Senior Engineer",
            avatar: "https://i.pravatar.cc/150?u=mike"
        },
        text: "Should we swap the database provider to Postgres before the data migration starts?",
        timestamp: hoursAgo(14), // Stalled
        replies: []
    },
    {
        id: "MSG-1003",
        channel: "#design-system",
        author: {
            name: "Jessica Wu",
            role: "Head of Design",
            avatar: "https://i.pravatar.cc/150?u=jessica"
        },
        text: "Can we approve the budget for the new 3D illustration pack ($500)?",
        timestamp: hoursAgo(5), // Unresolved
        replies: [
            { 
                author: "Tom Haverford", 
                avatar: "https://i.pravatar.cc/150?u=tom",
                text: "Is this a one-time fee or subscription?", 
                timestamp: hoursAgo(4) 
            }
        ]
    },
    {
        id: "MSG-1004",
        channel: "#marketing-q3",
        author: {
            name: "Tom Haverford",
            role: "Growth Marketer",
            avatar: "https://i.pravatar.cc/150?u=tom"
        },
        text: "Hey team, looking at the Q3 ad spend allocation for LinkedIn. Approve?",
        timestamp: hoursAgo(72), // Critical
        replies: [
            { 
                author: "Sarah Chen", 
                avatar: "https://i.pravatar.cc/150?u=sarah",
                text: "Let's discuss in the sync later.", 
                timestamp: hoursAgo(70) 
            }
        ]
    },
    {
        id: "MSG-1006",
        channel: "#product-roadmap",
        author: {
            name: "Sarah Chen",
            role: "Product Manager",
            avatar: "https://i.pravatar.cc/150?u=sarah"
        },
        text: "Should we delay the feature release until the analytics bug is patched?",
        timestamp: hoursAgo(30), // Unresolved
        replies: [
            { 
                author: "Mike Ross", 
                avatar: "https://i.pravatar.cc/150?u=mike",
                text: "It's a small bug, maybe we hotfix?", 
                timestamp: hoursAgo(29) 
            }
        ]
    }
];
