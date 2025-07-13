const light = document.getElementById("light");
let visible = true;

setInterval(() => {
    light.style.opacity = visible ? '0.25' : '1';
    visible = !visible;
    console.log(light.style.opacity);
}, 2000)