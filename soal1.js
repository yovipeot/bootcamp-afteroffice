function kategoriUsia(usia) {
    if (usia >= 0 && usia <= 12) {
        return "Anak-anak";
    } else if (usia >= 13 && usia <= 17) {
        return "Remaja";
    } else if (usia >= 18 && usia <= 59) {
        return "Dewasa";
    } else if (usia >= 60) {
        return "Lansia";
    } else {
        return "Usia tidak valid";
    }
}

const daftarUsia = [5, 16, 25, 45, 70, 12, 30];
const kategoriCount = {
    
    "Anak-anak": 0,
    "Remaja": 0,
    "Dewasa": 0,
    "Lansia": 0,
    "Usia tidak valid": 0
};

for (let i = 0; i < daftarUsia.length; i++) {
    const kategori = kategoriUsia(daftarUsia[i]);
    kategoriCount[kategori]++;
}

console.log("Jumlah per kategori usia:");
console.log(kategoriCount);