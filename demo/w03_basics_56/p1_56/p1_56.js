let c, f;
// prompt打開網頁跳出"要求輸入"的字串視窗
// Number(prompt())跳出要求輸入"數字"的視窗     顯示小數點兩位
c = Number(prompt('enter a temperature in C: ')).toFixed(2);
console.log('c', c);
f = ((c * 9.0 / 5 + 32)).toFixed(2);
// js變數用${ }表示
const output = `${c}C = ${f} F`;
console.log(output);

const result = document.querySelector('.result');
result.textContent = output;