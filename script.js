const itemsList = document.getElementById("items-list");

fetch("https://api.openbrewerydb.org/breweries")
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const newItem = document.createElement("div");
      newItem.innerHTML = `
      <h4>${item.name}</h4>
        <p>${item.id}</p>
        <a href="">${item.website_url}</a>
        <p>${item.country}</p>
      `;
      itemsList.appendChild(newItem);
    });
  })
  .catch(error => {
    console.log("Error fetching data:", error);
  });
