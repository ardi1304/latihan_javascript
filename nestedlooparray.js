// mendapatkan data dari nested array dengan nested loop
// dengan contoh menampilkan data siswa perbaris

const studentRow = [
    ['Olivia', 'Liam', 'Emma', 'Noah'], 
    ['Amelia', 'Oliver', 'Ava', 'Elijah'],
    ['Sophia', 'Mateo', 'Isabella', 'Lucas']
];

for (let i = 0; i < studentRow.length; i++) {
    const row = studentRow[i];
    console.log(`Seat Row #${i + 1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(`   ${row[j]}`);
    }
}