let search = document.getElementById('search');
let searchbar = document.getElementById('searchbar');
search.addEventListener("click", ()=>{
    let country = searchbar.value;
    let finalURL = `https://restcountries.com/v2/name/${country}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
    .then((response) => response.json())
    .then((data)=>{
        console.log(data[0]);
        result.innerHTML = `<div id='flag' class='result-info'><span class='title'>Flag :</span> <img src = "${data[0].flags.svg}" class="flag-img"></div>
        <div id="capital" class="result-info">
        <span class="title">Capital :</span> ${data[0].capital}
        </div>
        <div id="nativeName" class="result-info">
        <span class="title">Native-name :</span> ${data[0].nativeName}
        </div>
        <div id="timezones" class="result-info">
        <span class="title">Time-zone :</span> ${data[0].timezones[0]}
        </div>
        <div id="population" class="result-info">
        <span class="title">Population :</span> ${data[0].population}
        </div>
        
        <div id="currencies" class="result-info">
        <span class="title">Currencies :</span> ${data[0].currencies[Object.keys(data[0].currencies)].name}
        </div>
        `
    });
});