 let randomnumber = (parseInt(Math.random()*100 + 1));

  const submit = document.querySelector('#subt');
  const   userinput = document.querySelector('#guessfield');
  const guesslot =  document.querySelector('.guesses');
  const result = document.querySelector('.lastresult');
 const lowOrHi = document.querySelector('.lowOrHi');
  const  startover = document.querySelector('.resultparas');

  const p = document.createElement('p')

  let prevGuess = [];
  let numGuess = 1 ;

  let playGame = true ;

  if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
         const  guess = parseInt(userinput.value)
         validateGuess(guess)
    })
  }

  function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a  number more than 1')
    }else if (guess < 1){
        alert('please enter a valid number')
    }else if ( guess > 100){
        alert('please  enter a  number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMassage(`game over.random number was ${randomnumber}`)
            endGame()
        }else{
          displayGuess(guess )
          checkGuess(guess)  
        }
    }
  }

  function checkGuess(guess){
    if(guess === randomnumber){
        displayMassage(`you guessed it right`)
        endGame()
    }else if (guess < randomnumber){
        displayMassage(`number is tooo low`)
    }else if ( guess > randomnumber){
        displayMassage(`number is too high`)
    }
  }

  function displayGuess(guess){
    userinput.value = ''
    guesslot.innerHTML += `${guess} , `
    numGuess++;
    result.innerHTML = `${11-numGuess}`
  }


  function displayMassage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
  }

  function endGame(){
    userinput.value = ''
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id= "newGame">start a new game</h2>`;
    startover.appendChild(p);
    playGame = false ;
    newGame();
  }

  function newGame(){
     const newgamebutton = document.querySelector('#newGame');
     newgamebutton.addEventListener('click',function(e){
    randomnumber = (parseInt(Math.random()*100 + 1));
    prevGuess = [];
    numGuess = 1;
    guesslot.innerHTML = '';
       result.innerHTML = `${11-numGuess}`;
    userinput.removeAttribute(`disabled`);
    startover.removeChild(p);
        playGame = true;
     });
  }

  

  


