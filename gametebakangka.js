let max = parseInt(prompt('Masukan Nilai Maksimal'));
while (!max) {
    max = parseInt(prompt('Masukan Nilai Maksimal!'));
}

const targetNum = Math.floor(Math.random() * max) + 1;
console.log(targetNum);

let guess = parseInt(prompt('isi tebakan angka kamu'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    attempts++;
    if(guess > targetNum) {
        guess = parseInt(prompt('tebakan nilai terlalu tinggi...coba lagi'));
    } else {
        guess = parseInt(prompt('tebakan nilai terlalu rendah...coba lagi'));
    }
}

alert(`Selamat tebakan angka Anda benar... Dengan percobaan ${attempts} kali`);