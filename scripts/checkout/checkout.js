import {products} from '../../data/products.js';
import {cart, removeCartItem, getNbrOfItems, cartPTotal} from '../cart.js'; 
import {createModal} from '../chales.js';
// import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'; //calling external libary ESM version


/*             Working With Dates From External Library
console.log(dayjs()); //gives todays date
let today = dayjs(); //we save todays date in variable
console.log(today.format('dddd, MMMM D'));// format will display date in readble format (Tuesday, September 16)
console.log(today.add(7,'days')); // return date of today + 7 Days
console.log(today.add(2,'months')); // return date of today + 2 months*/

function listCartItems(){ 
    let html = '';

    if( cart.length === 0) {
        html=`<div class="product-container">
                <div class="empty-bascket-text">Votre Panier Est Vide!</div>
              </div>`; 
    }
    else{
    cart.forEach((cartItem) => { 

       products.forEach((product) => {
           if (cartItem.id === product.id){
               html += `<div class="product-container js-product-container-${product.id}">
                    <img class="product-image js-product-image" data-product-id=${product.id} src="${product.image}">
                    <div class="Product-infos">
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">${(product.price).toFixed(2)} DHS</div>
                        <div class="quantity">Quantité: ${cartItem.quantity}</div>
                    </div>
                    <button class="remove-item js-remove-item" data-product-id=${product.id} title= "Retirer Le Produit">
                    -</button>
                    <div class="modal-container-hide js-modal-container-${product.id}">
                    </div>
                  </div>`
        }})
    })
    } 
    document.querySelector('.grid-container')
       .innerHTML = html;
    
    document.querySelector('.js-cart-quantity')
          .innerHTML = getNbrOfItems();
}

// Display cart items  
listCartItems();


function showModal(){

     document.querySelectorAll('.js-product-image')
      .forEach((image) => {
         image.addEventListener('click',() => {
            console.log('ggg');
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


  function renderPayementSummary(){

  let html = '';
  let totalCart;
  const totalProducts = cartPTotal();
  const shippingFees = totalProducts >= 299 ||totalProducts === 0 ? 0 : 30;

    totalCart = totalProducts + shippingFees;
    html = `<div class="payment-summary-title">
                    Recapitulatif Commande:
                </div>

                <div class="total-products">
                    <div>Total Produits :</div>
                    <div class="total-products-money">${totalProducts.toFixed(2)} DHS</div>
                </div>

                <div class="shipping-total">
                    <div>Frais De Livraison :</div>
                    <div class="shipping-fees">${shippingFees.toFixed(2)} DHS</div>
                </div>

                <div class="total-amount">
                    <div>Montant Total :</div>
                    <div class="total-cart">${totalCart.toFixed(2)} DHS</div>
                </div>

                <button class="place-order-button js-place-order-button"> Valider La Commande </button>`
    document.querySelector('.payment-summary')
        .innerHTML = html;
        console.log(totalCart);
     
    if(totalCart === 0){
        let button = document.querySelector('.place-order-button');
        button.disabled =true;
        button.style.color = "black";
    }    
}

//Display Payment Summary
renderPayementSummary();


// Remove Item

document.querySelectorAll('.js-remove-item')
      .forEach((button) => {
         button.addEventListener('click',() => {
            
           const productId = button.dataset.productId;
            removeCartItem(productId);
            
        //Remove Item From Page
          document.querySelector(`.js-product-container-${productId}`).remove();

          renderPayementSummary();
          document.querySelector('.js-cart-quantity')
          .innerHTML = getNbrOfItems();
          })
})

function redirectToBilling(){
    document.querySelector('.js-place-order-button')
     .addEventListener('click',() => {
            window.location.href = 'billing.html';
         })  
}
        
redirectToBilling();