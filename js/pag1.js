document.getElementById ("mascota");
document.getElementById("historia1");
document.getElementById("historia2");
document.getElementById("beto");
document.getElementById("historia3");
document.getElementById("betty");
document.getElementById("lucile");
document.getElementById("historia4");


mascota.addEventListener("click", () => {
    if (historia1.paused) {
        historia1.currentTime = 0;
        historia1.play();
    } else {
        historia1.pause();
        historia1.currentTime = 0;
    }
});

beto.addEventListener("click", () => {
    if (historia2.paused) {
        historia2.currentTime = 0;
        historia2.play();
    } else {
        historia2.pause();
        historia2.currentTime = 0;
    }
});

betty.addEventListener("click", () => {
    if (historia3.paused) {
        historia3.currentTime = 0;
        historia3.play();
    } else {
        historia3.pause();
        historia3.currentTime = 0;
    }
});

lucile.addEventListener("click", () => {
    if (historia4.paused) {
        historia4.currentTime = 0;
        historia4.play();
    } else {
        historia4.pause();
        historia4.currentTime = 0;
    }
});