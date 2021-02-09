// Keeps track of a winner
let winner = false;

// Get a reference to the cards div
const cards = document.querySelector('.cards');




// Get a reference to the cards buttons
const cardButtons = document.querySelectorAll('.card-btn');

// Get a reference to the Trump votes span
const nixonVotesEl = document.querySelector('.votes-number-nixon');

// Get a reference to the Biden votes span
const mcgovernVotesEl = document.querySelector('.votes-number-mcgovern');

// Set event listener for the vote buttons
cardButtons.forEach(cardButton => {
    cardButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-nixon')) {
            addVote(0, 'nixon', nixonVotesEl)
        } else {
            addVote(1, 'mcgovern', mcgovernVotesEl)
        }
    })
})