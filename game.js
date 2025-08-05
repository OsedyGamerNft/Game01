const SIZE=5;let tiles=Array(SIZE*SIZE).fill(null),inventory={carrot:0};
const farm=document.getElementById("farm");
for(let i=0;i<SIZE*SIZE;i++){const d=document.createElement("div");d.className="tile";d.onclick=()=>onClick(i);farm.appendChild(d);}
function onClick(i){
  if(!tiles[i]){tiles[i]={type:"carrot",planted:Date.now()};farm.children[i].classList.add("planted");}
  else if(Date.now()-tiles[i].planted>2000){inventory.carrot++;tiles[i]=null;farm.children[i].classList.remove("planted");updateInventory();}
  else alert("Aún no está lista");
}
function updateInventory(){document.getElementById("invList").innerHTML=`<li>Zanahoria: ${inventory.carrot}</li>`;}
updateInventory();
