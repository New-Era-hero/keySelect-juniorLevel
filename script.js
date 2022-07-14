const aContainer = document.querySelector(".flex-container");
let count = 0;

const button = document.querySelector(".sendButton");
button.value = button.value[0].toUpperCase() + button.value.slice(1);

const createKey = (name, model, price) => {
    count++;
    img = `<img src="key.png" class="img-key">`
    name = `<h2>${name}</h2>`;
    model = `<h3 id="${model}">Model: ${model}</h3>`;
    price = `<p>Price: <b>$${price}</b></p>`;
    return [name, model, price, img];
}

let documentFragment = document.createDocumentFragment();

for(let i = 1; i <= 20; i++){
    let rModel = Math.round(Math.random()*1000);
    let rPrice = Math.round(Math.random()*10+30);
    let key = createKey(`key ${i}`, `${rModel}`, `${rPrice}`);
    
    let div = document.createElement("DIV");
    div.classList.add(`item-${i}`,`flex-item`);
    div.addEventListener("click",() => {document.querySelector(".key-data").value = rModel;});
    
    div.tabIndex = i;
    div.innerHTML = key[0] + key[1] + key[2] + key[3];
    
    documentFragment.appendChild(div);
}

aContainer.appendChild(documentFragment);
