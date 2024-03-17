// import時，來源一定要手動+JS!!!!!!!
import { tours_56 } from './data_56.js';

console.log('tours_56', tours_56);

const section = document.querySelector('.section-center');

const displayTours_56 = () => {
    // .map專門處理陣列，能把陣列如數讀進來
    const toursInfo = tours_56
    .map((tour) => {
        // const {} = 變數名稱;=解構變數名稱內的資料
        const {id, info, local_img, name, price } = tour;
        // ``符號可以夾  "字串" 可以貼進網頁內容
        // 下方文案處可以載入同格式不同資料，也就是變數，語法為${}
        return `
        <article class="single-tour">
        <img src=${local_img} alt=${name} />
        <footer>
          <div class="tour-info">
            <h4>${name}</h4>
            <h4 class="tour-price">$${price}</h4>
          </div>
          <p>
           ${info}
          </p>
          <button class="delete-btn">not interested</button>
        </footer>
      </article>
        `;
    })
    .join('');
    section.innerHTML = toursInfo;
};

window.addEventListener('DOMContentLoaded', () => {
    displayTours_56();
});