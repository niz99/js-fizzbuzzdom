let boxNumeri = document.getElementById("container");


for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {

        console.log("FizzBuzz");
        boxNumeri.innerHTML += `<div class="box fizzbuzz">FizzBuzz</div>`;

    } else if (i % 3 == 0) {

        console.log("Fizz");
        boxNumeri.innerHTML += `<div class="box fizz">Fizz</div>`;

    } else if (i % 5 == 0) {

        console.log("Buzz");
        boxNumeri.innerHTML += `<div class="box buzz">Buzz</div>`;

    } else {

        console.log(i);
        boxNumeri.innerHTML += `<div class="box normal">${i}</div>`;

    }

};