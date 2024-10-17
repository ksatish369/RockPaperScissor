
function play(event){
    const options = ["rock", "paper", "scissor"]
    var displayMyOption = document.getElementById("my-option");
    var displayResult = document.getElementById("result")
    var displayComputerOption = document.getElementById("computer-option")

    const playAudioButton = document.getElementById("myAudio");
    playAudioButton.play();


    var selectedOption = event.target.id
    var computerOption = options[Math.floor(Math.random()*(4-1))]
    displayMyOption.innerText = selectedOption
    displayComputerOption.innerText = computerOption

    while(true){
        console.log("hi")
        break;
    }
    
    setTimeout(() => {
        console.log("print")
        if(selectedOption==computerOption)
            displayResult.innerText = "Tie!!"
        else if(selectedOption=="rock"){
            if(computerOption == "scissor"){
                displayResult.innerText = "You Won!!"
            }else{
                displayResult.innerText = "You Lose!!"
            }
        }
        else if(selectedOption=="scissor"){
            if(computerOption == "rock"){
                displayResult.innerText = "You Lose!!"
            }else{
                displayResult.innerText = "You Won!!"
            }
        }
        else if(selectedOption=="paper"){
            if(computerOption == "scissor"){
                displayResult.innerText = "You Lose!!"
            }else{
                displayResult.innerText = "You Won!!"
            }
        }
    }, 1500);
    
    




}