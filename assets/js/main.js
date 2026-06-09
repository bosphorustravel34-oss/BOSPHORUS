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

slider("yat-img", [
"assets/images/yat/Y1.jpg",
"assets/images/yat/Y2.jpg",
"assets/images/yat/Y3.jpg",
"assets/images/yat/Y4.jpg",
"assets/images/yat/Y5.jpg",
"assets/images/yat/Y6.jpg",
"assets/images/yat/Y7.jpg",
"assets/images/yat/Y8.jpg",
"assets/images/yat/Y9.jpg",
"assets/images/yat/Y10.jpg"
]);

slider("helikopter-img", [
"assets/images/helikopter/H1.jpg",
"assets/images/helikopter/H2.jpg",
"assets/images/helikopter/H3.jpg",
"assets/images/helikopter/H4.jpg",
"assets/images/helikopter/H5.jpg",
"assets/images/helikopter/H6.jpg",
"assets/images/helikopter/H7.jpg",
"assets/images/helikopter/H8.jpg",
"assets/images/helikopter/H9.jpg",
"assets/images/helikopter/H10.jpg"
]);

slider("mugla-img", [
"assets/images/mugla/M1.jpg",
"assets/images/mugla/M2.jpg",
"assets/images/mugla/M3.jpg",
"assets/images/mugla/M4.jpg",
"assets/images/mugla/M5.jpg",
"assets/images/mugla/M6.jpg",
"assets/images/mugla/M7.jpg",
"assets/images/mugla/M8.jpg",
"assets/images/mugla/M9.jpg",
"assets/images/mugla/M10.jpg"
]);

slider("pamukkale-img", [
"assets/images/pamukkale/P1.jpg",
"assets/images/pamukkale/P2.jpg",
"assets/images/pamukkale/P3.jpg",
"assets/images/pamukkale/P4.jpg",
"assets/images/pamukkale/P5.jpg",
"assets/images/pamukkale/P6.jpg",
"assets/images/pamukkale/P7.jpg",
"assets/images/pamukkale/P8.jpg",
"assets/images/pamukkale/P9.jpg",
"assets/images/pamukkale/P10.jpg"
]);

slider("efes-img", [
"assets/images/efes/E1.jpg",
"assets/images/efes/E2.jpg",
"assets/images/efes/E3.jpg",
"assets/images/efes/E4.jpg",
"assets/images/efes/E5.jpg",
"assets/images/efes/E6.jpg"
]);

slider("safari-img", [
"assets/images/safari/S1.jpg",
"assets/images/safari/S2.jpg",
"assets/images/safari/S3.jpg",
"assets/images/safari/S4.jpg",
"assets/images/safari/S5.jpg",
"assets/images/safari/S6.jpg",
"assets/images/safari/S7.jpg"
]);

slider("diving-img", [
"assets/images/diving/D1.jpg",
"assets/images/diving/D2.jpg",
"assets/images/diving/D3.jpg",
"assets/images/diving/D4.jpg",
"assets/images/diving/D5.jpg",
"assets/images/diving/D6.jpg",
"assets/images/diving/D7.jpg"
]);

slider("paragliding-img", [
"assets/images/paragliding/Y1.jpg",
"assets/images/paragliding/Y2.jpg",
"assets/images/paragliding/Y3.jpg",
"assets/images/paragliding/Y4.jpg",
"assets/images/paragliding/Y5.jpg",
"assets/images/paragliding/Y6.jpg"
]);
