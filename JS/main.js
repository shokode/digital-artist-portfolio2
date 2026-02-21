// gsap.registerPlugin(ScrollTrigger);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//
// ◆ HEADEAR：ヘッダーアニメション
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const sources = [
  "./img/AMWS3.png",
  "./img/AMWSdarkpng.png",
  "./img/AMWS2png.png",
  "./img/work_06.png",
  "./img/suzuri.png",
  "./img/work_06.png",
  "./img/work_24.png",
  "./img/work_25.png",
  "./img/work_26.png",
  "./img/work_27.png",

];

gsap.utils.toArray(".first-view .row .thumb img").forEach((img, index) => {
  let current = -1;

  const pickRandom = () => {
    let next;
    do {
      next = Math.floor(Math.random() * sources.length);
    } while (next === current); // 連続同じを防ぐ
    current = next;
    img.src = sources[current];
  };

  // 初期
  pickRandom();

  gsap.timeline({ repeat: -1, delay: index * 0.5 })
    .to(img, { autoAlpha: 0, duration: 0.6, onComplete: pickRandom })
    .to(img, { autoAlpha: 1, duration: 0.6 })
    .to({}, { duration: 2 });
});

let iconTL = gsap.timeline({ repeat: -1,})

gsap.utils.toArray(".first-view .row .icon").forEach((icon,index) => {
    let iconTL = gsap.timeline({
        repeat: -1,
        delay: index * 0.5
    })
    iconTL
    .to(icon, {
        y: -20,
        duration: 1,
        ease: "power1.inOut",
        repeat: 3,
        yoyo: true
    })
    .to(icon, {
        y: -50,
        rotation: 360,
        scale: 0.2,
        duration: 1.5,
        ease: "power1.inOut"
    })
    .to(icon,{
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 1.5,
        ease: "power2.out"
    })
});




gsap.to(".first-view .bg01" ,{
    autoAlpha: 0.5,
    debugger: 2,
    ease: "power1.inOut",
    repeat: -1, 
    yoyo: true,
    repeatDelay: 2,
})

// text rotation

//scroll speed(sec)
const scrollSpeed = 45;

function createScrollingText(textGroups) {
  const container = document.getElementById("textRotate");
  if (!container) return;

  container.innerHTML = "";
  textGroups.forEach((textArray, index) => {
    const ul = document.createElement("ul");
    for (let i = 0; i < 2; i++) {
      textArray.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
      });
    }
    container.appendChild(ul);
    startGSAPScrolling(ul, index % 2 === 0 ? 1 : -1);
  });
}

function startGSAPScrolling(ul, direction = 1){
    const ulWidth = ul.scrollWidth / 2;

    gsap.set(ul, { x: direction === 1 ? -ulWidth : 0, autoAlpha: 1})
    //無限ループのアニメーション関数
    function animateScroll() {
        gsap.to(ul,{
            duration: scrollSpeed,
            x: direction == 1 ? 0 : -ulWidth,
            ease: "linear",
            onComplete: resetAndLoop,
        })
    }

    //after animetionリセットして再開
    function resetAndLoop() {
        gsap.set(ul,{ x: direction === 1 ? -ulWidth : 0, autoAlpha: 0});
        gsap.to(ul, { autoAlpha: 1, duration: 0.5});
        animateScroll();
    }
    animateScroll();
}


const textGroups = [
  ["Illustration", "Character Design", "Icon Design", "Banner Design", "Key Visuals", "Cover Art", "Merch Art"],
  ["Fanart", "Original Works", "Commissions", "Commercial Work", "Personal Projects", "Sketches", "WIPs"],
  ["Portfolio", "Gallery", "Featured", "Series", "Collections", "Process", "Timelapse"],
  ["About", "Commission Info", "Contact", "Pricing", "Terms", "Schedule", "Links"]
];

createScrollingText(textGroups); // ←これが必要
