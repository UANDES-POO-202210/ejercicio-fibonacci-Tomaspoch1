function fibonacci(x){
    f = [0,1];
    if (x === 0){
        n = f[0];
    }
    else if (x === 1){
        n = f[1];
    }
    else{
        for (i = 2; i <= x+1; i++){
            k = f[i-1]+f[i-2];
            console.log(f);
            f.push(k);
        }
        n=f[-1];
    }
    return n;
    
}
var fs = require('fs');
let number = fs.readFileSync('number.txt', 'utf-8') 
console.log("\nEl numero ingresado es: %d", number);

console.log(fibonacci(number));
