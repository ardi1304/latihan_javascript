const stokBuah = {apel: 50, pisang: 30, jeruk: 20,};
const hargaBuah = {apel: 10000, pisang: 5000, jeruk: 8000};

for (let buah in stokBuah) {
    console.log(`Stok ${buah}: ${stokBuah[buah]}`);
}            

//menambhakan pajak pada setiap buah
for (let buah in hargaBuah) {
    console.log(`Harga ${buah} sebelum pajak : Rp${hargaBuah[buah]}`);
    hargaBuah[buah]*= 1.1;
    console.log(`Harga ${buah} setelah pajak : Rp${hargaBuah[buah]}`);
}