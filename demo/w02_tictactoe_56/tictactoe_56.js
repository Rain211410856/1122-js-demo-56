const o ='o';
const x ='x';
let turn = 0;
let done = false;

const container = document.querySelector('#container');

const allLi = document.querySelectorAll('#board li');
const resetBtn = document.querySelector('#reset');

console.log('container', container);
console.log('allLi', allLi);
console.log('resetBtn', resetBtn);
// => == function 新寫法 要習慣
const reset = () => {
    // forEach=每個都要走一遍
    allLi.forEach( (item) => {
        item.classList = '';
        item.textContent = '+';
    });
    container.style.backgroundColor = '#666';
    turn = 0;
    done = false;
}

// 監控滑鼠，監聽點擊，監聽點擊reset按鈕
resetBtn.addEventListener('click', reset);