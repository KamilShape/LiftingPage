window.onload = () => {
    document.querySelector('.calorie__age').value = ""
    document.querySelector('.calorie__weight').value = ""
    document.querySelector('.calorie__height').value = ""

}

const age = document.querySelector('.calorie__age')
const weight = document.querySelector('.calorie__weight')
const height = document.querySelector('.calorie__height')
const button = document.querySelector('.calorie__button')
const li1 = document.querySelector('.calorie__li1')
const li2 = document.querySelector('.calorie__li2')
const li3 = document.querySelector('.calorie__li3')

const calcCalorie = function (CPM) {
    let allCalories = ''
    const goal = document.querySelector('#goal').value
    console.log(goal)
    if (goal == 'mass') {
        allCalories = CPM + 200
        console.log(`Your calorie requirement is ${allCalories.toFixed(2)}calories.`)
    } else {
        allCalories = CPM - 300
        console.log(`Your Calorie Requirement is ${allCalories.toFixed(2)} calories.`)
    }
    li3.innerHTML = `Your Calorie Requirement is ${allCalories.toFixed(2)} calories.`
}
const calcCPM = function (BMR) {
    let CPM = '';
    const activity = document.querySelector('#cpm').value
    console.log(activity)
    if (activity == 0) {
        CPM = BMR * 1.2
        console.log(`Your Whole Metabolic Rate is ${CPM.toFixed(2)} calories.`)
    } else if (activity == 1) {
        CPM = BMR * 1.3
        console.log(`Your Whole Metabolic Rate is ${CPM.toFixed(2)} calories.`)
    } else if (activity == 2) {
        CPM = BMR * 1.5
        console.log(`Your Whole Metabolic Rate is ${CPM.toFixed(2)} calories.`)
    } else if (activity == 3) {
        CPM = BMR * 1.7
        console.log(`Your Whole Metabolic Rate is ${CPM.toFixed(2)} calories.`)
    } else {
        CPM = BMR * 2.0
        console.log(`Your Whole Metabolic Rate is ${CPM.toFixed(2)} calories.`)
    }
    li2.innerHTML = `Your Whole Metabolic Rate is ${CPM.toFixed(2)} calories.`
    calcCalorie(CPM)
}



const calculate = function (e) {
    e.preventDefault();
    let BMR = ''
    const sex = document.querySelector('#sex').value
    console.log(sex)
    if (age.value === '' || weight.value === '' || height.value === '') {
        alert('Nieprawidłowe dane')
        return
    } else {
        if (sex == 'M') {
            BMR = 9.99 * weight.value + 6.25 * height.value + 4.92 * age.value + 5
            console.log(`Your Basal Metabolic Rate is ${BMR.toFixed(2)} calories.`)


        } else {
            BMR = 9.99 * weight.value + 6.25 * height.value + 4.92 * age.value - 161
            console.log(`Your Basal Metabolic Rate is ${BMR.toFixed(2)} calories.`)

        }
        li1.innerHTML = `Your Basal Metabolic Rate is ${BMR.toFixed(2)} calories.`
    }
    calcCPM(BMR)

}

button.addEventListener('click', calculate)