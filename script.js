function initializeLocoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  return locoScroll;
}
const myLocoScroll = initializeLocoScroll();

document.querySelector("#footer h2").addEventListener("click", () => {
  myLocoScroll.scrollTo(0);
});
document.querySelector("#footer i").addEventListener("click", () => {
  myLocoScroll.scrollTo(0);
});
document.querySelector(".down i").addEventListener("click", () => {
  myLocoScroll.scrollTo(641);
});
document.querySelector(".page2 i").addEventListener("click", () => {
  myLocoScroll.scrollTo(1282);
});

function first() {
  let ab = gsap.timeline();

  ab.to(".yellow1", {
    top: "-100%",
    delay: 0.3,
    duration: 0.7,
    ease: "expo.out",
  });
  ab.from(
    ".yellow2",
    {
      top: "100%",
      delay: 0.6,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );
  ab.to(
    ".loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );
  ab.to(".loader ", {
    opcity: 0,
  });
  ab.to(".loader", {
    display: "none",
  });
  ab.from(".nav svg,.nav-item a,.nav-item i", {
    y: -80,
    opcity: 0,
    duration: 0.6,
    stagger: 0.2,
  });
  ab.from(".down a, .down i, .down a", {
    y: 80,
    opcity: 0,
    duration: 0.6,
    stagger: 0.2,
  });
}
first();

function scroller() {
  gsap.to(".nav svg path", {
    scrollTrigger: {
      trigger: ".page1",
      scroller: "#main",
      start: "bottom 10px",
      end: "top 98vh",
      // markers: true,
      onEnter: () => {
        gsap.to(".nav svg path", { fill: "white" });
      },
      onLeaveBack: () => {
        gsap.to(".nav svg path", { fill: "black" });
      },
    },
    fill: "black",
  });

  gsap.to(".nav svg path", {
    scrollTrigger: {
      trigger: ".page3",
      scroller: "#main",
      start: "top 10px",
      end: "top 98%",
      scrub: 2,
      // markers: true,
      onEnter: () => {
        gsap.to(".nav svg path", { fill: "black" });
      },
      onLeave: () => {
        gsap.to(".nav svg path", { fill: "initial" });
      },
    },
  });
}
scroller();

function scrollerItems() {
  gsap.to(".nav-item ul li a,.nav-item ul i", {
    scrollTrigger: {
      trigger: ".page1",
      scroller: "#main",
      start: "bottom 10px",
      end: "top 98vh",
      onEnter: () => {
        gsap.to(".nav-item ul li a,.nav-item ul i", { color: "white" });
      },
      onLeaveBack: () => {
        gsap.to(".nav-item ul li a,.nav-item ul i", { color: "black" });
      },
    },
    color: "black",
  });

  gsap.to(".nav-item ul li a,.nav-item ul i", {
    scrollTrigger: {
      trigger: ".page3",
      scroller: "#main",
      start: "top 10px",
      end: "top 98%",
      onEnter: () => {
        gsap.to(".nav-item ul li a,.nav-item ul i", { color: "black" });
      },
      onLeave: () => {
        gsap.to(".nav-item ul li a,.nav-item ul i", { color: "initial" });
      },
    },
  });
}

scrollerItems();

var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector(".page2");
elems.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    var bgimg = ele.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgimg})`;
  });
});

let icon = document.getElementById("iconer");

icon.addEventListener("click", function () {
  icon.classList.toggle("fa-plus");
  icon.classList.toggle("fa-xmark");
});
