function hasilnyaAdalahfunction() {
    const acakAngka = Math.random()
    if (acakAngka > 0.10) {
        return function() {
            console.log('Selamat, angkanya lebih besar');
        }
    } else {
        return function() {
            console.log('Maaf, mungkin bisa coba lagi');
        }
    }
}