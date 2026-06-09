alert("KART SLIDER CALISTI");
const heroImages = [
    "assets/images/hero/HERO1.jpg",
    "assets/images/hero/HERO2.jpg",
    "assets/images/hero/HERO3.jpg",
    "assets/images/hero/HERO4.jpg",
    "assets/images/hero/HERO5.jpg",
    "assets/images/hero/HERO6.jpg"
];

let heroIndex = 0;

setInterval(() => {
    heroIndex = (heroIndex + 1) % heroImages.length;
    document.getElementById("heroImage").src = heroImages[heroIndex];
}, 10000);


function slider(id, images, time = 5000) {

    let index = 0;

    setInterval(() => {

        index++;

        if(index >= images.length){
            index = 0;
        }

        const img = document.getElementById(id);

        if(img){
            img.src = images[index];
        }

    }, time);

}

slider("istanbul-img", [
"assets/images/istanbul/İ1.jpg",
"assets/images/istanbul/İ2.jpg",
"assets/images/istanbul/İ3.jpg",
"assets/images/istanbul/İ4.jpg",
"assets/images/istanbul/İ5.jpg",
"assets/images/istanbul/İ6.jpg",
"assets/images/istanbul/İ7.jpg",
"assets/images/istanbul/İ8.jpg",
"assets/images/istanbul/İ9.jpg",
"assets/images/istanbul/İ10.jpg",
"assets/images/istanbul/İ11.jpg",
"assets/images/istanbul/İ12.jpg",
"assets/images/istanbul/İ13.jpg",
"assets/images/istanbul/İ14.jpg",
"assets/images/istanbul/İ15.jpg"
]);

slider("kapadokya-img", [
"assets/images/kapadokya/K1.jpg",
"assets/images/kapadokya/K2.jpg",
"assets/images/kapadokya/K3.jpg",
"assets/images/kapadokya/K4.jpg",
"assets/images/kapadokya/K5.jpg",
"assets/images/kapadokya/K6.jpg",
"assets/images/kapadokya/K7.jpg",
"assets/images/kapadokya/K8.jpg",
"assets/images/kapadokya/K9.jpg",
"assets/images/kapadokya/K10.jpg"
]);

slider("antalya-img", [
"assets/images/antalya/A1.jpg",
"assets/images/antalya/A2.jpg",
"assets/images/antalya/A3.jpg",
"assets/images/antalya/A4.jpg",
"assets/images/antalya/A5.jpg",
"assets/images/antalya/A6.jpg"
]);

slider("vip-img", [
"assets/images/vip-transfer/2.jpg",
"assets/images/vip-transfer/3.jpg",
"assets/images/vip-transfer/4.jpg",
"assets/images/vip-transfer/5.jpg",
"assets/images/vip-transfer/6.jpg",
"assets/images/vip-transfer/7.jpg",
"assets/images/vip-transfer/8.jpg",
"assets/images/vip-transfer/9.jpg",
"assets/images/vip-transfer/10.jpg",
"assets/images/vip-transfer/11.jpg",
"assets/images/vip-transfer/12.jpg",
"assets/images/vip-transfer/13.jpg",
"assets/images/vip-transfer/14.jpg"
]);
