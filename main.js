

let buttonFormELement = document.querySelector('.form-button')
let inputCitytElement = document.querySelector('.city')
let inputCountryElement = document.querySelector('.country')
let selectSchool = document.querySelector('.school-select')
let namozlist = document.querySelector('.namoz-list')

// buttonFormELement.addEventListener('submit', function(event){
//   // event.preventDefault()
//   let inputCityValue = inputCitytElement.value;
//   let inputCountryValue = inputCountryElement.value;
//   let selectSchoolValue = selectSchool.value

//   let taqvim = blocking(inputCityValue,inputCountryValue,selectSchoolValue)
//   Taqvim(taqvim)
// })

// function Taqvim(arr){
//   if(arr.length){
//     for(let item of arr){
//       let newELementLi = documnet.createElement('li')
//       newELementLi.textContent = item
//       namozlist.appendChild(newELementLi)
//     }
//   }
// }

async function blocking(inputCityt,inputCountry, selectSchools){
  let response = await fetch(`http://api.aladhan.com/v1/timingsByCity?city=${inputCityt}&country=${inputCountry}&school=${selectSchools}`)
  response = await response.json()
  
  for( let vaqt in response.data.timings){
      console.log(vaqt, response.data.timings[vaqt]);
    }
    
  console.log(response);
}

blocking('tashkent','uzbekistan',1)