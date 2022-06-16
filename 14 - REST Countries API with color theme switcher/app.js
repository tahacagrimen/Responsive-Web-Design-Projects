let countryList = fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    return data.map((country) => {
      return {
        name: country.name,
        flag: country.flag,
        region: country.region,
        capital: country.capital,
        population: country.population,
        area: country.area,
        currencies: country.currencies,
        languages: country.languages,
        borders: country.borders,
      };
    });
  });

let ne21w = Array.from(countryList);
console.log(ne21w);

// countryList.forEach((country) => {
//   const countryList = document.querySelector(".country-list");
//   const countryItem = document.createElement("li");
//   countryItem.classList.add("country-item");
//   countryItem.innerHTML = `
//     <div class="country-item__flag">
//         <img src="${country.flag}" alt="${country.name}">
//     </div>
//     <div class="country-item__info">
//         <h2>${country.name}</h2>
//         <p>${country.capital}</p>
//         <p>${country.population}</p>
//         <p>${country.area}</p>
//         <p>${country.region}</p>
//         <p>${country.languages}</p>
//         <p>${country.currencies}</p>
//         <p>${country.borders}</p>
//     </div>
//     `;
//   countryList.appendChild(countryItem);
// });
