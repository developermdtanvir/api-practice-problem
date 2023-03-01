// sellact root directory
const root = document.getElementById("_root");

const url = `https://restcountries.com/v3.1/all`;

fetch(url)
  .then((res) => res.json())
  .then((data) => displayAllCountry(data));

const displayAllCountry = (data) => {
  data.map((data) => {
    const div = document.createElement("div");
    root.appendChild(div);

    div.classList.add("user-data");

    div.innerHTML = `
            <div class="">
                <h1 class='text-xl font-bold'>${data.name.common}</h1>
                <img class="w-20" src=${data.flags.svg} />
            </div>
        `;
  });
};

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const searchText = document.getElementById("input-search").value;
  const url = `
  https://restcountries.com/v3.1/name/${searchText}?fullText=true`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.length) {
        root.style.display = "none";
      } else {
        document.getElementById("input-search").classList.add("input-style");
      }
      const search_root = document.getElementById("search_root");
      const div = document.createElement("div");
      search_root.appendChild(div);
      div.innerHTML = `
        <div class=" flex flex-col justify-center items-center">
            <h1 class='text-xl font-bold'>${data[0].name.common}</h1>
            <img class=" w-1/2" src=${data[0].flags.svg} />
        </div>
    `;
    });
});
