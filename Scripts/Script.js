// [+] For High Performance
const $ = document;

// [+] Variables
const weightInput = $.querySelector("#weightInput");
const heightInput = $.querySelector("#heightInput");
let weightValue = $.querySelector(".weightValue");
let heightValue = $.querySelector(".heightValue");
let resultBMINum = $.querySelector("#resultBmiNumber");
let resultBMItext = $.querySelector("#resultBmiText");

// [+] Functions
function bmiGenerator(){
    weightValue.innerHTML = weightInput.value;
    heightValue.innerHTML = heightInput.value;
}
function bmiCalculator(){
    let weight = weightInput.value;
    let height = heightInput.value;
    
    let bmiResult = weight / (Math.pow(height / 100, 2))
    
    weightValue.innerHTML = weight;
    heightValue.innerHTML = height;
    resultBMINum.innerHTML = bmiResult.toFixed(2);
    
    if(bmiResult >= 0 && bmiResult <= 18.5){
        resultBMItext.innerHTML = 'underweight';
        resultBMINum.style.color = "#FFBC00";
    }else if(bmiResult >= 18.6 && bmiResult <= 24.9){
        resultBMItext.innerHTML = 'normal';
        resultBMINum.style.color = "#099C00";
    }else if(bmiResult >= 25 && bmiResult <= 29.9){
        resultBMItext.innerHTML = 'Overweight';
        resultBMINum.style.color = "#E44900";
    }else if(bmiResult >= 30){
        resultBMItext.innerHTML = 'Obese';
        resultBMINum.style.color = "#C20600";
    }
}
function advanceWriting(text = "", bmiColor = "") {
    resultBMItext.innerHTML = null;
    resultBMINum.style.color = bmiColor;

    let index = 0 ;
    if(text){
        let writingInterval = setInterval(() => {
            if (index < text.length) {
                resultBMItext.innerHTML += text[index];
                index++;
            }
            else {
                clearInterval(writingInterval);
            }
        }, 60);
    }

}
// [+] Events
weightInput.addEventListener("input", bmiGenerator);
heightInput.addEventListener("input", bmiGenerator);
weightInput.addEventListener("change", bmiCalculator);
heightInput.addEventListener("change", bmiCalculator);
