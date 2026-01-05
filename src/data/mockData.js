export const mockBoards = [
    {
        "id": "hci-fundamentals-ucd",
        "title": "1. HCI Fundamentals & User-Centered Design",
        "author": "You",
        "year": "2025",
        "nodes": [
            {
                "id": "deck-intro-hci",
                "type": "deck",
                "x": -800,
                "y": -400,
                "content": "Introduction to HCI",
                "cards": [
                    { "id": "card-def-hci", "front": "What is HCI?", "back": "Human-Computer Interaction: The study of how people interact with computers and design of technology that lets people interact with computers in novel ways" },
                    { "id": "card-norman-door", "front": "What is a Norman Door?", "back": "A door that confuses users about whether to push or pull. Named after Don Norman, it illustrates design that doesn't communicate its function clearly" },
                    { "id": "card-aesthetics-ux", "front": "Does aesthetic design guarantee good user experience?", "back": "No. Aesthetics ≠ User Experience. A product can be aesthetically pleasing but fail its primary function (e.g., the juicer example)" }
                ]
            },
            {
                "id": "deck-ucd-definition",
                "type": "deck",
                "x": -300,
                "y": -400,
                "content": "UCD Fundamentals",
                "cards": [
                    { "id": "card-ucd-def", "front": "What is User-Centered Design (UCD)?", "back": "An iterative design process where designers focus on users and their needs in each phase, involving research of user behaviors, needs, and experiences, incorporating user feedback through multiple iterations of prototyping and testing" },
                    { "id": "card-ucd-goal", "front": "What is the goal of UCD?", "back": "Develop solutions that align with REAL user needs rather than assumptions about those needs" },
                    { "id": "card-ucd-not", "front": "What are common misconceptions about UCD? (Name 2)", "back": "❌ UCD means asking users what they want\n❌ UCD means testing usability only at the end\n❌ UCD is just for interfaces or software\n❌ UCD guarantees a perfect design" }
                ]
            },
            {
                "id": "deck-ucd-properties",
                "type": "deck",
                "x": 200,
                "y": -400,
                "content": "Three Properties of UCD",
                "cards": [
                    { "id": "card-prop1", "front": "Property 1 of UCD", "back": "Early Focus on Users and Tasks: Directly study cognitive, behavioral, anthropomorphic, and attitudinal characteristics. Understand users' context and goals early in the process" },
                    { "id": "card-prop2", "front": "Property 2 of UCD", "back": "Empirical Measurement: Observe users' reactions and performance. Test scenarios, manuals, simulations, prototypes. Record and analyze data systematically" },
                    { "id": "card-prop3", "front": "Property 3 of UCD", "back": "Iterative Design: Find problems through user testing, fix identified issues, conduct more tests. Key Insight: Getting it right the first time is extremely hard" }
                ]
            },
            {
                "id": "deck-design-thinking",
                "type": "deck",
                "x": -800,
                "y": 100,
                "content": "Design Thinking Process",
                "cards": [
                    { "id": "card-dt-stages", "front": "What are the 5 stages of Design Thinking (in order)?", "back": "1. Empathize\n2. Define\n3. Ideate\n4. Prototype\n5. Test\n\n(Process is iterative, not strictly linear)" },
                    { "id": "card-dt-empathize", "front": "Design Thinking: Empathize stage", "back": "Understand users and their context. Gather insights about user needs" },
                    { "id": "card-dt-define", "front": "Design Thinking: Define stage", "back": "Frame the problem clearly. Synthesize findings into actionable problem statement" },
                    { "id": "card-dt-ideate", "front": "Design Thinking: Ideate stage", "back": "Generate many possible solutions. Divergent thinking" },
                    { "id": "card-quantity-quality", "front": "What principle supports idea generation in design?", "back": "\"The best way to have a good idea is to have lots of ideas\" - Linus Pauling. Principle: Generate many ideas before converging on solutions" }
                ]
            },
            {
                "id": "deck-needfinding",
                "type": "deck",
                "x": -300,
                "y": 100,
                "content": "Needfinding",
                "cards": [
                    { "id": "card-need-insight", "front": "Core challenge of needfinding", "back": "Users rarely know what they want and can almost never imagine what would be possible. Find what users NEED, not what they WANT" },
                    { "id": "card-needs-vs-features", "front": "Distinguish: Needs vs Features vs Requirements", "back": "Features: Specific implementation (e.g., 'search bar')\nRequirements: Goals the system needs to accomplish\nNeeds: Underlying user goals/problems\n\nKey: Features are NOT requirements!" },
                    { "id": "card-need-questions", "front": "Critical questions for needfinding (Name 3)", "back": "• What tasks do users need/want to accomplish?\n• How are they currently doing those tasks?\n• What do they dislike about the tasks?\n• Why are they looking for a new solution?\n• What would they like to be doing?" },
                    { "id": "card-pov-statement", "front": "What is a Point of View statement template?", "back": "WE MET... (user you are inspired by)\nWE WERE SURPRISED TO REALIZE... (insight—verb reflecting user needs)\nIT WOULD BE GAME-CHANGING TO... (Synthesized statement to leverage in designing solution)" }
                ]
            },
            {
                "id": "deck-biases",
                "type": "deck",
                "x": 200,
                "y": 100,
                "content": "Research Biases",
                "cards": [
                    { "id": "card-confirmation-bias", "front": "What is Confirmation Bias?", "back": "The tendency to interpret new evidence as confirmation of one's existing beliefs or theories. Warning: Don't assume you are the typical user!" },
                    { "id": "card-sampling-bias", "front": "What is Sampling Bias?", "back": "Inquiring only users who are easiest to reach (e.g., classmates) rather than representative set" },
                    { "id": "card-good-participant", "front": "What is Good Participant Bias?", "back": "Users try to give 'good' or 'acceptable' answers to please researcher" },
                    { "id": "card-hypothetical-bias", "front": "What is Hypothetical Bias?", "back": "Users say they would use a feature or behave a certain way, but in reality, they don't" },
                    { "id": "card-recency-bias", "front": "What is Recency Bias?", "back": "Users focus on most recent experiences instead of bigger picture" },
                    { "id": "card-groupthink", "front": "What is Groupthink in design?", "back": "Design team aligns too quickly on interpretation without challenging it" }
                ]
            },
            {
                "id": "deck-ucd-cycle",
                "type": "deck",
                "x": 700,
                "y": -100,
                "content": "UCD Process Cycle",
                "cards": [
                    { "id": "card-ucd-4stages", "front": "What are the 4 stages of the UCD Process Cycle?", "back": "1. Understand Context of Use\n2. Specify User Requirements\n3. Design Solutions\n4. Evaluate Against Requirements\n\n(Iterative cycle)" },
                    { "id": "card-when-done", "front": "When is the UCD process done?", "back": "When the design works properly in the context of use" },
                    { "id": "card-formative-evaluative", "front": "Difference between Formative and Evaluative methods", "back": "Formative (Build phase): Help understand the problem and users, inform design decisions, conducted early\n\nEvaluative: Understand how well design works, detect mistakes, refine design, conducted during and after design" }
                ]
            }
        ],
        "edges": [],
        "cardLinks": [
            { "id": "link-ucd-dt", "sourceDeckId": "deck-ucd-definition", "sourceCardId": "card-ucd-goal", "targetDeckId": "deck-design-thinking", "targetCardId": "card-dt-stages" },
            { "id": "link-dt-need", "sourceDeckId": "deck-design-thinking", "sourceCardId": "card-dt-empathize", "targetDeckId": "deck-needfinding", "targetCardId": "card-need-insight" },
            { "id": "link-need-bias", "sourceDeckId": "deck-needfinding", "sourceCardId": "card-need-questions", "targetDeckId": "deck-biases", "targetCardId": "card-confirmation-bias" }
        ]
    },
    {
        "id": "hci-prototyping-evaluation",
        "title": "2. Prototyping & Evaluation",
        "author": "You",
        "year": "2025",
        "nodes": [
            {
                "id": "deck-proto-basics",
                "type": "deck",
                "x": -800,
                "y": -400,
                "content": "Prototyping Basics",
                "cards": [
                    { "id": "card-proto-def", "front": "What is a Prototype?", "back": "An early sample, model, or release of a product built to test a concept or process" },
                    { "id": "card-fidelity-def", "front": "What is Fidelity in prototyping?", "back": "The level of detail and functionality in a prototype (low, medium, high)" },
                    { "id": "card-proto-principle", "front": "Core prototyping principles (Name 2)", "back": "• Prototype early and often in the design process\n• Match fidelity to design stage: Use low-fidelity early, increase as design matures\n• Focus on specific questions: Each prototype should test particular aspects" },
                    { "id": "card-wizard-oz", "front": "What is Wizard of Oz prototyping?", "back": "A prototyping method where a human simulates system responses, creating the illusion of a functioning system" }
                ]
            },
            {
                "id": "deck-proto-fidelity",
                "type": "deck",
                "x": -300,
                "y": -400,
                "content": "Fidelity Levels",
                "cards": [
                    { "id": "card-low-fi", "front": "When to use Low-fidelity prototypes?", "back": "Early exploration, quick iteration, testing concepts" },
                    { "id": "card-med-fi", "front": "When to use Medium-fidelity prototypes?", "back": "Refining interactions, testing workflows" },
                    { "id": "card-high-fi", "front": "When to use High-fidelity prototypes?", "back": "Final validation, stakeholder presentations" }
                ]
            },
            {
                "id": "deck-eval-types",
                "type": "deck",
                "x": 200,
                "y": -400,
                "content": "Evaluation Types",
                "cards": [
                    { "id": "card-usability-def", "front": "What is Usability?", "back": "Can users accomplish their goals effectively and efficiently?" },
                    { "id": "card-ux-def", "front": "What is User Experience (UX)?", "back": "How does it feel to use the system?" },
                    { "id": "card-formative-eval", "front": "What is Formative Evaluation?", "back": "Improve the design (early, diagnostic)" },
                    { "id": "card-summative-eval", "front": "What is Summative Evaluation?", "back": "Assess overall quality (final, comparative)" },
                    { "id": "card-analytical-eval", "front": "What is Analytical Evaluation?", "back": "Performed by experts using knowledge of users and technology to assess usability/UX WITHOUT involving actual users" }
                ]
            },
            {
                "id": "deck-cognitive-walkthrough",
                "type": "deck",
                "x": -800,
                "y": 100,
                "content": "Cognitive Walkthrough",
                "cards": [
                    { "id": "card-cw-purpose", "front": "Purpose of Cognitive Walkthrough", "back": "Expose problems impairing ease of use and learnability. Recommended for understanding how novice users may learn to use a system" },
                    { "id": "card-cw-4questions", "front": "4 Key Questions in Cognitive Walkthrough", "back": "1. Will the user try to achieve the right goal?\n2. Will the user notice the correct action?\n3. Will the user associate the action with the goal?\n4. After acting, will the user recognize progress or success?\n\nIf no plausible answer → record a critical issue" }
                ]
            },
            {
                "id": "deck-heuristic-eval",
                "type": "deck",
                "x": -300,
                "y": 100,
                "content": "Heuristic Evaluation",
                "cards": [
                    { "id": "card-he-def", "front": "What is Heuristic Evaluation?", "back": "Evaluators examine the interface and judge its compliance with recognized usability principles (heuristics)" },
                    { "id": "card-he-chars", "front": "Characteristics of Heuristic Evaluation", "back": "• 'Discount usability engineering method'\n• Cheap, fast, easy to use\n• Developed for inexperienced practitioners\n• Possible on paper-only prototypes" },
                    { "id": "card-he-process", "front": "Heuristic Evaluation Process (4 steps)", "back": "1. Briefing session: Tell evaluators what to do\n2. Individual inspection: Each evaluator inspects alone (go through at least twice)\n3. Aggregate findings: Evaluators combine results\n4. Debriefing session: Discuss with design team, propose redesigns" },
                    { "id": "card-he-optimal", "front": "Optimal number of evaluators for Heuristic Evaluation", "back": "3-5 evaluators (Nielsen et al.)" }
                ]
            },
            {
                "id": "deck-nielsen-heuristics",
                "type": "deck",
                "x": 200,
                "y": 100,
                "content": "Nielsen's 10 Heuristics",
                "cards": [
                    { "id": "card-h1", "front": "Heuristic 1: Visibility of System Status", "back": "Keep users informed about what's going on. Provide appropriate feedback within reasonable time" },
                    { "id": "card-h2", "front": "Heuristic 2: Match Between System and Real World", "back": "Speak users' language (words, phrases, concepts familiar to user). Use real-world conventions. Information appears in natural and logical order" },
                    { "id": "card-h3", "front": "Heuristic 3: User Control and Freedom", "back": "Users choose functions by mistake. Need clearly marked 'emergency exit'. Leave unwanted state without extended dialogue" },
                    { "id": "card-h4", "front": "Heuristic 4: Consistency and Standards", "back": "Users shouldn't wonder if different words/actions mean same thing. Follow platform conventions" },
                    { "id": "card-h5", "front": "Heuristic 5: Error Prevention", "back": "Better than good error messages. Careful design prevents problems. Eliminate error-prone conditions OR check and present confirmation" },
                    { "id": "card-h6", "front": "Heuristic 6: Recognition Rather Than Recall", "back": "Minimize user's memory load. Make objects, actions, options visible. Don't make users remember information between dialog parts" },
                    { "id": "card-h7", "front": "Heuristic 7: Flexibility and Efficiency of Use", "back": "Accelerators for expert users (unseen by novices). Speed up interaction for experts. Support both inexperienced and experienced users" },
                    { "id": "card-h8", "front": "Heuristic 8: Aesthetic and Minimalist Design", "back": "Dialogs shouldn't contain irrelevant or rarely needed information. Extra information competes with relevant information, diminishes relative visibility" },
                    { "id": "card-h9", "front": "Heuristic 9: Help Users Recognize, Diagnose, and Recover from Errors", "back": "Plain language error messages (no codes). Precisely indicate the problem. Constructively suggest a solution" },
                    { "id": "card-h10", "front": "Heuristic 10: Help and Documentation", "back": "Better if system usable without documentation. If needed: easy to search, focused on user's task, lists concrete steps, not too extensive" }
                ]
            },
            {
                "id": "deck-empirical-methods",
                "type": "deck",
                "x": -800,
                "y": 600,
                "content": "Empirical Methods",
                "cards": [
                    { "id": "card-empirical-def", "front": "What is an Empirical Method?", "back": "Collect and analyze data from real users to understand how people interact with technology. Evidence-based (observation, measurement, experimentation)" },
                    { "id": "card-axe-analogy", "front": "Analytical vs Empirical: The Axe Analogy", "back": "Analytical: Judge quality based on properties (steel, balance, sharpness)\nEmpirical: Measure how well it performs its purpose (give it to lumberjack, measure trees cut per time)" },
                    { "id": "card-why-empirical", "front": "Why use Empirical Methods? (Name 3)", "back": "1. To evaluate usability (can users complete tasks efficiently?)\n2. To understand user experience (how does interface feel?)\n3. To inform design decisions (what features matter most?)\n4. To build and test theories of human-computer interaction" }
                ]
            },
            {
                "id": "deck-think-aloud",
                "type": "deck",
                "x": -300,
                "y": 600,
                "content": "Think-Aloud Studies",
                "cards": [
                    { "id": "card-ta-def", "front": "What is a Think-Aloud Study?", "back": "Asks users to verbalize their thoughts while performing tasks on an interface. Collects spoken data (what they say) alongside behavioral data (what they do)" },
                    { "id": "card-ta-goal", "front": "Goal of Think-Aloud", "back": "Make users' mental processes visible (reasoning, confusion, expectations) as they try to achieve a goal" },
                    { "id": "card-ta-levels", "front": "3 Levels of Thought Processes in Think-Aloud", "back": "Level 1 - Direct Verbalization: Say thoughts as they occur (natural)\nLevel 2 - Descriptive Verbalization: Verbalize nonverbal info (mental images, plans)\nLevel 3 - Explanatory Verbalization: Explain, justify, or reflect on actions (most meaningful)" },
                    { "id": "card-ta-challenges", "front": "Practical challenges in Think-Aloud studies (Name 3)", "back": "• Participants go silent\n• Talking changes behavior\n• Leading questions\n• Too much prompting" },
                    { "id": "card-ta-tips", "front": "Facilitator tips for Think-Aloud (Name 3)", "back": "• Model first\n• Keep prompts neutral\n• Give simple, focused tasks\n• Be patient\n• Note both words and actions\n• Record sessions\n• Stay in background\n• Debrief afterward" }
                ]
            },
            {
                "id": "deck-thematic-analysis",
                "type": "deck",
                "x": 200,
                "y": 600,
                "content": "Thematic Analysis",
                "cards": [
                    { "id": "card-thematic-6steps", "front": "6 Steps of Thematic Analysis", "back": "1. Gather all your data (transcribe audio)\n2. Read all data from beginning to end\n3. Code the text based on what it's about\n4. Create new codes that encapsulate potential themes\n5. Take a break for a day, then return to the data\n6. Evaluate your themes for good fit (have others review)" }
                ]
            },
            {
                "id": "deck-when-use-methods",
                "type": "deck",
                "x": 700,
                "y": 100,
                "content": "When to Use Each Method",
                "cards": [
                    { "id": "card-when-analytical", "front": "When to use Analytical Evaluation (Heuristic/Cognitive Walkthrough)?", "back": "• Early stages/iterations\n• Resources restricted\n• Need to reveal obvious problems quickly\n• Want expert insights without user recruitment" },
                    { "id": "card-when-empirical", "front": "When to use Empirical Evaluation (Think-Aloud/User Testing)?", "back": "• Need to understand actual user behavior\n• Testing subtle/complex interactions\n• Validating design decisions with real users\n• Building evidence-based insights" },
                    { "id": "card-he-reliability", "front": "Reliability issues with Heuristic Evaluation", "back": "• High efficiency: Some problems spotted with little effort\n• Limited scope: Only visible UI aspects\n• High false positive/negative rates\n• No guarantees: Not comprehensive or reliable\n• High variability: Evaluators have drastically varying hit rates" }
                ]
            }
        ],
        "edges": [],
        "cardLinks": [
            { "id": "link-proto-eval", "sourceDeckId": "deck-proto-basics", "sourceCardId": "card-fidelity-def", "targetDeckId": "deck-eval-types", "targetCardId": "card-formative-eval" },
            { "id": "link-eval-cw", "sourceDeckId": "deck-eval-types", "sourceCardId": "card-analytical-eval", "targetDeckId": "deck-cognitive-walkthrough", "targetCardId": "card-cw-purpose" },
            { "id": "link-eval-he", "sourceDeckId": "deck-eval-types", "sourceCardId": "card-analytical-eval", "targetDeckId": "deck-heuristic-eval", "targetCardId": "card-he-def" },
            { "id": "link-he-nielsen", "sourceDeckId": "deck-heuristic-eval", "sourceCardId": "card-he-def", "targetDeckId": "deck-nielsen-heuristics", "targetCardId": "card-h1" },
            { "id": "link-empirical-ta", "sourceDeckId": "deck-empirical-methods", "sourceCardId": "card-empirical-def", "targetDeckId": "deck-think-aloud", "targetCardId": "card-ta-def" },
            { "id": "link-ta-thematic", "sourceDeckId": "deck-think-aloud", "sourceCardId": "card-ta-def", "targetDeckId": "deck-thematic-analysis", "targetCardId": "card-thematic-6steps" }
        ]
    },
    {
        "id": "hci-statistics-analysis",
        "title": "4. Statistical Analysis & Experiments",
        "author": "You",
        "year": "2025",
        "nodes": [
            {
                "id": "deck-stat-fundamentals",
                "type": "deck",
                "x": -900,
                "y": -500,
                "content": "Statistical Fundamentals",
                "cards": [
                    { "id": "card-pop-sample", "front": "Difference between Population and Sample", "back": "Population: The entire group being studied (e.g., 7 billion people)\nSample: A subset of the population used for research\n\nGoal: Results should generalize to population" },
                    { "id": "card-rep-sample", "front": "What is a Representative Sample?", "back": "A sample that accounts for relevant factors (age, gender, occupation, etc.) so results can generalize to the population" },
                    { "id": "card-descriptive-inferential", "front": "Descriptive vs Inferential Statistics", "back": "Descriptive: Summarize sample data\nInferential: Make conclusions about populations from samples" },
                    { "id": "card-visualize-rule", "front": "Critical visualization principle in statistics", "back": "\"If you did not visualize your data, consider it erroneous\"\n\nSame mean and SD can represent completely different distributions. Always visualize before analysis!" }
                ]
            },
            {
                "id": "deck-hypothesis",
                "type": "deck",
                "x": -400,
                "y": -500,
                "content": "Hypothesis Testing",
                "cards": [
                    { "id": "card-h-h0", "front": "Alternative Hypothesis (H) vs Null Hypothesis (H0)", "back": "Alternative (H): Proposes a specific difference or effect (e.g., 'Controller A is faster')\n\nNull (H0): States there is no difference between conditions (e.g., 'No difference in speed')" },
                    { "id": "card-pvalue-def", "front": "What is a P-value?", "back": "Probability of observing the data if H0 were true. How compatible the observed data is with the null hypothesis.\n\nLow p-value = less compatible with H0 = evidence against H0\n\nIMPORTANT: Does NOT indicate probability that H is true!" },
                    { "id": "card-alpha", "front": "What is Alpha level (α)?", "back": "Threshold for determining statistical significance\n\nCommon: α = 0.05 (5% significance level)\n\np < α → statistically significant\np > α → not significant (no evidence for difference, NOT proof of no difference)" },
                    { "id": "card-cannot-accept", "front": "Key limitation of hypothesis testing", "back": "We CANNOT accept or validate a null hypothesis\n\np > α means: No evidence for difference (NOT proof of no difference)" }
                ]
            },
            {
                "id": "deck-descriptive-stats",
                "type": "deck",
                "x": 100,
                "y": -500,
                "content": "Descriptive Statistics",
                "cards": [
                    { "id": "card-mean", "front": "Mean: When good, when bad?", "back": "GOOD: When data points are clustered together\nBAD: When outliers exist (extreme values)\n\nLimitation: Only meaningful for interval/ratio data (not categorical or ordinal)" },
                    { "id": "card-median", "front": "Median: When to use?", "back": "The middle value in ordered data\n\nROBUST: Not affected by outliers\nNATURAL CHOICE: For ordinal data" },
                    { "id": "card-sd-ci", "front": "Standard Deviation vs Confidence Interval", "back": "SD: Measures spread of data\n\nCI (95%): Range where true value likely lies. In repeated experiments, 95% of intervals will contain the actual mean" }
                ]
            },
            {
                "id": "deck-errors-power",
                "type": "deck",
                "x": 600,
                "y": -500,
                "content": "Errors & Power",
                "cards": [
                    { "id": "card-type1-error", "front": "Type I Error (False Positive)", "back": "Rejecting a true null hypothesis\n\nControlled by α-level\n\nExample: Finding an effect that doesn't actually exist" },
                    { "id": "card-type2-error", "front": "Type II Error (False Negative)", "back": "Failing to reject a false null hypothesis\n\nControlled by β-level\n\nExample: Missing an effect that actually exists" },
                    { "id": "card-degrees-freedom", "front": "What are Degrees of Freedom (ν)?", "back": "Number of values free to vary in final calculation\n\nFormula varies by test\n\nOne-sample t-test: ν = n - 1 (where n = number of observations)" },
                    { "id": "card-power-analysis", "front": "Purpose of Power Analysis", "back": "Compute minimum number of participants to achieve desired effect\n\nRequired: α (typically 0.05), 1-β (power, typically 0.8), desired effect size (from literature)" }
                ]
            },
            {
                "id": "deck-test-selection",
                "type": "deck",
                "x": -900,
                "y": 0,
                "content": "Choosing Statistical Tests",
                "cards": [
                    { "id": "card-test-factors", "front": "Key factors for choosing statistical test (Name 5)", "back": "1. Parametric vs Non-parametric (normal distribution?)\n2. Data Type (Interval, Ratio, Ordinal, Nominal)\n3. Number of Groups (2 or more than 2)\n4. Sample Sizes (equal vs unequal)\n5. Independence (paired vs unpaired)\n6. Action (compare, correlate, predict)" },
                    { "id": "card-independent-dependent", "front": "Independent vs Dependent Samples", "back": "Independent: Each participant in ONE condition only (between-subject)\nAlso called: independent measures/means\n\nDependent: SAME participants in all conditions (within-subject)\nAlso called: matched pairs, paired samples, repeated measures" }
                ]
            },
            {
                "id": "deck-parametric-tests",
                "type": "deck",
                "x": -400,
                "y": 0,
                "content": "Parametric Tests",
                "cards": [
                    { "id": "card-parametric-chars", "front": "Characteristics of Parametric Tests", "back": "• Test group MEANS (not medians)\n• ASSUME Gaussian (normal) distribution\n• ASSUME homogeneity (equal/similar variances for ANOVA)\n• MORE statistical power than non-parametric tests" },
                    { "id": "card-parametric-list", "front": "Common Parametric Tests (Name 4)", "back": "• One-sample t-test: Comparison against a mean\n• Two-sample t-test: Two independent measures\n• Paired-sample t-test: Two dependent measures\n• One-way/Factorial ANOVA: Multiple independent measures\n• Repeated-measures ANOVA: Multiple dependent measures" },
                    { "id": "card-test-normality", "front": "How to test for normality?", "back": "Shapiro-Wilk test: Significant result means data is NOT normally distributed\n\nQ-Q plots: Visual inspection of distribution" },
                    { "id": "card-test-homoscedasticity", "front": "How to test for equal variances (homoscedasticity)?", "back": "Levene's test: Checks if variances are equal across groups" }
                ]
            },
            {
                "id": "deck-nonparametric-tests",
                "type": "deck",
                "x": 100,
                "y": 0,
                "content": "Non-Parametric Tests",
                "cards": [
                    { "id": "card-nonpara-chars", "front": "Characteristics of Non-Parametric Tests", "back": "• Test group MEDIANS (not means)\n• Do NOT assume specific distribution\n• ROBUST to unequal spread of samples\n• LESS statistical power\n• Increased Type II error likelihood" },
                    { "id": "card-nonpara-list", "front": "Common Non-Parametric Tests (Name 5)", "back": "• Chi-Square: Categorical data\n• Mann-Whitney: Two independent measures\n• Wilcoxon signed rank: Two dependent measures\n• Kruskal-Wallis: Multiple independent measures\n• Friedman: Multiple dependent measures" }
                ]
            },
            {
                "id": "deck-ttest",
                "type": "deck",
                "x": -900,
                "y": 500,
                "content": "T-Tests",
                "cards": [
                    { "id": "card-ttest-purpose", "front": "Purpose of Independent t-test", "back": "Check if two means are reliably different\n\nFormula: t = (variance between groups) / (variance within groups)\n\nLarge t → Different groups → H0 rejected\nSmall t → Similar groups → H0 not rejected" },
                    { "id": "card-ttest-distribution", "front": "What is a t-distribution?", "back": "Distribution of t-values when H0 is true\n\nDepends on sample size (degrees of freedom)\n\nUsed to convert t-value to p-value" }
                ]
            },
            {
                "id": "deck-anova",
                "type": "deck",
                "x": -400,
                "y": 500,
                "content": "ANOVA",
                "cards": [
                    { "id": "card-anova-purpose", "front": "Purpose of ANOVA", "back": "Parametric test for factors with 3+ levels\n\nOne-way ANOVA: One factor with multiple levels\nFactorial ANOVA: Multiple factors and levels" },
                    { "id": "card-anova-effects", "front": "Main Effects vs Interaction Effects in ANOVA", "back": "Main Effects: Difference between levels of each factor\n\nInteraction Effects: Whether effects of one factor depend on levels of another factor" },
                    { "id": "card-anova-limitation", "front": "Limitation of ANOVA and its solution", "back": "Limitation: Doesn't identify which specific levels differ\n\nSolution: Post-hoc t-tests to identify specific differences\n\nNon-parametric alternative: Aligned Rank Transform (ART) ANOVA" }
                ]
            },
            {
                "id": "deck-effect-size",
                "type": "deck",
                "x": 100,
                "y": 500,
                "content": "Effect Size",
                "cards": [
                    { "id": "card-effect-purpose", "front": "Why measure Effect Size?", "back": "Statistical significance ≠ meaningful effect\n\nMeasures practical importance of results in standardized way" },
                    { "id": "card-cohens-d", "front": "Cohen's d interpretation", "back": "Standardized mean difference between samples\n\nSmall effect: d ≈ 0.2\nMedium effect: d ≈ 0.5\nLarge effect: d ≈ 0.8\n\nContext-dependent: Interpretation varies by field" }
                ]
            },
            {
                "id": "deck-test-mapping",
                "type": "deck",
                "x": 600,
                "y": 0,
                "content": "Test Selection Guide",
                "cards": [
                    { "id": "card-map-2groups-normal-between", "front": "Test for: 2 groups, normal, between-subject", "back": "Independent two-sample t-test" },
                    { "id": "card-map-2groups-normal-within", "front": "Test for: 2 groups, normal, within-subject", "back": "Paired t-test (related-sample t-test)" },
                    { "id": "card-map-2groups-ordinal-between", "front": "Test for: 2 groups, ordinal, between-subject", "back": "Mann-Whitney U test" },
                    { "id": "card-map-2groups-ordinal-within", "front": "Test for: 2 groups, ordinal, within-subject", "back": "Wilcoxon signed rank test" },
                    { "id": "card-map-3plus-normal-between", "front": "Test for: 3+ groups, normal, between-subject", "back": "One-way ANOVA" },
                    { "id": "card-map-3plus-normal-within", "front": "Test for: 3+ groups, normal, within-subject", "back": "Repeated-measures ANOVA" },
                    { "id": "card-map-3plus-ordinal-within", "front": "Test for: 3+ groups, ordinal, within-subject", "back": "Friedman test" },
                    { "id": "card-map-multiple-factors-normal", "front": "Test for: Multiple factors, normal", "back": "Factorial ANOVA" },
                    { "id": "card-map-multiple-factors-ordinal", "front": "Test for: Multiple factors, ordinal", "back": "Aligned Rank Transform (ART) ANOVA" }
                ]
            },
            {
                "id": "deck-reporting",
                "type": "deck",
                "x": 600,
                "y": 500,
                "content": "Reporting Results",
                "cards": [
                    { "id": "card-report-template", "front": "Standard format for reporting statistical results", "back": "To compare the effect of [IV] on [DV], we conducted a [test] as data [did/did not] meet assumptions.\n\nWith condition A, [stats] (M = XX, SD = X).\nWith condition B, [stats] (M = XX, SD = XX).\n\nThe mean difference was statistically [sig/not sig]; [DOF], p-value, [effect size].\n\nThese results indicate that condition A was [interpretation] than condition B." }
                ]
            }
        ],
        "edges": [],
        "cardLinks": [
            { "id": "link-fund-hyp", "sourceDeckId": "deck-stat-fundamentals", "sourceCardId": "card-pop-sample", "targetDeckId": "deck-hypothesis", "targetCardId": "card-h-h0" },
            { "id": "link-hyp-desc", "sourceDeckId": "deck-hypothesis", "sourceCardId": "card-pvalue-def", "targetDeckId": "deck-descriptive-stats", "targetCardId": "card-mean" },
            { "id": "link-hyp-errors", "sourceDeckId": "deck-hypothesis", "sourceCardId": "card-alpha", "targetDeckId": "deck-errors-power", "targetCardId": "card-type1-error" },
            { "id": "link-select-para", "sourceDeckId": "deck-test-selection", "sourceCardId": "card-test-factors", "targetDeckId": "deck-parametric-tests", "targetCardId": "card-parametric-chars" },
            { "id": "link-select-nonpara", "sourceDeckId": "deck-test-selection", "sourceCardId": "card-test-factors", "targetDeckId": "deck-nonparametric-tests", "targetCardId": "card-nonpara-chars" },
            { "id": "link-para-ttest", "sourceDeckId": "deck-parametric-tests", "sourceCardId": "card-parametric-list", "targetDeckId": "deck-ttest", "targetCardId": "card-ttest-purpose" },
            { "id": "link-para-anova", "sourceDeckId": "deck-parametric-tests", "sourceCardId": "card-parametric-list", "targetDeckId": "deck-anova", "targetCardId": "card-anova-purpose" }
        ]
    },
    {
        "id": "hci-visual-perception",
        "title": "6. Visual Perception & Attention",
        "author": "You",
        "year": "2025",
        "nodes": [
            {
                "id": "deck-perception-basics",
                "type": "deck",
                "x": -1000,
                "y": -500,
                "content": "Perception Fundamentals",
                "cards": [
                    { "id": "card-change-blindness", "front": "What is Change Blindness?", "back": "Changes in visual scenes can be missed if attention is elsewhere\n\nRelevant for: driving, UI notification placement\n\nKey insight: Perception requires considerable cognitive resources beyond subjective 'seeing'. Attention is needed to detect changes" }
                ]
            },
            {
                "id": "deck-gestalt",
                "type": "deck",
                "x": -500,
                "y": -500,
                "content": "Gestalt Principles",
                "cards": [
                    { "id": "card-gestalt-core", "front": "Core idea of Gestalt Theory", "back": "\"The whole is something else than the sum of its parts\" (Koffka, 1935)\n\nFounded in 1920s by Max Wertheimer\nFocuses on perception of groups, patterns, and objects" },
                    { "id": "card-gestalt-4principles", "front": "4 Key Principles of Gestalt", "back": "1. Emergence: Perceiving the whole before individual parts\n2. Multistability: Multiple interpretations of same stimulus\n3. Reification: Perceiving more than what is physically present\n4. Invariance: Recognition despite transformations" },
                    { "id": "card-gestalt-laws", "front": "Gestalt Laws of Grouping (Name 4)", "back": "1. Proximity: Close objects belong together\n2. Similarity: Similar appearance belongs together\n3. Closure: Prefer complete figures (fill in gaps)\n4. Symmetry: Symmetric objects form groups\n5. Figure & Ground: Foreground vs background\n6. Common Fate: Same direction = together\n7. Continuity: Uninterrupted objects\n8. Past Experience: Based on previous experiences" }
                ]
            },
            {
                "id": "deck-fit",
                "type": "deck",
                "x": 0,
                "y": -500,
                "content": "Feature Integration Theory",
                "cards": [
                    { "id": "card-fit-developers", "front": "Who developed Feature Integration Theory?", "back": "Anne Treisman and Garry Gelade (1980s)" },
                    { "id": "card-fit-core", "front": "Core concepts of Feature Integration Theory", "back": "• Processing of visual information is LIMITED\n• Full visual acuity only in foveal area (<2° visual field)\n• Peripheral vision provides limited information\n\nQuote from Treisman: 'certainly too simple and also certainly wrong in some respects'" },
                    { "id": "card-fit-2stages", "front": "Two stages of Feature Integration Theory", "back": "Stage 1 - Preattentive: Analyze stimulus features automatically, parallel processing, no focused attention\n\nStage 2 - Focused Attention: Combine features, sequential processing, requires attention to bind features together" },
                    { "id": "card-fit-popout", "front": "What allows visual 'pop-out' in FIT?", "back": "Simple features (color, orientation, size) allow targets to pop out\n\nComplex feature combinations require serial search\n\nBoth bottom-up (stimulus-driven) and top-down (memory/expectation) activation" }
                ]
            },
            {
                "id": "deck-perceptual-load",
                "type": "deck",
                "x": 500,
                "y": -500,
                "content": "Perceptual Load Theory",
                "cards": [
                    { "id": "card-plt-developer", "front": "Who developed Perceptual Load Theory?", "back": "Nilli Lavie (mid-1990s)" },
                    { "id": "card-selection-debate", "front": "Early Selection vs Late Selection views", "back": "Early Selection (1950s): Limited capacity, perceive only what we attend to, early bottleneck (Broadbent, Treisman, Cherry)\n\nLate Selection (1970s): Perception unlimited and automatic, all stimuli perceived, selection in later processes (Deutsch, Duncan)" },
                    { "id": "card-plt-findings", "front": "Main findings of Perceptual Load Theory", "back": "Distractor effects GREATER in LOW perceptual load conditions\n\nHigher load → more focus, less distraction\nLower load → more easily distracted\n\nRelated to 'cocktail party problem'" },
                    { "id": "card-plt-takeaways", "front": "Perceptual Load Theory takeaways for HCI", "back": "1. Users' ability to react to visual stimuli depends on context\n2. Higher load = more focus, less distraction\n3. Lower load = more easily distracted\n\nQuote: 'Threatening or biologically significant stimuli bypass normal capacity limits' - Lavie" }
                ]
            },
            {
                "id": "deck-visual-saliency",
                "type": "deck",
                "x": -1000,
                "y": 0,
                "content": "Visual Saliency",
                "cards": [
                    { "id": "card-saliency-def", "front": "What is Visual Saliency?", "back": "Perceptual 'pop-out' for pre-attentive selection\n\nProcess: Feature maps computed in parallel → combined into saliency map → winner-take-all network → sequential processing with inhibition of return" },
                    { "id": "card-saliency-types", "front": "Bottom-Up vs Top-Down Saliency", "back": "Bottom-Up: Focus-based, feature-based, data-driven\n\nTop-Down: Challenging to model, influenced by task, load, context (per Perceptual Load Theory)" },
                    { "id": "card-saliency-methods", "front": "Classical vs Modern Saliency Methods", "back": "Classical (Itti & Koch): Explicit feature sets, explicit computation of feature maps\n\nModern: Deep learning-based (e.g., TASED-Net - Temporally-Aggregating Spatial Encoder-Decoder Network, ICCV 2019)" },
                    { "id": "card-visual-clutter", "front": "What is Visual Clutter?", "back": "Too many competing features lead to clutter\n\nMeasured by feature congestion (Rosenholtz et al., CHI 2005)" }
                ]
            },
            {
                "id": "deck-fitts-law",
                "type": "deck",
                "x": -500,
                "y": 0,
                "content": "Fitts' Law",
                "cards": [
                    { "id": "card-fitts-developer", "front": "Who developed Fitts' Law and when?", "back": "Paul M. Fitts (1954)\n\nOriginal applications: Cockpit controls, conveyor belts, mouse clicking" },
                    { "id": "card-fitts-def", "front": "What does Fitts' Law model?", "back": "Models throughput in aimed movements\n\nVery powerful and widely used\nHolds across many circumstances (underwater, intoxicated)\nAllows comparison among experiments" },
                    { "id": "card-fitts-formula", "front": "Fitts' Law Formula", "back": "MT = a + b × log₂(2D/W)\nMT = a + b × ID\n\nMT = Movement Time\nD = Distance to target\nW = Width of target\nID = Index of Difficulty\na, b = constants (depend on device)" },
                    { "id": "card-fitts-ip", "front": "Index of Performance (Throughput) in Fitts' Law", "back": "IP = ID / MT\n\nUnits: bits/sec\n\nQuote: 'The average rate of information generated by a series of movements is the average information per movement divided by the time per movement' - Fitts, 1954" },
                    { "id": "card-fitts-insights", "front": "Key insights from Fitts' Law", "back": "• Logarithmic relationship between size and difficulty\n• Greater benefit from increasing size of SMALL targets\n• Distance has LINEAR impact\n• Size has LOGARITHMIC impact" }
                ]
            },
            {
                "id": "deck-fitts-design",
                "type": "deck",
                "x": 0,
                "y": 0,
                "content": "Fitts' Law in Design",
                "cards": [
                    { "id": "card-fitts-implications", "front": "Design implications of Fitts' Law (Name 3)", "back": "1. Make targets LARGER - especially small targets\n2. Reduce DISTANCE to frequently used targets\n3. Edge and corner advantage: Effective width is 'almost infinite' at screen edges (cannot move mouse off screen)" },
                    { "id": "card-fitts-corners", "front": "Why are corners especially valuable in UI design?", "back": "Corners are infinitely large in TWO dimensions\n\nExamples:\n• Mac OS X: Apple menu in corner (optimal)\n• Windows: Start button in corner\n• Office: Office Button in upper-left corner" },
                    { "id": "card-fitts-pie-menu", "front": "Why are Pie Menus faster than linear menus?", "back": "All items equidistant from cursor\n\nFaster on average than traditional linear menus\n\nUsed in: The Sims, Rainbow Six, Maya" },
                    { "id": "card-fitts-toolbar", "front": "How to optimize a toolbar with Fitts' Law?", "back": "Line up all icons on left-hand edge of screen\n\nIcons can be activated up to last pixel on edge\n\nEffective width W becomes 'almost infinite'" }
                ]
            },
            {
                "id": "deck-fitts-uses",
                "type": "deck",
                "x": 500,
                "y": 0,
                "content": "Fitts' Law Applications",
                "cards": [
                    { "id": "card-fitts-2uses", "front": "Two main uses of Fitts' Law", "back": "1. Evaluate input devices: Compare throughput (IP) across devices, empirically find a and b parameters\n\n2. Optimize user interface: Adjust UI element parameters (size, position), design optimal keyboard layouts" },
                    { "id": "card-fitts-limitations", "front": "Limitations of Fitts' Law (What it DOES NOT do)", "back": "Does NOT:\n• Consider body asymmetries (right vs. left hand)\n• Address parallelization strategies (multiple fingers)\n• Include cognitive factors (reaction time, visual search, decision-making)\n\nDOES: Predict speed of rapid aimed movements for specific modality" }
                ]
            },
            {
                "id": "deck-visual-search",
                "type": "deck",
                "x": -1000,
                "y": 500,
                "content": "Visual Search",
                "cards": [
                    { "id": "card-search-problem", "front": "Basic problem of Visual Search", "back": "Humans need to decide where to look next\n\nTwo principles:\n1. Guided Search: Items given priorities based on rules\n2. Bounded Rationality: Selection based on expected utility under uncertainty" },
                    { "id": "card-guided-search", "front": "Guided Search Model Algorithm (5 steps)", "back": "1. Calculate Eccentricity: Distance to current fixation\n2. Determine Availability: Which items/features are visible\n3. Calculate Bottom-Up Saliency: Compare features to other items\n4. Calculate Top-Down Saliency: Compare to task-relevant features\n5. Sum Activations: Item with highest activation attended next" }
                ]
            },
            {
                "id": "deck-hci-applications",
                "type": "deck",
                "x": -500,
                "y": 500,
                "content": "HCI Applications",
                "cards": [
                    { "id": "card-aim", "front": "What is Aalto Interface Metrics (AIM)?", "back": "Oulasvirta et al., UIST 2018\n\nCombination of empirical models and metrics\nMeasures: saliency, color variability, clusters, complexity\n\nOnline web service for analyzing websites and visual designs" },
                    { "id": "card-visual-importance", "front": "Learning Visual Importance for Graphic Designs", "back": "Bylinskii et al., UIST 2017\n\nNeural networks trained on human clicks\nAnalyze visual importance based on saliency\n\nApplications: design retargeting, thumbnailing, predicting user focus" },
                    { "id": "card-selection-assistance", "front": "Selection Assistance for Digital Sketching", "back": "Lindlbauer et al., ACM ITS 2013\n\nGestalt principles + Feature Integration Theory\nGrouping based on pre-attentive features\nHierarchical clustering approach\n\nSuggests groupings in sketch interfaces" },
                    { "id": "card-restructuring-layouts", "front": "Restructuring Layouts with Visual Learning", "back": "Todi et al., ACM TIIS 2019\n\nAutomatically restructures webpage layouts based on users' visual history\nIndividualizes layouts for familiar users\n\nProcess: Collect history → Model results → Compute familiarization → Restructure layout" }
                ]
            }
        ],
        "edges": [],
        "cardLinks": [
            { "id": "link-perception-gestalt", "sourceDeckId": "deck-perception-basics", "sourceCardId": "card-change-blindness", "targetDeckId": "deck-gestalt", "targetCardId": "card-gestalt-core" },
            { "id": "link-gestalt-fit", "sourceDeckId": "deck-gestalt", "sourceCardId": "card-gestalt-laws", "targetDeckId": "deck-fit", "targetCardId": "card-fit-2stages" },
            { "id": "link-fit-plt", "sourceDeckId": "deck-fit", "sourceCardId": "card-fit-popout", "targetDeckId": "deck-perceptual-load", "targetCardId": "card-plt-findings" },
            { "id": "link-fit-saliency", "sourceDeckId": "deck-fit", "sourceCardId": "card-fit-2stages", "targetDeckId": "deck-visual-saliency", "targetCardId": "card-saliency-def" },
            { "id": "link-saliency-search", "sourceDeckId": "deck-visual-saliency", "sourceCardId": "card-saliency-def", "targetDeckId": "deck-visual-search", "targetCardId": "card-guided-search" },
            { "id": "link-fitts-design", "sourceDeckId": "deck-fitts-law", "sourceCardId": "card-fitts-insights", "targetDeckId": "deck-fitts-design", "targetCardId": "card-fitts-implications" },
            { "id": "link-design-uses", "sourceDeckId": "deck-fitts-design", "sourceCardId": "card-fitts-toolbar", "targetDeckId": "deck-fitts-uses", "targetCardId": "card-fitts-2uses" }
        ]
    },
    {
        "id": "hci-comp-design-modeling",
        "title": "5. Computational Design & User Modeling",
        "author": "You",
        "year": "2025",
        "nodes": [
            {
                "id": "deck-comp-design-basics",
                "type": "deck",
                "x": -900,
                "y": -500,
                "content": "Computational Design",
                "cards": [
                    { "id": "card-comp-design-def", "front": "What is Computational Design?", "back": "Using models and algorithms to design user interfaces\n\nModeling design tasks as combinatorial optimization problems\nIntegrating user models as cost/goodness functions in optimization" },
                    { "id": "card-moores-law", "front": "Moore's Law and its implications for HCI", "back": "Transistor counts double every two years\nComputational power grows exponentially\n\nHuman capabilities remain constant while computational power increases → enables computational design approaches" },
                    { "id": "card-design-optimization", "front": "Design as Optimization Problem: Key components", "back": "Design vector (x): Each dimension is a design variable\nFeasible designs (X): Set of all considered design vectors\nObjective function f(x): Evaluates quality of solutions" }
                ]
            },
            {
                "id": "deck-design-variables",
                "type": "deck",
                "x": -400,
                "y": -500,
                "content": "Design Variables & Problems",
                "cards": [
                    { "id": "card-variable-types", "front": "Types of Design Variables (Name 4)", "back": "• Boolean (e.g., show label or not)\n• Integer (e.g., color value, count)\n• Categorical (e.g., type of element)\n• Continuous (e.g., opacity)" },
                    { "id": "card-assignment-problem", "front": "What is an Assignment Problem?", "back": "Matching elements from Set A to Set B (e.g., menu items to menu slots)" },
                    { "id": "card-qap", "front": "Quadratic Assignment Problem (QAP)", "back": "Takes into account relationships between elements\nDecision cost is QUADRATIC in number of decisions\nNP-hard problem\n\nFormula: similarity between commands (s_ij) × distance between menu slots (d_kl)\n\nGoal: Place similar items close together" }
                ]
            },
            {
                "id": "deck-optimization-methods",
                "type": "deck",
                "x": 100,
                "y": -500,
                "content": "Optimization Methods",
                "cards": [
                    { "id": "card-math-methods", "front": "Mathematical/Exact Optimization Methods", "back": "• Linear or Mixed-Integer Programming\n• Branch and Bound\n\nAdvantages: Explicit bounds, guarantees on optimality, fast solvers (Gurobi, CPLEX)\nDisadvantages: Requires closed mathematical form, hard to formulate" },
                    { "id": "card-heuristic-methods", "front": "Heuristic Approximation Algorithms", "back": "• Simulated annealing\n• Genetic algorithms\n• Biology-inspired algorithms\n\nAdvantages: Programmatic description, flexible, standard implementations\nDisadvantages: No bounds or guarantees, many hyperparameters" }
                ]
            },
            {
                "id": "deck-objective-functions",
                "type": "deck",
                "x": -900,
                "y": 0,
                "content": "Objective Functions",
                "cards": [
                    { "id": "card-obj-sources", "front": "Sources of Objective Functions (Name 5)", "back": "• Mathematical models\n• Machine learning models\n• Simulation-based models\n• Look-up tables from empirical data\n• Heuristics, guidelines, best-practices" },
                    { "id": "card-reachability-time", "front": "Time of Reachability Formula", "back": "t_i = a + b log₂(2D_i/W_i + 1)\n\nD_i: distance to item\nW_i: width of item\n\nAverage time: T = Σ p_i × t_i (p_i = probability of item i)" },
                    { "id": "card-multi-objective", "front": "Multiple objectives in UI design (Name 4)", "back": "• Performance\n• Error probability\n• Learnability\n• Accessibility\n• Subjective experience\n• Ergonomic constraints\n• Fatigue likelihood\n• Mental workload" }
                ]
            },
            {
                "id": "deck-mhp",
                "type": "deck",
                "x": -400,
                "y": 0,
                "content": "Model Human Processor",
                "cards": [
                    { "id": "card-mhp-def", "front": "What is Model Human Processor (MHP)?", "back": "Developers: Card, Moran, Newell (1983)\n\nSees human as information processor\nProvides abstracted understanding of perception, memory, motor system\nCan estimate execution time, error rates, training effects" },
                    { "id": "card-mhp-3processors", "front": "3 Processors in MHP", "back": "1. Perceptual system (sensors, buffers)\n2. Cognitive system (working memory, symbolically coded content)\n3. Motor system (movements)\n\nOverall runtime = sum of all processor runtimes" },
                    { "id": "card-perceptual-time", "front": "Perceptual Processor timing", "back": "τ ≈ 100 ms [range: 50–200 ms]\n\nBloch's Law: R = I × t\nR is constant for t < 100 ms\n\nImplication: Minimum 10 Hz framerate for animations" },
                    { "id": "card-cognitive-time", "front": "Cognitive Processor timing and function", "back": "τ_C = 70 ms [range: 25–170 ms]\n\nFunctions:\n• Connects perceptual to motor system\n• Learning\n• Retrieval of facts\n• Decision making\n• Problem solving" }
                ]
            },
            {
                "id": "deck-memory-systems",
                "type": "deck",
                "x": 100,
                "y": 0,
                "content": "Memory Systems",
                "cards": [
                    { "id": "card-stm", "front": "Short-Term Memory (STM) / Working Memory", "back": "Capacity: 7 ± 2 units (augmented), 3 ± 1 units (pure)\n\nDecay:\nδ_WM(1 chunk) = 73 seconds\nδ_WM(3 chunks) = 7 seconds\n\nFunction: Holds intermediate products of thinking, perceptual representations, activated LTM items" },
                    { "id": "card-ltm", "front": "Long-Term Memory (LTM)", "back": "Types:\n• Declarative: Facts, knowledge, events\n• Procedural: Knowing how to do things\n\nCharacteristics:\n• Practically unlimited capacity\n• No decay time\n• Hard to organize for retrieval\n• Fast-read (~70 ms), Slow-write" },
                    { "id": "card-chunking", "front": "What is Chunking?", "back": "Grouping information into meaningful units\n\nExample: 446321111 vs 44 632 11 11\n\nHelps overcome STM capacity limitations" }
                ]
            },
            {
                "id": "deck-visual-system",
                "type": "deck",
                "x": -900,
                "y": 500,
                "content": "Visual System",
                "cards": [
                    { "id": "card-photoreceptors", "front": "Rods vs Cones", "back": "Rods (120M): Very light sensitive, slow, in periphery, scotopic vision, max 500nm\n\nCones (6M): Less light sensitive, fast, at fovea, photopic/color vision\n3 types: S (420nm blue), M (534nm green), L (564nm red)" },
                    { "id": "card-foveal-peripheral", "front": "Foveal vs Peripheral Vision", "back": "Foveal: Sharp vision within 2° radius, fine details\n\nPeripheral: Decreases with distance from fovea, sensitive to motion\n\nUseful field of view: 1°–4° (high density) to 15° max (low density)" },
                    { "id": "card-eye-movements", "front": "Saccades vs Fixations", "back": "Saccades: Repositioning of fovea, ~30ms duration, ≤600°/sec, decreased perception during movement\n\nFixations: Dwelling on point, 150–600ms, 90% of vision time\n\nReading: ~230ms fixation, ~30ms saccade, ~13 chars/saccade" }
                ]
            },
            {
                "id": "deck-design-implications",
                "type": "deck",
                "x": -400,
                "y": 500,
                "content": "Design Implications",
                "cards": [
                    { "id": "card-memory-design", "front": "Design implications from memory systems", "back": "• Group related functionalities activated together\n• Use familiar structures users already know\n• Recognition rather than recall: Show options rather than requiring recall" },
                    { "id": "card-foveated-rendering", "front": "What is Foveated Rendering?", "back": "Render high detail only in foveal region, lower detail in periphery\n\nBased on visual acuity characteristics" },
                    { "id": "card-inattentional-blindness", "front": "Inattentional Blindness implications for HCI", "back": "Human perception is much sparser than subjective experience\nPerception requires considerable resources\nAttention needed to see changes\n\nImplications:\n• Driving safety\n• UI notification placement/scheduling\n• Understanding distraction effects" }
                ]
            }
        ],
        "edges": [],
        "cardLinks": [
            { "id": "link-comp-vars", "sourceDeckId": "deck-comp-design-basics", "sourceCardId": "card-design-optimization", "targetDeckId": "deck-design-variables", "targetCardId": "card-variable-types" },
            { "id": "link-vars-opt", "sourceDeckId": "deck-design-variables", "sourceCardId": "card-qap", "targetDeckId": "deck-optimization-methods", "targetCardId": "card-math-methods" },
            { "id": "link-mhp-memory", "sourceDeckId": "deck-mhp", "sourceCardId": "card-mhp-3processors", "targetDeckId": "deck-memory-systems", "targetCardId": "card-stm" },
            { "id": "link-visual-design", "sourceDeckId": "deck-visual-system", "sourceCardId": "card-foveal-peripheral", "targetDeckId": "deck-design-implications", "targetCardId": "card-foveated-rendering" }
        ]
    },
    {
        "id": "hci-comp-rationality",
        "title": "8. Computational Rationality & ML in HCI",
        "author": "You",
        "year": "2025",
        "nodes": [
            {
                "id": "deck-comp-rat-basics",
                "type": "deck",
                "x": -900,
                "y": -500,
                "content": "Computational Rationality",
                "cards": [
                    { "id": "card-comp-rat-def", "front": "What is Computational Rationality?", "back": "Computational principles for identifying decisions with highest expected utility while considering computational costs in complex real-world problems\n\nGershman et al. 2015 (Science)" },
                    { "id": "card-comp-rat-formula", "front": "Computational Rationality Framework", "back": "Computational Rationality = Cognitive Architectures + Reinforcement Learning\n\nAgent acts in world via bounded cognition (internal environment)" }
                ]
            },
            {
                "id": "deck-rl-basics",
                "type": "deck",
                "x": -400,
                "y": -500,
                "content": "Reinforcement Learning",
                "cards": [
                    { "id": "card-rl-def", "front": "What is Reinforcement Learning (RL)?", "back": "Interdisciplinary area of ML and optimal control\nHow intelligent agent takes actions in dynamic environment to maximize cumulative reward\n\nSequential decision-making: State → Action → Reward cycle" },
                    { "id": "card-reward-hypothesis", "front": "Reward Hypothesis", "back": "All goals can be described by maximization of expected cumulative reward" },
                    { "id": "card-policy", "front": "What is a Policy (π) in RL?", "back": "Agent's decision-making model\nMapping from state to action to maximize expected cumulative reward" },
                    { "id": "card-value-function", "front": "Value Function Formula", "back": "V_π(s) = E_π[R_{t+1} + γR_{t+2} + γ²R_{t+3} + ... | s_t = s]\n\nPrediction of future reward\nEvaluates goodness/badness of states" }
                ]
            },
            {
                "id": "deck-mdp",
                "type": "deck",
                "x": 100,
                "y": -500,
                "content": "Markov Decision Process",
                "cards": [
                    { "id": "card-mdp-def", "front": "Markov Decision Process (MDP) Components", "back": "Mathematical framework for sequential decisions\nTuple {S, A, T, R, γ}\n\nS: Finite set of states\nA: Finite set of actions\nT: Transition Matrix p(s', a, s)\nR: Reward function R(s', a, s)\nγ: Discount factor ∈ [0,1)" },
                    { "id": "card-discount-factor", "front": "Purpose of Discount Factor (γ)", "back": "Handle infinite horizon problems\nPrioritize immediate rewards\n\nγ ∈ [0,1)" }
                ]
            },
            {
                "id": "deck-cognition-properties",
                "type": "deck",
                "x": -900,
                "y": 0,
                "content": "Human Cognition Properties",
                "cards": [
                    { "id": "card-goal-oriented", "front": "Goal-Oriented property of cognition", "back": "Cognitive control directs thinking and action toward goals:\n• Setting goals\n• Directing resources and attention\n• Multitasking, task-switching\n• Inhibiting distracting ideas" },
                    { "id": "card-limited-costs", "front": "Limited & Costs Energy property", "back": "• Visual attention spatially limited (foveal vs peripheral)\n• Working memory: 2-4 items simultaneously\n• Forgetting in long-term memory\n• Limited abstract reasoning and planning\n• Requires energy and effort" },
                    { "id": "card-adapts-learns", "front": "Adapts & Learns properties", "back": "Adapts: Constantly updating beliefs and plans\n\nLearns: Forms internal representations, uses external aids (notes, calculators), dependencies affect cognitive use" }
                ]
            },
            {
                "id": "deck-bounded-optimality",
                "type": "deck",
                "x": -400,
                "y": 0,
                "content": "Bounded Optimality",
                "cards": [
                    { "id": "card-bounded-opt", "front": "What is Bounded Optimality?", "back": "Combines RL with cognitive architectures\nAgent acts via bounded cognition\nInteraction emerges as adaptation within internal and external bounds" },
                    { "id": "card-standard-vs-comp", "front": "Standard RL vs Computational Rationality", "back": "Standard RL: Agent → External Environment → State/Reward/Action\n\nComputational Rationality: Agent → Internal Environment (cognitive processes, resources, physical limits) → External Environment → Stimuli/Response" },
                    { "id": "card-theoretical-commitments", "front": "4 Theoretical Commitments in HCI (Computational Rationality)", "back": "1. Agent faces stochastic sequential decision problem\n2. Agent acts in world via internal environment\n3. Bounds exist on information processing\n4. Agent is boundedly optimal" }
                ]
            },
            {
                "id": "deck-ml-applications",
                "type": "deck",
                "x": 100,
                "y": 0,
                "content": "ML Applications in HCI",
                "cards": [
                    { "id": "card-ml-hci-integration", "front": "How ML integrates with HCI", "back": "ML benefits HCI:\n• Advanced sensing\n• Pose estimation\n• Inference/RL\n• NLP\n\nHCI benefits ML:\n• Model exploration/visualization\n• Data collection\n• Explainable AI" },
                    { "id": "card-back-hand-pose", "front": "Back-Hand-Pose System (UIST 2020)", "back": "Wu et al.\n\n3D hand pose estimation using wrist-worn camera\nDorsalNet: Two-stream CNN architecture\nRegresses finger joint angles\nExtracts spatio-temporal features of dorsal hand region" }
                ]
            },
            {
                "id": "deck-cooperative-learning",
                "type": "deck",
                "x": -900,
                "y": 500,
                "content": "Cooperative Learning",
                "cards": [
                    { "id": "card-label-placement", "front": "MR Label Placement using Model-Free RL (Gebhardt et al., UIST 2019)", "back": "Learn to cooperate with human\nReplay human gaze behavior\n\nReward: r(s, a, s') = r_l - r_c\nr_l = 10 (label reward)\nr_c = 1 (clutter penalty)\n\nShow when user fixates: +10\nHide when not needed: +1" }
                ]
            },
            {
                "id": "deck-multi-objective-opt",
                "type": "deck",
                "x": -400,
                "y": 500,
                "content": "Multi-Objective Optimization",
                "cards": [
                    { "id": "card-pref-guided", "front": "Preference-Guided Multi-Objective UI Adaptation (Song et al., UIST 2025)", "back": "MR interface design with many objectives:\n• Visibility, spatial alignment, symmetry, semantic alignment\n\nApproach:\n1. Detect user manipulations\n2. Analyze objective functions\n3. Reduce noise (Triangular Moving Average)\n4. Assign priorities (high/mid/low)\n5. Select design closest to user-adjusted UI" }
                ]
            },
            {
                "id": "deck-real-world-complexity",
                "type": "deck",
                "x": 100,
                "y": 500,
                "content": "Real-World Complexities",
                "cards": [
                    { "id": "card-complexities", "front": "Complexities of Real-World Tasks (Name 4)", "back": "• Generalization: Previous episodes → unseen ones\n• Latent Learning: Adapt to distal changes\n• Planning: Sequence actions considering long-term effects\n• Compositionality: Combine partial solutions\n• Exploration/Exploitation trade-off\n• Uncertainty: Incomplete/incorrect knowledge\n• Resource Limitations\n• Curse of Dimensionality" }
                ]
            }
        ],
        "edges": [],
        "cardLinks": [
            { "id": "link-comprat-rl", "sourceDeckId": "deck-comp-rat-basics", "sourceCardId": "card-comp-rat-formula", "targetDeckId": "deck-rl-basics", "targetCardId": "card-rl-def" },
            { "id": "link-rl-mdp", "sourceDeckId": "deck-rl-basics", "sourceCardId": "card-value-function", "targetDeckId": "deck-mdp", "targetCardId": "card-mdp-def" },
            { "id": "link-comprat-bounded", "sourceDeckId": "deck-comp-rat-basics", "sourceCardId": "card-comp-rat-def", "targetDeckId": "deck-bounded-optimality", "targetCardId": "card-bounded-opt" },
            { "id": "link-rl-apps", "sourceDeckId": "deck-rl-basics", "sourceCardId": "card-policy", "targetDeckId": "deck-ml-applications", "targetCardId": "card-ml-hci-integration" }
        ]
    },
    {
        "id": "hci-cognition-experiments",
        "title": "3. Cognition in UX & Research Methods",
        "author": "You",
        "year": "2025",
        "nodes": [
            {
                "id": "deck-visual-perception",
                "type": "deck",
                "x": -900,
                "y": -700,
                "content": "Visual Perception",
                "cards": [
                    { "id": "card-info-proc", "front": "Human as Information Processor", "back": "Three stages:\n• Input: Perception (visual, auditory, haptic)\n• Processing: Cognition & Memory\n• Output: Motor System" },
                    { "id": "card-hsv", "front": "HSV Color Model", "back": "Creator: Alvy Smith (Co-founder of Pixar)\n\nHue: The actual color\nSaturation: Intensity\nValue: Brightness" },
                    { "id": "card-color-factors", "front": "5 Factors for Choosing Colors", "back": "1. Brand Identity\n2. Color Psychology\n3. Aesthetic and Readability\n4. Accessibility (color blindness)\n5. Context" },
                    { "id": "card-typography", "front": "Typography Elements Affecting Readability", "back": "• Type classification (serif, sans-serif)\n• Letter spacing\n• Line spacing\n• Paragraph spacing\n• Line length (40-60 chars optimal)\n• Type alignment" }
                ]
            },
            {
                "id": "deck-gestalt",
                "type": "deck",
                "x": -400,
                "y": -700,
                "content": "Gestalt Principles",
                "cards": [
                    { "id": "card-gestalt-def", "front": "Gestalt Psychology", "back": "\"The whole is something else than the sum of its parts\" (Koffka, 1935)\n\nFounded 1920s by Max Wertheimer\nFocus: Perception of groups, patterns, objects" },
                    { "id": "card-gestalt-8laws", "front": "8 Laws of Gestalt Grouping", "back": "1. Proximity\n2. Similarity\n3. Closure\n4. Symmetry\n5. Figure-Ground\n6. Common Fate\n7. Continuity\n8. Common Region" },
                    { "id": "card-proximity", "front": "Gestalt: Proximity", "back": "Objects close together belong to a group\n\nApplication: Group related form fields, navigation items" },
                    { "id": "card-similarity", "front": "Gestalt: Similarity", "back": "Objects with similar appearance belong together\n\nApplication: Consistent UI patterns for related elements" },
                    { "id": "card-common-region", "front": "Gestalt: Common Region", "back": "Elements in same closed region seen as related\n\nApplication: Visual containers, cards, sections" }
                ]
            },
            {
                "id": "deck-attention",
                "type": "deck",
                "x": 100,
                "y": -700,
                "content": "Attention & Hierarchy",
                "cards": [
                    { "id": "card-attention", "front": "Human Attention", "back": "Selectively concentrating on certain information while ignoring others\n\nLimited capacity\nCan be directed or captured\n\nImplication: Guide attention to important elements" },
                    { "id": "card-visual-hierarchy", "front": "Visual Hierarchy", "back": "Arrangement and presentation of elements to guide attention\n\nTechniques:\n• Size, color, contrast\n• Positioning\n• Whitespace" },
                    { "id": "card-nudging", "front": "Nudging in UX", "back": "Small, subtle design changes influencing behavior without restricting choices\n\nNon-coercive\nPreserves user autonomy\n\nExample: Default selections, visual emphasis" }
                ]
            },
            {
                "id": "deck-memory",
                "type": "deck",
                "x": -900,
                "y": -200,
                "content": "Memory Systems",
                "cards": [
                    { "id": "card-stm-wm", "front": "Short-Term Memory / Working Memory", "back": "Miller's Law: 7 ± 2 items\n\nTemporarily holds and processes limited information\n\nImplication: Minimize memory demands in interfaces" },
                    { "id": "card-chunking", "front": "Chunking", "back": "Grouping individual pieces into larger meaningful units\n\nMiller: 7 individual words OR 7 individual letters\n\nApplication: Group related info (123-456-7890)" },
                    { "id": "card-cognitive-load", "front": "3 Types of Cognitive Load", "back": "1. Intrinsic: Complexity of new information\n2. Extraneous: Unnecessary/distracting info\n3. Germane: Linking new with current info\n\nGoal: Minimize extraneous load" },
                    { "id": "card-hicks-law", "front": "Hick's Law", "back": "Decision time increases with number and complexity of choices\n\nT ∝ log₂(n+1)\n\nImplication: Limit options in menus" },
                    { "id": "card-progressive", "front": "Progressive Disclosure", "back": "Defer advanced/rarely used features to secondary screen\n\nReduces cognitive load\nMaintains access to advanced features" },
                    { "id": "card-ltm", "front": "Long-Term Memory", "back": "Network of related chunks accessed associatively\n\nLarge capacity, persistent\nSubject to interference\n\nTypes:\n• Declarative (facts, knowledge)\n• Procedural (how to do things)" },
                    { "id": "card-forgetting", "front": "Ebbinghaus's Forgetting Curve", "back": "Memory retention drops rapidly, then levels off\n\nSolution: Spaced Repetition\n\nUX: Don't assume users remember previous interactions" },
                    { "id": "card-recognition-recall", "front": "Recognition vs Recall", "back": "Recognition: Identify previously encountered info\nRecall: Retrieve info without cues\n\nNielsen: Minimize memory load by making objects, actions, options visible\n\nDesign: Use menus (recognition) vs command lines (recall)" }
                ]
            },
            {
                "id": "deck-mental-models",
                "type": "deck",
                "x": -400,
                "y": -200,
                "content": "Mental Models",
                "cards": [
                    { "id": "card-mental-model", "front": "Mental Models", "back": "Internal representations users have about how system works\n\nSource: Don Norman \"Design of Everyday Things\"\n\nGoal: Align system image with users' mental models" },
                    { "id": "card-gulf-exec", "front": "Gulf of Execution", "back": "Gap between user's goal and actions required to achieve it\n\nQuestion: \"How do I use the system?\"\n\nBridge: Clear affordances, intuitive controls, visible actions" },
                    { "id": "card-gulf-eval", "front": "Gulf of Evaluation", "back": "Gap between system's state and user's understanding of that state\n\nQuestion: \"What is current system state?\"\n\nBridge: Clear feedback, system status visibility, progress indicators" },
                    { "id": "card-curse-knowledge", "front": "Curse of Knowledge", "back": "Incorrectly assuming everyone knows as much as we do\n\nRelevance: Designers create interfaces that confuse users\n\nMitigation: User testing, cognitive walkthroughs" },
                    { "id": "card-affordance", "front": "Affordance", "back": "Perceived and actual properties determining how object could be used\n\nTypes:\n• Actual: What object can actually do\n• Perceived: What users think it can do\n\nGoal: Match perceived with actual affordances" },
                    { "id": "card-signifiers", "front": "Signifiers", "back": "Visual cues indicating how to interact\n\nCommunicate affordances to users\n\nExample: Blue, underlined text = hyperlink" },
                    { "id": "card-slips-mistakes", "front": "Slips vs Mistakes", "back": "Slips: Right intent, wrong action (execution errors)\n• Common in experts, caused by inattention\n\nMistakes: Wrong intent (planning errors)\n• Caused by mismatched mental models" },
                    { "id": "card-error-prevent", "front": "Error Prevention Strategies", "back": "Prevent Mistakes:\n• Understand users' mental models\n• Communicate affordances clearly\n\nPrevent Slips:\n• Provide constraints, good defaults\n• Support undo\n• Warn before errors\n• Confirm destructive actions" }
                ]
            },
            {
                "id": "deck-research-methods",
                "type": "deck",
                "x": 100,
                "y": -200,
                "content": "Research Methods",
                "cards": [
                    { "id": "card-obs-vs-exp", "front": "Observational Study vs Experiment", "back": "Observational:\n• Observe without intervening\n• Correlation only, NOT causation\n\nExperiment:\n• Manipulate variables and measure effect\n• Random assignment\n• Can test causal relationships" },
                    { "id": "card-variable-types", "front": "3 Types of Variables", "back": "1. Categorical/Nominal: Unordered discrete (program of study)\n2. Ordinal: Ordered discrete (grade 1-6)\n3. Cardinal/Interval: Continuous (study hours per week)" },
                    { "id": "card-iv-dv", "front": "Independent vs Dependent Variables", "back": "Independent Variable (IV):\n• What researchers manipulate\n• Also called \"factors\"\n• Has different levels/conditions\n\nDependent Variable (DV):\n• What is measured\n• The outcome variable" }
                ]
            },
            {
                "id": "deck-validity",
                "type": "deck",
                "x": -900,
                "y": 300,
                "content": "Validity & Variables",
                "cards": [
                    { "id": "card-control-vars", "front": "Control Variables", "back": "Variables held constant across all conditions\n\nPurpose: Eliminate as potential explanations\n\nExample: Programming environment, IDE" },
                    { "id": "card-random-vars", "front": "Random Variables", "back": "Random noise unrelated to manipulation\n\nUnpredictable fluctuations\nAdds variance but not bias\n\nExample: Momentary attention level" },
                    { "id": "card-confounds", "front": "Confound Variables", "back": "Variables creating systematic bias related to manipulation\n\nDanger: Alternative explanations for effects\n\nExample: Prior debugging experience differing between groups\n\nThreat to internal validity" },
                    { "id": "card-internal-validity", "front": "Internal Validity", "back": "Did the IV really cause the change in DV?\n\nThreats: Confounds, inconsistent procedures, selection bias\n\nPrevention: Standardization, randomization, blinding" },
                    { "id": "card-external-validity", "front": "External Validity", "back": "Do results generalize beyond specific participants, tasks, and setting?\n\nThreats: Narrow participant pool, artificial tasks, lab settings\n\nTrade-off: Often tension with internal validity" }
                ]
            },
            {
                "id": "deck-experimental-design",
                "type": "deck",
                "x": -400,
                "y": 300,
                "content": "Experimental Design",
                "cards": [
                    { "id": "card-between", "front": "Between-Subject Design", "back": "Each participant experiences ONE condition\n\nAdvantages:\n• No learning/practice effects\n• No fatigue\n• Shorter sessions\n\nDisadvantages:\n• Requires more participants\n• Individual differences between groups" },
                    { "id": "card-within", "front": "Within-Subject Design", "back": "Same participants in ALL conditions\n\nAdvantages:\n• Fewer participants\n• Controls individual differences\n• More statistical power\n\nDisadvantages:\n• Learning/practice effects\n• Fatigue effects\n• Order effects" },
                    { "id": "card-mixed", "front": "Mixed Factorial Design", "back": "Combining between-subject and within-subject factors\n\nExample:\n• Between: AI assistance (AI vs Manual)\n• Within: Task complexity (Simple vs Complex)\n\nNotation: 2(between) × 2(within)" },
                    { "id": "card-order-effects", "front": "Order Effects", "back": "Performance changes due to sequence of conditions\n\nTypes:\n• Learning/Practice: Improvement over time\n• Fatigue: Decline over time\n• Carryover: Effects from one influence next\n\nSolution: Counterbalancing" },
                    { "id": "card-latin-square", "front": "Latin Square Design", "back": "Counterbalancing method where each condition appears once in each position\n\nExample (2×2):\n• Group 1: Simple → Complex\n• Group 2: Complex → Simple" }
                ]
            },
            {
                "id": "deck-ethics",
                "type": "deck",
                "x": 100,
                "y": 300,
                "content": "Ethics & Best Practices",
                "cards": [
                    { "id": "card-ethics", "front": "Research Ethics Principles", "back": "• Respect participants' rights\n• Informed consent before study\n• Collect only necessary data\n• Anonymize data\n• Be transparent about purpose\n• Allow withdrawal without penalty" },
                    { "id": "card-consent", "front": "Informed Consent Must Include", "back": "• Study purpose and procedures\n• Time commitment\n• Potential risks and benefits\n• Data handling and privacy\n• Right to withdraw\n• Contact information\n\nMust be obtained BEFORE study" },
                    { "id": "card-pre-study", "front": "Before the Study Checklist", "back": "• Pilot everything\n• Keep design simple\n• Automate data logging\n• Predefine exclusion criteria\n• Clear naming conventions\n• Sessions < 45-60 min\n• Fair compensation" },
                    { "id": "card-during-study", "front": "During the Study Checklist", "back": "• Obtain informed consent\n• Standardize script\n• Avoid experimenter effects\n• Check technical setup\n• Monitor environmental factors\n• Take notes on unusual occurrences" },
                    { "id": "card-experimenter-effects", "front": "Experimenter Effects", "back": "Unintended researcher influence on participants\n\nExamples:\n• Different tone between conditions\n• Unconscious cues about expected results\n• Inconsistent instructions\n\nPrevention: Standardized scripts, blinding, consistent demeanor" }
                ]
            }
        ],
        "edges": [],
        "cardLinks": [
            { "id": "link-vis-gestalt", "sourceDeckId": "deck-visual-perception", "sourceCardId": "card-color-factors", "targetDeckId": "deck-gestalt", "targetCardId": "card-gestalt-def" },
            { "id": "link-gestalt-att", "sourceDeckId": "deck-gestalt", "sourceCardId": "card-common-region", "targetDeckId": "deck-attention", "targetCardId": "card-visual-hierarchy" },
            { "id": "link-mem-mental", "sourceDeckId": "deck-memory", "sourceCardId": "card-recognition-recall", "targetDeckId": "deck-mental-models", "targetCardId": "card-mental-model" },
            { "id": "link-research-validity", "sourceDeckId": "deck-research-methods", "sourceCardId": "card-obs-vs-exp", "targetDeckId": "deck-validity", "targetCardId": "card-internal-validity" },
            { "id": "link-validity-design", "sourceDeckId": "deck-validity", "sourceCardId": "card-confounds", "targetDeckId": "deck-experimental-design", "targetCardId": "card-between" }
        ]
    },
    {
        "id": "hci-input-optimization",
        "title": "7. Input Decoding & Optimization",
        "author": "You",
        "year": "2025",
        "nodes": [
            {
                "id": "deck-input-basics",
                "type": "deck",
                "x": -900,
                "y": -700,
                "content": "Input Decoding Basics",
                "cards": [
                    { "id": "card-input-decoding", "front": "What is Input Decoding?", "back": "Process of interpreting sensor signals to infer user intentions when direct 1:1 mapping isn't available\n\nTypes:\n• Explicit (1:1)\n• Semi-explicit (~9:1)\n• Inferred (fully probabilistic)" },
                    { "id": "card-bayesian-formula", "front": "Bayesian Input Decoding Formula", "back": "ŷ = argmax_y [P(x|y) · P(y)]\n\nP(x|y) = Likelihood model\nP(y) = Prior model (language model)\n\nMaximize posterior to find most likely message" },
                    { "id": "card-sequence-decode", "front": "Sequential Input Decoding Formula", "back": "argmax_yl ∏(i=1 to l) p(x_i|y_i)p(y_i|y_{i-1})\n\np(x_i|y_i) = sensor observation\np(y_i|y_{i-1}) = language model (n-gram)\n\nApplication: Touch typing, gesture sequences" },
                    { "id": "card-hmm", "front": "HMM for Input Decoding", "back": "Hidden states: typed characters\nObservations: sensor signals\nTransitions: tapping fingers\n\nGoal: Estimate most likely character sequence\n\nApplications: TapType, egocentric input" }
                ]
            },
            {
                "id": "deck-egocentric-input",
                "type": "deck",
                "x": -400,
                "y": -700,
                "content": "Egocentric Input",
                "cards": [
                    { "id": "card-ego-challenges", "front": "Egocentric Input Challenges", "back": "Decoding from first-person perspective in AR/VR\n\nChallenges:\n1. Tracking inaccuracy\n2. Reduced visibility (self-occlusion)\n3. Quick input motions\n\nError sources: User error + Sensing error" },
                    { "id": "card-error-aware", "front": "Error-Aware Probabilistic Decoding Formula", "back": "argmax_{y1...yn} ∏ p(y_i|y_1,...,y_{i-1}) ∫ p(x_i|H_i)p(x_i|y_i) dx_i\n\np(y_i|...) = language model\np(x_i|H_i) = sensing error awareness\np(x_i|y_i) = user error awareness\n\nIntegrates both uncertainties" },
                    { "id": "card-tapid", "front": "TapID System", "back": "Detect finger taps using wrist-worn IMU sensors\n\nPrinciple: Mechanical tap → body-coupled vibrations\n\nFormula: RCS_t = RCS_{t-1}/1.6 + Σ(Σx²_t - Σx²_{t-1})\n\nPipeline:\n1. Sensor fusion (RCS)\n2. Contact detection\n3. Contact classification\n\nF1 = 0.87 (SD = 0.09)" },
                    { "id": "card-taptype", "front": "TapType System", "back": "Ten-finger text entry on flat surfaces using wrist-worn IMUs + language model\n\nComponents:\n1. Event detection (RCS)\n2. Bayesian neural network (finger classification)\n3. N-gram language model\n\nPerformance: >30 WPM experienced, 19.2 WPM average (0.6% error)" },
                    { "id": "card-bayesian-nn", "front": "Bayesian Neural Networks for Classification", "back": "Provide uncertainty estimates for predictions\n\nUncertainty types:\n• Epistemic: Insufficient training data\n• Aleatoric: Inherent noise/ambiguity\n\nVariants: no-Bayes, 1-Bayes, 2-Bayes, all-Bayes\n\nBenefit: Better calibrated probabilities (lower ECE, NLL)" }
                ]
            },
            {
                "id": "deck-input-devices",
                "type": "deck",
                "x": 100,
                "y": -700,
                "content": "Input Devices",
                "cards": [
                    { "id": "card-fitts-2d", "front": "Fitts' Law in 2D", "back": "Problem: How to define target width W for 2D rectangular targets?\n\nVariant 1: W' = length of path inside rectangle\nVariant 2: W = min(W, H)\n\nFinding: Both more suitable than W alone\n\nSource: MacKenzie & Buxton 1992" },
                    { "id": "card-device-def", "front": "Input Device Definition (Card et al.)", "back": "Transducer from physical properties of world into logical values of application\n\nPerformance depends on:\n1. Human: muscle group bandwidth\n2. Device: effective bandwidth\n3. Application: precision requirements" },
                    { "id": "card-device-props", "front": "Input Device Properties (Name 5)", "back": "1. Direct vs Indirect\n2. Absolute vs Relative\n3. Position vs Rate Control\n4. Degrees of Freedom (2D, 3D, 6DoF)\n5. Isotonic/Elastic/Isometric" },
                    { "id": "card-device-model", "front": "Six-Tuple Device Model (Card et al.)", "back": "(M, In, S, R, Out, W)\n\nM = Manipulation operator\nIn = Input domain\nS = Device state\nR = Resolution/mapping\nOut = Output domain\nW = Working aspects\n\nPurpose: Systematic device comparison" },
                    { "id": "card-composition", "front": "Device Composition Operators (Name 3)", "back": "1. Merge: Combine signals into one input (X-Y mouse → 2D)\n2. Layout: Independent parallel inputs (buttons, wheels)\n3. Connect: Output of one → input of another (mouse → cursor)" }
                ]
            },
            {
                "id": "deck-goms-klm",
                "type": "deck",
                "x": -900,
                "y": -200,
                "content": "GOMS & KLM",
                "cards": [
                    { "id": "card-analytical", "front": "Analytical Investigation", "back": "Evaluation based on inherent design attributes\n\nPerformed by: Usability experts\n\nTwo methods:\n1. Qualitative: Heuristic evaluation, walkthroughs\n2. Quantitative: Predictive models (GOMS, KLM)" },
                    { "id": "card-predictive", "front": "Predictive User Performance Models", "back": "Evaluate designs without user involvement\n\nMethod: Use formulas to derive performance measures\n\nLimitations:\n• Only high-level tasks with routine low-level operations\n• Only predictable/expert behavior\n• Cannot model multi-tasking, fatigue, learning, user differences" },
                    { "id": "card-goms", "front": "GOMS Model", "back": "Goals, Operators, Methods, Selection Rules\n\nGoals: State user wants to achieve\nOperators: Cognitive processes + physical actions\nMethods: Procedures for accomplishing goals\nSelection Rules: Decide which method when multiple available" },
                    { "id": "card-klm", "front": "Keystroke-Level Model (KLM)", "back": "Simplest GOMS technique predicting execution time\n\nMethod:\n1. List sequence of low-level actions\n2. Sum fixed times for each operator\n\nRequires: Single specified method (no branches)\n\nSource: Card, Moran & Newell 1983" },
                    { "id": "card-klm-ops", "front": "KLM Operator Times", "back": "K (Keystroke): 0.22s\nP (Point): 1.10s\nH (Home): 0.40s\nM (Mental): 1.35s\nB (Button): 0.10s (press), 0.20s (click)\n\nT_execute = Σ operator_times" }
                ]
            },
            {
                "id": "deck-optimization-basics",
                "type": "deck",
                "x": -400,
                "y": -200,
                "content": "Optimization Fundamentals",
                "cards": [
                    { "id": "card-design-search", "front": "Design as Search", "back": "View: Design as searching through possibilities\n\nComponents:\n• Design space: All possible variable combinations\n• Objective function: Scores each solution\n• Constraints: Feasibility requirements\n\nGoal: Find best combination for objectives" },
                    { "id": "card-design-space", "front": "Design Space & Variable Types", "back": "Combination of all design variables\n\nTypes:\n• Boolean: Show element? (true/false)\n• Integer: Color values, counts\n• Categorical: Element type\n• Continuous: Opacity, position\n\nIssue: Not all combinations feasible" },
                    { "id": "card-objective", "front": "Objective Function Sources (Name 5)", "back": "1. Mathematical models\n2. Machine learning models\n3. Simulation-based models\n4. Look-up tables from empirical data\n5. Heuristics and guidelines\n\nChallenge: Most difficult but critical!" },
                    { "id": "card-opt-problem", "front": "Optimization Problem Structure", "back": "Three elements:\n1. Decision variables: What can be changed\n2. Objective function: What to optimize\n3. Constraints: What must be satisfied\n\nGoal: min/max f(x) subject to constraints" },
                    { "id": "card-exact-heuristic", "front": "Exact vs Heuristic Methods", "back": "Exact (ILP, Branch & Bound):\n✅ Optimality guarantees, fast solvers\n❌ Need closed mathematical form\n\nHeuristic (SA, GA, Tabu):\n✅ Flexible, programmatic description\n❌ No guarantees, many hyperparameters" }
                ]
            },
            {
                "id": "deck-tabu-search",
                "type": "deck",
                "x": 100,
                "y": -200,
                "content": "Tabu Search",
                "cards": [
                    { "id": "card-local-optima", "front": "Local Optima Problem", "back": "Issue: Local search gets stuck at local optima\n\nNeighborhood: N(S) = solutions reachable by small modification\n\nProblem: Best neighbor may be worse than distant global optimum\n\nSolution: Metaheuristics to escape" },
                    { "id": "card-metaheuristics", "front": "Metaheuristics", "back": "High-level strategy to overcome local optima\n\nGuide how to change local search heuristic\n\nExamples:\n• Tabu search\n• Simulated annealing\n• Genetic algorithms" },
                    { "id": "card-tabu", "front": "Tabu Search Basic Principle", "back": "Inventor: Glover 1986\n\nCore idea: Store tabu list of last t solutions; cannot revisit\n\nAlgorithm:\n1. Store tabu list\n2. Local search excluding tabu solutions\n3. If local min found, proceed with next best NOT in tabu\n4. Add new solution to tabu\n5. Return best found\n\nForces exploration by preventing backtracking" },
                    { "id": "card-tabu-components", "front": "Tabu Search Main Components", "back": "Three key decisions:\n1. Neighborhood N(S): How to define\n2. Tabu list length: How many to remember\n3. Stopping rule: Total iterations or iterations without improvement\n\nTrade-off: Longer list → more exploration but slower" }
                ]
            },
            {
                "id": "deck-sim-annealing",
                "type": "deck",
                "x": -900,
                "y": 300,
                "content": "Simulated Annealing",
                "cards": [
                    { "id": "card-sa-idea", "front": "Simulated Annealing Core Idea", "back": "Inspiration: Metallurgy (heat metal, cool slowly)\n\nKey: Allow worse steps at high temperature to escape local minima\n\nAccept worse solution with probability:\np = e^(-d/T)\n\nd = f(S*) - f(S) (quality difference)\nT = current temperature\n\nSource: Kirkpatrick et al. 1983" },
                    { "id": "card-sa-algo", "front": "Simulated Annealing Algorithm", "back": "1. Start: random solution S, initial temp T₀, cooling α\n2. For L iterations:\n   a. Choose random neighbor S*\n   b. Calculate d = f(S*) - f(S)\n   c. If d < 0: accept S*\n   d. Else: accept with probability p = e^(-d/T)\n3. Reduce temp: T = αT\n4. Repeat step 2\n5. Return best found" },
                    { "id": "card-sa-prob", "front": "SA Acceptance Probability Behavior", "back": "p = e^(-d/T)\n\nBehavior:\n• Large d (much worse) → smaller p\n• Small T (cool) → smaller p\n• Small d (slightly worse) → larger p\n• Large T (hot) → larger p\n\nProbability decreases as temperature cools" },
                    { "id": "card-sa-schedule", "front": "Temperature Annealing Schedules", "back": "Basic: T_j = αT_k where α ≈ 0.95\n\nAlternative: T_j = 1/(1 + e^(error_j)) · T_0 · α^j\n\nα close to 1 → slow cooling → more exploration\nα far from 1 → fast cooling → quick convergence" },
                    { "id": "card-sa-components", "front": "Simulated Annealing Configuration", "back": "Key parameters:\n1. N(S): Neighborhood definition\n2. T: Initial temperature\n3. α: Cooling ratio\n4. L: Max iterations per temperature\n5. Stopping rule: Total iterations, iterations without improvement, T < ε" },
                    { "id": "card-flare", "front": "FLARE - SA Application", "back": "Fast Layout for Augmented Reality (Gal et al., ISMAR 2014)\n\nMethod: Simulated Annealing for AR app layout\n\nDesigner specifies: Position type, rotation, scale\n\nChallenge: Highly constrained, discontinuous, rugged search space\n\nSolution: Random walk with stochastic moves" }
                ]
            },
            {
                "id": "deck-genetic-algos",
                "type": "deck",
                "x": -400,
                "y": 300,
                "content": "Genetic Algorithms",
                "cards": [
                    { "id": "card-ea-idea", "front": "Evolutionary Algorithms Core Idea", "back": "Inspiration: Natural evolution - survival of fittest\n\nKeep population of candidate designs, improve through evolution\n\nProcess:\n• Start with set of solutions\n• Each iteration = generation\n• Create new population by combining best\n\nKey difference: Population-based (not single solution)" },
                    { "id": "card-ga-steps", "front": "Genetic Algorithm Basic Steps", "back": "1. Start with random population\n2. Evaluate fitness f(S)\n3. Repeat:\n   a. Select pair based on fitness\n   b. With p_c: crossover to form offspring (else copy)\n   c. With p_m: mutate offspring\n4. Repeat from step 2\n5. Return best found" },
                    { "id": "card-ga-components", "front": "Genetic Algorithm Configuration", "back": "Key components:\n1. Population size & termination\n2. Fitness evaluation f(S)\n3. Parent selection: probability ∝ fitness\n4. Crossover: combine parents at random point\n5. Mutation: random modifications (swap elements)" },
                    { "id": "card-crossover", "front": "GA Crossover Operation", "back": "Combine genetic material from parents\n\nMethod:\n• Choose random point k\n• Parent 1: [a₁...aₖ | aₖ₊₁...aₙ]\n• Parent 2: [b₁...bₖ | bₖ₊₁...bₙ]\n• Child 1: [a₁...aₖ | bₖ₊₁...bₙ]\n• Child 2: [b₁...bₖ | aₖ₊₁...aₙ]\n\nProbability: p_c (0.6-0.9)" },
                    { "id": "card-mutation", "front": "GA Mutation Operation", "back": "Introduce random variations (maintain diversity)\n\nMethods:\n• Swap elements\n• Flip bits\n• Random value change\n\nProbability: p_m (0.01-0.1, low)\n\nImportance: Prevents premature convergence" },
                    { "id": "card-ga-ui", "front": "Why GAs for UI Design?", "back": "Suitability:\n1. Multiple conflicting objectives (Pareto set)\n2. Non-linear, mixed search space\n3. Diverse solutions needed\n4. Can escape deep local optima\n5. Good for discrete structures\n\nKey: Large coordinated changes that local search cannot make" }
                ]
            },
            {
                "id": "deck-opt-comparison",
                "type": "deck",
                "x": 100,
                "y": 300,
                "content": "Optimization Principles",
                "cards": [
                    { "id": "card-communication", "front": "Good Heuristic: Communication", "back": "Neighborhood should allow reaching any optimal solution\n\nWeaker: Should reach an optimum (even if local)\n\nExample: For keyboard, swapping any two keys should be in neighborhood" },
                    { "id": "card-diversification", "front": "Diversification", "back": "Ability to explore broadly across search space\n\nMethods:\n• High initial temperature (SA)\n• Large tabu list\n• Large population (GA)\n• Random restarts\n\nAvoid premature convergence" },
                    { "id": "card-intensification", "front": "Intensification", "back": "Ability to exploit good solutions thoroughly\n\nMethods:\n• Use bigger N(S) when S is good\n• Lower temperature (SA)\n• Elitism (GA - preserve best)\n\nBalance: Need both diversification AND intensification" },
                    { "id": "card-when-use", "front": "When to Use Each Method?", "back": "Tabu Search: Fast local improvement, symmetric problems (menu items)\n\nSimulated Annealing: Highly constrained, discontinuous spaces (AR layout)\n\nGenetic Algorithms: Multiple objectives, combinatorial explosions (dashboard design)" }
                ]
            }
        ],
        "edges": [],
        "cardLinks": [
            { "id": "link-input-ego", "sourceDeckId": "deck-input-basics", "sourceCardId": "card-bayesian-formula", "targetDeckId": "deck-egocentric-input", "targetCardId": "card-error-aware" },
            { "id": "link-goms-opt", "sourceDeckId": "deck-goms-klm", "sourceCardId": "card-klm-ops", "targetDeckId": "deck-optimization-basics", "targetCardId": "card-objective" },
            { "id": "link-opt-tabu", "sourceDeckId": "deck-optimization-basics", "sourceCardId": "card-exact-heuristic", "targetDeckId": "deck-tabu-search", "targetCardId": "card-metaheuristics" },
            { "id": "link-tabu-sa", "sourceDeckId": "deck-tabu-search", "sourceCardId": "card-metaheuristics", "targetDeckId": "deck-sim-annealing", "targetCardId": "card-sa-idea" },
            { "id": "link-sa-ga", "sourceDeckId": "deck-sim-annealing", "sourceCardId": "card-sa-components", "targetDeckId": "deck-genetic-algos", "targetCardId": "card-ea-idea" }
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
