window.addEventListener('load', init);

//Global variables
let time = 5;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'creepy',
  'happy',
  'style',
  'clothes',
  'running',
  'camp',
];

// Inititalize game
function init() {
	// Load word from array
	showWord(words);
	// Start matching on word input
	wordInput.addEventListener('input', startMatch);
	// Call countdown every second
	setInterval(countdown, 1000);
	// Check game status
	setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
	if(matchWords()) {
		isPlaying = true;
		time = 6;
		showWord(words);
		wordInput.value = '';
		score++;
	}

	// If score is -1 dislay 0
	if(score = -1) {
	scoreDisplay.innerHTML = score;
	} else {

	}
	
}

// Match current word to wordInput
function matchWords() {
	if(wordInput.value === currentWord.innerHTML) {
			message.innerHTML = 'Correct!';
			return true;
		} else {
			message.innerHTML = '';
			return false;
	}
}

// Pick & show random word
function showWord(words) {
	// Generate random number
	const randIndex = Math.floor(Math.random() * words.length);
	// Use random number to choose index number, random word displays
	currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
	// Limits time
	if(time > 0) {
		// Decrement
		time--;
	} else if(time === 0) {
		// Game is over
		isPlaying = false;
	}
	// Show time
	timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
	if(!isPlaying && time === 0) {
		message.innerHTML = 'Game Over!';
		score = -1;
	}
}