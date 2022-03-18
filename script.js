// lingkaran
const inputLingkaran = document.querySelector('.input-lingkaran')
const buttonLingkaran = document.querySelector('.button-lingkaran')
const resultLingkaranLast = document.querySelector('.result-lingkaran')

buttonLingkaran.addEventListener('click', lingkaran)

function lingkaran (e) {
    var a = 3.14
    var b = inputLingkaran.value
    var resultLingkaran = a * b * b

    resultLingkaranLast.innerHTML = resultLingkaran
}

// persegi
const inputPersegi = document.querySelector('.input-persegi')
const buttonPersegi = document.querySelector('.button-persegi')
const resultPersegiLast = document.querySelector('.result-persegi')

buttonPersegi.addEventListener('click', persegi)

function persegi (e) {
    var a = inputPersegi.value
    var resultPersegi = a * a
    
    resultPersegiLast.innerHTML = resultPersegi
}

// persegi-panjang
const input1PersegiPanjang = document.querySelector('.input1-persegi-panjang')
const input2PersegiPanjang = document.querySelector('.input2-persegi-panjang')
const buttonPersegiPanjang = document.querySelector('.button-persegi-panjang')
const resultPersegiPanjangLast = document.querySelector('.result-persegi-panjang')

buttonPersegiPanjang.addEventListener('click', persegiPanjang)

function persegiPanjang (e) {
    var a = input1PersegiPanjang.value
    var b = input2PersegiPanjang.value
    var resultPersegiPanjang = a * b
    
    resultPersegiPanjangLast.innerHTML = resultPersegiPanjang
}

// layang-layang
const input1BelahKetupat = document.querySelector('.input1-belah-ketupat')
const input2BelahKetupat = document.querySelector('.input2-belah-ketupat')
const buttonBelahKetupat = document.querySelector('.button-belah-ketupat')
const resultBelahKetupatLast = document.querySelector('.result-belah-ketupat')

buttonBelahKetupat.addEventListener('click', belahKetupat)

function belahKetupat (e) {
    var a = input1BelahKetupat.value
    var b = input2BelahKetupat.value
    var resultBelahKetupat = a * b / 2

    resultBelahKetupatLast.innerHTML = resultBelahKetupat
}

// layang
const input1Layang = document.querySelector('.input1-layang-layang')
const input2Layang = document.querySelector('.input2-layang-layang')
const buttonLayang = document.querySelector('.button-layang-layang')
const resultLayangLast = document.querySelector('.result-layang-layang')

buttonLayang.addEventListener('click', layanglayang)

function layanglayang (e) {
    var a = input1Layang.value
    var b = input2Layang.value
    var resultlayang = a * b / 2

    resultLayangLast.innerHTML = resultlayang
}

// segitiga
const input1Segitiga = document.querySelector('.input1-segitiga')
const input2Segitiga = document.querySelector('.input2-segitiga')
const buttonSegitiga = document.querySelector('.button-segitiga')
const resultSegitigaLast = document.querySelector('.result-segitiga')

buttonSegitiga.addEventListener('click', segitiga)

function segitiga (e) {
    var a = input1Segitiga.value
    var b = input2Segitiga.value
    var resultSegitiga = a * b / 2

    resultSegitigaLast.innerHTML = resultSegitiga
}