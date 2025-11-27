import {products} from '../data/products.js';    



export function listProducts(category){
    let html = '';
    products.forEach((product) => {
       if(product.category === category){
           html += `
        <div class="product-container js-product-container-${product.id}">
                <img class="product-image js-product-image" src="${product.image}"  data-product-id=${product.id}>
                <div class="product-infos">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${(product.price).toFixed(2)} DHS</div>
                </div>
                <button class="add-to-cart-btn" data-product-id=${product.id}>Ajouter Au Panier</button>
                <div class="modal-container-hide js-modal-container-${product.id}">  
                </div>
        </div>`
       }
    })
    return html;
}


export function createModal(productId){

    let html = '';
    

    products.forEach((product) => {
        if(productId === product.id){

             html =`<div class="modal">
                <img src="${product.image}" class="modal-image">
                <div class="modal-infos">
                    <div class="modal-name">${product.name}</div>
                    <div class="modal-price">${(product.price).toFixed(2)} DHS</div>
                </div>
                <button class="close-modal js-close-modal-${product.id}">X</button>

            </div>`

            document.querySelector(`.js-modal-container-${product.id}`)
                .innerHTML = html;
         }
    })

    //Create The Modal
    
}

