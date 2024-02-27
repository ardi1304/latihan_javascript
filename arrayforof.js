// cara elegan melakukan perulangan pada array for of
// syntaxnya  adalah
//     for (variable of iterable) {       
//         statement                      
//      }                                 

const namaBuah = ['Pisang', 'Nanas', 'Mangga', 'Jambu'];

// for (let i = 0; i < namaBuah.length; i++) {
//     console.log(`Buah ${namaBuah[i]}`);
// }

//jika disederhanakan menggunakan array for of maka menjadi..//
for (let buah of namaBuah){
    console.log(`Buah ${buah}`);
}


//contoh lain dari latihan nestedlooparray.js
const studentRow = [
                    ['Olivia', 'Liam', 'Emma', 'Noah'], 
                    ['Amelia', 'Oliver', 'Ava', 'Elijah'],
                    ['Sophia', 'Mateo', 'Isabella', 'Lucas']
                                                            ];
let seatRow = 1;

// for (let i = 0; i < studentRow.length; i++) {
//     const row = studentRow[i];
//     console.log(`Seat Row #${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(`   ${row[j]}`);
//     }
// }

//menjadi...
for (let row of studentRow) {
    console.log(`Seat Row #${seatRow}`);
    for (student of row) {
        console.log(`    ${student}`);
    }
    seatRow++;
}
