import {listProducts, createModal} from './chales.js';
import {products} from '../data/products.js';  
import {cart, addToCart, getNbrOfItems} from './cart.js';


const category = 'foulardsAMotifs';
 
 
 // Listing Products

  document.querySelector('.grid-container')
     .innerHTML = listProducts(category);;

  document.querySelector('.js-cart-quantity')
     .innerHTML = getNbrOfItems();
 
 // Add Items To Cart
 
 document.querySelectorAll('.add-to-cart-btn')
    .forEach((button) => {
        button.addEventListener('click',() => {
        const    productId = button.dataset.productId;
          addToCart(productId,category);
        document.querySelector('.js-cart-quantity')
       .innerHTML = getNbrOfItems();}
        )
     
    })  
   
      console.log(cart);

 // Show Details Of Selected Product

     function showModal(){

       document.querySelectorAll('.js-product-image')
         .forEach((image) => {
           image.addEventListener('click',() => {
           const productId = image.dataset.productId;
           createModal(productId);
   
       const modalContainer = document.querySelector(`.js-modal-container-${productId}`);
               modalContainer.classList.add('modal-container-show');
         const closeModal = document.querySelector(`.js-close-modal-${productId}`); 
         closeModal.addEventListener('click', () => {
         modalContainer.classList.remove('modal-container-show');})
        })

      })}

   showModal();

 //Config The Search Bar & Search Button

   function matchingProductSearch(value){

          products.forEach((product) => {
            const productContainer = document.querySelector(`.js-product-container-${product.id}`);
            if(product.category === category && !(product.name.includes(value))){
            productContainer.style.display = 'none';
           }
          else if(product.category === category && product.name.includes(value)){
               // document.querySelector('.grid-container')
               //   .innerHTML = html;
                  console.log(value);
                  productContainer.style.display = 'inline';
               }
              })
   }
   
    document.querySelector('.searchButton')
       .addEventListener('click',() => {
          let value = document.querySelector('.search-bar').value;
          matchingProductSearch(value);
    })

     document.querySelector('.search-bar')
      .addEventListener('input',e => {
          let value = e.target.value;
          matchingProductSearch(value);
    })

    
           
