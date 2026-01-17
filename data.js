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
            avatar: "SC" // Initials for avatar placeholder
        },
        text: "Here is the final design for the login flow v2. Do we go ahead with this version for the sprint?",
        timestamp: hoursAgo(50), // 50 hours ago -> Critical
        replies: [
            { author: "Mike", text: "Looks good to me but unsure about legal compliance on the cookie banner.", timestamp: hoursAgo(49) },
            { author: "Legal Bot", text: "I'll check with the legal team.", timestamp: hoursAgo(48) }
        ]
    },
    {
        id: "MSG-1002",
        channel: "#eng-backend",
        author: {
            name: "Mike Ross",
            role: "Senior Engineer",
            avatar: "MR"
        },
        text: "Should we swap the database provider to Postgres before the data migration starts?",
        timestamp: hoursAgo(14), // 14 hours ago -> Stalled (0 replies)
        replies: []
    },
    {
        id: "MSG-1003",
        channel: "#design-system",
        author: {
            name: "Jessica Wu",
            role: "Head of Design",
            avatar: "JW"
        },
        text: "Can we approve the budget for the new 3D illustration pack ($500)?",
        timestamp: hoursAgo(5), // 5 hours ago -> Unresolved (Active)
        replies: [
            { author: "Tom", text: "Is this a one-time fee or subscription?", timestamp: hoursAgo(4) }
        ]
    },
    {
        id: "MSG-1004",
        channel: "#marketing-q3",
        author: {
            name: "Tom Haverford",
            role: "Growth Marketer",
            avatar: "TH"
        },
        text: "Hey team, looking at the Q3 ad spend allocation for LinkedIn. Approve?",
        timestamp: hoursAgo(72), // 72 hours ago -> Critical
        replies: [
            { author: "Sarah", text: "Let's discuss in the sync later.", timestamp: hoursAgo(70) }
        ]
    },
    {
        id: "MSG-1005",
        channel: "#random",
        author: {
            name: "Dave The Intern",
            role: "Ops Intern",
            avatar: "DI"
        },
        text: "Lunch order is here! Who ordered the spicy tuna?",
        timestamp: hoursAgo(2),
        replies: [] // Should be ignored by logic (no decision keywords)
    },
    {
        id: "MSG-1006",
        channel: "#product-roadmap",
        author: {
            name: "Sarah Chen",
            role: "Product Manager",
            avatar: "SC"
        },
        text: "Should we delay the feature release until the analytics bug is patched?",
        timestamp: hoursAgo(30), // 30 hours ago -> Unresolved
        replies: [
            { author: "Mike", text: "It's a small bug, maybe we hotfix?", timestamp: hoursAgo(29) }
        ]
    },
    {
        id: "MSG-1007",
        channel: "#infrastructure",
        author: {
            name: "Alex CTO",
            role: "CTO",
            avatar: "AC"
        },
        text: "Do we go ahead with the AWS Reserved Instance contract renewal?",
        timestamp: hoursAgo(100),
        replies: [
            { author: "Finance", text: "Yes, approved. I signed it this morning.", timestamp: hoursAgo(99) }
        ] // Resolved -> Should be filtered out
    }
];
