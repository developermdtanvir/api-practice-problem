const root = document.getElementById("_root");

const url = `https://restcountries.com/v3.1/all`;

fetch(url)
  .then((res) => res.json())
  .then((data) => displayAllCountry(data));

const displayAllCountry = (data) => {
  data.map((data) => {
    const div = document.createElement("div");
    console.log(data);
    root.appendChild(div);

    div.classList.add("user-data");

    div.innerHTML = `
            <h1>${data.name.common}</h1>
        `;
  });
};
