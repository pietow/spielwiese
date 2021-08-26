
let bmi = (m, h) => m / (h * h);
let [markM, markH, johnM, johnH] = [60, 1.70, 100, 2.00]
let [markBMI, johnBMI] = [bmi(markM, markH), bmi(johnM,johnH)]
console.log(`BMI of Mark: ${markBMI}`);
console.log(`BMI of John: ${johnBMI}`);

let isMarkBMIHeigher = markBMI > johnBMI;
console.log(`Is Mark’s BMI higher than John’s? Why yes, it’s ${isMarkBMIHeigher}, it is.`)

if (isMarkBMIHeigher === true) {
    console.log(`mark has an ${markBMI}`)
} else {
    console.log(`john has an ${johnBMI}`)
}
