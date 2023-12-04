// Helper functions
//1. Add function
// 2. Sub function
// 3. Mul function
// 4. Div function

function Add(num1, num2){
    return num1 + num2;
}





// Main Calaculator

function calculator(type, num1, num2){
    if(type === "add"){
        return Add(num1, num2);
    }
}


console.log(calculator("add", 5, 5));