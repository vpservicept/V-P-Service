/* =========================================================
   V&P SERVICE
   SKLAD NÁHRADNÝCH DIELOV
========================================================= */


/* =========================================================
   49 PÔVODNÝCH PRODUKTOV
========================================================= */

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


/* =========================================================
   KATEGÓRIE
========================================================= */

const CATEGORIES = [

  "Všetky súčiastky",
  "Matičné dosky",
  "Batérie",
  "Displeje",
  "Odtlačky prstov",
  "Konektory",
  "Kamery",
  "Reproduktory",
  "Kryty",
  "Flex káble"

];


/* =========================================================
   NAČÍTANIE PRODUKTOV
========================================================= */

let products = [];

try {

  const saved =
    JSON.parse(
      localStorage.getItem("vp_products")
    );

  if (
    Array.isArray(saved) &&
    saved.length > 0
  ) {

    products = saved;

  } else {

    products =
      DEFAULT.map(function(product) {

        return {
          ...product,
          category: "Matičné dosky"
        };

      });

  }

} catch (error) {

  products =
    DEFAULT.map(function(product) {

      return {
        ...product,
        category: "Matičné dosky"
      };

    });

}


/* =========================================================
   DOPLNENIE KATEGÓRIE EXISTUJÚCIM PRODUKTOM
========================================================= */

products =
  products.map(function(product) {

    return {

      ...product,

      category:
        product.category ||
        "Matičné dosky"

    };

  });


/* =========================================================
   KOŠÍK
========================================================= */

let cart = [];

try {

  const savedCart =
    JSON.parse(
      localStorage.getItem("vp_cart")
    );

  if (Array.isArray(savedCart)) {

    cart = savedCart;

  }

} catch (error) {

  cart = [];

}


/* =========================================================
   ULOŽENIE
========================================================= */

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


save();


/* =========================================================
   POMOCNÁ FUNKCIA
========================================================= */

function qs(selector) {

  return document.querySelector(selector);

}


/* =========================================================
   OBRÁZKY
========================================================= */

const PRODUCT_IMAGES = {

  "Alcatel 5028":
    "Alcatel 5028.jpg",

  "Honor 8A":
    "Honor 8A.jpg",

  "Honor X6A":
    "Honor X6A.jpg",

  "Huawei Nova 8i":
    "Huawei Nova 8i.jpg",

  "Huawei P20 Lite":
    "Huawei P20 Lite.png",

  "Huawei P20":
    "Huawei P20.jpg",

  "Huawei P30 Lite":
    "Huawei P30 Lite.png",

  "Huawei P30":
    "Huawei P30.jpg",

  "Huawei P Smart 2019":
    "Huawei PSmart 2019.jpg",

  "Huawei P Smart 2021":
    "Huawei PSmart 2021.jpg",

  "Huawei Y5 II":
    "Huawei Y5 II.png",

  "Huawei Y7 Prime":
    "Huawei Y7 Prime.jpg",

  "Infinix Smart 8":
    "Infinix Smart 8.png",

  "Moto E13":
    "Moto E13.jpg",

  "Moto E7 Plus":
    "Moto E7 Plus.png",

  "Moto E7 Power":
    "Moto E7 Power.jpg",

  "Redmi 9C":
    "Redmi 9C.png",

  "Redmi Note 11,11S":
    "Redmi Note 11,11s.jpg",

  "Samsung Galaxy A3":
    "Samsung Galaxy A3.png",

  "Samsung Galaxy A5":
    "Samsung Galaxy A5.jpg",

  "Samsung Galaxy A6":
    "Samsung Galaxy A6.png",

  "Samsung Galaxy A8":
    "Samsung Galaxy A8.jpg",

  "Samsung Galaxy A9":
    "Samsung Galaxy A9.jpg"

};


/* =========================================================
   AUTOMATICKÉ HĽADANIE OBRÁZKU
========================================================= */

function getProductImage(product) {

  /*
    Najprv použijeme presný názov
    zo zoznamu PRODUCT_IMAGES.
  */

  if (
    PRODUCT_IMAGES.hasOwnProperty(
      product.name
    )
  ) {

    return PRODUCT_IMAGES[
      product.name
    ];

  }


  /*
    Ak obrázok nie je v zozname,
    pokúsime sa ho nájsť podľa názvu.
  */

  const clean =
    product.name
      .replace(/–/g, "")
      .replace(/[\/\\:*?"<>|]/g, "")
      .trim();


  return clean + ".jpg";

}


/* =========================================================
   VYBRANÁ KATEGÓRIA
========================================================= */

let selectedCategory =
  "Všetky súčiastky";


/* =========================================================
   VYTVORENIE KATEGÓRIÍ
========================================================= */

function renderCategoryButtons() {

  let container =
    qs("#categoryFilters");


  /*
    Ak categoryFilters nie je v index.html,
    vytvoríme ho automaticky.
  */

  if (!container) {

    const productsEl =
      qs("#products");


    if (!productsEl) {

      return;

    }


    container =
      document.createElement("div");


    container.id =
      "categoryFilters";


    productsEl.parentNode.insertBefore(
      container,
      productsEl
    );

  }


  container.innerHTML =
    CATEGORIES.map(function(category) {

      const active =
        category === selectedCategory
          ? "active"
          : "";


      return `

        <button
          type="button"
          class="category-btn ${active}"
          data-category="${category}"
        >
          ${category}
        </button>

      `;

    }).join("");


  /*
    Kliknutie na kategóriu.
  */

  container
    .querySelectorAll(".category-btn")
    .forEach(function(button) {

      button.addEventListener(
        "click",
        function() {

          selectedCategory =
            button.dataset.category;


          renderCategoryButtons();

          render();

        }
      );

    });

}


/* =========================================================
   VYHĽADÁVANIE
========================================================= */

function getSearchValue() {

  const search =
    qs("#search");


  if (!search) {

    return "";

  }


  return search.value
    .toLowerCase()
    .trim();

}


/* =========================================================
   VYHĽADÁVANIE PRODUKTOV
========================================================= */

function searchProducts() {

  render(
    getSearchValue()
  );


  const stock =
    qs("#sklad") ||
    qs("#products");


  if (stock) {

    stock.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });

  }

}


/* =========================================================
   VYKRESLENIE PRODUKTOV
========================================================= */

function render(searchValue = null) {

  const search =
    searchValue !== null
      ? searchValue.toLowerCase().trim()
      : getSearchValue();


  /*
    Kategória
  */

  let list =
    products.filter(function(product) {

      if (
        selectedCategory ===
        "Všetky súčiastky"
      ) {

        return true;

      }


      return (
        product.category ===
        selectedCategory
      );

    });


  /*
    Vyhľadávanie
  */

  if (search) {

    list =
      list.filter(function(product) {

        const name =
          String(product.name)
            .toLowerCase();


        const code =
          String(product.code)
            .toLowerCase();


        return (

          name.includes(search) ||

          code.includes(search)

        );

      });

  }


  const productsEl =
    qs("#products");


  if (!productsEl) {

    return;

  }


  /*
    Žiadny výsledok
  */

  if (!list.length) {

    productsEl.innerHTML = `

      <div class="no-results">

        <h3>
          Žiadna súčiastka sa nenašla
        </h3>

        <p>
          Skús zadať iný názov alebo vyber inú kategóriu.
        </p>

      </div>

    `;

  }


  /*
    Produkty
  */

  else {

    productsEl.innerHTML =
      list.map(function(product) {

        const image =
          getProductImage(product);


        return `

          <article
            class="product product-card"
          >

            <div class="product-image">

              <img
                src="./${encodeURI(image)}"
                alt="${product.name}"
                class="product-photo"
              >

            </div>


            <h3>
              ${product.name}
            </h3>


            <div class="code">
              ${product.code}
            </div>


            <div class="price">

              ${
                Number(product.price) > 0

                  ? Number(product.price).toFixed(2) + " €"

                  : "Cena na vyžiadanie"
              }

            </div>


            <div class="stock">

              Skladom:
              ${product.qty}
              ks

            </div>


            <button
              type="button"
              onclick="add(${product.id})"
              ${Number(product.qty) <= 0 ? "disabled" : ""}
            >

              Pridať do košíku

            </button>


          </article>

        `;

      }).join("");

  }


  /*
    Počet kusov skladom
  */

  const stockCount =
    qs("#stockCount");


  if (stockCount) {

    stockCount.textContent =
      products.reduce(
        function(sum, product) {

          return (
            sum +
            Number(product.qty || 0)
          );

        },
        0
      );

  }


  /*
    Počet produktov
  */

  const productCount =
    qs("#productCount");


  if (productCount) {

    productCount.textContent =
      products.length;

  }


  /*
    Informácia o vyhľadávaní
  */

  const searchInfo =
    qs("#searchInfo");


  if (searchInfo) {

    if (search) {

      searchInfo.textContent =
        "Vyhľadávanie: " +
        search;

    } else {

      searchInfo.textContent =
        "";

    }

  }

}


/* =========================================================
   PRIDANIE DO KOŠÍKA
========================================================= */

function add(id) {

  const product =
    products.find(function(item) {

      return item.id === id;

    });


  if (
    !product ||
    Number(product.qty) <= 0
  ) {

    return;

  }


  const existing =
    cart.find(function(item) {

      return item.id === id;

    });


  if (existing) {

    if (
      Number(existing.amount) <
      Number(product.qty)
    ) {

      existing.amount++;

    }

  }


  else {

    cart.push({

      id:
        product.id,

      name:
        product.name,

      amount:
        1

    });

  }


  save();

  renderCart();

  updateCartCount();


  alert(
    "Diel bol pridaný do košíka."
  );

}


/* =========================================================
   KOŠÍK
========================================================= */

function renderCart() {

  const cartEl =
    qs("#cart");


  if (!cartEl) {

    return;

  }


  if (!cart.length) {

    cartEl.innerHTML = `

      <p>
        Košík je zatiaľ prázdny.
      </p>

    `;


    updateCartCount();

    return;

  }


  cartEl.innerHTML =
    cart.map(function(item) {

      return `

        <div class="cart-item">

          <strong>
            ${item.name}
          </strong>

          <span>
            ${item.amount} ks
          </span>

          <button
            type="button"
            onclick="removeFromCart(${item.id})"
          >

            Odstrániť

          </button>

        </div>

      `;

    }).join("");


  updateCartCount();

}


/* =========================================================
   ODSTRÁNIŤ Z KOŠÍKA
========================================================= */

function removeFromCart(id) {

  cart =
    cart.filter(function(item) {

      return item.id !== id;

    });


  save();

  renderCart();

  updateCartCount();

}


/* =========================================================
   VYPRÁZDNIŤ KOŠÍK
========================================================= */

function clearCart() {

  cart = [];

  save();

  renderCart();

  updateCartCount();

}


/* =========================================================
   POČET POLOŽIEK V KOŠÍKU
========================================================= */

function updateCartCount() {

  const cartCount =
    qs("#cartCount");


  if (!cartCount) {

    return;

  }


  const total =
    cart.reduce(
      function(sum, item) {

        return (
          sum +
          Number(item.amount || 0)
        );

      },
      0
    );


  cartCount.textContent =
    total;

}


/* =========================================================
   HAMBURGER MENU
========================================================= */

function setupMenu() {

  const menuButton =
    qs("#menuButton");


  const menu =
    qs("#mobileMenu");


  if (
    !menuButton ||
    !menu
  ) {

    return;

  }


  menuButton.addEventListener(
    "click",
    function(event) {

      event.stopPropagation();


      menu.classList.toggle(
        "open"
      );


      menu.classList.toggle(
        "show"
      );


      const isOpen =
        menu.classList.contains(
          "open"
        );


      menuButton.setAttribute(
        "aria-expanded",
        isOpen
          ? "true"
          : "false"
      );

    }
  );


  document.addEventListener(
    "click",
    function(event) {

      if (

        !menu.contains(
          event.target
        ) &&

        !menuButton.contains(
          event.target
        )

      ) {

        menu.classList.remove(
          "open"
        );

        menu.classList.remove(
          "show"
        );


        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }
  );


  menu
    .querySelectorAll("a")
    .forEach(function(link) {

      link.addEventListener(
        "click",
        function() {

          menu.classList.remove(
            "open"
          );

          menu.classList.remove(
            "show"
          );


          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });

}


/* =========================================================
   VYHĽADÁVANIE V HORNEJ LIŠTE
========================================================= */

function setupSearch() {

  const search =
    qs("#search");


  if (!search) {

    return;

  }


  const searchButton =
    qs("#searchButton");


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


  /*
    Filtrovanie okamžite
    počas písania.
  */

  search.addEventListener(
    "input",
    function() {

      render();

    }
  );

}


/* =========================================================
   LOGO
========================================================= */

function setupLogo() {

  const logo =
    qs("#logo");


  if (logo) {

    logo.src =
      "./logo.jpg";

  }

}


/* =========================================================
   OPRAVA STARŠÍCH PRODUKTOV
========================================================= */

function repairProducts() {

  /*
    Ak je v localStorage stará verzia
    bez kategórií, doplníme ich.
  */

  products =
    products.map(function(product) {

      if (!product.category) {

        product.category =
          "Matičné dosky";

      }


      return product;

    });


  save();

}


/* =========================================================
   SPUSTENIE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    /*
      Opraviť staré produkty
    */

    repairProducts();


    /*
      Vytvoriť kategórie
    */

    renderCategoryButtons();


    /*
      Zobraziť produkty
    */

    render();


    /*
      Zobraziť košík
    */

    renderCart();


    /*
      Aktualizovať počet košíka
    */

    updateCartCount();


    /*
      Hamburger menu
    */

    setupMenu();


    /*
      Vyhľadávanie
    */

    setupSearch();


    /*
      Logo
    */

    setupLogo();

  }
);
