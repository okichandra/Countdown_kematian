const countingNumbers = document.querySelectorAll('.angka')
const delay = 2000;

for (let countingNumber of countingNumbers) {
    let convert = parseInt(countingNumber.textContent)
    const max = countingNumber.getAttribute('maksAngka')
    const timeOut = setInterval(() => {
        countingNumber.innerText = convert += 1
        if (convert >= max)
            clearInterval(timeOut)
    }, delay / max);
}


const detikInput = document.getElementById('input')
let satuMenit = 60;
const sisa = document.getElementById('sisa')
let detik = sisa.getAttribute('detik')
let T = null;
detikInput.addEventListener('input', () => {
    detik = detikInput.value
    clearInterval(T)
    func()
})

let dataPembuktian = 1000
const func = () => {
    T = setInterval(() => {
        let convert = detik % satuMenit
        let hasil = detik / satuMenit
        const menit = Math.floor(hasil)
        detik -= 1
        sisa.style.color = 'black'
        document.querySelector('body').style.backgroundColor = 'white'
        sisa.innerText = `waktu anda ${menit} menit ${convert} detik`
        dataPembuktian -= 1
        if (detik < 0) {
            detik = 0
            sisa.innerText = 'kamu mati'
            sisa.style.color = 'red'
            document.querySelector('body').style.backgroundColor = 'black'
            clearInterval(T)
        }
    }, 1000);
}

//Validasi waktu

const darkModeTime = [18,19,20,21,22,23,24,1,2,3,4,5,6]
let isDarkMode = false // mode default adalah lightmode
const background = document.getElementById("background")
const changeButton = document.getElementById("ModeChanger")

//auto Mode
for(let time of darkModeTime) {
    if(time.getHours == darkModeTime)
        background.style.backgroundColor = '#f1f1f1'
    else bacground.style.backgroundColor = 'white'
}

changeButton.addEventListener('click', () => {
    if(isDarkMode) isDarkMode = true
    else isDarkMode = false
})
