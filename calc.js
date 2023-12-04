// Helper functions
//1. Add function
// 2. Sub function
// 3. Mul function
// 4. Div function

function Add(num1, num2){
    return num1 + num2;
}

function Sub(num1, num2){
    return num1 - num2;
}

function Div(num1, num2){
    return num1 / num2;
}

function Mul(num1, num2){
    return num1 * num2;
}

// Main Calaculator

function calculator(type, num1, num2){
    if(type === "add"){
        return Add(num1, num2);
    }
    if (type === "sub"){
        return Sub(num1, num2);
    }
    if (type === "div"){
        return Div(num1, num2);
    }
    if (type === "mul"){
        return Mul(num1, num2);
    }
}


console.log(calculator("add", 5, 5));
console.log(calculator("sub", 10, 5));
console.log(calculator("div", 20, 4));
console.log(calculator("mul", 60, 4));