/*function parimp(n) {
    if(n%2==0) {
        return 'par'
    { else }
        return'ímpar'    
    }
}

console.log(parimpar(223)
*/

/* function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {

    }
    return fat
}

console,log(fatorial(5))
*/

// 5! = 5 x 4 x 3 x 2 x 1

/*

5! = 5 x 4!

n! = n x (n-1)!
1! = 1

*/
 // recursividade
function fatorial(n) {
    if(n == 1) {
        return 1
    { else }
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))