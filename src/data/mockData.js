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
        id: 101,
        title: "x86 Assembly Guide",
        author: "LowLevelWizard",
        year: "2023",
        course: "Systems Programming",
        description: "A comprehensive guide to x86 assembly instructions and registers.",
        upvotes: 120,
        comments: 45,
        commentsArray: ["Great guide!", "Very helpful for the exam."],
        nodes: [
            {
                id: 'd1',
                type: 'deck',
                x: 100,
                y: 100,
                content: 'Registers',
                cards: [
                    { id: 'c1', front: 'What is EAX?', back: 'Accumulator Register' },
                    { id: 'c2', front: 'What is EBX?', back: 'Base Register' }
                ]
            },
            {
                id: 'c3',
                type: 'deck',
                x: 400,
                y: 100,
                content: 'MOV Instruction',
                front: 'MOV dest, src',
                back: 'Copies data from src to dest'
            }
        ],
        edges: [
            { id: 'e1', source: 'd1', target: 'c3' }
        ]
    },
    {
        id: 102,
        title: "Memory Management",
        author: "OS_Master",
        year: "2024",
        course: "Systems Programming",
        description: "Deep dive into paging, segmentation, and virtual memory.",
        upvotes: 85,
        comments: 12,
        commentsArray: ["Clear explanations."],
        nodes: [
            {
                id: 'd2',
                type: 'deck',
                x: 200,
                y: 200,
                content: 'Paging',
                cards: [
                    { id: 'c4', front: 'What is a Page Table?', back: 'Data structure used by virtual memory system to store mapping between virtual and physical addresses' }
                ]
            }
        ],
        edges: []
    },
    {
        id: 103,
        title: "TCP/IP Stack",
        author: "NetNinja",
        year: "2023",
        course: "Computer Networks",
        description: "Understanding the 4 layers of TCP/IP.",
        upvotes: 200,
        comments: 50,
        commentsArray: [],
        nodes: [
            {
                id: 'd_app', type: 'deck', x: 100, y: 50, content: 'Application Layer', cards: [
                    { id: 'c_http', front: 'What is HTTP?', back: 'HyperText Transfer Protocol - used for transmitting web pages.' },
                    { id: 'c_dns', front: 'What is DNS?', back: 'Domain Name System - translates domain names to IP addresses.' },
                    { id: 'c_smtp', front: 'What is SMTP?', back: 'Simple Mail Transfer Protocol - used for sending emails.' }
                ]
            },
            {
                id: 'd_trans', type: 'deck', x: 100, y: 250, content: 'Transport Layer', cards: [
                    { id: 'c_tcp', front: 'What is TCP?', back: 'Transmission Control Protocol - connection-oriented, reliable delivery.' },
                    { id: 'c_udp', front: 'What is UDP?', back: 'User Datagram Protocol - connectionless, faster but unreliable.' },
                    { id: 'c_ports', front: 'What are ports?', back: 'Logical endpoints for communication (e.g., 80 for HTTP).' }
                ]
            },
            {
                id: 'd_net', type: 'deck', x: 100, y: 450, content: 'Network Layer', cards: [
                    { id: 'c_ip', front: 'What is IP?', back: 'Internet Protocol - responsible for addressing and routing packets.' },
                    { id: 'c_router', front: 'What does a router do?', back: 'Forwards data packets between computer networks.' }
                ]
            },
            {
                id: 'd_link', type: 'deck', x: 100, y: 650, content: 'Link Layer', cards: [
                    { id: 'c_mac', front: 'What is a MAC address?', back: 'Media Access Control address - unique identifier for network interfaces.' },
                    { id: 'c_eth', front: 'What is Ethernet?', back: 'Family of wired computer networking technologies.' }
                ]
            },
            { id: 'e_tcp_handshake', type: 'deck', x: 400, y: 250, content: '3-Way Handshake: SYN, SYN-ACK, ACK', relatedCardId: 'c_tcp' },
            { id: 'e_osi', type: 'deck', x: 400, y: 50, content: 'OSI Model has 7 layers, TCP/IP has 4', relatedCardId: 'd_app' }
        ],
        edges: [
            { id: 'l1', source: 'd_app', target: 'd_trans' },
            { id: 'l2', source: 'd_trans', target: 'd_net' },
            { id: 'l3', source: 'd_net', target: 'd_link' },
            { id: 'l4', source: 'd_trans', target: 'e_tcp_handshake', color: 'red' }
        ]
    }
];
