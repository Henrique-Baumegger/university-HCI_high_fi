export const mockBoards = [
    {
        "id": "b-1765397333491",
        "title": "Java",
        "author": "You",
        "year": "2025",
        "nodes": [
            {
                "id": "d - 1765398578510 ",
                "type": "deck",
                "x": -646.5282973604691,
                "y": -727.9490478815185,
                "content": "Basics",
                "cards": [
                    { "id": "c - 1765398585957 ", "front": "Is Int a primitive or object?", "back": "Primitive" },
                    { "id": "c - 1765398700174 ", "front": "What is the difference between JDK and JRE?", "back": "JDK: tools + compiler + JRE. JRE: only the runtime (JVM + core libraries)" },
                    { "id": "c - 1765398719266 ", "front": "What does println(x++) outputs for a initial x=5 ?", "back": "5" },
                    { "id": "c - 1765403447116 ", "front": "What is the main Java programm paradigm?", "back": "OOP" }
                ]
            },
            {
                "id": "d - 1765398785485 ",
                "type": "deck",
                "x": -583.6330784382124,
                "y": 193.55072262749508,
                "content": "OOP",
                "cards": [
                    { "id": "c - 1765398808428 ", "front": "What is encapsulation?", "back": "Hiding internal state and requiring all interaction through methods" },
                    { "id": "c - 1765398873315 ", "front": "What are the four main OOP pillars in Java?", "back": "Encapsulation, Inheritance, Polymorphism, Abstraction" },
                    { "id": "c - 1765398890035 ", "front": "What is method overriding?", "back": "A subclass provides its own implementation of a method defined in its superclass, using the same signature" },
                    { "id": "c - 1765399797149 ", "front": "When would you use an abstract class instead of interface?", "back": "When you want to share partial implementation among subclasses" },
                    { "id": "c - 1765400890985 ", "front": "What does the \"new\" keyword do ?", "back": "It allocates a new instance of a class, calls its constructor, and returns a reference to that object" },
                    { "id": "c - 1765401284234 ", "front": "When is an object considered \"no longer needed\" from the point of view of your Java program?", "back": "When it is no longer reachable" }
                ]
            },
            {
                "id": "d - 1765399863453 ",
                "type": "deck",
                "x": 127.74494805882505,
                "y": -579.226692227431,
                "content": "Collections and Generics",
                "cards": [
                    { "id": "c - 1765399882842 ", "front": "Which collection is best for key–value storage with fast average lookup?", "back": "HashMap, with O(1) lookup" },
                    { "id": "c - 1765399918675 ", "front": "What does the type List<String> mean?", "back": "A list with elements that are all of type String" },
                    { "id": "c - 1765399953384 ", "front": "Why is List<int> not allowed in Java?", "back": "Generics work with reference types only. Use the wrapper class instead." },
                    { "id": "c - 1765399991756 ", "front": "Compare access complexity of ArrayList vs LinkedList ", "back": "ArrayList: O(1)\n LinkedList: O(n)" }
                ]
            },
            {
                "id": "d - 1765400058138 ",
                "type": "deck",
                "x": 689.9684288695844,
                "y": 169.6460934194563,
                "content": "JVM and memory",
                "cards": [
                    { "id": "c - 1765400067155 ", "front": "List two responsibilities of the JVM at runtime", "back": "loading classes, managing memory" },
                    { "id": "c - 1765400090682 ", "front": "Where are objects at runtime?", "back": "On the heap" },
                    { "id": "c - 1765400111158 ", "front": "Which memory area stores local variables and method call frames?", "back": "The stack" },
                    { "id": "c - 1765400542035 ", "front": "What is the JVM?", "back": "The Java Virtual Machine executes compiled bytecode" },
                    { "id": "c - 1765401190087 ", "front": "After calling \"new\", where is the object stored and what does the variable actually hold?", "back": "The object itself lives on the heap; the variable holds a reference to that heap object" },
                    { "id": "c - 1765401243202 ", "front": "What does the JVM do with objects that are no longer reachable from any GC root?", "back": "They are treated as garbage and the garbage collector eventually reclaims the heap memory " }
                ]
            },
            {
                "id": "d - 1765400131468 ",
                "type": "deck",
                "x": -1106.3004526060577,
                "y": 89.66039871878836,
                "content": "History ",
                "cards": [
                    { "id": "c - 1765400141747 ", "front": "Who is considered the father of Java?", "back": "James Gosling" },
                    { "id": "c - 1765400151082 ", "front": "In which year was Java first released?", "back": "1995" },
                    { "id": "c - 1765400157010 ", "front": "What was Java's original project name?", "back": "Oak" }
                ]
            }
        ],
        "edges": [],
        "cardLinks": [
            { "id": "l-1765400743515", "sourceDeckId": "d - 1765398578510 ", "sourceCardId": "c - 1765398585957 ", "targetDeckId": "d - 1765399863453 ", "targetCardId": "c - 1765399953384 " },
            { "id": "l-1765400805426", "sourceDeckId": "d - 1765399863453 ", "sourceCardId": "c - 1765399882842 ", "targetDeckId": "d - 1765400058138 ", "targetCardId": "c - 1765400090682 " },
            { "id": "l-1765401234680", "sourceDeckId": "d - 1765400058138 ", "sourceCardId": "c - 1765401190087 ", "targetDeckId": "d - 1765398785485 ", "targetCardId": "c - 1765400890985 " },
            { "id": "l-1765401342393", "sourceDeckId": "d - 1765398785485 ", "sourceCardId": "c - 1765401284234 ", "targetDeckId": "d - 1765400058138 ", "targetCardId": "c - 1765401243202 " },
            { "id": "l-1765403480601", "sourceDeckId": "d - 1765398578510 ", "sourceCardId": "c - 1765403447116 ", "targetDeckId": "d - 1765398785485 ", "targetCardId": "c - 1765398873315 " }
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
