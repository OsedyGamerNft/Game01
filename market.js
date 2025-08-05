let orders=[];
function sell(){
  const p=parseInt(document.getElementById("priceInput").value);
  if(!p||inventory.carrot<=0)return alert("Sin precio o sin stock");
  inventory.carrot--;orders.push({seller:"player",item:"carrot",price:p});renderMarket();updateInventory();
}
function buy(i){const o=orders[i];if(inventory.carrot>=o.price){inventory.carrot++;orders.splice(i,1);renderMarket();updateInventory();}else alert("Sin fondos");}
function renderMarket(){
  const list=document.getElementById("marketList");list.innerHTML="";
  orders.forEach((o,i)=>{const li=document.createElement("li");li.innerText=`${o.item} x1 → ${o.price}🥕`;li.onclick=()=>buy(i);list.appendChild(li);});
}
renderMarket();
