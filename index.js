const container = document.querySelector(".container");
const body = document.querySelector("body");


// Style the body to center the container
body.style.margin = "0";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.backgroundColor = "#f0f0f0"; // Optional: adds a light background for contrast


//Button
const button = document.querySelector("#btn");
body.appendChild(button);

button.textContent = "Set Grid Size";
button.style.marginBottom = "20px";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.border = "2px solid black";
button.style.borderRadius = "5px";
button.style.backgroundColor = "#4CAF50";
button.style.color = "white";
button.style.cursor = "pointer";







//Flexbox
container.style.display = "flex"; 
container.style.flexWrap = "wrap";
container.style.justifyContent = "space-around"; 
container.style.height ="1700px"
container.style.width = "1700px"
container.style.border = "2px solid black"
container.style.alignItems = "center"; 
container.style.order = "1";

function divCreation(size) {

    const div1 =document.createElement("div");

    div1.style.height = `${size}px`;
    div1.style.width =`${size}px`;
    div1.style.border = "1px solid white";
    div1.style.backgroundColor = "#C6E7FF";

    div1.addEventListener("mouseenter", () => {
        div1.style.backgroundColor = "#B7E0FF"; 
    });

    div1.addEventListener("mouseleave", () => {
        div1.style.backgroundColor = "#C6E7FF"; 
    });

    return div1;


}

function gridMaking(gridSize) {
    container.innerHTML = "";

    const squareSize = Math.floor(1700/gridSize)-2;

    for(i=1; i<=gridSize*gridSize; i++){

        const div = divCreation(squareSize);
        container.appendChild(div);

}


}

button.addEventListener("click", () => {

    let gridSize = prompt("Enter number of between 1 and 100");

    if(isNaN(gridSize) || gridSize < 0 || gridSize > 100 ){
        alert("Invalid input");
    }else {
        gridMaking(gridSize);

    }

});

gridMaking(16);
        

