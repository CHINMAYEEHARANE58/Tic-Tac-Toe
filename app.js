// Iteration 1- declare all the variables

const boxElements = document.querySelectorAll(".box")

let winningCombination = 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]

const Message = document.getElementById("message")
const PlayAgain = document.getElementById("button")
const Result = document.getElementById("result")

var click = 0;
let xAttempts = []
let oAttempts = []
let wonTheGame = 0;

// Iteration 2- onclick function
boxElements.forEach((el,i,arr)=>{
    console.log(el)

    el.addEventListener("click", ()=>{
        handleClick(event)
    })
})

function handleClick(e){
    // console.log(e)

    let id = e.target.id;
    let p = document.createElement("p")
    p.setAttribute("id","text");
    boxElements[id-1].append(p);

    // if my clcik is even or odd
    if(click%2==0){
        // for even  num
        p.innerHTML = "X"
        p.style.color = "yellow"
        xAttempts.push(parseInt(id-1)) 
        result(winningCombination,xAttempts,"X")
    }

    else{
        p.innerHTML = "O"
        p.style.color = "red"
        oAttempts.push(parseInt(id-1))
        result(winningCombination,oAttempts,"O")
    }
    
    click++

    // condition for tie
    if(click == 9 && wonTheGame==0){
        Result.style.visibility = "visible";
        Message.innerHTML = "It's a Tie"
    }

}

// Iteration 3- result funtion

function result(winningCombination,attempts,player){
    let count =0;
    let checker =[];

    for(let i=0; i<winningCombination.length; i++){
        if(Array.isArray(winningCombination[i])){
            result(winningCombination[i],attempts,player)  //recursive function
        }
        else{
            if(attempts.includes(winningCombination[i])){
                console.log("inside the checker")
                checker.push(true)
                count++
            }
            else{
                checker.push(false)
            }
        }
    }
    console.log(checker)
    if(checker.every(el=> el === true) && count>2){
        Result.style.visibility = "visible";
        Message.innerHTML = "The Winner is " + player + "!";
        wonTheGame =1;
    }
}
// Iteration 4- restart function

button.onclick=()=>{
    window.location.href = "./index.html"
} 