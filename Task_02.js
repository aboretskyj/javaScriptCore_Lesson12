//The task:
//Create a .js script: write a function that will accept two numbers 
//and the type of operation on them (multiplying, division, adding subtraction). 
//Provide capture exceptions for non-specific inputs. Display results to the console.

calculator(2, 'mul', '-3');
calculator(2, 'sum', 'u-3');
calculator(2, 'sam', '-3');

// functions
function calculator (a, operator, b) {
    show("As parameters write two numbers, and name of oprator between them: \n'sum' = '+' \n'sub' = '-' \n'mul' = '*' \n'div' = '/' \nFor example: 2,sum,5")
    var a = +a;
    var b = +b;
    
    try {
        if (isNaN(a) || isNaN(b)){
            throw new Error("One of operands is not a number.");
        }
            
        switch(operator){
            case 'sum': show("a + b = " + (a + b));
            break;
            case 'sub': show("a - b = " + (a - b));
            break;
            case 'mul': show("a * b = " + (a * b));
            break;
            case 'div': show("a / b = " + (a / b));
            break;
            default: throw new Error("Wrong operator. Use 'sum', 'sub', 'mul' or 'div'");
        }
        
        
    } catch (err) {
        show( "Error: " + err.message );
    }
}


function show(data) {
    console.log(data);
}