// Return a list of cards
const getCards = () => {
    return candidates.map(candidate => {
        return `<div class="card">
            <img class="card-image" src="images/${candidate.id}.jpg">
            <div class="card-info">
                <div class="candidate-votes">
                    <span class="votes-number-${candidate.id}">${candidate.votes}</span>
                    <span class="votes-text">VOTES</span>
                </div>
                <div class="line"></div>
                <div class="candidate-info">
                    <span class="candidate-name">${candidate.name}</span>
                    <span class="candidate-party">${candidate.party}</span>
                </div>
            </div>
            <button class="card-btn btn-${candidate.id}">VOTE</button>
        </div>`
    })
}

// Adds one vote to the corresponding candidate.
const addVote = (index, candidate, votesEl) => {
    // Increase vote by one as long as there's not a winner
    if (!winner) {
        // Increase vote by one
        candidates[index].votes++;

        // Update votes element
        votesEl.textContent = candidates[index].votes;

        // Check if the candidate won
        isWinner(candidate, candidates[index].votes);
    }
}

// If candidate won, set winner variable to true
const isWinner = (candidate, votes) => {
    if (votes === 270) {
        winner = true;

        setWinnerLoser(candidate);
    }
}

// Shows who won and who lost
const setWinnerLoser = (candidate) => {
    if (candidate === "nixon") {
        document.querySelector('.btn-nixon').textContent = "WINNER";
        document.querySelector('.btn-mcgovern').textContent = "LOSER";
    } else {
        document.querySelector('.btn-mcgovern').textContent = "WINNER";
        document.querySelector('.btn-nixon').textContent = "LOSER";
    }
}

var audio = new Audio('audio / Are You Sure About That John Cena Sound Effect - SES.mp');

function playSound(){
    audio.play();
}

var audio2 = new Audio('Nixon I’m not a crook.mp3');

function playSound2(){
    audio2.play();
}


const s = [
    "Party: Republican",
    "Home state: Califonia", 
    "Running mate: Spiro Agnew"];
    
    
    function myFunction() {
      document.getElementById("demo").innerHTML = s[2];
    }
    

    const x = [
        "Party: Democratic",
        "Home state: South Dakota", 
        "Running mate: Sargent Shriver"];


        function myFunction2() {
  document.getElementById("demo2").innerHTML = x[2];
}


field.onclick = function (event){



    // find the window relative field coordinates 
    let fieldCoords = this.getBoundingClientRect();

    console.log(field.clientTop);
    //clientYop means border

    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight/2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth/2
    }

//prevent the ball from going out of bounds

if(ballCoords.top < 0) ballCoords.top = 0;
if(ballCoords.left < 0) ballCoords.left = 0;
if(ballCoords.left + ball.clientWidth > field.clientWidth) ballCoords.left = field.clientWidth - ball.clientWidth;
if(ballCoords.top + ball.clientHeight > field.clientHeight) ballCoords.top = field.clientHeight - ball.clientHeight;



    ball.style.left = ballCoords.left+'px'
    ball.style.top = ballCoords.top+'px'
}


//e-voting system 

loginForm.addEventListener('input', () => {
    if (3 && firstName.value.length > 2 && lastName.value.length > 3 && address.value.length > 3){
        loginBtn.removeAttribute('disabled');
    } else {
        loginBtn.setAttribute('disabled', 'disabled');
    }

});



function disable() {
    document.getElementById("mySelect").disabled=true;
  }
  function enable() {
    document.getElementById("mySelect").disabled=false;
  }


