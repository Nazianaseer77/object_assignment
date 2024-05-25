//Challenge:
//1. Design a type alias named Employee to represent an employee object with properties like 
//name (string), department (string), and role (string).
//2. Include an optional nested object named contact to hold phone and email information (if 
//provided).
//3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
//"Intern".
//4. Make the skills property an optional array of strings for listing an employee's skills (if 
//any


// type Employee = {

//     name:string,
//     department:string,
//     role:string,
// }
// let employee:Employee={
//     name: "Nazia",
//     department:"marketing",
//     role:"manager"
// };
// {
//    let contact:{
//     phone:"03214567899",
//     Email:"xyz@gmail.com",
//     role:"manager"|"engineer"|"intern"
//    }
// }

// console.log(employee.name);
// console.log(employee,"role");



//Part 2: Car Details
//Challenge:
//1. Design a type alias named Car to represent a car object.
//2. Include a nested object named engine within Car, containing a property named 
//horsepower (number).
//3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
//engine's horsepower.  

// type Car ={
//     engine: {
//         horsepower: number;
//     };
//         getHorsepower: ()=> number;
//         };
    

//     const car: Car ={
//         engine:{
//             horsepower: 1600,
//         },
//             getHorsepower: function(){
//                 return this.engine.horsepower;
//             },
//         };
//     console.log(car.getHorsepower())


   //Part 3: Colorful T-Shirts
//Challenge:
//1. Design a type alias named Product to represent a T-shirt object with properties like name
//(string), price (number), and color (string).
//2. Include a nested object named inventory within Product. This inventory object 
//should have two properties: 
//o stock (number): Represents the number of T-shirts available.
//o colorOptions (optional array of strings): Lists available colors (if any).
//3. Inside the inventory object, define a function named changeColor. This function 
//accepts a new color string as an argument. When called, it should: 
//o Update the color property of the Product object.
//o Adjust the price based on the new color (implement your own logic, e.g., 
//increase by 10% for red, decrease by 5% for blue)

// type Product = {
//    name: string,
//    price: number,
//    color: string,
//    inventory:{
//        stock: number, 
//        colorOptions?:string[]
//    },
//    changeColor: (newColor:string)=>string
//    };
//    let T_shirt: Product = {
//        name:"lacoste",
//        price: 1000,
//        color: "red",
//        inventory:{
//            stock: 100,
//            colorOptions:["white", "blue", "pink", "red"]
//        },
//        changeColor:(newColor:string)=>{
//            return newColor
//        }
//        }
//        let myShirt: Product = {
//            name:"polo",
//            price: 2000,
//            color: "green",
//            inventory:{
//                stock: 200,
//                colorOptions:["white", "green", "blue", "red"]
//            },
//            changeColor:(newColor:string)=>{
//                if(newColor = "red"){
//                    myShirt.price = myShirt.price+(myShirt.price *10/100)
//                } else if(newColor = "blue"){
//                    myShirt.price = myShirt.price + (myShirt.price *5/100)
//                }
//                return newColor
//            }
//            }
   
//            myShirt.changeColor("pink")
//            console.log(`the price of pink shirt: ${myShirt.price}`);
//            myShirt.changeColor("white")
//            console.log(`the price of white shirt: ${myShirt.price}`);
   
   