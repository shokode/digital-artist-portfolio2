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
  "",
  "./img/suzuri.png",
  // ここに追加していくだけ
];

gsap.utils.toArray(".first-view .row .thumb img").forEach((img, index) => {
  let i = 0;

  // 最初の画像
  img.src = sources[i];

  const next = () => {
    i = (i + 1) % sources.length;
    img.src = sources[i];
  };

  gsap.timeline({ repeat: -1, delay: index * 0.5 })
    .to(img, { autoAlpha: 0, duration: 0.6, onComplete: next })
    .to(img, { autoAlpha: 1, duration: 0.6 })
    .to({}, { duration: 2 }); // 表示時間（ここ調整）
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



// gsap.from(".awerd-wrapper .award",{
//     y: 30.         
//     opacity:0,
//     duration: 0.6,
//     ease:"power2.out"
//     stagger: 0.2,
// })


gsap.to(".first-view .bg01" ,{
    autoAlpha: 0.5,
    debugger: 2,
    ease: "power1.inOut",
    repeat: -1, 
    yoyo: true,
    repeatDelay: 2,
})

// gsap.utils.toArray(".first-view .row .thumb img").forEach((img, index) =>{
//     const originalSrc = img.getAttribute("src");
//     const activeSrc = originalSrc.replace(".jpg", "-active.jpg");

//     //初期状態を明示的に設定
//     img.style.opacity = "1";

//     //アニメーション設定
//     gsap.timeline({ repeat: -1, repeatDelay: 1, delay: index * 0.5})
//     .to(img,{
//         autoAlpha: 0,
//         duration: 1,
//         onComplete: () =>{
//             img.setAttribute("src", activeSrc);
//             img.style.opacity = "0";
//         }
//     })
//     .to(img, { autoAlpha: 1, duration: 1})
//     .to(img, {
//         autoAlpha: 0,
//         duration: 1,
//         delay: 2,
//         onComplete: () => {
//             img.setAttribute("src", originalSrc);
//             img.style.opacity = "0";
//         }
//     })
//     .to(img, { autoAlpha:1, duration: 1})
// });

// gsap.utils.toArray(".first-view .row .icon").forEach((icon, index) =>{
//     let iconTl = gsap.timeline({ 
//         repeat: -1,
//         delay: index * 0.5
//     })
//     iconTl
//     .to(icon,{
//         y: -20,
//         duration: 1,
//         ease: "power1.inOut",
//         repeat: 3,
//         yoyo: true
//     })
//     .to(icon,{
//         y: -50,
//         rotation : 360,
//         scale: 0.2,
//         duration: 1.5,
//         ease: "power1.inOut",
//     })
//     .to(icon,{
//         y: 0,
//         rotation : 0,
//         scale: 1,
//         duration: 1.5,
//         ease: "power2.out"
//     })
// });

// gsap.to(".first-view .bg01",{
//     autoAlpha: 0.5,
//     duration: 2,
//     ease: "power1.inOut",
//     repeat: -1,
//     yoyo: true,
//     repeatDelay: 2,
// })


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//
// ◆ テキストローテーション
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 // スクロール速度（秒単位）
//  const scrollSpeed = 45;
    
//  function createScrollingText(textGroups) {
//    const container = document.getElementById('textRotate');
//    container.innerHTML = '';

//    textGroups.forEach((textArray, index) => {
//      const ul = document.createElement('ul');

//      // 2回繰り返して無限ループをシームレスにする
//      for (let i = 0; i < 2; i++) {
//        textArray.forEach(text => {
//          const li = document.createElement('li');
//          li.textContent = text;
//          ul.appendChild(li);
//        });
//      }

//      container.appendChild(ul);
//      startGSAPScrolling(ul, index % 2 === 0 ? 1 : -1);
//    });
//  }

// function startGSAPScrolling(ul, direction = 1) {
//   const ulWidth = ul.scrollWidth / 2;
//   gsap.set(ul, { x: direction === 1 ? -ulWidth : 0, autoAlpha: 1 });

//   // 無限ループのアニメーション関数
//   function animateScroll() {
//     gsap.to(ul, {
//       duration: scrollSpeed,
//       x: direction === 1 ? 0 : -ulWidth,
//       ease: 'linear',
//       onComplete: resetAndLoop
//     });
//   }

//   // アニメーション終了後にリセットして再開
//   function resetAndLoop() {
//     gsap.set(ul, { x: direction === 1 ? -ulWidth : 0, autoAlpha: 0 });
//     gsap.to(ul, { autoAlpha: 1, duration: 0.5 });
//     animateScroll();
//   }

//   // 初回アニメーション実行
//   animateScroll();
// }


//  const textGroups = [
//     // 1段目
//    ["クリエイティブディレクター", "アートディレクター", "Webディレクター", "編集者", "サイト運営者", "動画ディレクター", "SNS統括運用者"],
//    // 2段目
//    ["グラフィックデザイナー", "Webデザイナー", "UI/UXデザイナー", "ゲームデザイナー", "3DCGデザイナー","プロダクトデザイナー"],
//    // 3段目
//    ["マーケティングプランナー", "デジタルマーケター", "Webマーケター", "Webコンサルタント", "データサイエンティスト", "フロントエンドエンジニア", "システムエンジニア"],
//    // 4段目
//    ["ライター", "イラストレーター", "動画クリエイター", "カメラマン", "フォトグラファ―", "エディトリアルデザイナー", "マンガクリエイター", "クリエイター系インフルエンサー"]
//  ];

//  createScrollingText(textGroups);



// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //
// // ◆ VOICE：タブ
// //
// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".tab-wrapper").forEach((tabWrapper) => {
//         const buttons = tabWrapper.querySelectorAll(".button");
//         const contents = tabWrapper.querySelectorAll(".content");

//         // 初期設定（最初のタブをアクティブに）
//         if (buttons.length > 0 && contents.length > 0) {
//             buttons[0].classList.add("active");
//             contents[0].classList.add("active");
//         }

//         buttons.forEach((button, index) => {
//             button.addEventListener("click", function () {
//                 // すでにアクティブなら何もしない
//                 if (button.classList.contains("active")) return;

//                 // ボタンのアクティブクラスを切り替え
//                 buttons.forEach(btn => btn.classList.remove("active"));
//                 button.classList.add("active");

//                 // 現在のアクティブなコンテンツを取得（tabWrapper 内のみ）
//                 const currentContent = tabWrapper.querySelector(".content.active");

//                 if (currentContent) {
//                     gsap.to(currentContent, {
//                         opacity: 0,
//                         duration: 0.3,
//                         onComplete: () => {
//                             currentContent.classList.remove("active");

//                             // 新しいコンテンツをフェードイン
//                             const newContent = contents[index];
//                             if (newContent) {
//                                 newContent.classList.add("active");
//                                 gsap.to(newContent, { opacity: 1, duration: 0.5 });
//                             } else {
//                                 console.error("New content not found at index:", index);
//                             }
//                         }
//                     });
//                 } else {
//                     // もし `currentContent` が `null` の場合、直接新しいコンテンツを表示
//                     const newContent = contents[index];
//                     if (newContent) {
//                         newContent.classList.add("active");
//                         gsap.to(newContent, { opacity: 1, duration: 0.5 });
//                     } else {
//                         console.error("New content not found at index:", index);
//                     }
//                 }
//             });
//         });
//     });
// });

// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //
// // ◆ FAQ：アコーディオン
// //
// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // メニューを開く関数
// const slideDown = (el) => {
// 	el.style.height = 'auto'; //いったんautoに
// 	let h = el.offsetHeight; //autoにした要素から高さを取得
// 	el.style.height = h + 'px';
// 	el.animate([ //高さ0から取得した高さまでのアニメーション
// 		{ height: 0 },
// 		{ height: h + 'px' }
// 	], {
// 		duration: 300, //アニメーションの時間（ms）
// 	});
// };

// // メニューを閉じる関数
// const slideUp = (el) => {
// 	el.style.height = 0;
// };

// let activeIndex = null; //開いているアコーディオンのindex
  
// //アコーディオンコンテナ全てで実行
// const accordions = document.querySelectorAll('ul.include-accordion');
// accordions.forEach((accordion) => {

// 	//アコーディオンボタン全てで実行
// 	const accordionBtns = accordion.querySelectorAll('.accordionBtn');
// 	accordionBtns.forEach((accordionBtn, index) => {
// 		accordionBtn.addEventListener('click', (e) => {
// 			activeIndex = index; //クリックされたボタンを把握
// 			e.target.closest("li").classList.toggle('active'); //ボタンの親要素（=ul>li)にクラスを付与／削除
// 			const content = accordionBtn.nextElementSibling; //ボタンの次の要素（=ul>ul）
// 			if(e.target.closest("li").classList.contains('active')){
// 				slideDown(content); //クラス名がactive（＝閉じていた）なら上記で定義した開く関数を実行
// 			}else{
// 				slideUp(content); //クラス名にactiveがない（＝開いていた）なら上記で定義した閉じる関数を実行
// 			}
// 			accordionBtns.forEach((accordionBtn, index) => {
// 				if (activeIndex !== index) {
// 				accordionBtn.parentNode.classList.remove('active');
// 				const openedContent = accordionBtn.nextElementSibling;
// 				slideUp(openedContent); //現在開いている他のメニューを閉じる
// 				}
// 			});
// 			//スクロール制御のために上位階層ulのクラス名を変える
// 			let container = accordion.closest('.scroll-control'); //sroll-controlnのクラス名である親要素を取得
// 			if(accordionBtn.parentNode.classList.contains('active') == false && container !== null ){
// 				container.classList.remove('active')
// 			}else if (container !== null){
// 				container.classList.add('active')
// 			}
// 		});
// 	});
// });