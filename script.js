let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result =document.getElementById("result")
searchBtn.addEventListener("click", () => {
  
           
     
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});
