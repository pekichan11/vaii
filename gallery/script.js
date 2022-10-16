window.onload = function () {
    const button = document.querySelector("input");
    button.addEventListener("click", nehe);
};

function nehe() {
    const img = document.querySelector(".omg");
    const number = Math.floor(Math.random() * 300);
    console.log(img);
    console.log("https://picsum.photos/id/" + number + "/300/300");
    img.src = "https://picsum.photos/id/" + number + "/300/300";
}

