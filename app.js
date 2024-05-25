//Challenge:
//1. Design a type alias named Employee to represent an employee object with properties like 
//name (string), department (string), and role (string).
//2. Include an optional nested object named contact to hold phone and email information (if 
//provided).
//3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
//"Intern".
//4. Make the skills property an optional array of strings for listing an employee's skills (if 
//any
var T_shirt = {
    name: "lacoste",
    price: 1000,
    color: "red",
    inventory: {
        stock: 100,
        colorOptions: ["white", "blue", "pink", "red"]
    },
    changeColor: function (newColor) {
        return newColor;
    }
};
var myShirt = {
    name: "polo",
    price: 2000,
    color: "green",
    inventory: {
        stock: 200,
        colorOptions: ["white", "green", "blue", "red"]
    },
    changeColor: function (newColor) {
        if (newColor = "red") {
            myShirt.price = myShirt.price + (myShirt.price * 10 / 100);
        }
        else if (newColor = "blue") {
            myShirt.price = myShirt.price + (myShirt.price * 5 / 100);
        }
        return newColor;
    }
};
myShirt.changeColor("pink");
console.log("the price of pink shirt: ".concat(myShirt.price));
myShirt.changeColor("white");
console.log("the price of white shirt: ".concat(myShirt.price));
