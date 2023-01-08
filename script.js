let body = document.querySelector(`body`)
let elementAdSoyad = document.querySelector(`#elementAdSoyad`)
let elementTelefonNumarasi = document.querySelector(`#elementTelefonNumarasi`)
let elementAdres = document.querySelector(`#elementAdres`)
let elementRenk = document.querySelector(`#elementRenk`)
let elementRenkArkaplan = document.querySelector(`#elementRenkArkaplan`) 
let veri

verileriGetir()

function verileriGetir(){
    if(JSON.parse(localStorage.getItem(`veri`))){
        veri = JSON.parse(localStorage.getItem(`veri`))
        let h1 = document.createElement(`h1`)
        h1.textContent = `adı soyadı: ${veri.adSoyad} telefon numrası: ${veri.telefonNumarasi} adresi: ${veri.adres} renginiz: ${veri.renk}`
        body.appendChild(h1)
    }
}


function handlerSubmit(event){
    event.preventDefault()
    if (elementAdSoyad.value.length == 0 && elementTelefonNumarasi.value.length == 0 && elementAdres.value.length == 0) {
        alert("Alanlar Boş Bırakılamaz"); 
    }else{
        veri = {adSoyad: elementAdSoyad.value, telefonNumarasi: elementTelefonNumarasi.value, adres: elementAdres.value, renk: elementRenk.value}
        localStorage.setItem(`veri`, JSON.stringify(veri))
    }
}

function handlerChange(event){
    body.style.backgroundColor = elementRenkArkaplan.value;
}