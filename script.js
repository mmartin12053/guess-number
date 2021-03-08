var guessNumb = 0;
var randomNumber = 0;
var hs = 0;
var numbersGuessed = []
document.getElementById('submitBtn').disabled = true;
console.log(randomNumber)


function guesses(){
    if(guessNumb>=10){
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('startBtn').disabled = false;
    document.getElementById('yourGuess').innerHTML = "you've guessed to many times. try again."
    }
}

function highScore(){
    var y;
    y = 0;
    if (hs>y){
        y++;
        document.getElementById('highScore').innerHTML = "highscore: " + hs;

    }
}

function startFunction(){

  document.getElementById('submitBtn').disabled = false;
  document.getElementById('startBtn').disabled = true;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  guessNumb = 0;
  document.getElementById('numGuessed').innerHTML = "you've guessed 0 times."
  document.getElementById('asdf').innerHTML = '';
  document.getElementById('yourGuess').innerHTML = '';
}




function myFunction() {
    var x, text;

    x = document.getElementById('num').value

    if(x<1 || x>100){
        text = 'hey there buddy, enter a number between 1 and 100 please';
        document.getElementById('asdf').innerHTML = text;
        document.getElementById('num').value = ""
    }else if(x == randomNumber){
        text = 'wow, good guessing';
        document.getElementById('asdf').innerHTML = text;
        document.getElementById('yourGuess').innerHTML = ''
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('startBtn').disabled = false;
        document.getElementById('num').value = "";
        guessNumb++;
        document.getElementById('numGuessed').innerHTML = "you've guessed " + guessNumb + ' times.';
        guesses();
        hs++;
        numbersGuessed.push(" " + randomNumber);
        document.getElementById('array').innerHTML = numbersGuessed;
        highScore()
    }else if(x<randomNumber){
        text = 'whoops, your a bit to low';
        document.getElementById('asdf').innerHTML = text;
        document.getElementById('yourGuess').innerHTML = 'you chose ' + x;
        document.getElementById('num').value = "";
        guessNumb++;
        document.getElementById('numGuessed').innerHTML = "you've guessed " + guessNumb + ' times.';
        guesses();
    }else if(x>randomNumber){
        text = 'whoops, your a bit to high';
        document.getElementById('asdf').innerHTML = text;
        document.getElementById('yourGuess').innerHTML = 'you chose ' + x;
        document.getElementById('num').value = "";
        guessNumb++;
        document.getElementById('numGuessed').innerHTML = "you've guessed " + guessNumb + ' times.';
        guesses();
    }
    
}


function restartFunction(){

    //i want to die =)
    numbersGuessed = []
    document.getElementById('array').innerHTML = numbersGuessed;
}







//#endregion