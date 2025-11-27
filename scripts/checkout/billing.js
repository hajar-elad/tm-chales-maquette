import {products} from '../../data/products.js';
import {cart, getNbrOfItems, cartPTotal} from '../cart.js'; 
import {createModal} from '../chales.js';

 
function listingItemsBilling(){
    let html = '';
    cart.forEach((cartItem) => { 

       products.forEach((product) => {
           if (cartItem.id === product.id){
               html += `<div class="product-container js-product-container-${product.id}">
                        <img class="product-image js-product-image " data-product-id=${product.id} src="${product.image} ">
                        <div class="modal-container-hide js-modal-container-${product.id}"></div>
                        </div>`
        }})
    })
    document.querySelector('.cart-items')
       .innerHTML = html;
}

listingItemsBilling();

function renderPayementSummary(){
  let html = '';
  let totalCart = 0;
  const totalProducts = cartPTotal();
  let shippingFees = totalProducts >= 299 || totalProducts === 0 ? 0 : 30;

    totalCart = totalProducts + shippingFees;
        html =  `<div>Montant Total :</div>
                    <div class="total-cart">${totalCart.toFixed(2)} DHS</div>`

        document.querySelector('.payment-summary')
            .innerHTML = html;
}

//Display Payment Summary 
renderPayementSummary();

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
    })
  }

  showModal();

   /*  Get ITems List To Email */

  function GetItems() {
    let items = '';

    cart.forEach((cartItem) => {
        products.forEach((product) => {
          if(product.id === cartItem.id){
             items += `-Ref : ${product.id} Produit : ${product.name} QTE : ${cartItem.quantity}
             `;}
        })
    })
     return items
    }     

  // Get The Parms 

function myFunc() {
    let order = {
          items: GetItems(),
          nbr: getNbrOfItems(),
          fullName : `${document.querySelector('.js-f-name').value} ${document.querySelector('.js-l-name').value}`,
          email : document.querySelector('.js-email').value,
          phoneNbr : document.querySelector('.js-number').value,
          adress : `${document.querySelector('.js-adress').value} ${document.querySelector('.js-city').value} ${document.querySelector('.js-postal-code').value}`
        }
        localStorage.setItem('order', JSON.stringify(order));
}

// submitOrder

  document.querySelector('.js-submit-button')
    .addEventListener('click', () => {

        myFunc();

    // window.location.href= 'submitted.html';
    
    /* // Check All Fields Are Filled
     const inputs = document.querySelectorAll('input');
     for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') { 
        alert('Veuillez Renseigner Tous Les Champs SVP')
        break;
      }
      else{
        myFunc();
         window.location.href= 'order-sent.html';
      }}*/
  })




