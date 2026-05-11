/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Gamepad, 
  MessageSquare, 
  Smartphone, 
  Sparkles, 
  Users, 
  GraduationCap, 
  ShieldAlert, 
  Camera, 
  TrendingDown, 
  Moon,
  Zap,
  UserCheck,
  Heart,
  EyeOff,
  Clock,
  Briefcase,
  Wallet,
  Coffee,
  Brain,
  Search,
  Wind,
  ShieldCheck,
  Target,
  Smile,
  Trophy,
  HelpCircle,
  Lightbulb,
  Flame,
  Globe
} from 'lucide-react';

export interface Choice {
  id: string;
  text: string;
  feedback: string;
}

export interface MicroWin {
  id: string;
  text: string;
}

export interface Episode {
  id: string;
  title: string;
  ageGroups: ('tweens' | 'gen-z' | 'young-adults')[];
  scenario: string;
  question: string;
  choices: Choice[];
  microWins: MicroWin[];
  lesson: string;
  reflectionQuestions: string[];
  icon: string;
  courageLooksLike?: string;
  bodyCheckIn?: string;
  socialScripts?: string[];
  perspectiveShift?: string;
  miniChallenge?: string;
  emergencyReassurance?: string;
}

export const EPISODES: Episode[] = [
  // --- TWEENS (10-14) ---
  {
    id: "tw-anxiety-tools",
    title: "Mastering the Worry Waves",
    ageGroups: ["tweens"],
    scenario: "You have a big test coming up, and your stomach feels like it's full of buzzing bees. Your thoughts are racing, and you feel like something bad is about to happen, even though everything is okay physically.",
    question: "When the 'Worry Bees' start buzzing, what's your first move?",
    choices: [
      { id: "A", text: "Try to ignore it and watch TV.", feedback: "Ignoring anxiety is like trying to hold a beach ball underwater—it eventually pops up harder. We need a way to let the air out of the ball safely." },
      { id: "B", text: "The '5-4-3-2-1' Grounding Technique.", feedback: "Excellent. This pulls your brain out of 'Future Fear' and back into 'Present Safety' by focusing on your five senses." },
      { id: "C", text: "Tell yourself 'Stop being silly!'", feedback: "Being mean to yourself increases stress. Your feelings aren't silly; they are just your brain's alarm system being a little too sensitive." }
    ],
    microWins: [
      { id: "1", text: "Practice 'Box Breathing' (4 in, 4 hold, 4 out, 4 hold) for 2 minutes." },
      { id: "2", text: "Name your worry (e.g., 'That's just Worry-Walter being loud again')." },
      { id: "3", text: "Hold an ice cube in your hand to snap your focus back to now." }
    ],
    lesson: "Anxiety is an alarm system, not a fortune teller. It indicates you care, but it doesn't always tell the truth about the future. You can observe the wave without being swept away by it.",
    reflectionQuestions: [
      "Where in your body do you feel worry first? (Stomach? Shoulders? Head?)",
      "If your worry was a cartoon character, what would it look like?",
      "What is one true thing you can say to yourself to feel safe right now?"
    ],
    icon: "Wind"
  },
  {
    id: "tw-game-overload",
    title: "The Digital Hangover",
    ageGroups: ["tweens"],
    scenario: "You've been playing your favorite game for 4 hours. Your parents call you for dinner, but you're mid-match. When you finally log off, you feel angry, 'fuzzy' in the head, and snappy.",
    question: "How do you handle the 'post-game' grumpiness?",
    choices: [
      { id: "A", text: "Yell 'one minute' and keep playing.", feedback: "The 'one minute' usually turns into twenty, creating conflict and keeping your brain in a high-stress state." },
      { id: "B", text: "Pause immediately, stretch, and drink water.", feedback: "Perfect. Physical movement and hydration reset your 'gamer brain' and help you transition back to reality." },
      { id: "C", text: "Log off but spend dinner thinking about the game.", feedback: "Mentally staying in the game prevents you from resting. Try to find a 'real world' anchor like a conversation." }
    ],
    microWins: [
      { id: "1", text: "Set a 1-hour 'stop' timer before you start playing." },
      { id: "2", text: "Drink a full glass of water immediately after logging off." },
      { id: "3", text: "Do 10 jumping jacks to wake up your 'real life' body." }
    ],
    lesson: "High-intensity gaming floods your brain with excitement. When you stop, your brain needs to re-calibrate. Physical transitions are the bridge back to a calm mood.",
    reflectionQuestions: [
      "How does your body feel different after 30 minutes vs 3 hours of gaming?",
      "What is your favorite way to 'unplug' after a long session?",
      "How can you explain this 'fuzzy feeling' to your parents so they understand you're just transitiong?"
    ],
    icon: "Gamepad"
  },
  {
    id: "tw-group-chat-heat",
    title: "Group Chat Chaos",
    ageGroups: ["tweens"],
    scenario: "The class group chat is exploding. Two friends are fighting, and everyone is taking sides. Every 'ping' gives you a knot in your stomach, but you feel like you HAVE to watch.",
    question: "What's the best way to handle 'chat heat'?",
    choices: [
      { id: "A", text: "Pick a side so you don't look 'scared'.", feedback: "Taking sides in common areas usually adds fuel to the fire and rarely solves the actual problem." },
      { id: "B", text: "Mute the chat and check back in an hour.", feedback: "Yes! Muting gives you space to breathe. You don't have to be available for drama 24/7. Space creates clarity." },
      { id: "C", text: "Type 'Stop fighting!' in all caps.", feedback: "Well-meaning, but caps-lock feels like yelling and often makes people more defensive." }
    ],
    microWins: [
      { id: "1", text: "Mute' one noisy or stressful group chat today." },
      { id: "2", text: "Leave your phone in another room for 30 minutes of deep focus." },
      { id: "3", text: "Message one of the parties privately just to say 'Hi' or check-in." }
    ],
    lesson: "Group chats create a false sense of urgency. Muting isn't being mean; it's protecting your mental bandwidth so you can choose when to engage.",
    reflectionQuestions: [
      "Does this group chat make you feel more or less connected to your friends?",
      "Why does it feel so hard to just 'close the app' when people are arguing?",
      "What is one boundary you can set for when you check your messages?"
    ],
    icon: "MessageSquare"
  },
  {
    id: "tw-youtube-spirals",
    title: "The Content Trap",
    ageGroups: ["tweens"],
    scenario: "You start watching one funny video, and an hour later you're watching scary 'conspiracy theories' or videos that make you feel anxious about the world.",
    question: "How do you stop the 'scary spiral'?",
    choices: [
      { id: "A", text: "Keep watching to see if the next one is better.", feedback: "The algorithm feeds you what you react to (fear), not what you need. It won't stop unless you do." },
      { id: "B", text: "Click 'Not Interested' and search for a specific hobby.", feedback: "Great step! Searching for something specific (like 'drawing tips') breaks the auto-play trap." },
      { id: "C", text: "Close the app but keep the sound on.", feedback: "Your brain still processes the audio stress. A total break is usually more effective." }
    ],
    microWins: [
      { id: "1", text: "Turn off 'Autoplay' in your video app settings." },
      { id: "2", text: "Search for one positive or educational channel today." },
      { id: "3", text: "Switch to a physical book or game for 15 minutes." }
    ],
    lesson: "Algorithms are designed to capture focus, often using fear or shock. You are the curator of your digital world; choose content that builds your confidence.",
    reflectionQuestions: [
      "How do you feel after 20 minutes of scrolling vs 20 minutes of a hobby?",
      "What are the top 3 topics the algorithm 'thinks' you like right now?",
      "How can you train the algorithm to show you more of what makes you happy?"
    ],
    icon: "EyeOff"
  },
  {
    id: "tw-momentum",
    title: "The Homework Mountain",
    ageGroups: ["tweens"],
    scenario: "You have a big project due, and it feels impossible. Every time you think about it, you feel like crying, so you just watch TV instead. The mountain gets bigger in your mind.",
    question: "How do you tackle the mountain?",
    choices: [
      { id: "A", text: "Wait for your parents to force you to start.", feedback: "This makes the project feel like a punishment rather than a task you are capable of doing." },
      { id: "B", text: "Set a timer for just 10 minutes of 'messy' work.", feedback: "Perfect. Starting is the hardest part. Once you do 10 minutes, the brain realizes it's safe and doable." },
      { id: "C", text: "Try to do the whole thing in one sitting.", feedback: "This often leads to paralysis. Small chunks are much more sustainable for your focus." }
    ],
    microWins: [
      { id: "1", text: "Open the document and write just one sentence." },
      { id: "2", text: "Clear your workspace of everything except project tools." },
      { id: "3", text: "Take a 5-minute 'Victory Dance' break after starting." }
    ],
    lesson: "Momentum beats motivation. You don't need to feel 'ready' to start; you just need to start to feel 'ready'. Productivity is about emotional regulation.",
    reflectionQuestions: [
      "What is the specific part of this task that makes you want to avoid it?",
      "How does your 'Future Self' feel if you finish just 15 minutes tonight?",
      "What is one reward you can give yourself for simply starting?"
    ],
    icon: "GraduationCap"
  },
  {
    id: "tw-sleepover-worry",
    title: "Sleepover Survival",
    ageGroups: ["tweens"],
    scenario: "You're at a sleepover. Everyone is watching a movie that scares you, or they are staying up later than you're comfortable with. You want to go home but feel 'embarrassed'.",
    question: "How do you protect your boundaries?",
    choices: [
      { id: "A", text: "Suffer in silence so you look 'cool'.", feedback: "This teaches your brain that other people's opinions matter more than your peace. It causes internal stress." },
      { id: "B", text: "Use a 'Code Word' with your parents to get picked up.", feedback: "Brilliant. Having a pre-planned exit strategy is a powerful resilience tool. You can save face with a polite excuse." },
      { id: "C", text: "Try to fall asleep while they are still active.", feedback: "Difficult to do with high noise and stress. It's better to be in a place where you feel safe." }
    ],
    microWins: [
      { id: "1", text: "Agree on a 'text code' with your parents before any overnight trip." },
      { id: "2", text: "Practice saying 'I'm not really into this' in private." },
      { id: "3", text: "Bring a small comfort item from home in your bag." }
    ],
    lesson: "Your comfort is your responsibility. It is okay to set a boundary when something doesn't feel right. Real friends respect your limits.",
    reflectionQuestions: [
      "What is the scariest part of being the first to say 'I want to go home'?",
      "Who is one trusted adult you can always reach out to if you feel uneasy?",
      "How can you support a friend who might be feeling the same way?"
    ],
    icon: "Moon"
  },
  {
    id: "tw-social-merit",
    title: "The Like-Button Hunger",
    ageGroups: ["tweens"],
    scenario: "You just posted your first photo. You find yourself refreshing the app every 2 minutes. When you see a new like, you feel a 'rush', but if 10 minutes pass without one, you feel 'low'.",
    question: "How do you break the validation loop?",
    choices: [
      { id: "A", text: "Delete the post if it doesn't get enough likes.", feedback: "This ties your internal value to a changing external number. It's a recipe for digital anxiety." },
      { id: "B", text: "Post and Ghost'—put the phone away for 2 hours.", feedback: "Excellent. Posting because YOU like the content, then walking away, reclaim your power from the algorithm." },
      { id: "C", text: "Ask your friends in the chat to go like it.", feedback: "This 'validation hunt' never feels satisfying for long and makes the loop stronger." }
    ],
    microWins: [
      { id: "1", text: "Turn off notifications for 'Likes' specifically." },
      { id: "2", text: "Ask yourself: 'Do I actually like this photo?' before posting." },
      { id: "3", text: "Spend 20 minutes doing something you are 'good at' offline." }
    ],
    lesson: "Likes are digital sugar—a quick burst of energy followed by a crash. Your worth is a constant; it doesn't change based on a screen's activity.",
    reflectionQuestions: [
      "What did people do to feel 'liked' before the internet existed?",
      "Why does a heart on a screen feel so much bigger than a real compliment?",
      "What is one thing about yourself that can't be captured in a photo?"
    ],
    icon: "Heart"
  },
  {
    id: "tw-comparison-bug",
    title: "Sparkle Envy",
    ageGroups: ["tweens"],
    scenario: "Your best friend gets the newest shoes or the newest phone. Suddenly, your own stuff feels 'gross' or 'old'. You feel a mix of jealousy and shame for feeling that way.",
    question: "How do you handle 'The Comparison Bug'?",
    choices: [
      { id: "A", text: "Ask your parents for the exact same thing.", feedback: "This creates an endless race where you only feel good when you have 'more'. The joy is temporary." },
      { id: "B", text: "Compliment them, then list 3 things you love about YOUR life.", feedback: "Perfect. Celebrating others doesn't take away from you. Gratitude is the shield against envy." },
      { id: "C", text: "Act mean to them so they don't feel 'better' than you.", feedback: "This hurts your friendship over a physical object. The feeling is inside you, not in the shoes." }
    ],
    microWins: [
      { id: "1", text: "Write down one thing you own that makes you genuinely smile." },
      { id: "2", text: "Tell a friend 'I'm happy for you' and mean it." },
      { id: "3", text: "Clean or decorate something you already have to make it feel 'new'." }
    ],
    lesson: "Jealousy is a sign that you value something, but don't let it blind you to what you already have. Someone else's shine doesn't make you dim.",
    reflectionQuestions: [
      "What is something you own that you used to be really excited about?",
      "Does having the 'newest' thing actually change who a person is?",
      "What is one 'wealthy' part of your life that isn't about money (e.g., family, skill)?"
    ],
    icon: "Sparkles"
  },
  {
    id: "tw-identity-shifting",
    title: "Changing Your Mind",
    ageGroups: ["tweens"],
    scenario: "You used to be 'The Minecraft Kid' or 'The Dancer', but now you're feeling interested in something else. You're afraid your friends will judge you or think you're 'fake' for changing.",
    question: "How do you handle your evolving self?",
    choices: [
      { id: "A", text: "Keep doing the old thing just to stay 'safe'.", feedback: "This is 'masking'. It stops you from discovering the new passions that will make you happy." },
      { id: "B", text: "Be honest: 'I'm actually really into [New Thing] now'.", feedback: "Great. Authenticity is a magnet for real friends. Most people are also changing and just waiting for someone else to say it." },
      { id: "C", text: "Mock your old hobby so no one thinks you still like it.", feedback: "This is being mean to a version of yourself. You can outgrow things without hating them." }
    ],
    microWins: [
      { id: "1", text: "Try one tiny activity in your 'new' interest area today." },
      { id: "2", text: "Tell one friend about something new you are curious about." },
      { id: "3", text: "Take down one poster or item that no longer feels like 'you'." }
    ],
    lesson: "You are a growing person, not a finished product. You have the right to grow out of old versions of yourself and into new ones.",
    reflectionQuestions: [
      "What is something you loved 3 years ago that you don't care about now? Is that okay?",
      "What is one thing you're curious about but haven't told anyone yet?",
      "How can you be a 'good friend' to someone else who is also changing?"
    ],
    icon: "UserCheck"
  },
  {
    id: "tw-rumor-shields",
    title: "The Rumor Mill",
    ageGroups: ["tweens"],
    scenario: "You find out someone said something mean about you behind your back. It's a small lie, but it's spreading. You feel hot with anger and want to 'get them back'.",
    question: "What's the 'High Road' move?",
    choices: [
      { id: "A", text: "Start a bigger rumor about them to show them how it feels.", feedback: "This just keeps the cycle of drama moving and makes you look like the 'attacker' too." },
      { id: "B", text: "State the truth once, then ignore the noise.", feedback: "Class act. Truth doesn't need to shout. People who matter will see through the gossip eventually." },
      { id: "C", text: "Confront them in front of a big group at lunch.", feedback: "High drama! This usually leads to a public fight, which is exactly what a rumor-maker wants." }
    ],
    microWins: [
      { id: "1", text: "Spend your lunch with friends who don't gossip." },
      { id: "2", text: "Write down 5 true, positive things about yourself." },
      { id: "3", text: "Refuse to repeat a rumor about someone else today." }
    ],
    lesson: "Integrity is who you are when people are talking. Noise is temporary; your character is permanent. Build a reputation for being 'drama-free'.",
    reflectionQuestions: [
      "Why do people feel the need to spread rumors? What are they missing?",
      "How does it feel when you choose NOT to join in on the gossip?",
      "Who are the 'Safe People' in your life who always have your back?"
    ],
    icon: "Search"
  },

  // --- TEENS (14-16) ---
  {
    id: "tn-ghosting-resilience",
    title: "Ghosting Survival",
    ageGroups: ["gen-z"],
    scenario: "You've been texting someone for weeks. Suddenly, radio silence. You see them active on social media, but your message says 'Read' or 'Delivered' for three days. Your brain starts the 'Why?' loop.",
    question: "How do you handle the silence?",
    choices: [
      { id: "A", text: "Send a '???' text to get a reaction.", feedback: "The 'double-text' usually increases your own anxiety. It gives your power to someone who isn't respecting your time." },
      { id: "B", text: "The '3-Day Silence' Rule—pivot your focus elsewhere.", feedback: "Perfect. If they haven't replied in 3 days, you have your answer for now. Silence is a form of communication too." },
      { id: "C", text: "Block them immediately and post a sad quote.", feedback: "This is reactive. Blocking is fine if you need peace, but the 'sad quote' keeps you connected to their opinion." }
    ],
    microWins: [
      { id: "1", text: "Mute their stories and posts for 48 hours." },
      { id: "2", text: "Reach out to a 'constant' friend (someone who always replies)." },
      { id: "3", text: "Do one task that requires 0% social media (e.g., exercise)." }
    ],
    lesson: "Communication is a two-way street. Someone else's inability to reply is a reflection of their habits, not your worth. Focus on the 'Green Flags'—the people who show up consistently.",
    reflectionQuestions: [
      "What is the physical sensation in your body when you see they are 'online' but haven't replied?",
      "What is one thing you can say to yourself to stop the 'What did I do wrong?' cycle?",
      "If you were the one who forgot to reply, how would you want to be treated?"
    ],
    icon: "MessageSquare",
    courageLooksLike: "Courage usually feels awkward, not powerful.\nIt's the restraint to NOT check their profile for the 50th time.\nIt's accepting that you don't have control over their actions, only your reaction.",
    bodyCheckIn: "Notice the urge to send 'just one more text'. Is it a buzzing in your fingers? A sinkiness in your chest? Accept the feeling, but don't follow the impulse.",
    socialScripts: [
      "I haven't heard from you in a few days, so I'm going to focus on some other stuff for now.",
      "Hey, if you're too busy to chat, no worries. Catch you later."
    ],
    perspectiveShift: "Ghosting is a reflection of their lack of communication skills, not your lack of value. Their silence is just information.",
    miniChallenge: "Mute their notifications for 24 hours. Don't look. See how your anxiety levels shift when you aren't waiting for a 'ping'.",
    emergencyReassurance: "One person's silence does not define your worth. You are allowed to outgrow connections that don't respect your time."
  },
  {
    id: "tn-fomo-firewall",
    title: "The FOMO Firewall",
    ageGroups: ["gen-z"],
    scenario: "You're at home, maybe studying or just resting. You open a story and see 'everyone' at a party or a hangout you weren't at. Your night suddenly feels 'wasted' and you feel 'less-than'.",
    question: "How do you stop the 'Comparison Sink'?",
    choices: [
      { id: "A", text: "Try to find the 'after-party' and go late.", feedback: "Going out when you're already stressed or tired just leads to performative fun, not real joy." },
      { id: "B", text: "Lean into JOMO (Joy Of Missing Out)—focus on your peace.", feedback: "Yes! Remind yourself of your 'Why'. 'I needed rest tonight, and a 10-second clip doesn't show the whole night'." },
      { id: "C", text: "Message a friend who is there and ask 'Is it boring?'.", feedback: "This is looking for a 'win' through others' boredom. It doesn't actually solve your own FOMO." }
    ],
    microWins: [
      { id: "1", text: "Close all social media for the rest of the evening." },
      { id: "2", text: "Do one 'luxury' thing for yourself (e.g., a long shower, good snack)." },
      { id: "3", text: "Write down 3 things you are glad you DIDN'T have to deal with tonight." }
    ],
    lesson: "Social media is a highlight reel. You are comparing your 24/7 reality to their 15-second edited peak. Guard your attention; it's your most valuable resource.",
    reflectionQuestions: [
      "Was your night actually 'bad' before you looked at the screen?",
      "What is the most 'boring' part of a party that people never post about?",
      "How can you create a 'No-FOMO' zone in your bedroom?"
    ],
    icon: "Sparkles",
    courageLooksLike: "Courage is choosing your peace over their 'highlights'.\nIt's the strength to put the phone down when you feel the comparison bug bite.",
    bodyCheckIn: "Check your chest right now. Is it tight because of a 15-second video? Take a deep breath and reclaim your space.",
    socialScripts: [
      "Looks like you guys had a blast! I'm actually really enjoying a quiet night in.",
      "Glad you had fun! I was catching up on some much-needed sleep."
    ],
    perspectiveShift: "You aren't missing out on 'everything'. You are choosing to participate in your own life instead of watching someone else's.",
    miniChallenge: "Unfollow or mute 3 accounts that consistently make you feel 'less-than' when you see them.",
    emergencyReassurance: "A night at home is not a wasted night. Rest is productive. You don't need to be everywhere to be someone."
  },
  {
    id: "tn-doomscroll-ramp",
    title: "The Doomscroll Exit Ramp",
    ageGroups: ["gen-z"],
    scenario: "It's midnight. You're exhausted but you're deep in a comment section argument or watching random clips you don't even like. Your eyes burn, but you can't stop scrolling.",
    question: "How do you break the loop?",
    choices: [
      { id: "A", text: "Throw the phone across the bed and force your eyes shut.", feedback: "Dramatic, but the brain is still 'wired'. We need a smoother off-ramp for your nervous system." },
      { id: "B", text: "The 'Physical Pivot'—get out of bed and walk 10 steps.", feedback: "Perfect. Changing your physical environment breaks the trance. Distance from the device is the cure." },
      { id: "C", text: "Try to find 'one more' good video to end on.", feedback: "This is the algorithm's trap. There is no perfect ending, only the one you choose to create." }
    ],
    microWins: [
      { id: "1", text: "Charge your phone across the room tonight." },
      { id: "2", text: "Set a 'Sleep Mode' on your phone that kicks in at 10 PM." },
      { id: "3", text: "Read 2 pages of a physical book or journal before bed." }
    ],
    lesson: "The algorithm is designed to bypass your willpower. Resilience in the digital age is about building an environment that protects you from your own impulses.",
    reflectionQuestions: [
      "How does your brain feel after an hour of scrolling? (Heavy? Buzzed? Empty?)",
      "What 'need' is the scrolling trying to fill? (Boredom? Loneliness? Stress?)",
      "What is one bedtime ritual that doesn't involve a screen?"
    ],
    icon: "Smartphone",
    courageLooksLike: "Courage is admitting the algorithm won this round and walking away.\nIt's the discipline to be 'bored' instead of 'stimulated'.",
    bodyCheckIn: "Check your eyes. Are they burning? Is your neck stiff? Your body is asking for the off-switch. Take a deep breath and look at the far wall.",
    socialScripts: [
      "Going off-grid for the night. Catch you tomorrow.",
      "Phone's going in the drawer. Peace out."
    ],
    perspectiveShift: "The scroll isn't relaxing; it's 'doom-loading'. Your brain needs a quiet room, not a faster feed.",
    miniChallenge: "Set your phone to 'Grayscale' mode after 9 PM tonight. Watch how much less interesting it becomes.",
    emergencyReassurance: "It's not your fault the app is addictive—it was built to be. But it IS your responsibility to step out of the trap."
  },
  {
    id: "tn-academic-validation",
    title: "The Grade Gridlock",
    ageGroups: ["gen-z"],
    scenario: "You get a grade that is lower than you expected. You immediately feel like 'all your hard work was for nothing' and start worrying about your entire future career at age 15.",
    question: "How do you handle the 'academic spiral'?",
    choices: [
      { id: "A", text: "Study for 5 hours straight tonight without a break.", feedback: "Panic-studying leads to burnout and poor memory. You need strategy, not just suffering." },
      { id: "B", text: "Analysis over Emotion: List 3 things to improve and MOVE ON.", feedback: "Excellent. A grade is data, not a verdict on your value. Pivoting from 'I failed' to 'Here's the fix' is resilience." },
      { id: "C", text: "Complain to all your friends about how unfair it is.", feedback: "While venting is fine, staying in 'victim mode' prevents you from actually making progress next time." }
    ],
    microWins: [
      { id: "1", text: "Close your books for 1 hour of total rest tonight." },
      { id: "2", text: "Ask one clarifying question to the teacher about the mistakes." },
      { id: "3", text: "Do one thing that makes you feel 'smart' unrelated to school." }
    ],
    lesson: "Your GPA is a snapshot, not a storyboard. Success is a series of corrections, not a perfection streak. You are more than your transcript.",
    reflectionQuestions: [
      "Do you remember what you got on a test 2 years ago? Does it matter now?",
      "Who is someone you admire who isn't defined by their grades?",
      "What is one skill you have that isn't measured by a test?"
    ],
    icon: "GraduationCap",
    courageLooksLike: "Courage is accepting a 'fail' as data, not a personality trait.\nIt's the strength to try again when you feel like a 'fraud'.",
    bodyCheckIn: "Where is the 'Grade Pressure' right now? Tight jaw? Clenched fists? Soften your face. You are safe even if the score wasn't what you wanted.",
    socialScripts: [
      "Yeah, that grade was a bummer, but I know what I need to fix for next time.",
      "I'm actually okay with it. One test doesn't define me."
    ],
    perspectiveShift: "In five years, no one will ask about this test. They will ask how you handled the setback. That's the real grade.",
    miniChallenge: "Do one thing tonight that you are 'bad at' just for fun. Proof that you don't need to be perfect to belong.",
    emergencyReassurance: "Your value is separate from your performance. You are enough because you exist, not because you produce."
  },
  {
    id: "tn-body-image",
    title: "The Mirror Trap",
    ageGroups: ["gen-z"],
    scenario: "You're seeing 'perfect' bodies and filtered faces all over your 'For You' page. You look in the mirror and start picking out every flaw. You feel 'ugly' compared to a digital standard.",
    question: "How do you fight the 'Comparison Mirror'?",
    choices: [
      { id: "A", text: "Start a strict 'transformation' plan out of frustration.", feedback: "Working on yourself from a place of self-hate rarely leads to healthy or lasting results." },
      { id: "B", text: "Curate your feed—Unfollow 5 accounts that trigger you.", feedback: "Digital Hygiene! You don't have to invite comparison into your head. Change your input to change your self-view." },
      { id: "C", text: "Spend more time using filters so you look 'better'.", feedback: "Filters can be fun, but relying on them increases the 'Identity Gap' between your screen self and your real self." }
    ],
    microWins: [
      { id: "1", text: "Post or take one photo with ZERO filters today." },
      { id: "2", text: "List 3 things your body can DO (e.g., run, dance, breathe) instead of how it looks." },
      { id: "3", text: "Spend 30 minutes in nature where there are no mirrors or screens." }
    ],
    lesson: "Filters are an art form, not a health standard. Your body is a vehicle for your life, not a decoration for other people's screens.",
    reflectionQuestions: [
      "What would you say to a friend who was being as mean to themselves as you are in the mirror?",
      "If social media disappeared tomorrow, how would your opinion of your body change?",
      "What part of your personality is your favorite 'feature'?"
    ],
    icon: "Camera",
    courageLooksLike: "Courage is looking in the mirror and NOT looking for flaws.\nIt's the bravery to exist without a filter.",
    bodyCheckIn: "How does your body feel when you scroll? Heavy? Anxious? Put the phone down and feel your feet on the floor. You are real; the screen is light and pixels.",
    socialScripts: [
      "I'm trying to use filters less lately. It feels more 'me'.",
      "I used to worry about that, but I'm focusing more on what my body can DO than how it looks."
    ],
    perspectiveShift: "The 'perfect' accounts you see have an entire team and 100 takes. You are comparing your blooper reel to their movie trailer.",
    miniChallenge: "Post or take one photo with zero filters today. Don't check the likes. Just let it exist.",
    emergencyReassurance: "Your body is your home, not a billboard. It's allowed to change, to be 'imperfect', and to take up space."
  },
  {
    id: "tn-friend-resizing",
    title: "Friendship Resizing",
    ageGroups: ["gen-z"],
    scenario: "You've been close with someone since middle school, but now they are always talking down to you or making you feel small. You feel guilty about 'letting go' because of your history.",
    question: "What do you do with a friendship that no longer fits?",
    choices: [
      { id: "A", text: "Ghost them completely to avoid the confrontation.", feedback: "Ghosting often leaves 'unfinished business' in your head. Clarity—even if it's just 'I need space'—is better." },
      { id: "B", text: "The 'Outer Circle' Move—see them less, share less.", feedback: "Perfect. Not every friend is a 'bestie'. Moving someone to the outer circle protects your energy without the drama." },
      { id: "C", text: "Try even harder to make them like you again.", feedback: "This is 'Over-Functioning'. You can't control their personality. You are responsible for your own boundaries." }
    ],
    microWins: [
      { id: "1", text: "Politely turn down one hangout that you know will be draining." },
      { id: "2", text: "Mute notifications from one person who stresses you out." },
      { id: "3", text: "Reach out to one friend who actually makes you feel 'light'." }
    ],
    lesson: "Friendships aren't lifetime contracts; they are relationships that should grow with you. It's okay to 'resize' a connect to a level that feels safe.",
    reflectionQuestions: [
      "How do you feel in your chest right AFTER you hang out with this person?",
      "What are you afraid will happen if you become 'less close' to them?",
      "What is one quality you want in every 'Inner Circle' friend?"
    ],
    icon: "Users",
    courageLooksLike: "Courage is the strength to be 'less close' without being 'enemies'.\nIt's accepting that you've outgrown someone's influence.",
    bodyCheckIn: "Check your stomach. Do you get a 'knot' when their name pops up? That's your body telling you a boundary is needed.",
    socialScripts: [
      "I'm actually quite busy lately, so I might not be as active in the chat.",
      "I've been feeling like I need a bit more space to focus on some other things for a while."
    ],
    perspectiveShift: "Not everyone is meant to walk the whole way with you. Some people are 'chapters', not the whole book. That doesn't make the chapter bad.",
    miniChallenge: "Mute notifications for one 'draining' person for a week. See how much quieter your brain feels.",
    emergencyReassurance: "You aren't 'mean' for protecting your peace. Real loyalty isn't about stayng in toxic patterns; it's about being true to yourself."
  },
  {
    id: "tn-identity-performance",
    title: "The Identity Masquerade",
    ageGroups: ["gen-z"],
    scenario: "You're with a new group. You find yourself pretending to like things you don't or talking in a way that isn't yours, just to 'fit in'. You feel a hollow 'faking it' sensation deep down.",
    question: "How do you handle the pressure to conform?",
    choices: [
      { id: "A", text: "Keep 'Masking' until it becomes your new personality.", feedback: "Exhausting! Eventually, you forget who you actually are, which leads to identity crises later." },
      { id: "B", text: "The 'Niche Drop'—mention one thing you actually love.", feedback: "Brave. Real belonging happens when people see the real you. Testing the waters helps you find your actual 'tribe'." },
      { id: "C", text: "Leave the group and stay alone.", feedback: "A bit extreme. You can be part of a group while remaining a distinct individual. Integration is the goal." }
    ],
    microWins: [
      { id: "1", text: "Wear or use one thing today that is uniquely 'you'." },
      { id: "2", text: "Disagree politely with one popular opinion today." },
      { id: "3", text: "Spend 20 minutes doing a 'dork' hobby you genuinely love." }
    ],
    lesson: "Fitting in is Being accepted for being like everyone else. Belonging is being accepted for being yourself. Choose belonging.",
    reflectionQuestions: [
      "Who is one person you can be 100% yourself with? What makes that possible?",
      "What is the 'scary part' about being the ONLY one in the room who likes something?",
      "How can you be a 'safe space' for others to be weird too?"
    ],
    icon: "Brain",
    courageLooksLike: "Courage usually feels awkward, not powerful.\nMost growth begins with: 'this feels cringe'.\nThat feeling is often the doorway, not the warning sign.",
    bodyCheckIn: "Check your body right now. When you think about being 'the real you': tight chest? buzzing stomach? urge to hide?",
    socialScripts: [
      "Yeah I still like that, I'm just into other stuff too.",
      "I dunno, I've changed a bit lately.",
      "I wanted to try something different."
    ],
    perspectiveShift: "Weirdly enough... The people most afraid of seeming 'fake' are often the most genuine people. Fake people usually aren't worried about authenticity at all.",
    miniChallenge: "Wear, do, or share one thing this week that reflects the CURRENT you, not the old version people expect.",
    emergencyReassurance: "If this goes badly... one awkward reaction does not define you. You are allowed to outgrow old identities."
  },
  {
    id: "tn-digital-footprint",
    title: "Your Future Resume",
    ageGroups: ["gen-z"],
    scenario: "You're about to post a comment or video that's a bit 'edgy' or mean about a teacher or peer. It'll get major likes, but you remember reading about people losing jobs over old posts.",
    question: "Is the 'clout' worth the risk?",
    choices: [
      { id: "A", text: "Post it! It's just a joke and no one will care in 5 years.", feedback: "The internet never forgets. Screenshots are permanent. Is this 5-second rush worth your 2030 reputation?" },
      { id: "B", text: "The 'Grandmother Rule'—don't post if you'd be ashamed to show her.", feedback: "Classic strategy. If it's not something you'd want your future boss or hero to see, keep it in the drafts." },
      { id: "C", text: "Post it on a 'Finsta' or 'Private' account.", feedback: "Privacy is a myth on the internet. Screens can be captured. Digital tracks are more visible than you think." }
    ],
    microWins: [
      { id: "1", text: "Audit your last 5 posts—would you show them to a college recruiter?" },
      { id: "2", text: "Delete one old post that no longer reflects who you are." },
      { id: "3", text: "Change your privacy settings on your main platforms." }
    ],
    lesson: "Your digital footprint is your resume before you ever write one. Be your own PR manager and protect your future options.",
    reflectionQuestions: [
      "What is the first thing an employer would see if they Googled you right now?",
      "Why is the 'rush' of a viral post so addictive?",
      "What is one thing you want to be 'known for' in the real world?"
    ],
    icon: "Globe",
    courageLooksLike: "Courage is hitting 'Delete' on a post that would have gotten thousands of likes but doesn't align with who you want to be.\nIt's the restraint of the 'Drafts' folder.",
    bodyCheckIn: "Feel that 'rush' of excitement? Is it mixed with a little bit of 'I shouldn't do this'? Listen to the 'shouldn't'. It's your future self trying to warn you.",
    socialScripts: [
      "I think I'll keep this one in the group chat, actually.",
      "Maybe not the best thing to have linked to my name forever."
    ],
    perspectiveShift: "Privacy isn't about having something to hide; it's about having something to protect. Your future self will thank you for the silence.",
    miniChallenge: "Search your own name. Find one thing (post, tag, comment) that doesn't feel like 'you' anymore and remove it.",
    emergencyReassurance: "You can't change what you already posted, but you can change what you do next. Every new post is a chance to rebuild your track record."
  },
  {
    id: "tn-relationship-redflags",
    title: "Dating & Digital Boundaries",
    ageGroups: ["gen-z"],
    scenario: "You're talking to someone you like, but they are getting 'mad' if you don't reply in 5 minutes, or they want your passwords to 'prove' you are loyal. It feels 'intense' but you're not sure if it's normal.",
    question: "How do you set the boundary?",
    choices: [
      { id: "A", text: "Give them what they want so they stop being 'sad'.", feedback: "This is 'codependency'. You are sacrificing your autonomy for their insecurity. It only gets harder to say no later." },
      { id: "B", text: "The 'Privacy Pivot'—explain that trust doesn't need passwords.", feedback: "Powerful. Healthy love requires trust AND privacy. Setting this limit early prevents toxic patterns from forming." },
      { id: "C", text: "Just ignore their requests and hope they stop.", feedback: "Avoidance allows the behavior to continue. Clear, verbal boundaries are the only way to build a healthy connection." }
    ],
    microWins: [
      { id: "1", text: "Wait 1 hour to reply to a non-urgent text today." },
      { id: "2", text: "Tell someone 'I'm not comfortable with that' once today." },
      { id: "3", text: "Talk to a trusted sibling or friend about the 'intensity' you're feeling." }
    ],
    lesson: "High-intensity 'love' that requires losing your privacy isn't love—it's control. A healthy partner wants you to have a life outside of them.",
    reflectionQuestions: [
      "What does 'trust' look like to you in a relationship?",
      "Why does it feel so scary to say 'no' to someone you like?",
      "What is one digital boundary you will never cross for anyone?"
    ],
    icon: "ShieldAlert",
    courageLooksLike: "Courage is putting down a boundary with someone you really like.\nIt's the strength to say 'That's not okay with me', even if you're afraid they'll leave.",
    bodyCheckIn: "Check your chest. Does it feel 'tight' or 'restricted' when they ask for your location or passwords? That's an alarm bell. Trust feels like 'open space', not 'small surveillance'.",
    socialScripts: [
      "I really like talking to you, but I'm not comfortable sharing my passwords. Trust is important to me.",
      "I need some 'me time' tonight, so I'll be off my phone for a few hours. Talk tomorrow!"
    ],
    perspectiveShift: "Jealousy isn't a sign of 'intense love'; it's a sign of 'intense insecurity'. You don't have to carry someone else's insecurity for them.",
    miniChallenge: "Identify one digital boundary you have (e.g., no phones at dinner, no location sharing) and stick to it for a week.",
    emergencyReassurance: "If they can't respect a simple boundary, they can't protect your heart. You are better off alone than in a relationship that requires you to vanish."
  },
  {
    id: "tn-risk-peer-pressure",
    title: "The Choice Point",
    ageGroups: ["gen-z"],
    scenario: "You're at a party/hangout. Everyone is doing something you know is a 'bad idea'—maybe it's legal risk, physical risk, or just something 'dumb'. You don't want to be 'The Lame One'.",
    question: "How do you navigate the 'Risk Zone'?",
    choices: [
      { id: "A", text: "Join in so you are part of the 'core group'.", feedback: "The 'group-high' lasts an hour; the consequences can last a lifetime. Resilience is making the choice your 'Future Self' will thank you for." },
      { id: "B", text: "The 'Funny Pivot'—make a joke and walk to the kitchen.", feedback: "Smart. Humor is a great shield. You can decline the risk without making a big 'speech' about it." },
      { id: "C", text: "Lecture everyone on why they are making a mistake.", feedback: "While you're right, this usually makes you a target. Leaving or pivoting is usually a safer way to protect your status and your safety." }
    ],
    microWins: [
      { id: "1", text: "Practice one 'No-thanks' phrase until it feels natural." },
      { id: "2", text: "Identify the one person in the group who usually stays 'chill'." },
      { id: "3", text: "Ensure you always have a 'Ride-Home' plan independent of the group." }
    ],
    lesson: "You're the CEO of your own body and future. Peer pressure is a temporary weather pattern; your decisions are the permanent foundation of your life.",
    reflectionQuestions: [
      "Why does 'The Group' feel so much more powerful than your own logic sometimes?",
      "Who is one person who has successfully said 'No' to the crowd? How did they do it?",
      "What is one value you will never compromise on, no matter who is watching?"
    ],
    icon: "Target",
    courageLooksLike: "Courage is being 'The Lame One' for a night to avoid being 'The Regretful One' for a lifetime.\nIt's the power to follow your own internal compass.",
    bodyCheckIn: "Feel that buzzing in your stomach? That's the 'Group Force'. Acknowledge it, then check your brain. What does your BRAIN say about this choice?",
    socialScripts: [
      "Nah, I'm good. I've got a lot on tomorrow.",
      "That's not really my vibe, honestly.",
      "I think I'll head home. Catch you guys later."
    ],
    perspectiveShift: "The people who judge you for saying 'no' are usually the same ones who aren't happy with their own choices. Your 'no' is a mirror they don't like.",
    miniChallenge: "Practice saying 'No thanks' to something small three times this week. Build the muscle before you need it for something big.",
    emergencyReassurance: "Your 'coolness' is temporary; your record and your health are permanent. The right friends will still be there tomorrow."
  },

  // --- YOUNG ADULTS (16-20) ---
  {
    id: "ya-burnout-prevention",
    title: "Burnout Defense",
    ageGroups: ["young-adults"],
    scenario: "Work shifts, exams, social life, and household chores. You haven't had a proper meal in two days. Your brain is vibrating. You're 'working' but actually just staring at a cursor.",
    question: "How do you break the 'Grind' cycle?",
    choices: [
      { id: "A", text: "Caffeine-up and pull an all-nighter to 'finish'.", feedback: "Short-term fix, long-term disaster. You're borrowing energy from tomorrow with high interest. This leads to a total crash." },
      { id: "B", text: "The 'Minimum Viable Work' list—pick 3 wins and STOP.", feedback: "Boundary setting is a vital adult skill. Deciding when 'enough' is enough prevents work from consuming your identity." },
      { id: "C", text: "Keep going until you physically can't anymore.", feedback: "Crisis management isn't a strategy. You need a sustainable pace. If you don't choose a break, your body will choose one for you (sickness)." }
    ],
    microWins: [
      { id: "1", text: "Eat one proper, hot meal without looking at a screen." },
      { id: "2", text: "Set a 'No-Work' zone in your schedule for tonight (e.g., 8 PM onwards)." },
      { id: "3", text: "Say 'no' to one extra responsibility this week." }
    ],
    lesson: "Productivity isn't how much you do; it's how much of yourself you keep while doing it. Rest is a prerequisite for high performance, not a reward for it.",
    reflectionQuestions: [
      "What is the 'scary thing' that happens if you stop working for one night?",
      "What are the top 3 priorities that ACTUALLY matter for your future?",
      "How would your week look if you were 10% more protective of your sleep?"
    ],
    icon: "Zap",
    courageLooksLike: "Courage is saying 'No' to a productive task so you can say 'Yes' to your sanity.\nIt's the bravery to be 'unproductive' for a few hours.",
    bodyCheckIn: "Check your shoulders. Are they climbing toward your ears? Is your breathing shallow? Your nervous system is in 'emergency mode'. Take a long exhale.",
    socialScripts: [
      "I'd love to help, but I've reached my limit for today. Let's look at this tomorrow.",
      "I'm taking a complete break tonight to recharge. I'll get back to everyone in the morning."
    ],
    perspectiveShift: "You aren't a machine. Even a high-performance engine needs fuel and maintenance. Rest IS work—it's the work of recovery.",
    miniChallenge: "Set a 'hard stop' time tonight. No matter what isn't done, close the laptop and don't look at work apps for at least 10 hours.",
    emergencyReassurance: "The world won't end if you sleep. Most 'emergencies' are just poor planning from others. Your wellbeing is the most important asset you own."
  },
  {
    id: "ya-imposter-syndrome",
    title: "Imposter Syndrome",
    ageGroups: ["young-adults"],
    scenario: "You just got a new job or role. Everyone is congratulating you, but inside, you're convinced it was a mistake. You feel like a fraud who just 'got lucky', and any minute someone will find out.",
    question: "How do you handle the 'Fake' feeling?",
    choices: [
      { id: "A", text: "Apologize in advance for not being 'good enough'.", feedback: "This is 'pre-emptive failing'. You're training people not to trust you. Own the space you've earned." },
      { id: "B", text: "Recall the 'Hard Facts'—List 3 skills you used to get here.", feedback: "Evidence kills the 'luck' myth. Reminding your brain of your actual work shifts focus from feelings to facts." },
      { id: "C", text: "Work twice as hard as everyone else to 'prove' yourself.", feedback: "This is the 'Obsessive-Burnout Loop'. You can't out-work a core belief of inadequacy. You have to fix the mindset." }
    ],
    microWins: [
      { id: "1", text: "Keep a 'Wins Folder' or list of praise you've actually received." },
      { id: "2", text: "Admit your nerves to one mentor or peer—isolation feeds imposter syndrome." },
      { id: "3", text: "Celebrate the win for 5 minutes before moving to the next 'to-do'." }
    ],
    lesson: "Imposter syndrome is the Tax of Excellence—it only happens to people who are growing. If you're in the room, it's because you were invited. You don't need all the answers to belong.",
    reflectionQuestions: [
      "If a friend was in your position, would you think THEY were a fraud?",
      "What are the specific 'data points' (certificates, projects, praise) that prove you are qualified?",
      "What is one thing you can 'learn' in this role instead of having to 'already know'?"
    ],
    icon: "UserCheck",
    courageLooksLike: "Courage is the strength to be a 'beginner' in a room full of 'experts'.\nIt's the bravery to ask the 'dumb' question because you care about the answer.",
    bodyCheckIn: "Feel that tightness in your throat? That's the fear of being 'found out'. Swallow, relax your jaw, and remind yourself: 'I am here to learn, not just to perform'.",
    socialScripts: [
      "I'm still getting my head around this part, can you explain the process one more time?",
      "I don't have the answer to that yet, but I'll find out and get back to you by end of day."
    ],
    perspectiveShift: "Everyone else is also faking a certain level of confidence. You aren't a fraud; you're just aware of your own learning curve.",
    miniChallenge: "Admit to one person today that you aren't 100% sure about something. Watch how it actually builds trust instead of breaking it.",
    emergencyReassurance: "They didn't hire you by mistake. They saw potential you haven't even recognized yet. Give yourself permission to be 'in progress'."
  },
  {
    id: "ya-money-autonomy",
    title: "Financial Firewall",
    ageGroups: ["young-adults"],
    scenario: "You see everyone traveling, eating at expensive spots, and buying new fits. Your bank account is thin, but the social pressure to 'join in' is heavy. You're considering debt for 'just this once'.",
    question: "How do you handle 'Financial FOMO'?",
    choices: [
      { id: "A", text: "Buy it anyway and worry about it next month.", feedback: "Future-Self Sabotage. Debt is a weight that kills your long-term resilience and choice." },
      { id: "B", text: "Suggest a 'Cheap/Free' alternative to the group.", feedback: "Leadership! Real friends respect a budget. Being honest about your finances is an 'Adulting' win." },
      { id: "C", text: "Stay home and tell them you're 'sick' to avoid the talk.", feedback: "Avoidance is a band-aid. Clear, honest financial boundaries build better relationships and self-respect." }
    ],
    microWins: [
      { id: "1", text: "Track every single cent you spend for just 48 hours." },
      { id: "2", text: "Set a savings automation for even just $5 a week." },
      { id: "3", text: "Say 'I can't afford that right now' out loud once today." }
    ],
    lesson: "Your net worth is not your self-worth. Financial boundaries are the literal foundation of your freedom. Don't trade your peace for a temporary peak.",
    reflectionQuestions: [
      "What is one 'social expense' you pay for that doesn't actually make you happy?",
      "Who in your life is 'good with money'? What one habit can you learn from them?",
      "How would it feel to have an 'Emergency Fund' that you never touch?"
    ],
    icon: "Wallet",
    courageLooksLike: "Courage is being the first person in the group chat to say 'That's out of my budget'.\nIt's the strength to value your future freedom over a fancy dinner.",
    bodyCheckIn: "Check your gut. Is it churning because of the bill? That's your financial stress system. Listen to it. It's trying to protect your future autonomy.",
    socialScripts: [
      "That sounds awesome, but I'm on a bit of a budget this month. How about we coffee and a walk instead?",
      "I'm saving for something big right now, so I'll probably sit this one out. Have a blast though!"
    ],
    perspectiveShift: "True wealth isn't what you buy; it's the number of options you have. Debt is a thief of options.",
    miniChallenge: "Say 'I can't afford that right now' out loud to a friend. Notice that the world doesn't end and your real friends don't care.",
    emergencyReassurance: "Temporary social awkwardness is way better than permanent financial regret. You are building a foundation; it's okay to start small."
  },
  {
    id: "ya-loneliness-loop",
    title: "The Loneliness Loop",
    ageGroups: ["young-adults"],
    scenario: "You've moved or finished school. Your old circles are gone. You spend your nights scrolling, feeling like everyone else has 'found their people' except you. You feel 'friend-less'.",
    question: "How do you break the isolation?",
    choices: [
      { id: "A", text: "Wait for someone to reach out to you first.", feedback: "Waiting is passive. Most adults are also waiting for someone to reach out. Be the first mover; it's a leadership trait." },
      { id: "B", text: "The 'In-Person' Rule—go to one hobby group offline.", feedback: "Perfect. Proximity and shared interests are the only two ingredients for new friendships. Show up consistently." },
      { id: "C", text: "Try to find friends exclusively through 'swiping' apps.", feedback: "Apps can complement, but they often feel like 'digital interviews' which can increase burnout. Real world feels more human." }
    ],
    microWins: [
      { id: "1", text: "Go to a coffee shop or library for 1 hour without headphones." },
      { id: "2", text: "Message one acquaintance and ask 'How has your week been?'." },
      { id: "3", text: "Attend ONE local event (gym, club, workshop) this week." }
    ],
    lesson: "Loneliness is a signal to connect, not a defect in your personality. Adult friendship takes effort and 'The Courage to be Ignored'. Keep showing up.",
    reflectionQuestions: [
      "What is a hobby you can do in a group (e.g., hiking, board games)?",
      "Why is it so much harder to make friends at 20 than it was at 10?",
      "What is one way YOU can be a 'good neighbor' or 'good peer' to someone else today?"
    ],
    icon: "Coffee",
    courageLooksLike: "Courage is the strength to be 'The New Person' in a room where everyone else seems to know each other.\nIt's the bravery to initiate a conversation that might be awkward.",
    bodyCheckIn: "Check your urge to pull out your phone when you're alone in public. That's a 'shield'. Try putting the shield down for 5 minutes and just LOOKING around. Open posture, open mind.",
    socialScripts: [
      "Mind if I join you guys? I'm relatively new to the area.",
      "I've been meaning to try this out. Do you have any tips for a beginner?",
      "I'm [Your Name], by the way. How's your week been going?"
    ],
    perspectiveShift: "Everyone is a little bit lonely. When you reach out, you aren't being an 'annoyance'; you're being a 'solution' to someone else's isolation.",
    miniChallenge: "Go to one public place (cafe, park, library) today and spend 20 minutes without your phone. Just exist in the space.",
    emergencyReassurance: "Feeling alone right now does not mean you will be alone forever. This is a transition period, not a permanent state."
  },
  {
    id: "ya-success-comparison",
    title: "Career Comparison",
    ageGroups: ["young-adults"],
    scenario: "You see people on LinkedIn with 'Senior' titles at 21 or starting startups. You're working a job you don't love or still just 'figuring it out'. You feel 'behind schedule'.",
    question: "How do you handle 'Corporate Envy'?",
    choices: [
      { id: "A", text: "Apply for 50 'better' jobs tonight in a panic.", feedback: "Panic-applying leads to poor results and more rejection. You need a targeted strategy, not a spray-and-pray approach." },
      { id: "B", text: "The 'Focus Shift'—Identify one skill you can master HERE.", feedback: "Great. Every job has something to teach. Mastering one skill where you are builds the resume for where you want to be." },
      { id: "C", text: "Unfollow everyone who is 'more successful' than you.", feedback: "While temporary muting is fine for peace, complete avoidance prevents you from learning. Learn from them, don't just compare." }
    ],
    microWins: [
      { id: "1", text: "Delete LinkedIn or Job boards for the whole weekend." },
      { id: "2", text: "Write down 3 things you've learned in the last 6 months (even if small)." },
      { id: "3", text: "Network with someone 'one step ahead' for real advice, not just envy." }
    ],
    lesson: "Comparison is the thief of progress. Careers are a marathon, not a sprint. Your 'timeline' is internal, not a race with total strangers on the internet.",
    reflectionQuestions: [
      "Who is someone you admire who didn't 'make it' until they were 30 or 40?",
      "What part of your current job or life are you actually grateful for?",
      "If you didn't have to look 'successful' to others, what would you do with your time?"
    ],
    icon: "Briefcase",
    courageLooksLike: "Courage is the strength to celebrate someone else's success while you're still working on yours.\nIt's the bravery to stay on your own path when others are taking 'shortcuts'.",
    bodyCheckIn: "Check your chest when you see a 'Promotion' post. Tight? Buzzing? Take a breath. Their win isn't your loss. There is room for everyone to succeed.",
    socialScripts: [
      "That is huge! So happy for you. You've worked so hard for this.",
      "I'm actually quite happy with where I'm at right now. Focusing on mastering [Skill Name]."
    ],
    perspectiveShift: "You are comparing your 'behind-the-scenes' with their 'highlight reel'. Success is often much more boring and difficult than it looks on a screen.",
    miniChallenge: "Delete LinkedIn or Job boards from your phone for the weekend. Reclaim your identity from your job title.",
    emergencyReassurance: "You aren't 'behind'. You are exactly where you need to be to learn the lessons for your next step. Trust your own timing."
  },
  {
    id: "ya-worklife",
    title: "The Work-Life Gate",
    ageGroups: ["young-adults"],
    scenario: "Your boss or colleagues message you on Slack/WhatsApp at 9 PM. You feel like you HAVE to reply to show you're 'dedicated', but it's ruining your evening and your rest.",
    question: "How do you set the digital gate?",
    choices: [
      { id: "A", text: "Reply immediately to look 'sharp'.", feedback: "You're training people that you are available 24/7. This is the quickest path to resentment and burnout." },
      { id: "B", text: "Mute work notifications and reply first thing in the morning.", feedback: "Yes! Professionalism is about consistency, not availability. Setting boundaries early shows you are a focused, high-value worker." },
      { id: "C", text: "Reply with a complaint about how late it is.", feedback: "This creates friction without setting a boundary. Just don't reply until work hours; that is the boundary." }
    ],
    microWins: [
      { id: "1", text: "Turn off Slack/Email notifications on your personal phone." },
      { id: "2", text: "Don't check work messages until your first cup of coffee is done." },
      { id: "3", text: "Say 'I'll jump on that first thing tomorrow' once this week." }
    ],
    lesson: "You are not your job. Your value exists outside of your productivity. A healthy 'worker' is one who knows how to be 'off-duty'.",
    reflectionQuestions: [
      "Why does it feel like a 'crisis' to wait until morning to reply?",
      "What kind of person do you want to be when you're NOT working?",
      "How would your focus improve if you truly 'clocked out' mentally?"
    ],
    icon: "ShieldAlert",
    courageLooksLike: "Courage is the power to leave a message on 'Read' outside of work hours.\nIt's the strength to own your time.",
    bodyCheckIn: "Notice the adrenaline spike when a work notification pings at night. That's your 'flight or fight' system. Remind your body: 'There is no emergency. I am safe at home'.",
    socialScripts: [
      "Got your message! I'll dive into this first thing in the morning when I'm back at my desk.",
      "Setting my notifications to 'Do Not Disturb' after 7 PM. See you tomorrow!"
    ],
    perspectiveShift: "Over-working doesn't make you a 'hero'; it makes you a 'hazard' to your own longevity. Boundaries make you a sustainable professional.",
    miniChallenge: "Turn off all work-related notifications for a full 24 hours this weekend. Notice if the world actually stops (spoiler: it won't).",
    emergencyReassurance: "You are allowed to have a life that is invisible to your employer. Your rest is sacred."
  },
  {
    id: "ya-indecision",
    title: "Indecision Paralysis",
    ageGroups: ["young-adults"],
    scenario: "You have 3 big paths ahead (career, move, or relationship choice). You're so afraid of making the 'wrong' choice that you're making NO choice. You feel stuck in a 'waiting room'.",
    question: "How do you move the needle?",
    choices: [
      { id: "A", text: "Ask 10 different people what they think you should do.", feedback: "Too many voices drown out your own intuition. You'll end up more confused and less in control." },
      { id: "B", text: "The '3-Month Experiment'—Pick one and commit fully.", feedback: "Action provides more data than thinking ever will. You can't iterate on a theory. Pick one and adjust as you go." },
      { id: "C", text: "Flip a coin and let fate decide.", feedback: "Outsourcing your life to luck is a dangerous habit. Own the decision, even if it's the 'wrong' one, and you'll grow more." }
    ],
    microWins: [
      { id: "1", text: "Make one minor decision (e.g., lunch) in under 10 seconds today." },
      { id: "2", text: "Write the 'Worst Case' for each choice—it's usually not that bad." },
      { id: "3", text: "Spend 20 minutes doing research on just ONE of the options." }
    ],
    lesson: "There are no 'wrong' paths, only different lives. The real disaster isn't making a choice; it's staying in the 'waiting room' forever. Action is the cure for fear.",
    reflectionQuestions: [
      "What is the one path that makes you feel both 'excited' and 'scared'?",
      "Whose life are you trying to live? (Yours? Your parents'?)",
      "If you knew you couldn't fail, which path would you walk down right now?"
    ],
    icon: "Clock",
    courageLooksLike: "Courage is making a choice without knowing the outcome.\nIt's the strength to be 'wrong' and iterate, rather than 'right' and paralyzed.",
    bodyCheckIn: "Feel that 'static' in your brain? That's over-analysis. Bring your focus to your feet. Which way are they pointed? Take one step in any direction. The path will reveal itself.",
    socialScripts: [
      "I'm going to try this for 3 months and see what happens. It's an experiment.",
      "I've decided to move forward with [Option A]. I'm nervous, but I'm ready for the change."
    ],
    perspectiveShift: "Decisions aren't tattoos; they are tests. You can almost always pivot later. The only thing you can't get back is the time you spent waiting.",
    miniChallenge: "Commit to one medium-sized decision (e.g., what to do this weekend) within 60 seconds. Trust your first instinct.",
    emergencyReassurance: "There is no 'perfect' life you are missing out on. There is only the life you create through your choices. You are capable of handling whatever comes next."
  },
  {
    id: "ya-conflict",
    title: "Navigating Hard Convos",
    ageGroups: ["young-adults"],
    scenario: "A roommate or partner has a habit that's bothering you. You've been keeping it in to avoid a 'fight', but now you're starting to act passive-aggressive or cold.",
    question: "How do you clear the air?",
    choices: [
      { id: "A", text: "Wait until you snap and have an argument.", feedback: "This is 'imploding'. It turns a small problem into a character attack. Speak before you're angry." },
      { id: "B", text: "The 'I-Statement' Rule—Speak your need, not their flaw.", feedback: "Perfect communication skill. 'I feel stressed when the dishes are left' vs 'You are lazy'. It invites a solution instead of a fight." },
      { id: "C", text: "Leave hints (like dirty dishes on their bed).", feedback: "Passive-aggression is a resilience killer. It's childish and never solves the actual problem." }
    ],
    microWins: [
      { id: "1", text: "Bring up one 'small thing' before it becomes a 'big thing'." },
      { id: "2", text: "Practicing the 'I-Statement' out loud or in writing." },
      { id: "3", text: "Actually listen for 2 minutes without interrupting during a talk." }
    ],
    lesson: "Conflict is the price of intimacy. You can't have a deep relationship without occasional friction. Clear communication is the oil that keeps the machine running.",
    reflectionQuestions: [
      "Why is 'directness' so much harder than 'hints'?",
      "What is the outcome you actually want? (Closure? Change? Revenge?)",
      "How would it feel to live in a space where everyone said what they meant?"
    ],
    icon: "Users",
    courageLooksLike: "Courage is saying 'Hey, can we talk about something?' even when your heart is pounding.\nIt's the strength to be vulnerable instead of defensive.",
    bodyCheckIn: "Check your jaw before a hard conversation. Is it clenched? Relax it. A soft face leads to a more collaborative talk. Breathe into your belly.",
    socialScripts: [
      "I've been feeling a bit stressed about the [Problem], and I wanted to see if we could find a solution together.",
      "I value our relationship, so I wanted to be honest about how I'm feeling right now."
    ],
    perspectiveShift: "Directness is a form of kindness. Hints are a form of manipulation. Speak your truth with love, and you give others the chance to respond with care.",
    miniChallenge: "Bring up one 'slight' annoyance today using an I-Statement (e.g., 'I feel [feeling] when [action]'). Practice the skill in a low-stakes way.",
    emergencyReassurance: "A hard conversation might feel like a 'crisis', but it's actually a 'repair'. You are making the relationship stronger, not weaker."
  },
  {
    id: "ya-failure",
    title: "Productive Failure",
    ageGroups: ["young-adults"],
    scenario: "A project you led failed. A client left. A pitch was rejected. You feel like a total failure, and you want to hide and never try anything 'big' again.",
    question: "How do you reboot from a strikeout?",
    choices: [
      { id: "A", text: "Ruminate on every second of the failure.", feedback: "Mental bruising. You're poking the wound, not letting it heal. Analysis is for learning; obsession is for hurting." },
      { id: "B", text: "The 'Post-Mortem'—What's the ONE lesson to take forward?", feedback: "Great. Extracting the value from a loss is the ultimate resilience hack. You didn't lose; you paid 'tuition'." },
      { id: "C", text: "Blame the timing, the client, or the economy.", feedback: "Externalizing blame keeps you comfortable, but it stops you from growing. Owning your 50% is how you win next time." }
    ],
    microWins: [
      { id: "1", text: "Mourn the loss for 1 hour, then do one small chore." },
      { id: "2", text: "Write down 3 things that actually went RIGHT before the fail." },
      { id: "3", text: "Share the story of the fail with one trusted peer." }
    ],
    lesson: "Failure is not the opposite of success; it's a component of it. High performers have failed more times than beginners have even tried. Keep your 'Try' button active.",
    reflectionQuestions: [
      "What is the one thing you'd do differently if you could restart tomorrow?",
      "Does this failure change your actual worth as a human being?",
      "What is the next 'Big Try' on your horizon?"
    ],
    icon: "TrendingDown",
    courageLooksLike: "Courage is starting again when you still feel the sting of the last loss.\nIt's the strength to own your mistakes without letting them own you.",
    bodyCheckIn: "Where is the 'Failure' sitting? In your slumped shoulders? A heavy heart? Stand up, stretch, and reclaim your vertical space. You are still here. You are still capable.",
    socialScripts: [
      "That project didn't go as planned, but I've identified three key things I'd change for next time.",
      "It's a tough break, but at least now I know what DOESN'T work."
    ],
    perspectiveShift: "You didn't 'lose' a year; you paid 'tuition' for a high-level lesson in what doesn't work. The elite are just the people who have failed more than you've even tried.",
    miniChallenge: "Share the 'Post-Mortem' of your fail with one person today. Watch how speaking it out loud takes away its power to shame you.",
    emergencyReassurance: "One mistake is not a life sentence. You are allowed to be messy, to get it wrong, and to survive the fallout. The comeback is usually better than the setback."
  },
  {
    id: "ya-identity-reclamation",
    title: "The Second Puberty",
    ageGroups: ["young-adults"],
    scenario: "You've been living the life you 'should' live for years. Suddenly, you're 19 or 20 and you realize you don't even like the music, the job, or the style you have. You feel 'lost'.",
    question: "How do you find 'The Real You'?",
    choices: [
      { id: "A", text: "Keep doing the old thing because it's 'too late' to change.", feedback: "It's never too late at any age, especially now. Living a fake life is much more exhausting than starting a new one." },
      { id: "B", text: "The 'Identity Audit'—Try one thing you always thought was 'weird'.", feedback: "Perfect! Novelty is the quickest way to find your triggers and your joys. Test everything." },
      { id: "C", text: "Rebel against everything your parents liked.", feedback: "Rebellion is still letting them control you. Focus on what you LOVE, not just what they HATE." }
    ],
    microWins: [
      { id: "1", text: "Try one new food or hobby this week without tellings anyone." },
      { id: "2", text: "Journal: 'If I were the only person on earth, I would...'" },
      { id: "3", text: "Dress exactly how you want for one solo grocery shop/errand." }
    ],
    lesson: "Identity reclamation is a recurring process. You are allowed to disappoint the world to keep from disappointing yourself. Your life belongs to you.",
    reflectionQuestions: [
      "What is a hobby or interest you 'dropped' because of what others thought?",
      "How would it feel to say 'I don't actually like this' in a group?",
      "What are the 3 words you WANT to describe your life path?"
    ],
    icon: "UserCheck",
    courageLooksLike: "Courage is the power to outgrow your old self in public.\nIt's the bravery to say 'I'm not that person anymore', even to the people who liked the old you.",
    bodyCheckIn: "Check for the 'False Persona' posture. Are you hiding your hands? Avoiding eye contact? Take up space. You are allowed to be the 'Update' version of yourself.",
    socialScripts: [
      "I'm actually moving in a different direction lately. Just doesn't feel like 'me' anymore.",
      "I'm exploring some new interests, and it's been really eye-opening."
    ],
    perspectiveShift: "You aren't being 'fake' for changing; you were being 'fake' for staying the same when you knew you'd grown. Authenticity requires frequent updates.",
    miniChallenge: "Change one small thing today that reflects your NEW self (a song choice, a way of speaking, a style piece) and don't explain it to anyone.",
    emergencyReassurance: "You are allowed to evolve. The people who truly love you will be excited to meet the new you. The others were just fans of a costume."
  },
  {
    id: "tn-loneliness-digital",
    title: "The Ghost Chat",
    ageGroups: ["gen-z"],
    scenario: "You see a group of friends posting from a hangout that you weren't invited to. The main group chat is strangely silent, and you're pretty sure there's a 'side chat' where the actual planning happened.",
    question: "How do you handle the 'Side-Chat' sting?",
    choices: [
      { id: "A", text: "Post a shady quote to your story to 'let them know' you see them.", feedback: "Passive-aggression feels like a win for 10 seconds, but it just creates higher walls and more awkwardness later." },
      { id: "B", text: "The 'Abundance Switch'—Message 1 person from a DIFFERENT circle.", feedback: "Perfect. Reminding your brain that you have options prevents you from spiraling into 'I have no friends' over one missed event." },
      { id: "C", text: "Ask someone point-blank: 'Why wasn't I invited?'.", feedback: "Brave, but can come off as heavy-handed for a casual hangout. Better to lead with curiosity or focus on other connections first." }
    ],
    microWins: [
      { id: "1", text: "Close social media for the rest of the night." },
      { id: "2", text: "Spend 30 minutes on a solo project you actually enjoy." },
      { id: "3", text: "Initiate one small plan for NEXT week with someone else." }
    ],
    lesson: "Being left out is part of being human. It doesn't mean you are 'unwanted'; it just means you weren't in that specific room at that specific time. Your 'tribe' is bigger than one chat.",
    reflectionQuestions: [
      "Have you ever accidentally left someone out of a plan? How did it happen?",
      "Why does a digital exclusion feel so much more 'official' than a real-life one?",
      "What are 3 things you love about yourself that don't depend on group approval?"
    ],
    icon: "MessageSquare",
    courageLooksLike: "Courage is the strength to be 'okay' with a quiet night while others are out.\nIt's the bravery to NOT seek validation from people who didn't include you.",
    bodyCheckIn: "Check your stomach. Feel that 'drop'? That's the social exclusion alarm. It's an old survival instinct. You are safe. You are not being abandoned by the tribe.",
    socialScripts: [
      "Looks like you guys had fun! I was catching up on some stuff anyway.",
      "No worries at all, hope it was a blast."
    ],
    perspectiveShift: "There is a 'Side Chat' for every group on earth. It's usually about logistics or specific commonalities, not a conspiracy against you.",
    miniChallenge: "Reach out to one person you haven't spoken to in a month just to say hi. Re-grow your 'Outer Circle'.",
    emergencyReassurance: "You aren't 'uncool'. One missing invitation is not a verdict on your life. You are allowed to have a solo night and still be loved."
  },
  {
    id: "tn-cancel-culture",
    title: "Fear of the 'Wrong Word'",
    ageGroups: ["gen-z"],
    scenario: "You want to speak up about an issue or participate in a trend, but you're terrified you'll use the 'wrong' terminology or get 'called out' for not knowing enough. You end up saying nothing.",
    question: "How do you navigate 'Cancel Anxiety'?",
    choices: [
      { id: "A", text: "Delete your accounts so you can't ever say anything wrong.", feedback: "Isolation isn't resilience. You're losing your voice to avoid the risk of a mistake. Growth requires risk." },
      { id: "B", text: "The 'Humble Learner'—Say 'I'm still learning about this, but...'.", feedback: "Excellent. Admitting you're a beginner is a shield. It invites correction instead of condemnation." },
      { id: "C", text: "Only post what everyone else is posting to stay 'safe'.", feedback: "Echoing others isn't having a voice; it's 'Performance'. You don't have to be perfect to be genuine." }
    ],
    microWins: [
      { id: "1", text: "Read one article from a perspective you don't usually see." },
      { id: "2", text: "Ask a trusted friend to explain a concept you're confused about." },
      { id: "3", text: "Post one thing that is 100% your own opinion, even if it's small." }
    ],
    lesson: "Authenticity is better than accuracy in a social space. You don't have to be an expert to care. Most 'call-outs' are about growth, not destruction, if you're willing to listen.",
    reflectionQuestions: [
      "Why is being 'wrong' the scariest thing on the internet right now?",
      "Who is someone you've seen handle a mistake with grace? What did they do?",
      "How can you be more forgiving of others' mistakes so you can be more forgiving of your own?"
    ],
    icon: "ShieldAlert",
    courageLooksLike: "Courage is the power to be 'corrected' in public and keep moving.\nIt's the bravery to say 'I didn't know that, thank you for telling me'.",
    bodyCheckIn: "Check your throat. Does it feel tight when you want to speak? That's the 'Silence Guard'. Take a breath. Your voice is allowed to be 'in progress'.",
    socialScripts: [
      "I'm still educating myself on [Topic], but I'm really interested in [Part].",
      "I might not have all the right words yet, but I wanted to show my support.",
      "Thanks for pointing that out, I'm glad I know now."
    ],
    perspectiveShift: "The internet makes mistakes feel like 'tattoos'. In reality, most people are too busy with their own lives to track every error you make.",
    miniChallenge: "Admit you don't know the definition of a 'trending' word or concept to a friend today. Practice being 'The Learner'.",
    emergencyReassurance: "A mistake is not a cancellation. You are allowed to be a student of the world. Perfection is the enemy of progress."
  },
  {
    id: "tn-productivity-guilt",
    title: "The Leisure Trap",
    ageGroups: ["gen-z"],
    scenario: "You have a free afternoon. You spend it playing video games or napping. By evening, you feel 'lazy', 'worthless', and like you've 'fallen behind' every other teen on the internet.",
    question: "How do you fight 'Rest Shaming'?",
    choices: [
      { id: "A", text: "Force yourself to work until 2 AM to 'catch up'.", feedback: "This is 'Punishment-Work'. It's low quality and it trains your brain to associate productivity with suffering." },
      { id: "B", text: "The 'Scheduled Reset'—Acknowledge rest IS a task.", feedback: "Perfect! Re-framing rest as 'Recovery Sessions' makes it part of your success, not an obstacle to it." },
      { id: "C", text: "Scroll for another 2 hours because you 'already ruined the day'.", feedback: "The 'What the Hell' effect. One hour of rest isn't a 'ruined day' unless you decide to stop trying entirely." }
    ],
    microWins: [
      { id: "1", text: "Say out loud: 'I am resting now, and that is okay'." },
      { id: "2", text: "Do one 10-minute 'reset' chore (like folding laundry)." },
      { id: "3", text: "Put your 'To-Do' list in a drawer so you can't see it while resting." }
    ],
    lesson: "High performance requires high recovery. You are not a 'Failure' for having human limits. Your worth isn't measured in 'hours worked' per day.",
    reflectionQuestions: [
      "Why does doing 'nothing' feel so much more stressful than doing 'everything'?",
      "Who taught you that leisure was 'wasted time'?",
      "What is one thing you do purely for fun that has 0% 'productive' value?"
    ],
    icon: "Zap",
    courageLooksLike: "Courage is the power to be 'unproductive' without being 'guilty'.\nIt's the bravery to own your boredom.",
    bodyCheckIn: "Check your shoulders. Are they still 'doing work' even while you're sitting on the couch? Drop them. Let the weight of your body sink into the seat. You are offline.",
    socialScripts: [
      "I'm taking a total break today, so I'll be pretty slow to reply. See ya!",
      "I've decided to be 'lazy' for a few hours. It's great."
    ],
    perspectiveShift: "The most 'successful' people on earth are often the ones who are best at doing absolutely nothing when they aren't working.",
    miniChallenge: "Spend 15 minutes today doing something with ZERO purpose. No goal, no points, no 'progress'. Just play.",
    emergencyReassurance: "You aren't a machine. You are a biological being that needs downtime. You haven't fallen behind; you've just stepped off the hamster wheel for a drink of water."
  },
  {
    id: "ya-roommate-boundaries",
    title: "The Shared Space Wall",
    ageGroups: ["young-adults"],
    scenario: "Your roommate keeps leaving dishes in the sink for days, or they're having loud guests over when you're trying to sleep. You've tried 'hints' and 'jokes', but nothing is changing.",
    question: "How do you draw the 'Roomie Line'?",
    choices: [
      { id: "A", text: "Move their dirty dishes onto their bed to send a 'message'.", feedback: "This is a 'War Starter'. Passive-aggression in a shared home leads to a toxic environment that YOU have to live in. Avoid it." },
      { id: "B", text: "The 'House Meeting'—Set a standard, not a complaint.", feedback: "Leadership. 'I want us to have a home where we can both relax. Can we agree on a 24-hour dish rule?' is a professional, effective move." },
      { id: "C", text: "Just do it all yourself so you don't have to talk about it.", feedback: "This is 'Resentment-Building'. You'll eventually snap. Boundaries are a form of maintenance for the relationship." }
    ],
    microWins: [
      { id: "1", text: "Write down exactly what your 'deal-breakers' are for a shared home." },
      { id: "2", text: "Practicing your 'House Meeting' opening line in the shower." },
      { id: "3", text: "Say 'Hey, can we talk about the kitchen for 5 mins?' today." }
    ],
    lesson: "Boundaries don't ruin relationships; they protect them from resentment. Clear rules are the kindness that allows two different people to live in one space.",
    reflectionQuestions: [
      "What is your 'Home Vibe'? (Clean? Social? Quiet?) Is that shared by your roommate?",
      "Why is talking about dishes scarier than talking about deep life stuff?",
      "How would it feel to walk into a kitchen that was always exactly how you liked it?"
    ],
    icon: "ShieldAlert",
    courageLooksLike: "Courage is being the 'serious' one who asks for a meeting.\nIt's the strength to be 'un-chill' for a moment to get 'peace' for a year.",
    bodyCheckIn: "Feel that knot in your gut when you walk into the kitchen? That's the 'Boundary Need'. It's not just about dishes; it's about your sense of safety in your own home.",
    socialScripts: [
      "Hey, I've been feeling a bit stressed by the kitchen lately. Can we touch base about a system that works for both of us?",
      "I've got a big day tomorrow, so I'm going to need the house to be quiet after 11 PM. Appreciate you!"
    ],
    perspectiveShift: "Most roommates aren't 'mean'; they are just unaware of your specific standards. They aren't trying to stress you out; they just don't see what you see.",
    miniChallenge: "Address one 'small' house annoyance today before it becomes a 'major' resentment. Use an 'I' statement.",
    emergencyReassurance: "You aren't a 'nag'. You are a person who pays for a space and has the right to feel calm in it. Standing up for your home is an essential adult skill."
  },
  {
    id: "ya-career-pivot",
    title: "The Pivot Point",
    ageGroups: ["young-adults"],
    scenario: "You're halfway through a degree or a year into a job, and you REALIZE you hate it. You feel like you've 'wasted' time and money, and everyone is expecting you to finish what you started.",
    question: "How do you handle 'The Great Pivot'?",
    choices: [
      { id: "A", text: "Finish the path you're on even if it makes you miserable.", feedback: "The 'Sunk Cost Fallacy'. Spending more time on a mistake doesn't make it right. It just makes the mistake longer." },
      { id: "B", text: "The 'Bridge Plan'—Master the skills you can use in the NEXT thing.", feedback: "Brilliant. No experience is wasted if you extract the 'transferable skills'. Every job has something to teach your future self." },
      { id: "C", text: "Quit everything today with no plan.", feedback: "Reactive! Pivot with purpose. Use your current position as the launchpad for the next one. Information is your best asset." }
    ],
    microWins: [
      { id: "1", text: "Research 3 people who changed careers in their 20s." },
      { id: "2", text: "Update your resume with 3 'Transferable' skills (e.g., leadership, tech)." },
      { id: "3", text: "Talk to one person in the field you WANT to enter." }
    ],
    lesson: "Your 20s are the research phase of your life, not the 'final result' phase. Pivoting is a sign of intelligence, not failure. It means you've gathered new data.",
    reflectionQuestions: [
      "If you could keep ONLY one part of your current job/study, what would it be?",
      "Who are you most afraid of 'disappointing' with a change?",
      "What would you do tomorrow if money and 'titles' didn't exist?"
    ],
    icon: "RotateCcw",
    courageLooksLike: "Courage is the power to say 'I was wrong about this path'.\nIt's the bravery to start from zero in a new direction because it feels more 'you'.",
    bodyCheckIn: "Check your energy levels. Are you 'gray' and exhausted every morning? Is your body dragging? That's the 'Misalignment Fatigue'. Listen to your lack of spark.",
    socialScripts: [
      "I've realized that my interests have shifted toward [New Thing], so I'm looking at how to transition in that direction.",
      "I appreciate everything I've learned here, but I'm ready for a new challenge that aligns better with my long-term goals."
    ],
    perspectiveShift: "You didn't 'waste' a year; you 'bought' a year of high-level information about what you DON'T want. That is extremely valuable data.",
    miniChallenge: "Join one group or newsletter related to the NEW field today. Just dip a toe in.",
    emergencyReassurance: "You aren't 'failing' at your path; you are 'upgrading' your destination. Most successful people have a 'Pivot Story' that they are proud of."
  },
  {
    id: "ya-digital-detox",
    title: "The Ghost Week",
    ageGroups: ["young-adults"],
    scenario: "You're feeling 'fried'. Every time you check your phone, you feel a mix of boredom and anxiety. You want to disconnect, but you're afraid you'll miss a work message, a social invite, or just 'fall behind'.",
    question: "How do you go 'Dark' safely?",
    choices: [
      { id: "A", text: "Wait until you have a 'reason' (like a holiday) to stop.", feedback: "Resilience means choosing detox because YOU need it, not because a calendar says it's okay. You own your time." },
      { id: "B", text: "The 'Semi-Dark'—Delete social apps but keep the 'Phone' active.", feedback: "Perfect. This keeps the 'Emergency Gate' open while closing the 'Distraction Gate'. It's the ultimate adult focus hack." },
      { id: "C", text: "Announce 'I'M LEAVING' with a long, dramatic post.", feedback: "This often backfires—you'll keep checking to see the reactions! Quiet exits are much more effective for actually resting." }
    ],
    microWins: [
      { id: "1", text: "Delete your 'most noisy' app for just 24 hours." },
      { id: "2", text: "Buy an actual alarm clock so your phone stays in the kitchen at night." },
      { id: "3", text: "Go for a walk without any device or headphones today." }
    ],
    lesson: "Your attention is the prize of a billion-dollar industry. Reclaiming it is an act of rebellion and self-care. The world continues without your constant witness.",
    reflectionQuestions: [
      "What is the first thing you think about when your phone is in another room?",
      "Why does silence feel so 'scary' or 'boring' at first?",
      "What is one hobby you forgot you loved because you were too busy scrolling?"
    ],
    icon: "EyeOff",
    courageLooksLike: "Courage is the power to be 'un-reachable' for a while.\nIt's the bravery to be alone with your own thoughts without a digital buffer.",
    bodyCheckIn: "Notice the 'Phantom Buzz'—feeling a vibration when there is no phone. That's your nervous system being 'over-tuned'. It needs a total silent reset.",
    socialScripts: [
      "I'm taking a break from apps for a few days to recharge. If it's an emergency, just call!",
      "Going off-grid for a bit. Catch ya on the flip side."
    ],
    perspectiveShift: "You aren't 'missing out'; you're 'tuning in'. You can't hear your own intuition if the whole world is shouting in your ears.",
    miniChallenge: "Leave your phone in a drawer for a full 4 hours today. Set a timer and see what happens to your focus.",
    emergencyReassurance: "The people who need you will find a way to reach you. The rest can wait. Your peace is more important than their 2 PM 'ping'."
  }
];
