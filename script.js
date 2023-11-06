const apiURL = "https://api.msigma.in/btech/v2/branches/";

fetch(apiURL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch data from the API");
    }
  })
  .then((data) => {
    if (data.status === "success") {
      const branches = data.branches;
      branches.slice(0, 10).forEach((branch) => {
        var container = document.querySelector(".container");
        const branchId = branch.id;
        const branchName = branch.name;
        const branchShort = branch.short;
        var divItem = document.createElement("div");
        var short = document.createElement("h2");
        var bN = document.createElement("p");
        var fees = document.createElement("p");
        var linkB = document.createElement("button");
        linkB.innerHTML = '<a href="#">Apply Now</a>';
        short.textContent = branchShort;
        bN.innerHTML = branchName;
        fees.innerHTML = "Fee starting at ₹799 per subject";
        divItem.className = "item";
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        short.style.color = randomColor;
        linkB.style.backgroundColor = randomColor;
        divItem.appendChild(short);
        divItem.appendChild(bN);
        divItem.appendChild(linkB);
        divItem.appendChild(fees);
        container.appendChild(divItem);
      });
    } else {
      console.error("API returned an error status.");
    }
  })
  .catch((error) => {
    console.error(error.message);
  });
