window.onload = () => {
    document.querySelector(".BMI__weight_input").value = "";
    document.querySelector(".BMI__height_input").value = "";
};
const weight = document.querySelector(".BMI__weight_input");
const height = document.querySelector(".BMI__height_input");
const BMIbutton = document.querySelector(".BMI__button");
let result = document.querySelector(".BMI__number");
let info = document.querySelector(".BMI__info");
let BMIresult = 0;

const calcBMI = function (e) {
    e.preventDefault();
    if (weight.value === "" || height.value === "") {
        alert("Niepoprawne dane");
        return;
    } else {
        BMIresult = weight.value / Math.pow(height.value * 0.01, 2);
        result.innerText = `${BMIresult.toFixed(2)}`;
        console.log(BMIresult);
        if (BMIresult !== 0) {
            if (BMIresult <= 16) {
                info.innerText = "Wygłodzenie";
            } else if (BMIresult > 16.0 && BMIresult <= 16.99) {
                info.innerText = "Wychudzenie";
            } else if (BMIresult > 16.99 && BMIresult <= 18.49) {
                info.innerText = "Niedowaga";
            } else if (BMIresult > 18.49 && BMIresult <= 24.99) {
                info.innerText = "Twoja waga jest prawidłowa";
            } else if (BMIresult > 18.49 && BMIresult <= 24.99) {
                info.innerText = "Twoja waga jest prawidłowa";
            } else if (BMIresult > 24.99 && BMIresult <= 29.99) {
                info.innerText = "Nadwaga";
            } else if (BMIresult > 29.99 && BMIresult <= 34.99) {
                info.innerText = "Otyłość I stopnia";
            } else if (BMIresult > 34.99 && BMIresult <= 39.99) {
                info.innerText = "Otyłość II stopnia";
            } else if (BMIresult > 39.99) {
                info.innerText = "Otyłość III stopnia";
            }
        }
    }
};

BMIbutton.addEventListener("click", calcBMI);