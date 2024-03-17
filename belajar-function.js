// let lemparDadu = Math.floor(Math.random() * 6) + 1;
// console.log(lemparDadu); 

//jika menggunakan function
function lemparDadu() {
    console.log(Math.floor(Math.random() * 6) + 1);
}
lemparDadu();
lemparDadu();
lemparDadu();


//argument dan parameter dalam function
function salam(nama) { //nama dalam hal ini adalah parameter
    console.log(`Selamat Malam ${nama}, Selamat Istirahat`);
} 
salam('Nia');//nia(nama) adalah sebuah argument


//contoh multiple argument dan parameter
function pengurangan(x, y) {
    const hasil = x - y;
    console.log(hasil);
}
pengurangan(12, 9);

//scope atau ruang lingkup yang sesuai
let programming = 'Javascript';
function typeSafe(){
    let programming = 'TypeScript';
    console.log(programming);//yang dihasilkan adalah typescript: karena ada didalam satu ruang lingkup atau{}
}
typeSafe();
console.log(programming);//yang dihasilkan adalah javascript