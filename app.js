const DEFAULT = [
  {id:1, name:"Alcatel 5028", code:"VP-001", price:0, qty:1},
  {id:2, name:"Honor 8A", code:"VP-002", price:0, qty:1},
  {id:3, name:"Honor X6A", code:"VP-003", price:0, qty:1},
  {id:4, name:"Huawei P20", code:"VP-004", price:0, qty:1},
  {id:5, name:"Huawei P20 Lite", code:"VP-005", price:0, qty:1},
  {id:6, name:"Huawei P30 Lite", code:"VP-006", price:0, qty:1},
  {id:7, name:"Huawei P Smart 2019", code:"VP-007", price:0, qty:1},
  {id:8, name:"Huawei P Smart 2021", code:"VP-008", price:0, qty:1},
  {id:9, name:"Huawei Y5-2", code:"VP-009", price:0, qty:2},
  {id:10, name:"Huawei Y7 Prime", code:"VP-010", price:0, qty:1},
  {id:11, name:"Infinix Smart 8 – poškodený konektor flex od displeja", code:"VP-011", price:0, qty:1},
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
  {id:31, name:"Redmi Note 11 a 11S", code:"VP-031", price:0, qty:1},
  {id:32, name:"Samsung A3", code:"VP-032", price:0, qty:1},
  {id:33, name:"Samsung A5", code:"VP-033", price:0, qty:2},
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


/* =========================================================
   OBRÁZKY PRODUKTOV
   ========================================================= */

function getImageNames(productName) {

  const specialImages = {

    "Huawei Y5-2": [
      "Huawei Y5 II.png",
      "Huawei Y5-2.jpg",
      "Huawei Y5-2.png"
    ]

  };

  if (specialImages[productName]) {
    return specialImages[productName];
  }

  /*
    Pri dlhom názve, napríklad:
    Infinix Smart 8 – poškodený konektor flex od displeja

    sa použije iba:
    Infinix Smart 8
  */

  const shortName =
    productName.split(" – ")[0].trim();

  return [
    shortName + ".jpg",
    shortName + ".jpeg",
    shortName + ".png"
  ];
}


/*
  Vytvorí obrázok a automaticky skúsi JPG, JPEG a PNG.
  Ak obrázok neexistuje, skúsi ďalší formát.
*/

function createProductImage(productName) {

  const imageNames =
    getImageNames(productName);

  let index = 0;

  const img =
    document.createElement("img");

  img.alt = productName;

  img.style.width = "100%";
  img.style.height = "220px";
  img.style.objectFit = "contain";
  img.style.borderRadius = "12px";
  img.style.marginBottom = "15px";
  img.style.background = "#f5f5f5";
  img.style.display = "block";

  function tryNextImage() {

    if (index >= imageNames.length) {

      /*
        Ak obrázok neexistuje,
        obrázok sa jednoducho skryje.
      */

      img.style.display = "none";
      return;
    }

    const fileName =
      imageNames[index];

    index++;

    img.src =
      encodeURI(fileName);
  }

  img.onerror = function() {
    tryNextImage();
  };

  tryNextImage();

  return img;
}


/* =========================================================
   VYKRESLENIE PRODUKTOV
   ========================================================= */

function render() {

  const search =
    (qs("#search")?.value || "")
      .toLowerCase()
      .trim();


  const list =
    products.filter(p =>
      p.name.toLowerCase().includes(search) ||
      p.code.toLowerCase().includes(search)
    );


  const productsEl =
    qs("#products");


  if (productsEl) {

    productsEl.innerHTML = "";


    list.forEach(p => {

      const article =
        document.createElement("article");

      article.className =
        "product";


      /* OBRÁZOK */

      const image =
        createProductImage(p.name);

      article.appendChild(image);


      /* NÁZOV */

      const title =
        document.createElement("h3");

      title.textContent =
        p.name;

      article.appendChild(title);


      /* KÓD */

      const code =
        document.createElement("div");

      code.className =
        "code";

      code.textContent =
        p.code;

      article.appendChild(code);


      /* CENA */

      const price =
        document.createElement("div");

      price.className =
        "price";

      price.textContent =
        p.price > 0
          ? p.price.toFixed(2) + " €"
          : "Cena na vyžiadanie";

      article.appendChild(price);


      /* SKLAD */

      const stock =
        document.createElement("div");

      stock.className =
        "stock";

      stock.textContent =
        "Skladom: " + p.qty + " ks";

      article.appendChild(stock);


      /* TLAČIDLO */

      const button =
        document.createElement("button");

      button.textContent =
        "Pridať do objednávky";

      button.onclick =
        () => add(p.id);

      article.appendChild(button);


      productsEl.appendChild(article);

    });

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


  const availableCount =
    qs("#availableCount");


  if (availableCount) {

    availableCount.textContent =
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


/* =========================================================
   OBJEDNÁVKA
   ========================================================= */

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
          onclick="removeFromCart(${item.id})">
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


/* =========================================================
   SPUSTENIE STRÁNKY
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    render();

    renderCart();


    const search =
      qs("#search");


    if (search) {

      search.addEventListener(
        "input",
        render
      );

    }

  }
);
