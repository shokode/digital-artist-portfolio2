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

function makeRowLongEnough(ul, container) {
  const originals = Array.from(ul.children);      // 1 copy
  const minWidth = container.clientWidth * 2;     // enough to avoid gaps
  while (ul.scrollWidth < minWidth) {
    originals.forEach(n => ul.appendChild(n.cloneNode(true)));
  }
}

function duplicateOnce(ul) {
  Array.from(ul.children).forEach(n => ul.appendChild(n.cloneNode(true)));
}

function createScrollingText(textGroups) {
  const container = document.getElementById("textRotate");
  if (!container) return;

  container.innerHTML = "";

  textGroups.forEach((textArray, index) => {
    const ul = document.createElement("ul"); // ←これが必要

    // 2回繰り返してループ用にする
    for (let i = 0; i < 2; i++) {
      textArray.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
      });
    }

    container.appendChild(ul);

    requestAnimationFrame(() => {
      makeRowLongEnough(ul, container);
      //duplicateOnce(ul);
      startGSAPScrolling(ul, index % 2 === 0 ? 1 : -1);
    });
  });
}

function startGSAPScrolling(ul, direction = 1) {
  gsap.killTweensOf(ul);

  const half = ul.scrollWidth / 2; // 2回並べた半分が1周分
  if (!half) return;

  const dur = half / scrollSpeed;

  // const sign = direction === 1 ? -1 : 1; // 右→左ならマイナス移動
  const toLeft = direction === 1;      // your current meaning
  const fromX = toLeft ? 0 : -half;    // KEY: start at -half for left→right
  const toX   = toLeft ? -half : 0;

  const wrap = gsap.utils.wrap(-half, 0);

  // 片方向に流し続け、範囲を超えた分を巻き戻す
  gsap.set(ul, { x:fromX, autoAlpha: 1 });

  gsap.to(ul, {
    x: toX,
    duration: dur,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: (x) => wrap(parseFloat(x)) + "px"
    }
  });
}


const textGroups = [
  ["Illustration", "Character Design", "Icon Design", "Banner Design", "Key Visuals", "Cover Art", "Merch Art"],
  ["Fanart", "Original Works", "Commissions", "Commercial Work", "Personal Projects", "Sketches", "WIPs"],
  ["Portfolio", "Gallery", "Featured", "Series", "Collections", "Process", "Timelapse"],
  ["About", "Commission Info", "Contact", "Pricing", "Terms", "Schedule", "Links"]
];

createScrollingText(textGroups); // ←これが必要