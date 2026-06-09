console.log("JS CALISTI");

const heroImages = [
  "assets/images/hero/HERO1.jpg",
  "assets/images/hero/HERO2.jpg",
  "assets/images/hero/HERO3.jpg",
  "assets/images/hero/HERO4.jpg",
  "assets/images/hero/HERO5.jpg",
  "assets/images/hero/HERO6.jpg"
];

let current = 0;

setInterval(() => {
  current = (current + 1) % heroImages.length;

  const hero = document.getElementById("heroImage");

  if(hero){
    hero.src = heroImages[current];
  }

}, 3000);