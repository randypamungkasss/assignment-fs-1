import { input } from "@inquirer/prompts"

export function perhitunganBMI(nama: string, tinggiAsli: number, beratAsli: number) {

  if (isNaN(beratAsli)) {
    return console.log(`${nama} Kamu tidak menginputkan number`)
  }

  if (isNaN(tinggiAsli)) {
    return console.log(`${nama} Kamu tidak menginputkan number`)
  }

  const convertMeter = tinggiAsli / 100
  const hitungBMI = beratAsli / (convertMeter * convertMeter)

  if (hitungBMI > 27) {
    return console.log(`${nama} Kamu tergolong klasifikasi obesitas`)
  }

  if (hitungBMI > 25) {
    return console.log(`${nama} Kamu tergolong klasifikasi gemuk`)
  }

  if (hitungBMI > 18) {
    return console.log(`${nama} Kamu tergolong klasifikasi normal`)
  }

  if (hitungBMI > 17) {
    return console.log(`${nama} Kamu tergolong klasifikasi kurus`)
  }

  return console.log(`${nama} Kamu tergolong klasifikasi sangat kurus`)
}
