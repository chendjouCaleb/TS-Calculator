import { Evaluator } from "./evaluator";
import { isExpressionKey } from "./util";
import { CalculatorInput } from "./calculator.input";
import { Calculator } from "./calculator";

let ev = new Evaluator("cos(90)+sin(180)+5");
new Evaluator("");
new Evaluator("1*10+12+32-4");
new Evaluator("17.36/10+45");
new Evaluator("+17.36+45");
new Evaluator("-17.36+45");
new Evaluator(".36+45");
new Evaluator("(.363)+45");
new Evaluator("10^2+45");
new Evaluator("3!+45");

new Evaluator("PI+45");
new Evaluator("10E+47");
new Evaluator("3cos(90)+E");

let input = document.getElementById("calculator-input-field");
let resultDiv = document.getElementById("result");
let error = document.getElementById("error");

resultDiv.innerHTML = "";
error.innerHTML = "";

let calculatorInput = new CalculatorInput(<HTMLInputElement>input);

let calculator = new Calculator();
calculator.initialize();



input.addEventListener("keydown", (e) => {
    console.log(e.key);
    const  target:HTMLInputElement = <HTMLInputElement>e.target;
    let expression = target.value;
    let selectionStart = target.selectionStart;
    let selectionEnd = target.selectionEnd;
    

    const selectedText = expression.substring(target.selectionStart, target.selectionEnd);
    if(isExpressionKey(e.key)){
        e.preventDefault();

        if(e.key === '('){
            expression = expression.substring(0, selectionStart) + '('
                + selectedText + ')' + expression.substring(selectionEnd);
                target.value = expression;
            target.setSelectionRange(selectionStart + 1, selectionStart + selectedText.length + 1);
            
        }
        else{
            expression = expression.substring(0, target.selectionStart) + e.key + 
            expression.substring(target.selectionEnd);
            target.value = expression;
            target.setSelectionRange(selectionStart + 1, selectionStart + 1);
        }
    }
    
})


let calculatorButtons = document.querySelectorAll(".calculator-btn-number");

for(let i = 0; i < calculatorButtons.length; i++){
    calculatorButtons[i].addEventListener("click", (e) => {
        const n = (<HTMLButtonElement>e.target)  .getAttribute("number-val");
        calculatorInput.addTextAtCursorPosition(n);
    })
}

calculatorInput.onValueChange.subscribe(value => {
    error.innerHTML = "";
    resultDiv.innerHTML = "";
    let evaluator = new Evaluator(value);
    try{
        let result = evaluator.Eval();
        resultDiv.innerHTML = result.toString();
    }catch(e){
        error.innerHTML = e;
    }
});

let changer = document.querySelector("#keybord-mode-changer") as HTMLButtonElement;
let keyboardModeOne = document.querySelector(".keybord-mode-1") as HTMLDivElement;
let keyboardModeTwo = document.querySelector(".keybord-mode-2") as HTMLDivElement;
let height = getComputedStyle(keyboardModeOne, null).height;
keyboardModeOne.style.transitionDuration = ".3s";

changer.style.transitionDuration = ".3s";
changer.style.borderBottom = "solid #3399FF";

let keyBoardMode = 1;
changer.addEventListener("click", e => {
    toggleKeyBoardMode();
});

function toggleKeyBoardMode(){
    if(keyBoardMode === 1){
        keyBoardMode = 2;
        keyboardModeOne.style.height = "0px";
        changer.style.borderBottomWidth = "3px"
    }else{
        keyBoardMode = 1;
        keyboardModeOne.style.height = height;
        changer.style.borderBottomWidth = "0px";
    }
}