let guitarsString =
  '[{"id": 1,"brand": "Gibson","model": "Les paul","price": "2000$"},{"id": 2,"brand": "Fender","model": "Stratocaster","price": "1500$"},{"id": 3,"brand": "Ibanez","model": "Prestige","price": "1700$"},{"id": 4,"brand": "PRS","model": "Custom","price": "3000"},{"id": 5,"brand": "Yamaha","model": "Revstar","price": "500$"},{"id": 6,"brand": "Jackson","model": "Pro Series","price": "1000$"}]';

let guitars = JSON.parse(guitarsString);

for (let guitar of guitars) {
  console.log(
    `la chitarra marca ${guitar.brand} modello ${guitar.model} ha un costo di ${guitar.price}`
  );
}

localStorage.setItem("guitarsList", guitarsString);

// ----------------------------------------------------------------

let counterBox = document.querySelector("div");
let count = 0;

onload = function () {
  let NumberString = sessionStorage.getItem("numberCookie");
  if (NumberString != null) {
    count = JSON.parse(NumberString);
    counterBox.innerHTML = count;
  }
};

function counterStart() {
  count++;
  counterBox.innerText = count;
  let numberCount = JSON.stringify(count);
  sessionStorage.setItem("numberCookie", numberCount);
}
