function number(n) {

    return {
        isPar: function () {
            return n % 2 === 0;
        },
        isntPar: function () {
            return n % 2 !== 0;
        },
        isCousin: function () {
            var contador = 0;
            for (var i = 1; i <= n; i++) {
                if (n % i === 0) {
                    contador++
                }
            }
            if (contador === 2) {
                return true;
            } else {
                return false;
            }
        }
    };
}
console.log(number(7).isPar());
console.log(number(8).isPar());

console.log(number(7).isntPar());
console.log(number(8).isntPar());

console.log(number(7).isCousin());
console.log(number(8).isCousin());

