    class Product{

        constructor(productDetails){
           this.id = productDetails.id,
           this.category = productDetails.category,
           this.name = productDetails.name,
           this.image = productDetails.image,
           this.price = productDetails.price
        }
    }

    export const products = [
        {
        id : 'jersey-1',
        category : 'jerseyChales',
        name : 'Jersey Lycra - Pistache',
        image : 'images/jersey/jerseyPistachio.jpg',
        price : 80.00,
    },
    {
        id : 'jersey-2',
        category : 'jerseyChales',
        name : 'Jersey Lycra - Camel',
        image : 'images/jersey/jerseyCamel.jpg',
        price : 80.00,
    },
    {
        id : 'jersey-3',
        category : 'jerseyChales',
        name : 'Jersey Lycra - Blanche Neige',
        image : 'images/jersey/jesrseyLuxWhite.webp',
        price : 80.00,
    },
     
     
     {
        id : 'jersey-4',
        category : 'jerseyChales',
        name : 'Jersey Lycra - Sage',
        image : 'images/jersey/jerseySage.webp',
        price : 80.00,
    },
     {
        id : 'jersey-5',
        category : 'jerseyChales',
        name : 'Jersey Lycra - Mauve',
        image : 'images/jersey/jerseyMauve.webp',
        price : 80.00,
    },
    {
        id : 'jersey-6',
        category : 'jerseyChales',
        name : 'Jersey Lycra - Classic Noir',
        image : 'images/jersey/jerseyBlack.webp',
        price : 80.00,
    },



     {
        id : 'chalesAMotifs-1',
        category : 'chalesAMotifs',
        name : 'Chales A Motifs - Printed Autumn',
        image : 'images/printedSilk/printedAutumn.jpg',
        price : 120.00,
    },
    {
       id : 'chalesAMotifs-2',
       category : 'chalesAMotifs',
        name : 'Chales A Motifs - Printed Black',
        image : 'images/printedSilk/printedBlack.webp',
        price : 120.00,
    },
    {
        id : 'chalesAMotifs-3',
        category : 'chalesAMotifs',
        name : 'Chales A Motifs - Printed Dual',
        image : 'images/printedSilk/printedDual.jpeg',
        price : 120.00,
    },
     
     
     {
        id : 'chalesAMotifs-4',
        category : 'chalesAMotifs',
        name : 'Chales A Motifs - Printed Leopard',
        image : 'images/printedSilk/printedLeopard.jpg',
        price : 120.00,
    },
     {
        id : 'chalesAMotifs-5',
        category : 'chalesAMotifs',
        name : 'Chales A Motifs - Printed Luxury',
        image : 'images/printedSilk/printedLuxury.webp',
        price : 120.00,
    },
    {
       id : 'chalesAMotifs-6',
       category : 'chalesAMotifs',
        name : 'Chales A Motifs - Printed Orange',
        image : 'images/printedSilk/printedOrange.jpg',
        price : 120.00,
    },


       {
        id : 'foulardsAMotifs-1',
        category : 'foulardsAMotifs',
        name : 'Foulards A Motifs - Foulard Amazon',
        image : 'images/silkSquare/squareAmazom.jpg',
        price : 120.00,
    },
    {
        id : 'foulardsAMotifs-2',
        category : 'foulardsAMotifs',
        name : 'Foulards A Motifs - Foulard Automn',
        image : 'images/silkSquare/squareAutumn.jpg',
        price : 120.00,
    },
    {
        id : 'foulardsAMotifs-3',
        category : 'foulardsAMotifs',
        name : 'Foulards A Motifs - Foulard Black',
        image : 'images/silkSquare/squareBlack.jpg',
        price : 120.00,
    },
     
     
     {
        id : 'foulardsAMotifs-4',
        category : 'foulardsAMotifs',
        name : 'Foulards A Motifs - Foulard Blue',
        image : 'images/silkSquare/squareBlue.jpg',
        price : 120.00,
    },
     {
        id : 'foulardsAMotifs-5',
        category : 'foulardsAMotifs',
        name : 'Foulards A Motifs - Foulard Dual',
        image : 'images/silkSquare/squareDual.jpg',
        price : 120.00,
    },
    {
        id : 'foulardsAMotifs-6',
        category : 'foulardsAMotifs',
        name : 'Foulards A Motifs - Foulard Pink',
        image : 'images/silkSquare/squarePink.jpg',
        price : 120.00,
    },
    {
        id : 'foulardsAMotifs-7',
        category : 'foulardsAMotifs',
        name : 'Foulards A Motifs - Foulard White',
        image : 'images/silkSquare/squareWhite.jpg',
        price : 120.00,
    }
].map((productDetails) => {
    return new Product(productDetails);
})

console.log(products);