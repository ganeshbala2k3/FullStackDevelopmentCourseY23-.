
let Numbers = [1,2,3,4,5,6]
let added=Numbers.map(
    (num)=>(
    num*2
))
console.log(added); //apply a function on every data of a list



let Details = [
    {firstName : "Ganesh", lastName : "Bala",mobileNumber: 6303543881 , catergory : "Student"},
    {firstName : "ijnjif", lastName : "jefneb" ,mobileNumber : 7780526347 ,catergory : "Faculty"}
]
console.log(Details.map((d)=>d.firstName)); //Extracting separate Data From a list

let Transactions = [
    {ItemName:"Apples" ,units: 20 , price : 10},
    {ItemName:"Oranges",units:100, price:20}
]

let UpdatedTransactions = Transactions.map(
    product=>{
        return{
        ...product,
        totalPrice : product.units*product.price
        }
    }
)
console.log(UpdatedTransactions); //Add Dervied Values to the Array




//filter Examples :
console.log("Filter Concept Examples");

const StudentNames = Details.filter(
    (s)=>(
        s.catergory == "Student"
)
)

console.log(StudentNames);


const Items = [
    {itemName:"Laptop",stock:true},
    {itemName:"Mobile",stock:false},
    {itemName:"Keyboards",stock:true}
]

console.log(Items.filter(
    item=> item.stock
));

let search = "m"

console.log(
    Items.filter(
        (item)=> item.itemName.toLowerCase().includes(search.toLowerCase())
    )
)


