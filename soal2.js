const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function tampilkanMenu() {
  console.log('=== Kalkulator Sederhana ===');
  console.log('1. Penjumlahan');
  console.log('2. Pengurangan');
  console.log('3. Perkalian');
  console.log('4. Pembagian');
}

// Fungsi operasi
function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  if (b === 0) {
    return "Error: Pembagian dengan nol!";
  }
  return a / b;
}

function hitung(pilihan, angka1, angka2) {
  switch (pilihan) {
    case 1:
      return tambah(angka1, angka2);
    case 2:
      return kurang(angka1, angka2);
    case 3:
      return kali(angka1, angka2);
    case 4:
      return bagi(angka1, angka2);
    default:
      return "Pilihan tidak valid!";
  }
}

// Program utama
function kalkulator() {
  tampilkanMenu();
  readline.question('Pilih operasi (1-4): ', (pilihanInput) => {
    const pilihan = parseFloat(pilihanInput);
    if (![1, 2, 3, 4].includes(pilihan)) {
      console.log("Pilihan tidak valid!");
      readline.close();
      return;
    }
    readline.question("Masukkan angka pertama: ", (angka1Input) => {
      const angka1 = parseFloat(angka1Input);
      if (isNaN(angka1)) {
        console.log("Input angka tidak valid!");
        readline.close();
        return;
      }
      readline.question("Masukkan angka kedua: ", (angka2Input) => {
        const angka2 = parseFloat(angka2Input);
        if (isNaN(angka2)) {
          console.log("Input angka tidak valid!");
          readline.close();
          return;
        }else {
        const hasil = hitung(pilihan, angka1, angka2);
        console.log(`Angka 1:  ${angka1}` );
        console.log(`Angka 2: ${angka2}` );
        console.log(`Hasil: ${hasil}`);
        }
        readline.close();
      });
    });
  });
}

// Jalankan program
kalkulator();