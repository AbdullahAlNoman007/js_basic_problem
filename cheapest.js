const phones=[    
    { name:'Samsung', camera: '50MP', RAM:'12gb',price:32000},
    { name:'Iphone', camera: '12MP', RAM:'8gb',price:120000},
    { name:'Xaomi', camera: '60MP', RAM:'16gb',price:28000},
    { name:'Redmi', camera: '50MP', RAM:'12gb',price:25000},
    { name:'Oneplus', camera: '45MP', RAM:'16gb',price:52000},
];

function find_cheapest(phones){

    let cheapest =phones[0];
    for (let i =0; i< phones.length ;i++){

        const phone =phones[i];
        if ( cheapest.price > phone.price){

            cheapest= phone;
        }
        
    }
    return cheapest;
}

const myselection =find_cheapest(phones);
console.log(myselection);