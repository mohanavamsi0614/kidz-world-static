const items=[{
    name:"This was our pact",
    quantity:0,
    prize:7.49
},
{
    name:"The famous five",
    quantity:0,
    prize:4.59
},{
    name:"Matlida",
    quantity:0,
    prize:6.80
},{
    name:"Harry Potter",
    quantity:0,
    prize:10
},
{
    name:"For Young Readers",
    quantity:0,
    prize:7.29
},{
    name:"Wimpy Kid - DIY",
    quantity:0,
    prize:4.99
},{
    name:"dart board",
    quantity:0,
    prize:17.49
},{
    name:"connect 4",
    quantity:0,
    prize:19.99
},
{
    name:"Jenga",
    quantity:0,
    prize:20.99
},
{
    name:"Monopoly",
    quantity:0,
    prize:19.49
},
{
    name:"bookmarks",
    quantity:0,
    prize:12.49
},
{
    name:"Birthday card",
    quantity:0,
    prize:19.99
},
{
    name:"Stuffed toys",
    quantity:0,
    prize:15.99
},
{
    name:"Dream catcher drawing",
    quantity:0,
    prize:18.49
}]

const cartValue =document.getElementById("cart-value")
const cart=document.getElementById("cart")
let added=[]
let number = 0
let button = document.querySelectorAll('.button')
for(let i=0;i<button.length;i++){
    button[i].onclick=()=>{
       number++
       cartValue.innerHTML=number
       if (items[i].quantity==0){
        added.push(items[i])
       }
       items[i].quantity++

    }
}
var t=0
cart.onclick=()=>{
    added.map((v,i)=>{
        console.log(i+1+".","Name: "+v.name,"quantity: "+v.quantity)
        t+=v.quantity*v.prize
        })
    console.log("total bill: $"+Math.ceil(t))
}