import {products} from '../data/products.js';
export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = [];
} 

export function getNbrOfItems(){
    let nbrOfItems = 0;
    cart.forEach((cartItem) =>{
       nbrOfItems += cartItem.quantity;
    })
    if(!nbrOfItems){nbrOfItems = '';}
    return nbrOfItems 
}


export function cartPTotal(){
    let totalProducts= 0;

   cart.forEach((cartItem) => { 
   
       products.forEach((product) => {
           if (cartItem.id === product.id){
            let price = (product.price) * cartItem.quantity;
            totalProducts += price ; 
           }
       })
   })
   return totalProducts
}

export function addToCart(productId, category){
    let matchingItem = '';

        if(cart.length === 0){
            cart.push(
                {   id :productId,
                    category,
                    quantity :1  })
        }
        else { cart.forEach((cartItem) => { 
                if(cartItem.id === productId){
                    matchingItem =cartItem   
                }
            })
           

            if(matchingItem){
               matchingItem.quantity +=1;
            }
            else {
                cart.push(
                {   id :productId,
                    category,
                    quantity :1  }) 
            }}

          localStorage.setItem('cart', JSON.stringify(cart));

          //update html

           getNbrOfItems();
    }

    
    // Remove Items From Cart Function

    export function removeCartItem(productId){
        let newCart = [];
         cart.forEach((cartItem) => {
            if (cartItem.id !== productId){
                newCart.push({
                 id :cartItem.id,
                    category: cartItem.category,
                    quantity : cartItem.quantity
               })
            }
         })
          cart = newCart;
          localStorage.setItem('cart', JSON.stringify(cart));
          
    }