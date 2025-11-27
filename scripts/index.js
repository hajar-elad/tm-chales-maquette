import {cart, getNbrOfItems} from './cart.js';
import {products} from '../data/products.js';


document.querySelector('.js-cart-quantity')
    .innerHTML = getNbrOfItems();