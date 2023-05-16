const Production = document.querySelector(".items");
let startIndex = 0; // Başlangıç indeksi
let endIndex = 2; // Bitiş indeksi
let jsonData = null; // JSON verisini tutacak değişken
const nextButton = document.querySelector("#nextButton");
const previousButton = document.querySelector("#previousButton");
const searchInput = document.querySelector("#Search");
searchInput.addEventListener("input", handleSearch);
nextButton.addEventListener("click", showNextProducts);
previousButton.addEventListener("click", showPreviousProducts);
fetchProduction();

function fetchProduction() {
  fetch("json/urunler.json")
    .then((response) => response.json())
    .then((data) => {
      jsonData = data; // JSON verisini kaydedin
      displayProducts(jsonData); // Tüm ürünleri görüntüleyin
    });
}
function displayProducts(data) {
  const slicedData = data.slice(startIndex, endIndex + 1); // Görüntülemek istediğiniz ürünleri dilimleyin
  const html = slicedData
    .map(
      (item) => `
    
    <div class="d-flex justify-content-center border col-xl-4 col-lg-4 col-md-3 col-sm-10 col-10 m-auto py-5 ">
      <div class="card text-center border-0">
        <img src="${item.resim}" class="card-img-top  rounded-0 img-fluid" alt="Product Image">
        <div class="card-body">
          <p class="card-title font-weight-bold mt-3 mb-3 text-warning">${item.fiyat}</p>
          <p class="card-text mb-3">${item.urun_adi}</p>
          <button type="button" class="btn btn-icon bg-light">
            <i class="fa-solid fa-cart-shopping"></i>
            Add to cart
          </button>
          <br class="my-4">
          <button type="button" class="btn">
            <i class="fa-solid fa-plus"></i> Add Wishlist
          </button>
          <button type="button" class="btn ">
            <i class="fa-solid fa-plus"></i> Add Compare
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  Production.innerHTML = html;
  // Next ve Previous butonlarının etkinliklerini kontrol edin
  updateButtonState();
}

function showNextProducts() {
  startIndex += 3;
  endIndex += 3;
  displayProducts(jsonData);
  updateButtonState();
}
function showPreviousProducts() {
  if (startIndex >= 3) {
    startIndex -= 3;
    endIndex -= 3;
    displayProducts(jsonData);
    updateButtonState();
  }
}

function updateButtonState() {
  // Next ve Previous butonlarının etkinliklerini kontrol edin
  nextButton.disabled = endIndex >= jsonData.length - 1; // JSON verisi bittiğinde Next butonunu devre dışı bırakın
  previousButton.disabled = startIndex === 0; // Başlangıç indeksi 0 olduğunda Previous butonunu devre dışı bırakın
}

function handleSearch(event) {
  const query = event.target.value.toLowerCase();
  const filteredData = jsonData.filter((item) => {
    return item.urun_adi.toLowerCase().includes(query);
  });
  startIndex = 0; // Arama yapıldığında başlangıç indeksini sıfırla
  endIndex = 2; // Arama yapıldığında bitiş indeksini sıfırla
  displayProducts(filteredData);
  updateButtonState();
}
//LOGIN SIGNUP
function Authentication() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("mail").value;
  const password = document.getElementById("pass").value;
  
  if (email === "" || name === "" || password === "") {
    console.log("Please fill in all the fields.");
    return;
  }
  
  let user = {
    Email: email,
    Username: name,
    Password: password,
  };
  let data = localStorage.setItem("ACCOUNT", JSON.stringify(user));
  console.log(data)
}
function loginFunc(){
  debugger;
    
  let username=document.getElementById('username').value;
  let password=document.getElementById('password').value;
  
  let data = JSON.parse(window.localStorage.getItem('ACCOUNT'));
  console.log(data);
  
  if(username == data.Username && password == data.Password){
      console.log("Çalışıyor")  
  }
  else{
    console.log("Çalışıy2312312312312or")
      

  }
}