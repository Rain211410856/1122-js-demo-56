import { products_56, all_products_56 } from './p1_data_56.js';

let product_56 = products_56;

console.log('products_56', products_56);
// let count = { numBlogs: 7, index: 2 };

const productContainer = document.querySelector('.products-container');

const DisplayProducts = (products) => {
  let displayProducts = products
    .map((item) => {
      const { id, title, price, category, img } = item;
      return `
      
      <div class="single-product">
        <img
          src="${img}"
          class="single-product-img img"
          alt="high-back bench"
        />
        <footer>
          <h3 class="name">${title}(${id})</h3>
          <span class="price">${price}</span>
        </footer>
      </div>
   
      `;
    })
    .join('');
  productContainer.innerHTML = displayProducts;
};

document.addEventListener('DOMContentLoaded', () => {
  DisplayProducts(product_56);
});
