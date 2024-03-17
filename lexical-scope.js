//dalam lexical scope memungkinkan suatu variabel bisa di akses jika masiy di dalam lingkup scope itu sendiri

function lamarKerja(){
    const jabatan = 'programmer';

    function orangDalam(){
        let kenalan = `orang dalam bisa memasukan ${jabatan}`; //jabatan dalam contoh ini adalah milik function lamarKerja
        console.log(kenalan);
    }
    orangDalam();
}
lamarKerja();