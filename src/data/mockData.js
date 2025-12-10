export const mockBoards = [
    {
        id: '1',
        title: 'Shakespeare',
        author: 'You',
        year: '2025',
        nodes: [
            {
                id: 'n1', type: 'deck', x: 100, y: 100, content: 'Hamlet & Midsummer', cards: [
                    { id: 'c1', front: 'Which play features the character Puck?', back: 'A Midsummer Night\'s Dream' },
                    { id: 'c2', front: 'Who is the Prince of Denmark?', back: 'Hamlet' }
                ]
            },
            { id: 'n2', type: 'deck', x: 400, y: 50, content: 'Which play is about the prince of Denmark?', relatedCardId: 'c2' },
            { id: 'n3', type: 'deck', x: 500, y: 300, content: 'From what play is "to be or not to be"?', relatedCardId: 'c2' },
            {
                id: 'n4', type: 'deck', x: 600, y: 400, content: 'As You Like It', cards: [
                    { id: 'c3', front: '"All the world\'s a stage"', back: 'As You Like It' }
                ]
            }
        ],
        edges: [
            { id: 'e1', source: 'n2', target: 'n3', color: 'red', curve: 'bezier' }
        ]
    }
];

export const communityBoards = [
    {
        id: 'sys_prog_101',
        title: "Systems Programming Basics",
        author: "SystemArch",
        year: "2024",
        course: "Systems Programming",
        description: "Essential concepts for Systems Programming.",
        upvotes: 42,
        comments: 5,
        commentsArray: ["Good starting point."],
        nodes: [
            {
                id: 'sp_d1',
                type: 'deck',
                x: 100,
                y: 100,
                content: 'Memory',
                cards: [
                    { id: 'sp_d1_c1', front: 'What is the Heap?', back: 'Dynamic memory allocation.' },
                    { id: 'sp_d1_c2', front: 'What is the Stack?', back: 'Local variable storage.' }
                ]
            },
            {
                id: 'sp_d2',
                type: 'deck',
                x: 900,
                y: 100,
                content: 'Pointers',
                cards: [
                    { id: 'sp_d2_c3', front: 'What is a pointer?', back: 'A variable that stores a memory address.' },
                    { id: 'sp_d2_c4', front: 'What is dereferencing?', back: 'Accessing value at the address.' }
                ]
            }
        ],
        cardLinks: [
            { id: 'link_sp_1', sourceDeckId: 'sp_d1', sourceCardId: 'sp_d1_c1', targetDeckId: 'sp_d2', targetCardId: 'sp_d2_c3' }
        ],
        edges: [
            { id: 'e1', source: 'sp_d1', target: 'sp_d2' }
        ]
    },
    {
        id: 'cn_101',
        title: "Network Fundamentals",
        author: "NetWiz",
        year: "2024",
        course: "Computer Networks",
        description: "Basic networking concepts and protocols.",
        upvotes: 35,
        comments: 2,
        commentsArray: [],
        nodes: [
            {
                id: 'cn_d1',
                type: 'deck',
                x: 100,
                y: 100,
                content: 'Protocols',
                cards: [
                    { id: 'cn_d1_c1', front: 'HTTP Port', back: '80' },
                    { id: 'cn_d1_c2', front: 'HTTPS Port', back: '443' }
                ]
            },
            {
                id: 'cn_d2',
                type: 'deck',
                x: 900,
                y: 200,
                content: 'Layers',
                cards: [
                    { id: 'cn_d2_c3', front: 'Layer 3', back: 'Network Layer (IP)' },
                    { id: 'cn_d2_c4', front: 'Layer 4', back: 'Transport Layer (TCP/UDP)' }
                ]
            }
        ],
        cardLinks: [],
        edges: []
    },
    {
        id: 'pp_101',
        title: "Parallel Thinking",
        author: "ThreadMaster",
        year: "2024",
        course: "Parallel Programming",
        description: "Intro to parallel processing.",
        upvotes: 56,
        comments: 8,
        commentsArray: [],
        nodes: [
            {
                id: 'pp_d1',
                type: 'deck',
                x: 100,
                y: 100,
                content: 'Threads',
                cards: [
                    { id: 'pp_d1_c1', front: 'Race Condition', back: 'Uncontrolled concurrent access to shared data.' },
                    { id: 'pp_d1_c2', front: 'Deadlock', back: 'Threads waiting indefinitely for each other.' }
                ]
            },
            {
                id: 'pp_d2',
                type: 'deck',
                x: 900,
                y: 300,
                content: 'Synchronization',
                cards: [
                    { id: 'pp_d2_c3', front: 'Mutex', back: 'Mutual Exclusion object.' },
                    { id: 'pp_d2_c4', front: 'Semaphore', back: 'Signaling mechanism.' }
                ]
            }
        ],
        cardLinks: [
            { id: 'link_pp_1', sourceDeckId: 'pp_d1', sourceCardId: 'pp_d1_c1', targetDeckId: 'pp_d2', targetCardId: 'pp_d2_c3' }
        ],
        edges: [
            { id: 'e1', source: 'pp_d1', target: 'pp_d2' }
        ]
    }
];
