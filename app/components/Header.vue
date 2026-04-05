<script setup>
import { gsap } from "gsap";
const ImageSrc = ref("/images/first-image.jpg");

onMounted(() => {
  gsap.from("header", {
    translateY: "-100px",
    duration: 1,
    delay: 3,
  });

  gsap.to(" header figure svg", {
    scrollTrigger: {
      trigger: " .hero",
      scrub: 0.5,
      toggleActions: "play none none reverse",
      start: "20% 20%",
      end: "50% 50%",
    },
    duration: 2,
    translateX: -20,
  });
  gsap.to(" header nav button", {
    scrollTrigger: {
      trigger: " .hero",
      scrub: 0.5,
      toggleActions: "play none none reverse",
      start: "20% 20%",
      end: "50% 50%",
    },
    duration: 2,
    translateX: 20,
  });

  document.querySelector("header nav button").addEventListener("click", (e) => {
    gsap.to(" #menu", {
      opacity: 1,
      duration: 1,
      zIndex: 6,
    });

    gsap.to(" #menu ul.linkscontainer ", {
      opacity: 1,
      duration: 1,
      zIndex: 9,
      delay: 0.6,
    });

    gsap.to(" #menu ul.socialMedia ", {
      opacity: 1,
      duration: 1,
      zIndex: 11,
      delay: 1,
    });
    gsap.to(" .menu-transition", {
      zIndex: 9,
      duration: 1,
      // delay: 1,
      y: "200vh",
    });

    gsap.to(" #menu ul.socialMedia li", {
      opacity: 1,
      duration: 0.4,
      zIndex: 11,
      delay: 1.6,
    });

    gsap.to(" #menu ul.linkscontainer li", {
      opacity: 1,
      duration: 0.4,
      zIndex: 9,
      delay: 0.5,
    });

    gsap.to(" #menu #mainImage", {
      opacity: 1,
      duration: 0.5,
      zIndex: 99,
      delay: 1,
    });

    gsap.to(" #menu .noise", {
      duration: 0.5,
      zIndex: 99,
      delay: 1,
    });

    gsap.to(" #menu .close", {
      opacity: 1,
      duration: 0.4,
      zIndex: 9,
      delay: 1,
    });

    gsap.to("  .col-1", {
      y: "200vh",
      duration: 3,
    });
    gsap.to(" .col-2", {
      y: "200vh",
      duration: 3,
      delay: 0.1,
    });

    gsap.to(" .col-3", {
      y: "200vh",
      duration: 3,
      delay: 0.2,
    });

    gsap.to(" .col-4", {
      y: "200vh",
      duration: 3,
      delay: 0.3,
    });

    gsap.to(" .col-5", {
      y: "200vh",
      duration: 3,
      delay: 0.4,
    });
  });

  document.querySelector("  #menu  .close").addEventListener("click", (e) => {
    gsap.to(" #menu", {
      opacity: 0,
      duration: 1,
      zIndex: -4,
      delay: 1.5,
    });
    gsap.to("  #menu ul.linkscontainer li", {
      opacity: 0,
      duration: 0.6,
      zIndex: -4,
      // delay: 0.6,
    });
    gsap.to("  #menu ul.socialMedia li", {
      opacity: 0,
      duration: 0.6,
      zIndex: -4,
      // delay: 0.6,
    });

    gsap.to("  #menu #mainImage", {
      opacity: 0,
      duration: 0.6,
      zIndex: -4,
      // delay: 0.6,
    });
    gsap.to("  #menu .noise", {
      opacity: 0,
      duration: 0.6,
      zIndex: -4,
      // delay: 0.6,
    });
    gsap.to(" #menu .close", {
      opacity: 0,
      duration: 0.6,
      zIndex: -4,
    });

    gsap.to(" #menu ul.linkscontainer ", {
      opacity: 0,
      duration: 0.4,
      zIndex: -3,
      delay: 0.5,
    });

    gsap.to("  .menu-transition", {
      zIndex: 6,
      duration: 1,
      // delay: 0,
    });

    gsap.to(" .col-1", {
      y: "-300vh",
      duration: 2,
      delay: 0.1,
    });
    gsap.to(" .col-2", {
      y: "-300vh",
      duration: 2,
      delay: 0.2,
    });

    gsap.to(" .col-3", {
      y: "-300vh",
      duration: 2,
      delay: 0.3,
    });

    gsap.to(" .col-4", {
      y: "-300vh",
      duration: 2,
      delay: 0.4,
    });

    gsap.to(" .col-5", {
      y: "-300vh",
      duration: 2,
      delay: 0.5,
    });
  });

  document.querySelectorAll(" #menu ul.linkscontainer li").forEach((li) => {
    li.addEventListener("click", (e) => {
      gsap.to(" #menu", {
        opacity: 0,
        duration: 1,
        zIndex: -4,
        //
      });
    });
  });
  let elements = document.querySelectorAll(" .text");
  elements.forEach((element) => {
    let innerContent = element.innerHTML;
    element.innerHTML = "";
    let textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for (let letter of innerContent) {
      let span = document.createElement("span");
      span.innerHTML = letter.trim() === "" ? "\xa0" : letter;
      span.classList.add("letter");
      textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
  });
  elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.classList.remove("play");
    });
  });
});
</script>
<template>
  <slot />
</template>
<style scoped>
:root {
  --bg-color-main: #e6e1de;
  --secondary-color: #ff3203;
  --main-width: 100vw;
  --main-color: #010618;
  --main-green-color: #00dc82;
  --main-transition: cubic-bezier(0.16, 1, 0.3, 1);
  --green-color: #89e900;
  --black-color: #222023;
  --white-color: #e6e1de;
}
header {
  width: var(--main-width);
  max-width: var(--main-width);
  height: 100px;
  margin: 0px auto 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 25px;
  font-weight: 400;
  text-transform: capitalize;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 3;
}

.menu-transition {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* overflow: hidden; */
  position: fixed;
  top: 0%;
  left: 0;
  z-index: -9;
  transition:
    transform 1s ease,
    zIndex 1s ease;
}

.cols {
  transform: translateY(-100vh);
  width: 20%;
  height: 200%;
  background-color: v-bind(mainColor);
  display: inline-block;
  z-index: 9;
}

.tawfik {
  fill: v-bind(mainColor);
  stroke: v-bind(mainColor);
}

.shaban {
  fill: v-bind(mainColor);
  stroke: v-bind(mainColor);
}

.logo {
  width: 60px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav button {
  position: relative;
  width: 125px;
  height: 40px;
  cursor: pointer;
  user-select: none;
  inset: unset;
  overflow: hidden;
  color: v-bind(mainColor);
  font-family: "Neue", monospace;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-align: center;
  background-color: transparent;
  outline: none;
  border: none;
}

nav button span {
  height: 50px;
  display: inline-block;
  overflow: hidden;
  transform: translate(-2px, 7px);
}

#menu {
  transition:
    opacity 1s ease-out,
    zIndex 1s ease-out;
  will-change: opacity, zIndex;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: fixed;
  top: 0%;
  left: 0;
  opacity: 0;
  padding-left: 20px;
}

#menu > figure {
  z-index: 12;
  width: 30vw;
  height: 80vh;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
}

#menu figure img {
  width: 100%;
  height: 100%;
  /* border-radius: 21px; */
  object-fit: cover;
  object-position: center;
  aspect-ratio: 9 / 16;
  opacity: 0;
  z-index: 1;
  transition:
    opacity 1s var(--main-transition),
    zIndex 1s var(--main-transition);
  will-change: opacity, zIndex;
}
#menu div.logo {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 12;
  height: fit-content;
  svg {
    fill: v-bind(mainBgColor);
  }
}

#menu ul.linkscontainer {
  /* transition: all 0.4s, var(--main-transition); */
  list-style-type: none;
  width: 100%;
  height: 100%;
  background-color: v-bind(mainColor);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 20px;
  position: fixed;
  /* padding: 0 30px; */
  top: 0;
  left: 0;
  z-index: 2;
  will-change: opacity;
}

#menu ul.linkscontainer li {
  text-align: center;
  color: v-bind(mainBgColor);
  font-size: clamp(3.8rem, 30px, 100%);
  font-weight: 700;
  font-family: "migha", monospace;
  text-transform: uppercase;
  /* letter-spacing: 5px; */
  cursor: pointer;
  height: 65px;
  width: 200px;
  margin: 5px 0;
  overflow: hidden;
  will-change: opacity;
  z-index: 6;
  max-width: 100%;
  position: relative;
}

#menu ul.socialMedia {
  position: absolute;
  bottom: 3vh;
  right: 1.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;
  flex-direction: column;
  font-size: 24px;
  font-family: "migha", monospace;
  font-weight: 400;
  text-transform: uppercase;
  color: v-bind(mainBgColor);
  z-index: 11;
  width: 170px;
  height: -moz-fit-content;
  height: fit-content;
  list-style: none;
}
#menu ul.socialMedia li {
  margin: 5px 0;
  position: relative;
  padding-right: 8px;
  cursor: pointer;
  height: 30px;
  overflow-y: hidden;
  opacity: 0;
}
#menu ul.socialMedia li::after,
#menu ul.linkscontainer li::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: v-bind(mainBgColor);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  border-radius: 2px;
}
#menu ul.socialMedia li:hover::after,
#menu ul.linkscontainer li:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
#menu .noise {
  width: 110%;
  height: 110%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: -20px;
  opacity: 0.1;
  z-index: 111;
  animation: noiseAnimation 0.1s infinite;
}

.close {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid v-bind(mainBgColor);
  color: v-bind(mainBgColor);
  font-size: 22px;
  font-weight: 300;
  font-family: sans-serif;
  border-radius: 50%;
  z-index: 9;
  cursor: pointer;
  transition:
    color 0.3s var(--main-transition),
    border-color 0.3s var(--main-transition);
}

.close:hover {
  color: v-bind(secundColor);
  border-color: v-bind(secundColor);
}

@keyframes noiseAnimation {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(8px, -8px);
  }
}
</style>
