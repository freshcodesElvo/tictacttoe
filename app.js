let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")
let computer = "O"


let array = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];


function start_game()
{
    array.forEach(btn => {
        btn.innerText = "";
    });
    human_play(array)
    
    winner(array)
   
   
 

}

function human_play(btns) {
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.innerText === "") {
                btn.innerText = "X"; 
                computer_play(array);
                  
            }
            else{
                console.log("wozaa")
            }
        });
    });
}
function computer_play(btns) {
    let randomIndex;
    
        for (i=0; i<=9;i++)
        {
            randomIndex = Math.floor(Math.random()*9)+1;
            if(btns[randomIndex].innerText === '')
                {
                    btns[randomIndex].innerText = 'O'
                  break
                    
                }
                else{
                    break
                }
                
            
        }
       
    
   
}
function winner(btns)
{
    if(btns[0].innerText === btns[1].innerText && btns[1].innerText === btns[2].innerText  && btns[2].innerText === btns[3].innerText ){
        console.log("You have won")
    }
}


start_game()

