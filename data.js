export const messages = [
  {
    id: "msg_1",
    text: "Should we ship the new pricing page today?",
    author: "PM",
    timestamp: "2026-01-14T10:00:00",
    replies: [],
  },
  {
    id: "msg_2",
    text: "Can we approve the API access for the partner?",
    author: "Eng",
    timestamp: "2026-01-13T15:30:00",
    replies: [
      {
        author: "Founder",
        text: "Need to think",
        timestamp: "2026-01-13T18:00:00",
      }
    ],
  },
  {
    id: "msg_3",
    text: "Do we go ahead with vendor A or B?",
    author: "Ops",
    timestamp: "2026-01-12T09:00:00",
    replies: [
      {
        author: "Founder",
        text: "Leaning A",
        timestamp: "2026-01-12T12:00:00",
      },
      {
        author: "PM",
        text: "Any final call?",
        timestamp: "2026-01-13T09:00:00",
      }
    ],
  }
];
