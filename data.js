module.exports= function(){
    return {
        products:[
            { id:1, name:"kasa", price:1500, imgUrl:'1.jpeg', description: 'kaliteli', category:1 },
            { id:2, name:"anahtar", price:3123, imgUrl:'1.jpeg', description: 'iyi', category:2},
            { id:3, name:"ampul", price:12121, imgUrl:'1.jpeg', description: 'idare', category:3},
            { id:4, name:"vazo", price:1212, imgUrl:'1.jpeg', description: 'eh işte', category:2},
            { id:5, name:"1", price:2211, imgUrl:'1.jpeg', description: 'alınır', category:1},
            { id:6, name:"kasa3", price:2211, imgUrl:'1.jpeg', description: 'fena değil', category:1},
            { id:7, name:"kasa4", price:3322, imgUrl:'1.jpeg', description: 'güzel', category: 2},
            { id:8, name:"kasa5", price:4422, imgUrl:'1.jpeg', description: 'kaliteli', category: 1}


        ],
        categories:[
            {id:1, name:"telefon"},
            {id:2, name:"ev eşyası"},
            {id:3, name:"elektronik"},

        ],
        orders:[]
    }
}
