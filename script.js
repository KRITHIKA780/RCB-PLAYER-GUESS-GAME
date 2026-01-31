const cricketPlayers = [
    {
        name: "Virat Kohli",
        clues: [
            "I am the captain and lead RCB with passion. I love playing aggressive cricket.",
            "I've won the IPL Purple Cap multiple times. My jersey number is 18.",
            "I'm one of the greatest batsmen in cricket history. India's former captain."
        ]
    },
    {
        name: "Rohit Sharma",
        clues: [
            "I am the captain of Mumbai Indians, the most successful IPL team.",
            "I'm known for my elegant batting style and leadership skills.",
            "I hit 264 runs in an ODI, the highest individual score in cricket."
        ]
    },
    {
        name: "MS Dhoni",
        clues: [
            "I'm a legendary wicket-keeper and former India captain.",
            "I led India to World Cup victory in 2011. My nickname is 'Captain Cool'.",
            "I play for Chennai Super Kings in IPL with incredible finishing abilities."
        ]
    },
    {
        name: "Sachin Tendulkar",
        clues: [
            "I'm the greatest batsman in cricket history with 100 international centuries.",
            "I'm the only player to score a double century in ODI cricket.",
            "I retired as the highest run-scorer in both Test and ODI cricket."
        ]
    },
    {
        name: "Steve Smith",
        clues: [
            "I'm an Australian batsman known for innovative and unconventional shots.",
            "I play for Rajasthan Royals in IPL and Australia in international cricket.",
            "I've won multiple International Cricketer of the Year awards."
        ]
    },
    {
        name: "Glenn Maxwell",
        clues: [
            "I am an Australian all-rounder known for explosive batting.",
            "I've scored crucial runs for RCB in the middle order. My nickname is 'The Big Show'.",
            "I play for Australia and am famous for my unorthodox shots."
        ]
    },
    {
        name: "Jasprit Bumrah",
        clues: [
            "I'm an Indian fast bowler known for my unique bowling action.",
            "I'm the spearhead of India's pace attack in international cricket.",
            "I play for Mumbai Indians and am a death bowling specialist."
        ]
    },
    {
        name: "Pat Cummins",
        clues: [
            "I'm an Australian fast bowler and captain of Australian Test team.",
            "I'm one of the most expensive players in IPL history.",
            "I play for Kolkata Knight Riders and am known for consistency."
        ]
    },
    {
        name: "Kane Williamson",
        clues: [
            "I'm a New Zealand batsman and captain of the national team.",
            "I'm known for my technically perfect batting style.",
            "I play for Sunrisers Hyderabad in IPL with consistency."
        ]
    },
    {
        name: "AB de Villiers",
        clues: [
            "I'm a South African legend known for playing 360-degree cricket.",
            "My nickname is 'Mr. 360' and I'm a master of innovative shots.",
            "I played for RCB and was known for scoring fastest 50s in cricket."
        ]
    },
    {
        name: "Babar Azam",
        clues: [
            "I'm a Pakistani batsman and captain of the national team.",
            "I'm one of the fastest to reach 5000 ODI runs.",
            "I play for Karachi Kings in PSL."
        ]
    },
    {
        name: "David Warner",
        clues: [
            "I'm an Australian opening batsman with an aggressive style.",
            "I led Sunrisers Hyderabad to IPL victory in 2016.",
            "I'm known for my record-breaking opening partnerships."
        ]
    },
    {
        name: "Yuzvendra Chahal",
        clues: [
            "I'm an Indian leg-spinner known for my googly and variations.",
            "I play for Rajasthan Royals and have taken many IPL wickets.",
            "I'm the fastest Indian to reach 50 T20I wickets."
        ]
    },
    {
        name: "Rashid Khan",
        clues: [
            "I'm an Afghan leg-spinner and captain of the national team.",
            "I'm one of the youngest players to captain in international cricket.",
            "I play for Gujarat Titans and am a mystery spinner."
        ]
    },
    {
        name: "Shikhar Dhawan",
        clues: [
            "I'm an Indian left-handed opening batsman.",
            "I'm known for my successful partnerships at the top of the order.",
            "I play for Sunrisers Hyderabad and Delhi Capitals in IPL."
        ]
    },
    {
        name: "Hardik Pandya",
        clues: [
            "I'm an Indian all-rounder who can bat and bowl.",
            "I'm the captain of Gujarat Titans in IPL.",
            "I'm known for hitting sixes and bowling at the death."
        ]
    },
    {
        name: "Suresh Raina",
        clues: [
            "I'm an Indian middle-order batsman, the 'Chinna Thala' of cricket.",
            "I play for Chennai Super Kings and am known for my aggressive style.",
            "I'm consistent in T20 cricket with excellent record in IPL."
        ]
    },
    {
        name: "KL Rahul",
        clues: [
            "I'm an Indian batsman and wicket-keeper who plays in IPL.",
            "I captain Lucknow Super Giants in IPL.",
            "I'm known for my stylish batting across all formats."
        ]
    },
    {
        name: "Virender Sehwag",
        clues: [
            "I'm a legendary Indian opener known for aggressive cricket.",
            "I played for Delhi Daredevils and Sunrisers Hyderabad in IPL.",
            "I'm the fastest to 5000 and 10000 ODI runs."
        ]
    },
    {
        name: "Lasith Malinga",
        clues: [
            "I'm a Sri Lankan fast bowler with a unique action.",
            "I was captain of Sri Lanka and took many ODI wickets.",
            "I won IPL with Mumbai Indians multiple times."
        ]
    },
    {
        name: "Yunus Khan",
        clues: [
            "I'm an Indian all-rounder representing India.",
            "I'm known for my pace bowling and lower-order batting.",
            "I play for multiple IPL teams."
        ]
    },
    {
        name: "Anil Kumble",
        clues: [
            "I'm a legendary Indian leg-spinner with the most Test wickets.",
            "I took 619 Test wickets in my career, a record for spin bowling.",
            "I was captain of India and later coached the national team."
        ]
    },
    {
        name: "Rahul Dravid",
        clues: [
            "I'm the 'The Wall' of Indian cricket, known for solid defense.",
            "I scored over 13,000 Test runs, the most consistent batsman.",
            "I'm now the head coach of Indian national team."
        ]
    },
    {
        name: "Ravi Ashwin",
        clues: [
            "I'm an Indian off-spinner and all-rounder.",
            "I'm one of the fastest to 500 Test wickets.",
            "I play for Rajasthan Royals and Delhi Capitals in IPL."
        ]
    },
    {
        name: "Mitchel Johnson",
        clues: [
            "I'm an Australian fast bowler with a devastating bouncer.",
            "I took 313 Test wickets and was a World Cup champion.",
            "I played for multiple IPL teams with great success."
        ]
    }
];

let gameState = {
    currentPlayer: null,
    currentClueIndex: 0,
    score: 0,
    streak: 0,
    questionsAsked: 0,
    gameActive: true
};

const totalQuestions = 25;
const totalQuestionsEl = document.getElementById('totalQuestions');

totalQuestionsEl.textContent = totalQuestions;
const submitBtn = document.getElementById('submitBtn');
const hintBtn = document.getElementById('hintBtn');
const skipBtn = document.getElementById('skipBtn');
const resetBtn = document.getElementById('resetBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const clueEl = document.getElementById('clue');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const streakEl = document.getElementById('streak');
const questionsEl = document.getElementById('questions');
const clueNumEl = document.getElementById('clueNum');
const finalScoreEl = document.getElementById('finalScore');
const resultMessageEl = document.getElementById('resultMessage');
const gameOverModal = document.getElementById('gameOverModal');

// Event Listeners
submitBtn.addEventListener('click', checkGuess);
hintBtn.addEventListener('click', getHint);
skipBtn.addEventListener('click', skipQuestion);
resetBtn.addEventListener('click', resetGame);
playAgainBtn.addEventListener('click', resetGame);

guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

// Initialize Game
function initGame() {
    gameState = {
        currentPlayer: null,
        currentClueIndex: 0,
        score: 0,
        streak: 0,
        questionsAsked: 0,
        gameActive: true
    };
    updateStats();
    startNewQuestion();
}

// Start New Question
function startNewQuestion() {
    if (gameState.questionsAsked >= 25) {
        endGame();
        return;
    }

    const randomIndex = Math.floor(Math.random() * cricketPlayers.length);
    gameState.currentPlayer = cricketPlayers[randomIndex];
    gameState.currentClueIndex = 0;
    
    guessInput.value = '';
    feedbackEl.textContent = '';
    feedbackEl.className = '';
    
    displayClue();
    updateProgressBar();
}

// Display Current Clue
function displayClue() {
    if (gameState.currentPlayer) {
        const clue = gameState.currentPlayer.clues[gameState.currentClueIndex];
        clueEl.textContent = clue;
        clueNumEl.textContent = gameState.currentClueIndex + 1;
        guessInput.focus();
    }
}

// Check Guess
function checkGuess() {
    if (!gameState.gameActive) return;

    const userGuess = guessInput.value.trim().toLowerCase();

    if (!userGuess) {
        showFeedback('Please enter a player name!', 'incorrect');
        return;
    }

    const correctName = gameState.currentPlayer.name.toLowerCase();

    if (userGuess === correctName) {
        gameState.score++;
        gameState.streak++;
        updateStats();
        showFeedback(`✓ Correct! It's ${gameState.currentPlayer.name}!`, 'correct');
        
        setTimeout(() => {
            gameState.questionsAsked++;
            updateStats();
            startNewQuestion();
        }, 1500);
    } else {
        gameState.streak = 0;
        updateStats();
        
        if (gameState.currentClueIndex < gameState.currentPlayer.clues.length - 1) {
            showFeedback(`✗ Wrong! Here's another hint...`, 'incorrect');
            setTimeout(() => {
                gameState.currentClueIndex++;
                displayClue();
            }, 1000);
        } else {
            showFeedback(`✗ Game Over! The answer was ${gameState.currentPlayer.name}.`, 'incorrect');
            setTimeout(() => {
                gameState.questionsAsked++;
                updateStats();
                startNewQuestion();
            }, 2000);
        }
    }
}

// Get Hint
function getHint() {
    if (!gameState.gameActive || !gameState.currentPlayer) return;
    
    const playerName = gameState.currentPlayer.name;
    const hint = playerName.split(' ').map(word => word[0] + '*'.repeat(word.length - 1)).join(' ');
    showFeedback(`Hint: ${hint}`, 'hint');
}

// Skip Question
function skipQuestion() {
    if (!gameState.gameActive) return;

    gameState.streak = 0;
    updateStats();
    showFeedback(`Skipped! The answer was ${gameState.currentPlayer.name}.`, 'incorrect');
    
    setTimeout(() => {
        gameState.questionsAsked++;
        updateStats();
        startNewQuestion();
    }, 1500);
}

// Show Feedback
function showFeedback(message, type) {
    feedbackEl.textContent = message;
    feedbackEl.className = `feedback-box feedback-${type}`;
}

// Update Stats Display
function updateStats() {
    scoreEl.textContent = gameState.score;
    streakEl.textContent = gameState.streak;
    questionsEl.textContent = `${gameState.questionsAsked}/${totalQuestions}`;
}

// Update Progress Bar
function updateProgressBar() {
    const progress = (gameState.questionsAsked / totalQuestions) * 100;
    document.querySelector('.progress-bar-fill').style.width = progress + '%';
}

// End Game
function endGame() {
    gameState.gameActive = false;
    finalScoreEl.textContent = gameState.score;
    
    let message = '';
    let achievement = '';
    
    const percentage = (gameState.score / totalQuestions) * 100;
    
    if (percentage === 100) {
        message = '🌟 PERFECT SCORE! You\'re a Cricket Legend!';
        achievement = '👑 Achievement: Cricket Master Unlocked!';
    } else if (percentage >= 80) {
        message = '🏆 Excellent! You\'re a True Cricket Fan!';
        achievement = '🔥 Achievement: Cricket Expert!';
    } else if (percentage >= 60) {
        message = '🎯 Great Job! You know cricket well!';
        achievement = '⭐ Achievement: Cricket Enthusiast!';
    } else if (percentage >= 40) {
        message = '✓ Good effort! Keep playing to improve!';
        achievement = '📚 Achievement: Cricket Learner!';
    } else {
        message = '💪 Keep learning! Try again to improve your score!';
        achievement = '🎮 Achievement: Game Player!';
    }
    
    resultMessageEl.textContent = message;
    document.getElementById('achievement').textContent = achievement;
    gameOverModal.classList.remove('hidden');
}

// Reset Game
function resetGame() {
    gameOverModal.classList.add('hidden');
    initGame();
}

// Start the game when page loads
window.addEventListener('DOMContentLoaded', initGame);
