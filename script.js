// List of card image filenames
const cardImages = [
    "360 No Scope.png",
    "All In.png",
    "Anytime Anywhere.png",
    "Baldur_s Gate.png",
    "Bear Grylls.png",
    "Building Blocks.png",
    "Candy Crushed.png",
    "Cash Money.png",
    "Cheater_s Dice.png",
    "D20.png",
    "Dating Sim.png",
    "Dead or Alive.png",
    "Discotheque.png",
    "Double Jump.png",
    "Encumbered.png",
    "End Turn.png",
    "Explorer.png",
    "Fantasy Draft.png",
    "Fashion Souls.png",
    "Final Quest- Kill God.png",
    "Fireball!.png",
    "Fog of War.png",
    "Fourth-Rate Deck.png",
    "Game Night.png",
    "Ganked.png",
    "Git Gud.png",
    "Gotcha.png",
    "Hadoken.png",
    "Heart of the Cards.png",
    "I Need Healing!.png",
    "In-N-Out.png",
    "Itsa Me.png",
    "Jump In.png",
    "Jumpscare.png",
    "LAN Party.png",
    "Leaderboard.png",
    "Leisure Time.png",
    "Leroy Jenkins.png",
    "Level 1 Grunt.png",
    "Level Up.png",
    "Literature Club.png",
    "Live Die Repeat.png",
    "Main Quest.png",
    "Mana Points.png",
    "Master Race.png",
    "Movement Speed.png",
    "Multidimensional.png",
    "Nuclear Gandhi.png",
    "Package Secured.png",
    "Play Has No Limits.png",
    "Press X to Doubt.png",
    "Second Life.png",
    "Skill Points.png",
    "Sky_s the Limit.png",
    "Solipsism.png",
    "Warrior, Mage, Thief.png",
    "Wave 1.png",
    "Wheel of Fortune.png",
    "Zerg Rush.png",
    // Add all your PNG filenames here
];

// Path to your PNGs (update if needed)
// For local files, browsers may block file:// URLs for security reasons.
// It's best to put your images in the same folder as this HTML file or in a subfolder.
// Example: const cardPath = "./cards/";
// For now, let's use a relative path:
const cardPath = "./PNG Cards/";

function getRandomCardIndex(excludeIndex) {
    let idx;
    do {
        idx = Math.floor(Math.random() * cardImages.length);
    } while (idx === excludeIndex && cardImages.length > 1);
    return idx;
}

let currentCardIndex = -1;

function randomizeCard() {
    const idx = getRandomCardIndex(currentCardIndex);
    currentCardIndex = idx;
    const img = document.getElementById('cardImage');
    img.src = cardPath + cardImages[idx];
    img.alt = cardImages[idx];
    streak += 1;
    document.getElementById('streakCounter').innerHTML = streak;
    console.log(streak);
    updateStreakDisplay(1, "#ffffff");
    startStreakTimer();
}

// Initialize with a random card on load
// window.onload = randomizeCard; 

// --- Streak Counter Logic ---
let streak = -1;
let streakTimeout = null;
const streakCounter = document.getElementById('streakCounter');
const randomizeBtn = document.getElementById('randomizeBtn');

function updateStreakDisplay(opacity = 1, color = "#ffffff") {
    if (streakCounter) {
        streakCounter.textContent = streak;
        streakCounter.style.opacity = opacity;
        streakCounter.style.color = color;
    }
}

function resetStreak() {
    streak = 0;
    updateStreakDisplay(1, "#ffffff");
}

function startStreakTimer() {
    let elapsed = 0;
    if (streakTimeout) clearInterval(streakTimeout);
    streakTimeout = setInterval(() => {
        elapsed += 1;
        if (elapsed >= 45 && elapsed < 60) {
            // Fade out from 45s to 60s
            let fadeProgress = (elapsed - 45) / 15; // 0 to 1
            let opacity = 1 - fadeProgress;
            // Keep color white, only fade opacity
            let color = "#ffffff";
            updateStreakDisplay(opacity, color);
        } else if (elapsed >= 60) {
            resetStreak();
            clearInterval(streakTimeout);
            streakTimeout = null;
        } else {
            updateStreakDisplay(1, "#ffffff");
        }
    }, 1000);
}

if (randomizeBtn) {
    randomizeBtn.addEventListener('click', () => {
        randomizeCard();

    });
}

window.onload = () => {
    randomizeCard();
    updateStreakDisplay();
}; 