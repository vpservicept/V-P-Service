const DEFAULT = [
  {id:1, name:"Alcatel 5028", code:"VP-001", price:0, qty:1},
  {id:2, name:"Honor 8A", code:"VP-002", price:0, qty:1},
  {id:3, name:"Honor X6A", code:"VP-003", price:0, qty:1},
  {id:4, name:"Huawei P20", code:"VP-004", price:0, qty:1},
  {id:5, name:"Huawei P20 Lite", code:"VP-005", price:0, qty:1},
  {id:6, name:"Huawei P30 Lite", code:"VP-006", price:0, qty:1},
  {id:7, name:"Huawei P Smart 2019", code:"VP-007", price:0, qty:1},
  {id:8, name:"Huawei P Smart 2021", code:"VP-008", price:0, qty:1},
  {id:9, name:"Huawei Y5 II", code:"VP-009", price:0, qty:2},
  {id:10, name:"Huawei Y7 Prime", code:"VP-010", price:0, qty:1},
  {id:11, name:"Infinix Smart 8", code:"VP-011", price:0, qty:1},
  {id:12, name:"Lenovo K9", code:"VP-012", price:0, qty:1},
  {id:13, name:"Moto E2", code:"VP-013", price:0, qty:1},
  {id:14, name:"Moto E7 Plus", code:"VP-014", price:0, qty:1},
  {id:15, name:"Moto E7 Power", code:"VP-015", price:0, qty:2},
  {id:16, name:"Moto E13", code:"VP-016", price:0, qty:1},
  {id:17, name:"Moto E20", code:"VP-017", price:0, qty:1},
  {id:18, name:"Moto G14", code:"VP-018", price:0, qty:1},
  {id:19, name:"Redmi 8", code:"VP-019", price:0, qty:2},
  {id:20, name:"Redmi 9A", code:"VP-020", price:0, qty:1},
  {id:21, name:"Redmi 9C", code:"VP-021", price:0, qty:1},
  {id:22, name:"Redmi 12C", code:"VP-022", price:0, qty:3},
  {id:23, name:"Redmi 13C", code:"VP-023", price:0, qty:1},
  {id:24, name:"Redmi A1", code:"VP-024", price:0, qty:1},
  {id:25, name:"Redmi A2", code:"VP-025", price:0, qty:1},
  {id:26, name:"Redmi A3CGE", code:"VP-026", price:0, qty:1},
  {id:27, name:"Redmi Note 5 Pro", code:"VP-027", price:0, qty:1},
  {id:28, name:"Redmi Note 5A Prime", code:"VP-028", price:0, qty:1},
  {id:29, name:"Redmi Note 8 Pro", code:"VP-029", price:0, qty:1},
  {id:30, name:"Redmi Note 9", code:"VP-030", price:0, qty:1},
  {id:31, name:"Redmi Note 11,11S", code:"VP-031", price:0, qty:1},
  {id:32, name:"Samsung Galaxy A3", code:"VP-032", price:0, qty:1},
  {id:33, name:"Samsung Galaxy A5", code:"VP-033", price:0, qty:2},
  {id:34, name:"Samsung Galaxy A03", code:"VP-034", price:0, qty:1},
  {id:35, name:"Samsung Galaxy A8", code:"VP-035", price:0, qty:1},
  {id:36, name:"Samsung Galaxy A12", code:"VP-036", price:0, qty:1},
  {id:37, name:"Samsung Galaxy A13", code:"VP-037", price:0, qty:1},
  {id:38, name:"Samsung Galaxy A20", code:"VP-038", price:0, qty:1},
  {id:39, name:"Samsung Galaxy A20e", code:"VP-039", price:0, qty:1},
  {id:40, name:"Samsung Galaxy A50", code:"VP-040", price:0, qty:1},
  {id:41, name:"Samsung Galaxy A53", code:"VP-041", price:0, qty:2},
  {id:42, name:"Samsung Galaxy A217F", code:"VP-042", price:0, qty:1},
  {id:43, name:"Samsung Galaxy A405FN", code:"VP-043", price:0, qty:1},
  {id:44, name:"Samsung Galaxy J510FN", code:"VP-044", price:0, qty:1},
  {id:45, name:"Samsung Galaxy Note 10", code:"VP-045", price:0, qty:1},
  {id:46, name:"Samsung Galaxy S5 Mini", code:"VP-046", price:0, qty:2},
  {id:47, name:"Samsung Galaxy S6", code:"VP-047", price:0, qty:1},
  {id:48, name:"Samsung Galaxy S10", code:"VP-048", price:0, qty:1},
  {id:49, name:"Tecno Spark 8", code:"VP-049", price:0, qty:1}
];


/* =========================
   PRODUKTY A OBJEDNÁVKA
========================= */

let products =
  JSON.parse(localStorage.getItem("vp_products") || "null") || DEFAULT;

let cart =
  JSON.parse(localStorage.getItem("vp_cart") || "[]");


function qs(selector) {
  return document.querySelector(selector);
}


function save() {
  localStorage.setItem("vp_products", JSON.stringify(products));
  localStorage.setItem("vp_cart", JSON.stringify(cart));
}


/* =========================
   OBRÁZKY
========================= */

const PRODUCT_IMAGES = {

  "Alcatel 5028": "Alcatel 5028.jpg",

  "Honor 8A": "Honor 8A.jpg",

  "Honor X6A": "Honor X6A.jpg",

  "Huawei Nova 8i": "Huawei Nova 8i.jpg",

  "Huawei P20 Lite": "Huawei P20 Lite.png",

  "Huawei P20": "Huawei P20.jpg",

  "Huawei P30 Lite": "Huawei P30 Lite.png",

  "Huawei P30": "Huawei P30.jpg",

  "Huawei P Smart 2019": "Huawei PSmart 2019.jpg",

  "Huawei P Smart 2021": "Huawei PSmart 2021.jpg",

  "Huawei Y5 II": "Huawei Y5 II.png",

  "Huawei Y7 Prime": "Huawei Y7 Prime.jpg",

  "Infinix Smart 8": "Infinix Smart 8.png",

  "Moto E13": "Moto E13.jpg",

  "Moto E7 Plus": "Moto E7 Plus.png",

  "Moto E7 Power": "Moto E7 Power.jpg",

  "Redmi 9C": "Redmi 9C.png",

  "Redmi Note 11,11S": "Redmi Note 11,11s.jpg",

  "Samsung Galaxy A3": "Samsung Galaxy A3.png",

  "Samsung Galaxy A5": "Samsung Galaxy A5.jpg",

  "Samsung Galaxy A6": "Samsung Galaxy A6.png",

  "Samsung Galaxy A8": "Samsung Galaxy A8.jpg",

  "Samsung Galaxy A9": "Samsung Galaxy A9.jpg"
};


/*
  Pre ostatné modely skúsi automaticky
  nájsť obrázok podľa názvu.
*/

function getProductImage(product) {

  if (PRODUCT_IMAGES[product.name]) {
    return PRODUCT_IMAGES[product.name];
  }

  const clean = product.name
    .replace(/–/g, "")
    .replace(/[\/\\:*?"<>|]/g, "")
    .trim();

  const candidates = [
    clean + ".jpg",
    clean + ".png",
    clean.replace(/ /g, "") + ".jpg",
    clean.replace(/ /g, "") + ".png"
  ];

  /*
    Obrázok sa zobrazí ako prvý kandidát.
    Ak daný súbor neexistuje, prehliadač ho jednoducho
    nezobrazí.
  */

  return candidates[0];
}


/* =========================
   VYHĽADÁVANIE
========================= */

function getSearchValue() {

  const search = qs("#search");

  if (!search) {
    return "";
  }

  return search.value
    .toLowerCase()
    .trim();
}


function searchProducts() {

  const search = getSearchValue();

  render(search);

  const stock =
    document.querySelector("#sklad") ||
    document.querySelector("#products");

  if (stock) {
    stock.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


/* =========================
   VYKRESLENIE PRODUKTOV
========================= */

function render(searchValue = null) {

  const search =
    searchValue !== null
      ? searchValue.toLowerCase().trim()
      : getSearchValue();


  const list = products.filter(p => {

    if (!search) {
      return true;
    }

    const name =
      p.name.toLowerCase();

    const code =
      p.code.toLowerCase();

    /*
      Moto -> Moto E13, Moto E7 Plus...
      Samsung -> všetky Samsung Galaxy...
      Redmi -> všetky Redmi...
    */

    return (
      name.includes(search) ||
      code.includes(search)
    );

  });


  const productsEl =
    qs("#products");


  if (productsEl) {

    if (!list.length) {

      productsEl.innerHTML = `
        <div class="no-results">
          <h3>Žiadna súčiastka sa nenašla</h3>
          <p>Skús zadať iný názov alebo kód.</p>
        </div>
      `;

    } else {

      productsEl.innerHTML = list.map(p => {

        const image =
          getProductImage(p);

        return `

          <article class="product product-card">

            <div class="product-image">

              <img
                src="${encodeURI(image)}"
                alt="${p.name}"
                onerror="this.style.display='none';"
              >

            </div>

            <h3>${p.name}</h3>

            <div class="code">
              ${p.code}
            </div>

            <div class="price">

              ${
                p.price > 0
                  ? p.price.toFixed(2) + " €"
                  : "Cena na vyžiadanie"
              }

            </div>

            <div class="stock">

              Skladom: ${p.qty} ks

            </div>

            <button
              onclick="add(${p.id})"
              ${p.qty <= 0 ? "disabled" : ""}
            >
              Pridať do objednávky
            </button>

          </article>

        `;

      }).join("");

    }

  }


  const stockCount =
    qs("#stockCount");

  if (stockCount) {

    stockCount.textContent =
      products.reduce(
        (sum, p) => sum + p.qty,
        0
      );

  }


  const productCount =
    qs("#productCount");

  if (productCount) {

    productCount.textContent =
      products.length;

  }

}


/* =========================
   PRIDANIE DO OBJEDNÁVKY
========================= */

function add(id) {

  const product =
    products.find(p => p.id === id);

  if (!product || product.qty <= 0) {
    return;
  }


  const existing =
    cart.find(x => x.id === id);


  if (existing) {

    if (existing.amount < product.qty) {
      existing.amount++;
    }

  } else {

    cart.push({

      id: product.id,

      name: product.name,

      amount: 1

    });

  }


  save();

  renderCart();

  alert(
    "Diel bol pridaný do objednávky."
  );

}


/* =========================
   OBJEDNÁVKA
========================= */

function renderCart() {

  const cartEl =
    qs("#cart");

  if (!cartEl) {
    return;
  }


  if (!cart.length) {

    cartEl.innerHTML =
      "<p>Objednávka je zatiaľ prázdna.</p>";

    return;

  }


  cartEl.innerHTML =
    cart.map(item => `

      <div class="cart-item">

        <strong>
          ${item.name}
        </strong>

        <span>
          ${item.amount} ks
        </span>

        <button
          onclick="removeFromCart(${item.id})"
        >
          Odstrániť
        </button>

      </div>

    `).join("");

}


function removeFromCart(id) {

  cart =
    cart.filter(
      item => item.id !== id
    );

  save();

  renderCart();

}


function clearCart() {

  cart = [];

  save();

  renderCart();

}


/* =========================
   HAMBURGER – IBA 3 ČIARKY
========================= */

function setupMenu() {

  const menuButton =
    document.querySelector(
      "#menuButton"
    );

  const menu =
    document.querySelector(
      "#mobileMenu"
    );


  if (!menuButton || !menu) {
    return;
  }


  menuButton.addEventListener(
    "click",
    function () {

      menu.classList.toggle(
        "show"
      );

    }
  );


  /*
    Kliknutie mimo menu ho zatvorí.
  */

  document.addEventListener(
    "click",
    function (event) {

      if (
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {

        menu.classList.remove(
          "show"
        );

      }

    }
  );

}


/* =========================
   ODSTRÁNENIE DRUHÉHO
   VYHĽADÁVANIA
========================= */

function removeSecondSearch() {

  /*
    Ak má stránka druhé vyhľadávanie
    pri produktoch, odstránime ho.
  */

  const possibleSearches = [
    "#stockSearch",
    "#productSearch",
    "#searchProducts",
    ".stock-search"
  ];

  possibleSearches.forEach(selector => {

    const el =
      document.querySelector(selector);

    if (el) {
      el.remove();
    }

  });

}


/* =========================
   HORNÉ VYHĽADÁVANIE
========================= */

function setupSearch() {

  const search =
    qs("#search");

  if (!search) {
    return;
  }


  const searchButton =
    document.querySelector(
      "#searchButton"
    );


  if (searchButton) {

    searchButton.addEventListener(
      "click",
      searchProducts
    );

  }


  search.addEventListener(
    "keydown",
    function(event) {

      if (
        event.key === "Enter"
      ) {

        event.preventDefault();

        searchProducts();

      }

    }
  );


  search.addEventListener(
    "input",
    function() {

      /*
        Vyhľadávanie funguje okamžite
        aj počas písania.
      */

      render();

    }
  );

}


/* =========================
   LOGO
========================= */

function setupLogo() {

  /*
    Ak existuje obrázok s id logo,
    použije sa logo.jpg.
  */

  const logo =
    document.querySelector(
      "#logo"
    );

  if (logo) {

    logo.src = "logo.jpg";

  }

}


/* =========================
   SPUSTENIE
========================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    render();

    renderCart();

    setupMenu();

    setupSearch();

    setupLogo();

    removeSecondSearch();

  }
);
