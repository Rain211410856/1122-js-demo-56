import menu from './data_56.js';

const sectionCenter = document.querySelector('.section-center');
//完成後除錯必備 console.log('xxx',xxx);
console.log('menu', menu);


const displayMenuItems = (menu) => {
    let displayMenu = menu.map((item) => {
        const {id, title, category, price, img, desc } = item;
        return `
        <article class="menu-item">
          <img
            src="${img}"
            alt="buttermilk"
            pancakes=""
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>${title}</h4>
              <h4 class="price">${price}</h4>
            </header>
            <p class="item-text">
              ${desc}
            </p>
          </div>
        </article>
        <div class="btn-container">
        <button type="button" class="filter-btn" data-id="all">${title}</button
      </div>
        `;
    })
    // .join('')之後return這個陣列會變成字串
    .join('');
    console.log('displayMenu', displayMenu);
    sectionCenter.innerHTML = displayMenu;
};

// const categories = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];
// set 動態陣列寫法，可以直接加入別的陣列資料，不用寫一大串
const menuCategories = new Set(
  menu.map((item) => {
    return item.category;
  })
);
console.log('menuCategories', menuCategories);

// 此處...menuCategories = ...某變數的所有資料
const categories = ['all', ...menuCategories];
console.log('categories', categories);

const displayMenuButtons = () => {};

// JS只有一個執行續，會一直往下讀不等人，所以需要callback function的動作，
// 指在執行完通知我，也就是return那一行的作用

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons();
});