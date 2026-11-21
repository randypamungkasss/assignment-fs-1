import { input, select, checkbox } from "@inquirer/prompts"
import { cekNilai } from "./libs/penilaian"
import { perhitunganBMI } from "./libs/bmi"
import { hasilPilihan } from "./libs/pilihpasangan"

const menu = await select({
  message: "Pilih Menu",
  choices: [
    { name: "Cek Nilai", value: "cekNilai" },
    { name: "Cek BMI", value: "perhitunganBMI" },
    { name: "Cek Pasangan", value: "hasilPilihan"}
  ]
})

if (menu === "cekNilai") {
  const inputNama = await input({ message: "Masukkan nama kamu : " })
  const inputNilai = await input({message : "Cek nilai kamu : "})
  const hasilNilai = cekNilai(Number(inputNilai), inputNama)
}

if (menu === "perhitunganBMI") {
  const inputNama = await input({ message: "Masukkan nama kamu : " })
  const beratBadan = await input({message: "Masukkan berat badan dalam bentuk Kg : "})
  const tinggiBadan = await input({ message: "Masukkan dalam bentuk Cm :" })
  const hasilBMI = perhitunganBMI(inputNama, Number(tinggiBadan), Number(beratBadan))
}

if (menu === "hasilPilihan") {
  const pilihanPasangan = await checkbox({
    message: "Coba kamu pilih pasangan kamu : ",
    choices: [
      { name: "Cantik", value: "cantik" },
      { name: "Pintar", value: "pintar" },
      { name: "Waras", value: "waras" }
    ],
    validate: (selected) => {
      if (selected.length !== 2) return "Harus pilih tepat 2!"
      return true
    }
  })
  console.log(hasilPilihan(pilihanPasangan))
}
