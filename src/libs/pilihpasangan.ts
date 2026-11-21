export function hasilPilihan(pilihanPasangan: string[]) {
  if (pilihanPasangan.length === 2) {
    if (pilihanPasangan.includes("cantik") && pilihanPasangan.includes("waras")) {
      return `Jika tipe pasangan kamu adalah tipenya cantik & Waras biasanya gak pinter wkwkw`
    }

    if (pilihanPasangan.includes("pintar") && pilihanPasangan.includes("waras")) {
      return `Jika tipe pasangan kamu adalah tipenya Pintar & Waras biasanya gak Cantik wkwkw`
    }

    if (pilihanPasangan.includes("cantik") && pilihanPasangan.includes("pintar")) {
      return `Jika tipe pasangan kamu adalah tipenya Cantik & pintar biasanya gak Waras wkwkw`
    }
  }
  return `Harus Pilih 2`
}

console.log(hasilPilihan)
