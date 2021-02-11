let selectCountry = document.querySelector('.select-country')
let bomdodSelect = document.querySelector('.Bomdod')
let peshinSelect = document.querySelector('.Peshin')
let asrSelect = document.querySelector('.Asr')
let ShomSelect = document.querySelector('.Shom')
let XuftonSelect = document.querySelector('.Xufton')
let mazhabSelect = document.querySelector('.mazhab')



async function getCountries(){
  let searchBy = await fetch("https://restcountries.eu/rest/v2/all")
  searchBy = await searchBy.json()
  // console.log(searchBy); 
  searchBy.forEach(country => {
    let optionElement = document.createElement('option');
    optionElement.setAttribute('value', `${country.name} / ${country.capital}`)
    optionElement.textContent = `${country.name} / ${country.capital}`
    selectCountry.appendChild(optionElement)
    // console.log(country.name)
  }); 
}

getCountries()

selectCountry.addEventListener('change', event =>{
  let value = selectCountry.value.split('/')
  let mazhab = mazhabSelect.value
  let country = value[0]
  let capital = value[1]
  getNamozTime( capital, country, mazhab);
})

mazhabSelect.addEventListener('change', event =>{
  let value = selectCountry.value.split('/')
  let mazhab = mazhabSelect.value
  let country = value[0]
  let capital = value[1]
  getNamozTime( capital, country, mazhab);
})

async function getNamozTime(capital, country, mazhab){
  let preyingTime = await fetch(`http://api.aladhan.com/v1/timingsByCity?city=${capital}&country=${country}&method=8&school=${mazhab}`)
  preyingTime = await preyingTime.json()
  for(let time in preyingTime.data.timings){
    bomdodSelect.textContent = preyingTime.data.timings.Fajr
    peshinSelect.textContent = preyingTime.data.timings.Dhuhr
    asrSelect.textContent = preyingTime.data.timings.Asr
    ShomSelect.textContent = preyingTime.data.timings.Maghrib
    XuftonSelect.textContent = preyingTime.data.timings.Isha
    // console.log(time, preyingTime.data.timings[time]);
  }
  // console.log(preyingTime);
} 