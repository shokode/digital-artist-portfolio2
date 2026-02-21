// GSAPとSplitTextのプラグインを登録
gsap.registerPlugin(ScrollTrigger);

const textRotateAnimation = gsap.timeline({
	defaults:{
		autoAlpha: 0,
		filter:"blur(30px)",
		duration: 0.8,
		scale:1.2,
	},
	scrollTrigger:{
		trigger: "#textRotate",
		start: "top-=35% 60%",
		// markers: true,
	}
})

textRotateAnimation.from("#textRotate",{});

// const targetAnimation = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: ".target",
// 		start: 'top 100%', //とりがー、びゅーぽーと
// 		toggleActions: "play none none reset",
// 		markers: true
// 	},
// })
// targetAnimation
// .from(".target ul li", {autoAlpha: 0, y:100, stagger:0.05, duration: 1})

// start -----------------------------------------------------------------------------------//
//
//			.text-rotateのアニメーション
// 



// const textRotateAnimation = gsap.timeline({
// 	defaults: {
// 		autoAlpha: 0,
// 		filter: "blur(30px)",
// 		duration: 0.8,
// 		scale:1.2
// 	},
// 	scrollTrigger: {
// 		trigger: "#textRotate",
// 		start: 'top-=35% 60%',
// 	},
// });

// textRotateAnimation.from("#textRotate",{})

// start -----------------------------------------------------------------------------------//
//
//			.header-toのアニメーション
// 

const headerToAnimation = gsap.timeline({
	defaults: {
		autoAlpha: 0,
		filter: "blur(10px)",
		y: 50,
		duration: 0.75,
	},
	scrollTrigger: {
		trigger: ".header-to",
		start: 'top 90%',
	},
});

const headerToBox = gsap.utils.toArray('.header-to .box-wrapper .box'); // これでNodeListを配列化

headerToAnimation.from(headerToBox, { stagger: 0.25 });

// start -----------------------------------------------------------------------------------//
//
//			.CTAのアニメーション
// 

const ctaAnimation = gsap.timeline({
	defaults: {
		autoAlpha: 0,
		y: 30,
		duration: 0.4,
	},
	scrollTrigger: {
		trigger: ".cta",
		start: 'top 60%',
	},
});

ctaAnimation.from(".cta",{})
.from(".cta .back",{})
.from(".cta .inner .title",{},"-=0.4")
.from(".cta .inner .marks",{},"-=0.4")
.from(".cta .inner .block",{},"-=0.4")

