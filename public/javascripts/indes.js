console.log("hello");

gsap.from(".left1 p", {
  x: -50,
  duration: 1,
});

gsap.from(".section3>p:nth-child(1), .section3>p:nth-child(2)", {
  y: 30,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".section3>p:nth-child(1), .section3>p:nth-child(2)",
    scroller: "body",
    markers: false,
    start: "top 80%",
    end: "top 60%",
  },
  stagger: 0.2,
});

gsap.from(".section4>p:nth-child(1)", {
  y: 30,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".section4>p:nth-child(1)",
    scroller: "body",
    markers: false,
    start: "top 70%",
    end: "top 50%",
  },
  stagger: 0.2,
});

gsap.from(".section5 p", {
  y: 30,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".section5 p",
    scroller: "body",
    markers: false,
    start: "top 70%",
    end: "top 50%",
  },
  stagger: 0.2,
});

gsap.from(".avanceTransformLeft>p:nth-child(1)", {
  y: 30,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".avanceTransformLeft>p:nth-child(1)",
    scroller: "body",
    markers: false,
    start: "top 70%",
    end: "top 50%",
  },
  stagger: 0.2,
});

gsap.from(" .section7>h1:nth-child(1), .sec7Para1", {
  y: 30,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: " .section7>h1:nth-child(1), .sec7Para1",
    scroller: "body",
    markers: false,
    start: "top 70%",
    end: "top 50%",
  },
  stagger: 0.2,
});

gsap.from(" .section8>h1:nth-child(1), .sec8Para1", {
  y: 30,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: " .section8>h1:nth-child(1), .sec8Para1",
    scroller: "body",
    markers: false,
    start: "top 70%",
    end: "top 50%",
  },
  stagger: 0.2,
});

gsap.from(" .footerBox a, .footerBox h3", {
  x: -20,
  duration: 0.3,
  opacity: 0,
  scrollTrigger: {
    trigger: " .footerBox a, .footerBox h3",
    scroller: "body",
    markers: false,
    start: "top 70%",
    end: "top 50%",
  },
  stagger: 0.1,
});


function applyForm(){
  let aplyBtn = document.querySelector(".mainApplybtn1");
 window.location = "/apply"
}
