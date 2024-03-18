function duaKali(func) {
    func();
    func();
}

function lemparDadu(){
    const nilai = Math.floor(Math.random() * 6) + 1;
    console.log(nilai);
}
// lemparDadu();
duaKali(lemparDadu);