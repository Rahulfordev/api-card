async function getData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const data = await response.json();
  showData(data);
}
getData();

async function myFunction(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  detailFun(data);
}
const cardPop = document.getElementById("card-pops");
function detailFun(data) {
  const popUp = document.createElement("div");
  popUp.classList.add("card-pop");
  const {
    name,
    email,
    username,
    address: { street, city },
  } = data;
  popUp.innerHTML = `
  <div class="pop-heading">
   <h2>User Details Information</h2>
   <button class="close-info">&times;</button>
  </div>
  
  <div class="user-info"> 
 <dvi class="user-details">
    <h2 class="win-name">Name: ${name}</h2>
  <h2>User Name: ${username}</h2>
  <h2>Email: ${email}</h2>
  <h2>Street: ${street}</h2>
  <h2>City: ${city}</h2>
    </dvi>
  </div>
  `;
  cardPop.appendChild(popUp);
  const closeBtn = document.querySelector(".close-info");

  closeBtn.addEventListener("click", function () {
    cardPop.style.display = "none";
  });
}

function showData(userData) {
  let rootDiv = document.getElementById("root");
  userData.map((user) => {
    const {
      id,
      name,
      username,
      email,
      image,
      address: { street, city },
    } = user;
    const div = document.createElement("div");
    div.classList.add("user-card");
    div.innerHTML = `
    <img class="card-image" src="image/user.png" width="50px" height="50px" alt="">
         <h2>${name}</h2>
        <h4 class="card-username">${username}</h4> 
        <button class="card-btn" id="button" onclick="myFunction(${id})">Show Details</button>
        
       `;
       
    rootDiv.appendChild(div);
  });
}
