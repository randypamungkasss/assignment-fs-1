export function cekNilai(nilai: number, nama: string) {

  if (isNaN(nilai)) {
    return console.log(`${nama} Kamu tidak menginputkan nilai`)
  }

  if (nilai >= 90) {
    return console.log(`${nama} Kamu mendapatkan nilai A`)
  } else if (nilai >= 80) {
    return console.log(`${nama} Kamu mendapatkan nilai B`)
  } else {
    return console.log(`${nama} Kamu mendapatkan nilai C`)
  }
}
