import menu from './data_56.js';

const sectionCenter = document.querySelector('.section-center');

//完成後除錯必備 console.log('xxx',xxx);
console.log('menu',menu);

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
        `;
    })
    // .join('')之後return這個陣列會變成字串
    .join('');
    console.log('displayMenu', displayMenu);
    sectionCenter.innerHTML = displayMenu;
};

// JS只有一個執行續，會一直往下讀不等人，所以需要callback function的動作，指在執行完通知我
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
});