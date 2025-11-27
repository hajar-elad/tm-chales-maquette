const order = JSON.parse(localStorage.getItem('order'));

    if(!order){
      alert('Votre Panier Est Vide');
      //window.location.href = 'index.html';
    }
    else {
      const html = 
      ` <div class="submitted">
           <img src="images/shoppingBag.png" class="submitted-image">
           <div class="submitted-text">
              <div>Merci Pour Votre Achat.</div>
              <div>A Tres BienTot!</div>
           </div>
        </div>`;
      document.querySelector('.main')
         .innerHTML = html;

    //Send Order Details
     emailjs.send("service_hga1poa","template_4gpkpgl",order);
     console.log('sent');
     console.log(order);
     localStorage.removeItem('order');
     localStorage.removeItem('cart');
     console.log('order removed');
    }
 