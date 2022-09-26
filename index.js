// Grab all the buttons in the 
// loop through the array and add event listener to each button  
//when the button is clicked, get the buttons value and store iin global variable
// grab the display elementt 
// add the value to th edisplay element


// get all the button

const buttons = document.querySelectorAll(".btn");

const displayElem = document.querySelector(".display");

const buttonArray = Array.from(buttons);

let strToDisplay = " ";

const operators = ["%","/","*","+","-"];

let lastOperstor = " ";

//for audio to play
const audio =new Audio("electronic-future-beats-117997.mp3")

buttonArray.map((btn) => {

    btn.addEventListener("click", () => {
        const val = btn.innerText;
        console.log(val);


        displayElem.style.background="white";
        displayElem.style.color="black";
        displayElem.classList.remove("prank");

        if (val === "AC"){
            strToDisplay = "";
            display();
            return;
        }

        if (val === "C"){
            strToDisplay = strToDisplay.slice(0, -1);
            return display(strToDisplay);
        }

        if (val === "="){
            const lastChar = strToDisplay[strToDisplay.length - 1];
            
            if(operators.includes(lastChar)){
                strToDisplay = strToDisplay.slice(0, -1);
            }
            return total();
        }

        if (operators.includes(val)){
            const lastChar =strToDisplay[strToDisplay.length - 1];

            if(operators.includes(lastChar)){
                strToDisplay = strToDisplay.slice(0, -1);
            }
            
            lastOperstor = val;
        }

        if(val === "."){
            if (lastOperstor){
                const operatorIndex = strToDisplay.lastIndexOf(lastOperstor);

                const lastNumberSet = strToDisplay.slice(operatorIndex + 1);

                if (lastNumberSet.includes(".")){
                    return;
                }
                console.log(operatorIndex);
            }

            if (!lastOperstor && strToDisplay.includes(".")){
                return;
            }
        }

        strToDisplay += val;
        display(strToDisplay);
    });

   


        const display = (str) => {
            displayElem.innerText = str || "0.00";
        }

        const total = () => {
            const extra = randomNumber();

            if (extra){
                displayElem.style.background="red";
                displayElem.style.color="white";
                displayElem.classList.add("prank");
            }
            const ttl = eval(strToDisplay) + extra;
            display(ttl);
            strToDisplay = ttl.toString();
        }

});



//for prank

const randomNumber = () => {
    
    const num = Math.round(Math.random()*10);
    return num < 3 ?num : 0;
}

