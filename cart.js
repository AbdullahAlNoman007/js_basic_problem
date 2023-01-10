const items =[

    {name:'shirt', price: 2100 , quantity:3  },
    {name:'pant', price: 1700 , quantity:4  },
    {name:'watch', price: 600  , quantity:1  },
    {name:'belt', price: 950  , quantity:2  },
    {name:'tshirt', price: 400 , quantity:4  },
    {name:'underwear', price: 150 , quantity:4  },
    {name:'tie', price: 350 , quantity:2  },
    {name:'jacket', price: 3100 , quantity:1  }
]

function cost_count(items){

    let totalcost = 0
    for(let i=0; i< items.length;i++){

        var item =items[i]
        totalcost = totalcost + item.price*item.quantity
    }
    return totalcost

}

const my_cart=cost_count(items)
console.log('Total cost of my shopping:',my_cart)