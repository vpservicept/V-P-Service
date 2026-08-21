/* ==========================================
   DEMO SKLAD
========================================== */

const DEFAULT = [

  {id:1, name:"Alcatel 5028", code:"VP-001", price:0, qty:1, image:"images/VP-001.jpg"},
  {id:2, name:"Honor 8A", code:"VP-002", price:0, qty:1, image:"images/VP-002.jpg"},
  {id:3, name:"Honor X6A", code:"VP-003", price:0, qty:1, image:"images/VP-003.jpg"},
  {id:4, name:"Huawei P20", code:"VP-004", price:0, qty:1, image:"images/VP-004.jpg"},
  {id:5, name:"Huawei P20 Lite", code:"VP-005", price:0, qty:1, image:"images/VP-005.jpg"},
  {id:6, name:"Huawei P30 Lite", code:"VP-006", price:0, qty:1, image:"images/VP-006.jpg"},
  {id:7, name:"Huawei P Smart 2019", code:"VP-007", price:0, qty:1, image:"images/VP-007.jpg"},
  {id:8, name:"Huawei P Smart 2021", code:"VP-008", price:0, qty:1, image:"images/VP-008.jpg"},
  {id:9, name:"Huawei Y5-2", code:"VP-009", price:0, qty:2, image:"images/VP-009.jpg"},
  {id:10, name:"Huawei Y7 Prime", code:"VP-010", price:0, qty:1, image:"images/VP-010.jpg"},

  {id:11, name:"Infinix Smart 8 – poškodený konektor flex od displeja", code:"VP-011", price:0, qty:1, image:"images/VP-011.jpg"},

  {id:12, name:"Lenovo K9", code:"VP-012", price:0, qty:1, image:"images/VP-012.jpg"},
  {id:13, name:"Moto E2", code:"VP-013", price:0, qty:1, image:"images/VP-013.jpg"},
  {id:14, name:"Moto E7 Plus", code:"VP-014", price:0, qty:1, image:"images/VP-014.jpg"},
  {id:15, name:"Moto E7 Power", code:"VP-015", price:0, qty:2, image:"images/VP-015.jpg"},
  {id:16, name:"Moto E13", code:"VP-016", price:0, qty:1, image:"images/VP-016.jpg"},
  {id:17, name:"Moto E20", code:"VP-017", price:0, qty:1, image:"images/VP-017.jpg"},
  {id:18, name:"Moto G14", code:"VP-018", price:0, qty:1, image:"images/VP-018.jpg"},

  {id:19, name:"Redmi 8", code:"VP-019", price:0, qty:2, image:"images/VP-019.jpg"},
  {id:20, name:"Redmi 9A", code:"VP-020", price:0, qty:1, image:"images/VP-020.jpg"},
  {id:21, name:"Redmi 9C", code:"VP-021", price:0, qty:1, image:"images/VP-021.jpg"},
  {id:22, name:"Redmi 12C", code:"VP-022", price:0, qty:3, image:"images/VP-022.jpg"},
  {id:23, name:"Redmi 13C", code:"VP-023", price:0, qty:1, image:"images/VP-023.jpg"},
  {id:24, name:"Redmi A1", code:"VP-024", price:0, qty:1, image:"images/VP-024.jpg"},
  {id:25, name:"Redmi A2", code:"VP-025", price:0, qty:1, image:"images/VP-025.jpg"},
  {id:26, name:"Redmi A3CGE", code:"VP-026", price:0, qty:1, image:"images/VP-026.jpg"},
  {id:27, name:"Redmi Note 5 Pro", code:"VP-027", price:0, qty:1, image:"images/VP-027.jpg"},
  {id:28, name:"Redmi Note 5A Prime", code:"VP-028", price:0, qty:1, image:"images/VP-028.jpg"},
  {id:29, name:"Redmi Note 8 Pro", code:"VP-029", price:0, qty:1, image:"images/VP-029.jpg"},
  {id:30, name:"Redmi Note 9", code:"VP-030", price:0, qty:1, image:"images/VP-030.jpg"},
  {id:31, name:"Redmi Note 11 a 11S", code:"VP-031", price:0, qty:1, image:"images/VP-031.jpg"},

  {id:32, name:"Samsung A3", code:"VP-032", price:0, qty:1, image:"images/VP-032.jpg"},
  {id:33, name:"Samsung A5", code:"VP-033", price:0, qty:2, image:"images/VP-033.jpg"},
  {id:34, name:"Samsung Galaxy A03", code:"VP-034", price:0, qty:1, image:"images/VP-034.jpg"},
  {id:35, name:"Samsung Galaxy A8", code:"VP-035", price:0, qty:1, image:"images/VP-035.jpg"},
  {id:36, name:"Samsung Galaxy A12", code:"VP-036", price:0, qty:1, image:"images/VP-036.jpg"},
  {id:37, name:"Samsung Galaxy A13", code:"VP-037", price:0, qty:1, image:"images/VP-037.jpg"},
  {id:38, name:"Samsung Galaxy A20", code:"VP-038", price:0, qty:1, image:"images/VP-038.jpg"},
  {id:39, name:"Samsung Galaxy A20e", code:"VP-039", price:0, qty:1, image:"images/VP-039.jpg"},
  {id:40, name:"Samsung Galaxy A50", code:"VP-040", price:0, qty:1, image:"images/VP-040.jpg"},
  {id:41, name:"Samsung Galaxy A53", code:"VP-041", price:0, qty:2, image:"images/VP-041.jpg"},
  {id:42, name:"Samsung Galaxy A217F", code:"VP-042", price:0, qty:1, image:"images/VP-042.jpg"},
  {id:43, name:"Samsung Galaxy A405FN", code:"VP-043", price:0, qty:1, image:"images/VP-043.jpg"},
  {id:44, name:"Samsung Galaxy J510FN", code:"VP-044", price:0, qty:1, image:"images/VP-044.jpg"},
  {id:45, name:"Samsung Galaxy Note 10", code:"VP-045", price:0, qty:1, image:"images/VP-045.jpg"},
  {id:46, name:"Samsung Galaxy S5 Mini", code:"VP-046", price:0, qty:2, image:"images/VP-046.jpg"},
  {id:47, name:"Samsung Galaxy S6", code:"VP-047", price:0, qty:1, image:"images/VP-047.jpg"},
  {id:48, name:"Samsung Galaxy S10", code:"VP-048", price:0, qty:1, image:"images/VP-048.jpg"},

  {id:49, name:"Tecno Spark 8", code:"VP-049", price:0, qty:1, image:"images/VP-049.jpg"}

];


/* ==========================================
   NAČÍTANIE SKLADU
========================================== */

let products =
  JSON.parse(
    localStorage.getItem("vp_products") || "null"
  ) || DEFAULT;


let cart =
  JSON.parse(
    localStorage.getItem("vp_cart") || "[]"
  );


/* ==========================================
   POMOCNÁ FUNKCIA
========================================== */

function qs(selector) {
  return document.querySelector(selector);
}


/* ==========================================
   ULOŽENIE
========================================== */

function save() {

  localStorage.setItem(
    "vp_products",
    JSON.stringify(products)
  );

  localStorage.setItem(
    "vp_cart",
    JSON.stringify(cart)
  );
}


/* ==========================================
   ZOBRAZENIE PRODUKTOV
========================================== */

function render(searchText = "") {

  const search =
    searchText
      .toLowerCase()
      .trim();


  const list =
    products.filter(p => {

      const name =
        p.name.toLowerCase();

      const code =
        p.code.toLowerCase();

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
        <div style="
          grid-column:1/-1;
          text-align:center;
          padding:50px;
        ">
          <h3>Súčiastka sa nenašla</h3>
          <p style="color:#aaa;">
            Skúste zadať iný názov alebo kód.
          </p>
        </div>
      `;

    } else {

      productsEl.innerHTML =
        list.map(p => `

          <article class="product">

            ${
              p.image
              ? `
                <img
                  src="${p.image}"
                  alt="${p.name}"
                  onerror="this.style.display='none'"
                >
              `
              : ""
            }

            <h3>
              ${p.name}
            </h3>

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

        `).join("");

    }

  }


  updateStockCount();

}


/* ==========================================
   SKLADOVÉ ČÍSLA
========================================== */

function updateStockCount() {

  const available =
    products.reduce(
      (sum, p) => sum + Number(p.qty),
      0
    );


  const availableEl =
    qs("#availableCount");


  if (availableEl) {

    availableEl.textContent =
      available;
  }

}


/* ==========================================
   PRIDANIE DO OBJEDNÁVKY
========================================== */

function add(id) {

  const product =
    products.find(
      p => p.id === id
    );


  if (!product || product.qty <= 0) {

    showToast(
      "Táto súčiastka momentálne nie je skladom."
    );

    return;
  }


  const existing =
    cart.find(
      x => x.id === id
    );


  if (existing) {

    if (
      existing.amount <
      product.qty
    ) {

      existing.amount++;

    } else {

      showToast(
        "Nie je možné pridať viac kusov."
      );

      return;
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

  showToast(
    "Diel bol pridaný do objednávky."
  );
}


/* ==========================================
   OBJEDNÁVKA
========================================== */

function renderCart() {

  const cartEl =
    qs("#cart");


  if (!cartEl) return;


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


/* ==========================================
   ODSTRÁNENIE Z OBJEDNÁVKY
========================================== */

function removeFromCart(id) {

  cart =
    cart.filter(
      item => item.id !== id
    );

  save();

  renderCart();
}


/* ==========================================
   VYMAZANIE OBJEDNÁVKY
========================================== */

function clearCart() {

  cart = [];

  save();

  renderCart();
}


/* ==========================================
   TOAST
========================================== */

function showToast(message) {

  const toast =
    qs("#toast");

  if (!toast) return;

  toast.textContent =
    message;

  toast.classList.add("show");


  setTimeout(() => {

    toast.classList.remove("show");

  }, 2500);
}


/* ==========================================
   TRI ČIARKY / MENU
========================================== */

function setupMenu() {

  const menuBtn =
    qs("#menuBtn");

  const menu =
    qs("#menu");


  if (!menuBtn || !menu) return;


  menuBtn.addEventListener(
    "click",
    () => {

      menu.classList.toggle("open");

    }
  );


  document.addEventListener(
    "click",
    event => {

      if (
        !menu.contains(event.target) &&
        !menuBtn.contains(event.target)
      ) {

        menu.classList.remove("open");

      }

    }
  );


  menu.querySelectorAll("a").forEach(
    link => {

      link.addEventListener(
        "click",
        () => {

          menu.classList.remove("open");

        }
      );

    }
  );

}


/* ==========================================
   VYHĽADÁVANIE
========================================== */

function setupSearch() {

  const input =
    qs("#topSearch");

  const button =
    qs("#topSearchBtn");


  if (!input) return;


  function doSearch() {

    const value =
      input.value;


    render(value);


    const sklad =
      qs("#sklad");


    if (sklad) {

      sklad.scrollIntoView({
        behavior: "smooth"
      });

    }

  }


  if (button) {

    button.addEventListener(
      "click",
      doSearch
    );

  }


  input.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter"
      ) {

        doSearch();

      }

    }
  );

}


/* ==========================================
   ADMINISTRÁCIA
========================================== */

function setupAdmin() {

  const adminBtn =
    qs("#adminBtn");

  const modal =
    qs("#adminModal");

  const closeBtn =
    qs("#closeAdmin");


  if (
    !adminBtn ||
    !modal
  ) return;


  adminBtn.addEventListener(
    "click",
    () => {

      modal.classList.remove(
        "hidden"
      );

      renderAdmin();

      qs("#menu")?.classList.remove(
        "open"
      );

    }
  );


  if (closeBtn) {

    closeBtn.addEventListener(
      "click",
      () => {

        modal.classList.add(
          "hidden"
        );

      }
    );

  }


  modal.addEventListener(
    "click",
    event => {

      if (
        event.target === modal
      ) {

        modal.classList.add(
          "hidden"
        );

      }

    }
  );

}


/* ==========================================
   ADMIN ZOZNAM
========================================== */

function renderAdmin() {

  const adminList =
    qs("#adminList");


  if (!adminList) return;


  adminList.innerHTML =
    products.map(p => `

      <div style="
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:10px;
        padding:10px 0;
        border-bottom:1px solid rgba(255,255,255,.1);
      ">

        <div>

          <strong>
            ${p.name}
          </strong>

          <div style="
            color:#aaa;
            font-size:12px;
          ">
            ${p.code} |
            ${p.qty} ks
          </div>

        </div>

        <button
          onclick="deleteProduct(${p.id})"
          style="
            background:#7d2633;
            color:white;
            border:0;
            border-radius:7px;
            padding:7px 10px;
            cursor:pointer;
          "
        >
          Zmazať
        </button>

      </div>

    `).join("");
}


/* ==========================================
   VYMAZANIE PRODUKTU
========================================== */

function deleteProduct(id) {

  products =
    products.filter(
      p => p.id !== id
    );


  save();

  render();

  renderAdmin();

}


/* ==========================================
   PRIDANIE PRODUKTU
========================================== */

function setupAddForm() {

  const form =
    qs("#addForm");


  if (!form) return;


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const data =
        new FormData(form);


      const newProduct = {

        id:
          Date.now(),

        name:
          data.get("name"),

        code:
          data.get("code"),

        price:
          Number(
            data.get("price")
          ),

        qty:
          Number(
            data.get("qty")
          ),

        image:
          ""

      };


      products.push(
        newProduct
      );


      save();

      render();

      renderAdmin();

      form.reset();


      showToast(
        "Súčiastka bola pridaná."
      );

    }
  );

}


/* ==========================================
   RESET DEMO SKLADU
========================================== */

function setupReset() {

  const resetBtn =
    qs("#resetBtn");


  if (!resetBtn) return;


  resetBtn.addEventListener(
    "click",
    () => {

      if (
        !confirm(
          "Naozaj chcete obnoviť demo sklad?"
        )
      ) {

        return;

      }


      products =
        JSON.parse(
          JSON.stringify(DEFAULT)
        );


      cart = [];


      save();

      render();

      renderCart();

      renderAdmin();


      showToast(
        "Demo sklad bol obnovený."
      );

    }
  );

}


/* ==========================================
   ODOSLANIE OBJEDNÁVKY
========================================== */

function setupOrderForm() {

  const form =
    qs("#orderForm");


  if (!form) return;


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      if (!cart.length) {

        showToast(
          "Najprv pridajte súčiastku do objednávky."
        );

        return;
      }


      showToast(
        "Objednávka bola odoslaná."
      );


      form.reset();

      clearCart();

    }
  );

}


/* ==========================================
   10 → 9 → 10 → 9
   KAŽDÝCH 10 SEKÚND
========================================== */

let onlineVisitors = 10;


function updateOnlineVisitors() {

  const onlineEl =
    qs("#onlineVisitors");


  if (!onlineEl) return;


  if (
    onlineVisitors === 10
  ) {

    onlineVisitors = 9;

  } else {

    onlineVisitors = 10;

  }


  onlineEl.textContent =
    onlineVisitors;
}


/*
   Prvých 10 sekúnd zostane 10.
   Potom 9.
   Potom 10.
   A stále dookola.
*/

setInterval(
  updateOnlineVisitors,
  10000
);


/* ==========================================
   SPUSTENIE STRÁNKY
========================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    render();

    renderCart();

    setupMenu();

    setupSearch();

    setupAdmin();

    setupAddForm();

    setupReset();

    setupOrderForm();

  }
);
