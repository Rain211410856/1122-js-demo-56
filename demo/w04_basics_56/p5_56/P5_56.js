// import時，來源一定要手動+JS!!!!!!!
import { tours_56 } from './data_56.js';

console.log('tours_56', tours_56);

const section = document.querySelector('.section-center');

const displayTours_56 = () => {
    // .map專門處理陣列，能把陣列如數讀進來
    const toursInfo = tours_56.map((tour) => {
        // ``符號可以夾  "字串" 可以貼進網頁內容
        return `
        <article class="single-tour">
        <img src="./tour_theme/img/paris.jpg" alt="Best of Paris in 7 Days Tour" />
        <footer>
          <div class="tour-info">
            <h4>Best of Paris in 7 Days Tour</h4>
            <h4 class="tour-price">$1,995</h4>
          </div>
          <p>
            Paris is synonymous with the finest things that culture can
            offer — in art, fashion, food, literature, and ideas. On this
            tour, your Paris-savvy Rick Steves guide will immerse you in the
            very best of ...<button>read more</button>
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