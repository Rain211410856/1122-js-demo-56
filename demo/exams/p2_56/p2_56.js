const calculateBtn = document.querySelector('#calculate');
const bmiResult = document.querySelector('#result');
const suggest = document.querySelector('#suggest');

const bmiCalculation = (bmi) => {
  let bmiCalculations = bmi
    .map((item) => {
      const { };
     });
 };

const calculateBtns = document.querySelector('#calculate');
console.log(calculateBtns, 'calculateBtns');
calculateBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log('id', e.currentTarget.id);
    const bmi = e.currentTarget.id;
   });
 });

function bmiCalc_56(height, weight) {
  return weight / (height * height);
};

function bmiCalc(height, weight) {
  let bmi = bmiCalc_56(height, weight).toFixed(2);
  console.log(`For (h,w) = (${height},${weight}), the BMI = ${bmi}`);
};

function bmiCalcs(data) {
  data.forEach((item) => {
    bmiCalc(item.height, item.weight);
  });
};
function bmi_normal_low(height) {
  return 18.5 * (height * height);
}
function bmi_normal_high(height) {
  return 24 * (height * height);
}

