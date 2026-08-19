const DEFAULT = [
  {id:1,name:"Brzdové doštičky",code:"VP-001",price:39.90,qty:12},
  {id:2,name:"Olejový filter",code:"VP-014",price:8.50,qty:24},
  {id:3,name:"Vzduchový filter",code:"VP-022",price:14.90,qty:8},
  {id:4,name:"Ložisko kolesa",code:"VP-107",price:54.00,qty:4},
  {id:5,name:"Rozvodová sada",code:"VP-205",price:129.00,qty:2},
  {id:6,name:"Žiarovka H7",code:"VP-310",price:6.90,qty:0}
];
let products=JSON.parse(localStorage.getItem("vp_products")||"null")||DEFAULT;
let cart=JSON.parse(localStorage.getItem("vp_cart")||"[]");

const $=s=>document.querySelector(s);
function save(){localStorage.setItem("vp_products",JSON.stringify(products));localStorage.setItem("vp_cart",JSON.stringify(cart));}
function toast(t){const x=$("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2200)}
function render(){
  const q=$("#search").value.toLowerCase();
  const list=products.filter(p=>(p.name+" "+p.code).toLowerCase().includes(q));
  $("#products").innerHTML=list.map(p=>`<article class="product"><h3>${p.name}</h3><div class="code">${p.code}</div><div class="price">${p.price.toFixed(2)} €</div><div class="stock ${p.qty?"ok":"out"}">${p.qty?`Skladom: ${p.qty} ks`:"Momentálne vypredané"}</div><button class="btn" ${!p.qty?"disabled":""} onclick="add(${p.id})">Pridať do objednávky</button></article>`).join("");
  $("#stockCount").textContent=products.length;$("#availableCount").textContent=products.reduce((a,p)=>a+p.qty,0);
  $("#cart").innerHTML=cart.length?cart.map(i=>{const p=products.find(x=>x.id===i.id);return `<div class="cart-item"><div><strong>${p.name}</strong><br><span class="muted">${p.price.toFixed(2)} € / ks</span></div><div class="qty"><button onclick="change(${p.id},-1)">−</button>${i.n}<button onclick="change(${p.id},1)">+</button></div></div>`}).join("")+`<h3>Spolu: ${cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.n,0).toFixed(2)} €</h3>`:"<p class='muted'>Objednávka je zatiaľ prázdna.</p>";
  renderAdmin();
}
function add(id){const p=products.find(x=>x.id===id),i=cart.find(x=>x.id===id);if(i)i.n=Math.min(i.n+1,p.qty);else cart.push({id,n:1});save();render();toast("Súčiastka pridaná")}
function change(id,d){const i=cart.find(x=>x.id===id),p=products.find(x=>x.id===id);if(!i)return;i.n+=d;if(i.n<=0)cart=cart.filter(x=>x.id!==id);else i.n=Math.min(i.n,p.qty);save();render()}
$("#search").oninput=render;
$("#orderForm").onsubmit=e=>{e.preventDefault();if(!cart.length)return toast("Najprv pridajte súčiastku.");alert("Demo: objednávka bola prijatá. V produkčnej verzii sa odošle do databázy/e-mailu.");cart=[];save();render();e.target.reset()};
$("#adminBtn").onclick=()=>{$("#adminModal").classList.remove("hidden");renderAdmin()};
$("#closeAdmin").onclick=()=>$("#adminModal").classList.add("hidden");
$("#addForm").onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);products.push({id:Date.now(),name:f.get("name"),code:f.get("code"),price:Number(f.get("price")),qty:Number(f.get("qty"))});save();e.target.reset();render();toast("Súčiastka pridaná")};
function renderAdmin(){$("#adminList").innerHTML=products.map(p=>`<div class="admin-row"><strong>${p.name}</strong><span>${p.code}</span><input type="number" min="0" value="${p.price}" onchange="editPrice(${p.id},this.value)"><input type="number" min="0" value="${p.qty}" onchange="editQty(${p.id},this.value)"><button class="danger" onclick="removeProduct(${p.id})">Odstrániť</button></div>`).join("")}
function editQty(id,v){products.find(p=>p.id===id).qty=Math.max(0,Number(v));save();render()}
function editPrice(id,v){products.find(p=>p.id===id).price=Math.max(0,Number(v));save();render()}
function removeProduct(id){products=products.filter(p=>p.id!==id);cart=cart.filter(i=>i.id!==id);save();render();toast("Súčiastka odstránená")}
$("#resetBtn").onclick=()=>{if(confirm("Obnoviť pôvodný demo sklad?")){products=JSON.parse(JSON.stringify(DEFAULT));cart=[];save();render()}}
render();
