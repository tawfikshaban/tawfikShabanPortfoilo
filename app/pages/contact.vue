<script setup>
import { gsap } from "gsap";
import { useDocumentVisibility, useTitle } from "@vueuse/core";
import Tempus from "tempus";
import LocomotiveScroll from "locomotive-scroll";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

Tempus.patch();

const visibility = useDocumentVisibility();
const title = useTitle();

watch(visibility, (current) => {
  if (current === "hidden") {
    title.value = "I Missed You 🥺!";
  } else {
    title.value = "Contact Tawfik";
  }
});

const ImageSrc = ref("/images/first-image.jpg");

async function ChangeImageSrc() {
  let tl = gsap.timeline();

  requestAnimationFrame(async () => {
    await tl.to(`#menu img:first-child`, {
      onStart: () => {
        setTimeout(() => {
          let firstElement = document
            .querySelector("#menu img:first-child")
            .cloneNode(true);

          document.querySelector("#menu img:first-child").remove();
          document
            .querySelector("#menu >figure.imgContainer")
            .appendChild(firstElement);
          gsap.set(firstElement, { clipPath: "inset(0px)" });
        }, 200);
      },
      clipPath: "inset(0 0 110% 0)",
      duration: 0.2,
      // onComplete: () => (finished.value = true),
    });
  });
}

useHead({
  title: "Contact Tawfik ",
});
onMounted(() => {
  const locomotiveScroll = new LocomotiveScroll({
    initCustomTicker: (render) => {
      gsap.ticker.add(render);
    },
    destroyCustomTicker: (render) => {
      gsap.ticker.remove(render);
    },

    lenisOptions: {
      infinite: false,
      // easing: "cubic-bezier(0.12, 0, 0.39, 0)",
      duration: 2.8,

      smoothWheel: true,
      syncTouch: true,
    },
  });

  onBeforeUnmount(() => {
    locomotiveScroll.destroy();
    gsap.set("main > figure img", {
      maskImage: "",
      maskSize: "cover",
      maskPosition: "bottom",
      // ease: "var(--secund-transition)",
      // delay: 1,
      overwrite: "auto",
    });
  });

  locomotiveScroll.lenisInstance.on("scroll", ScrollTrigger.update);
  gsap.ticker.lagSmoothing(0);

  document.fonts.ready.then(() => {
    setTimeout(() => {
      let tl = gsap.timeline();
      tl.from(
        "header",
        {
          y: -100,
          duration: 1,
          ease: "var(--secund-transition)",
        },
        0,
      );

      SplitText.create("main > article h1", {
        type: "words,lines,chars",
        autoSplit: true,
        mask: "chars",
        smartWrap: true,
        aria: "auto",

        onSplit(self) {
          return tl.from(
            self.chars,
            {
              x: 50,
              duration: 1,
              autoAlpha: 0,
              stagger: 0.02,

              ease: "var(--secund-transition)",
              onComplete: () => self.revert(),
            },
            0,
          );
        },
      });

      SplitText.create("main > article > p", {
        type: "words,lines,chars",
        autoSplit: true,
        mask: "lines",
        smartWrap: true,
        aria: "auto",

        onSplit(self) {
          return tl.from(
            self.lines,
            {
              y: -50,
              duration: 1,
              autoAlpha: 0,
              stagger: 0.02,
              ease: "var(--secund-transition)",
              onComplete: () => self.revert(),
            },
            0,
          );
        },
      });
      SplitText.create("main > article  p", {
        type: "words,lines,chars",
        autoSplit: true,
        mask: "lines",
        smartWrap: true,
        aria: "auto",

        onSplit(self) {
          return tl.from(
            self.lines,
            {
              y: -50,
              duration: 1,
              autoAlpha: 0,
              stagger: 0.02,
              ease: "var(--secund-transition)",
              onComplete: () => self.revert(),
            },
            0,
          );
        },
      });
      SplitText.create("main > article ul li", {
        type: "words,lines,chars",
        autoSplit: true,
        mask: "lines",
        smartWrap: true,
        aria: "auto",

        onSplit(self) {
          return tl.from(
            self.lines,
            {
              y: 50,
              duration: 1,
              autoAlpha: 0,
              stagger: 0.02,
              ease: "var(--secund-transition)",
              onComplete: () => self.revert(),
            },
            0,
          );
        },
      });

      gsap.set("main > figure img", {
        maskImage: " url(/videos/ink.gif)",
        maskSize: "cover",
        maskPosition: "bottom",
        ease: "var(--secund-transition)",
        // delay: 1,
      });
    }, 2800);
    document
      .querySelector(" header nav button")
      .addEventListener("click", (e) => {
        gsap.to(" #menu", {
          opacity: 1,
          duration: 1,
          zIndex: 6,
          ease: "var(--main-transition)",
          // ease: "slow",
        });

        gsap.to(" #menu ul.linkscontainer ", {
          opacity: 1,
          duration: 1,
          zIndex: 9,
          delay: 0.6,
          ease: "var(--main-transition)",
        });

        gsap.to(" #menu ul.socialMedia ", {
          opacity: 1,
          duration: 1,
          zIndex: 11,
          delay: 1,
          ease: "var(--main-transition)",
        });
        gsap.to(" .menu-transition", {
          zIndex: 9,
          duration: 1,
          // delay: 1,
          y: "200vh",
          ease: "var(--main-transition)",
        });

        gsap.to(" #menu ul.socialMedia li", {
          opacity: 1,
          duration: 0.4,
          zIndex: 11,
          delay: 1.6,
          ease: "var(--main-transition)",
        });
        gsap.to(" #menu svg.logo", {
          opacity: 1,
          duration: 0.4,
          zIndex: 11,
          delay: 1.6,
          ease: "var(--main-transition)",
        });

        gsap.to(" #menu ul.linkscontainer li", {
          opacity: 1,
          duration: 0.4,
          zIndex: 9,
          delay: 0.5,
          ease: "var(--main-transition)",
        });

        gsap.to("#menu img", {
          clipPath: "inset(0 0 0 0)",
          duration: 1,
          delay: 0.5,
        });

        gsap.to(" #menu .close", {
          opacity: 1,
          duration: 0.4,
          zIndex: 9,
          delay: 1,
          ease: "var(--main-transition)",
        });

        gsap.to("  .col-1", {
          y: "200vh",
          duration: 3,
          ease: "var(--main-transition)",
        });
        gsap.to(" .col-2", {
          y: "200vh",
          duration: 3,
          delay: 0.1,
          ease: "var(--main-transition)",
        });

        gsap.to(" .col-3", {
          y: "200vh",
          duration: 3,
          delay: 0.2,
          ease: "var(--main-transition)",
        });

        gsap.to(" .col-4", {
          y: "200vh",
          duration: 3,
          delay: 0.3,
          ease: "var(--main-transition)",
        });

        gsap.to(" .col-5", {
          y: "200vh",
          duration: 3,
          delay: 0.4,
          ease: "var(--main-transition)",
        });
      });

    document.querySelector("#menu  .close").addEventListener("click", (e) => {
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

      gsap.to("  #menu svg.logo", {
        opacity: 0,
        duration: 0.6,
        zIndex: -4,
        // delay: 0.6,
      });

      gsap.to("  #menu img", {
        clipPath: "inset(100% 0 0 0)",
        duration: 0.6,
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
    if (document.body.clientWidth >= 786) {
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
    }
  });
});
</script>
<template>
  <div class="contactPage">
    <header>
      <figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="80"
          viewBox="0 0 260 103"
        >
          <path
            d="M1.63799 95.3058C0.545988 93.9618 -1.21836e-05 92.7648 -1.21836e-05 91.7148C-1.21836e-05 90.6228 0.902988 89.1948 2.70899 87.4308C3.75899 86.4228 4.87199 85.9188 6.04799 85.9188C7.22399 85.9188 8.86199 86.9688 10.962 89.0688C11.55 89.7828 12.39 90.4758 13.482 91.1478C14.574 91.7778 15.582 92.0928 16.506 92.0928C20.412 92.0928 22.365 90.4968 22.365 87.3048C22.365 86.3388 21.819 85.5408 20.727 84.9108C19.677 84.2388 18.354 83.7558 16.758 83.4618C15.162 83.1678 13.44 82.7058 11.592 82.0758C9.74399 81.4038 8.02199 80.6268 6.42599 79.7448C4.82999 78.8628 3.48599 77.4768 2.39399 75.5868C1.34399 73.6548 0.818988 71.3448 0.818988 68.6568C0.818988 64.9608 2.18399 61.7478 4.91399 59.0178C7.68599 56.2458 11.445 54.8598 16.191 54.8598C18.711 54.8598 21 55.1958 23.058 55.8678C25.158 56.4978 26.607 57.1488 27.405 57.8208L28.98 59.0178C30.282 60.2358 30.933 61.2648 30.933 62.1048C30.933 62.9448 30.429 64.0998 29.421 65.5698C27.993 67.6698 26.523 68.7198 25.011 68.7198C24.129 68.7198 23.037 68.2998 21.735 67.4598C21.609 67.3758 21.357 67.1658 20.979 66.8298C20.643 66.4938 20.328 66.2208 20.034 66.0108C19.152 65.4648 18.018 65.1918 16.632 65.1918C15.288 65.1918 14.154 65.5278 13.23 66.1998C12.348 66.8298 11.907 67.7328 11.907 68.9088C11.907 70.0428 12.432 70.9668 13.482 71.6808C14.574 72.3948 15.918 72.8778 17.514 73.1298C19.11 73.3818 20.853 73.7808 22.743 74.3268C24.633 74.8308 26.376 75.4608 27.972 76.2168C29.568 76.9728 30.891 78.2958 31.941 80.1858C33.033 82.0338 33.579 84.3228 33.579 87.0528C33.579 89.7828 33.033 92.1978 31.941 94.2978C30.849 96.3558 29.421 97.9518 27.657 99.0858C24.255 101.312 20.622 102.425 16.758 102.425C14.784 102.425 12.915 102.194 11.151 101.732C9.38699 101.228 7.95899 100.619 6.86699 99.9048C4.64099 98.5608 3.08699 97.2588 2.20499 95.9988L1.63799 95.3058ZM66.2135 57.3168C66.5495 56.6868 67.1165 56.2458 67.9145 55.9938C68.7125 55.7418 69.7205 55.6158 70.9385 55.6158C72.1565 55.6158 73.1225 55.7208 73.8365 55.9308C74.5505 56.1408 75.0965 56.3928 75.4745 56.6868C75.8525 56.9808 76.1465 57.4008 76.3565 57.9468C76.5665 58.6608 76.6715 59.7528 76.6715 61.2228V96.1878C76.6715 97.1538 76.6295 97.8888 76.5455 98.3928C76.5035 98.8548 76.3145 99.4008 75.9785 100.031C75.3905 101.165 73.7525 101.732 71.0645 101.732C68.1245 101.732 66.4025 100.955 65.8985 99.4008C65.6465 98.6868 65.5205 97.5948 65.5205 96.1248V83.3358H48.8255V96.1878C48.8255 97.1538 48.7835 97.8888 48.6995 98.3928C48.6575 98.8548 48.4685 99.4008 48.1325 100.031C47.5445 101.165 45.9065 101.732 43.2185 101.732C40.2785 101.732 38.5565 100.955 38.0525 99.4008C37.8005 98.6868 37.6745 97.5948 37.6745 96.1248V61.1598C37.6745 60.1938 37.6955 59.4798 37.7375 59.0178C37.8215 58.5138 38.0315 57.9468 38.3675 57.3168C38.9555 56.1828 40.5935 55.6158 43.2815 55.6158C46.2215 55.6158 47.9645 56.3928 48.5105 57.9468C48.7205 58.6608 48.8255 59.7528 48.8255 61.2228V74.0748H65.5205V61.1598C65.5205 60.1938 65.5415 59.4798 65.5835 59.0178C65.6675 58.5138 65.8775 57.9468 66.2135 57.3168ZM108.374 58.8918L125.384 94.0458C126.098 95.4738 126.455 96.5448 126.455 97.2588C126.455 98.7708 125.237 100.136 122.801 101.354C121.373 102.068 120.239 102.425 119.399 102.425C118.601 102.425 117.929 102.236 117.383 101.858C116.879 101.48 116.501 101.081 116.249 100.661C116.039 100.241 115.724 99.6108 115.304 98.7708L112.028 91.9668H94.5773L91.3013 98.7708C90.8813 99.6108 90.5453 100.22 90.2933 100.598C90.0833 100.976 89.7053 101.375 89.1593 101.795C88.6553 102.173 87.9833 102.362 87.1433 102.362C86.3453 102.362 85.2323 102.005 83.8043 101.291C81.3683 100.115 80.1503 98.7708 80.1503 97.2588C80.1503 96.5448 80.5073 95.4738 81.2213 94.0458L98.2313 58.8288C98.6933 57.8628 99.3863 57.0858 100.31 56.4978C101.276 55.9098 102.284 55.6158 103.334 55.6158C105.602 55.6158 107.282 56.7078 108.374 58.8918ZM103.271 74.0118L99.1133 82.6428H107.492L103.271 74.0118ZM162.784 77.0358C165.262 79.9758 166.501 83.2728 166.501 86.9268C166.417 91.1268 164.968 94.6548 162.154 97.5108C159.382 100.325 156.001 101.732 152.011 101.732H135.442C132.502 101.732 130.78 100.934 130.276 99.3378C130.024 98.6238 129.898 97.5318 129.898 96.0618V61.0968C129.898 60.0888 129.919 59.3538 129.961 58.8918C130.045 58.4298 130.255 57.8838 130.591 57.2538C131.179 56.1198 132.817 55.5528 135.505 55.5528H151.381C155.245 55.5528 158.479 56.8968 161.083 59.5848C163.813 62.3148 165.178 65.5908 165.178 69.4128C165.178 72.1848 164.38 74.7258 162.784 77.0358ZM155.35 86.2968C155.35 85.2888 155.224 84.4908 154.972 83.9028C154.762 83.3148 154.384 82.8948 153.838 82.6428C152.998 82.3068 151.822 82.1388 150.31 82.1388C148.798 82.1388 147.664 81.8448 146.908 81.2568C146.152 80.6688 145.774 79.4718 145.774 77.6658C145.774 75.8178 146.152 74.5998 146.908 74.0118C147.706 73.4238 149.008 73.1298 150.814 73.1298C152.494 73.1298 153.502 72.6888 153.838 71.8068C153.964 71.3448 154.027 70.5888 154.027 69.5388C154.027 68.4888 153.67 67.7538 152.956 67.3338C152.284 66.9138 151.255 66.7038 149.869 66.7038H141.049V90.5808H151.381C154.027 90.5808 155.35 89.1528 155.35 86.2968ZM197.276 58.8918L214.286 94.0458C215 95.4738 215.357 96.5448 215.357 97.2588C215.357 98.7708 214.139 100.136 211.703 101.354C210.275 102.068 209.141 102.425 208.301 102.425C207.503 102.425 206.831 102.236 206.285 101.858C205.781 101.48 205.403 101.081 205.151 100.661C204.941 100.241 204.626 99.6108 204.206 98.7708L200.93 91.9668H183.479L180.203 98.7708C179.783 99.6108 179.447 100.22 179.195 100.598C178.985 100.976 178.607 101.375 178.061 101.795C177.557 102.173 176.885 102.362 176.045 102.362C175.247 102.362 174.134 102.005 172.706 101.291C170.27 100.115 169.052 98.7708 169.052 97.2588C169.052 96.5448 169.409 95.4738 170.123 94.0458L187.133 58.8288C187.595 57.8628 188.288 57.0858 189.212 56.4978C190.178 55.9098 191.186 55.6158 192.236 55.6158C194.504 55.6158 196.184 56.7078 197.276 58.8918ZM192.173 74.0118L188.015 82.6428H196.394L192.173 74.0118ZM248.598 57.5688C249.018 56.8128 249.627 56.3088 250.425 56.0568C251.223 55.8048 252.21 55.6788 253.386 55.6788C254.604 55.6788 255.57 55.7838 256.284 55.9938C257.04 56.2038 257.586 56.4558 257.922 56.7498C258.3 57.0438 258.573 57.4848 258.741 58.0728C258.993 58.7448 259.119 59.8158 259.119 61.2858V96.2508C259.119 97.2588 259.077 97.9938 258.993 98.4558C258.951 98.9178 258.762 99.4638 258.426 100.094C257.838 101.228 256.2 101.795 253.512 101.795C251.874 101.795 250.74 101.669 250.11 101.417C249.48 101.165 248.955 100.766 248.535 100.22C239.085 87.6198 232.869 79.3878 229.887 75.5238V96.2508C229.887 97.2588 229.845 97.9938 229.761 98.4558C229.719 98.9178 229.53 99.4638 229.194 100.094C228.606 101.228 226.968 101.795 224.28 101.795C221.676 101.795 220.08 101.228 219.492 100.094C219.156 99.4638 218.946 98.8968 218.862 98.3928C218.82 97.8888 218.799 97.1538 218.799 96.1878V61.0338C218.799 59.4378 218.988 58.2828 219.366 57.5688C219.786 56.8128 220.395 56.3088 221.193 56.0568C221.991 55.8048 223.02 55.6788 224.28 55.6788C225.54 55.6788 226.527 55.8048 227.241 56.0568C227.997 56.2668 228.522 56.5188 228.816 56.8128C228.984 56.9388 229.467 57.4848 230.265 58.4508C239.127 70.5048 245.049 78.4638 248.031 82.3278V61.0338C248.031 59.4378 248.22 58.2828 248.598 57.5688Z"
            class="shaban"
          />
          <path
            d="M35.555 5.42807L22.0101 5.37133L21.8457 44.62L16.4278 44.5973L16.5922 5.34864L3.04728 5.2919L3.0676 0.44094L35.5753 0.577109L35.555 5.42807ZM43.5398 44.7109L58.8462 0.233584L64.9572 0.259182L79.9534 44.8634L73.9685 44.8383L70.2363 33.4196L53.0374 33.3475L49.2097 44.7346L43.5398 44.7109ZM54.1904 28.8163L69.1843 28.8791L61.785 5.53794L54.1904 28.8163ZM129.406 45.0705L123.736 45.0468L114.685 9.98056L105.214 44.9692L99.8589 44.9468L90.2155 0.868986L95.9492 0.704004L102.908 38.9745L112.385 2.53686L117.362 2.55771L126.407 39.0099L133.686 0.862076L139.418 1.07509L129.406 45.0705ZM155.143 45.1783L155.327 1.07873L183.173 1.19537L183.152 6.10933L160.788 6.01564L160.719 22.3325L180.123 22.4138L180.103 27.1387L160.699 27.0575L160.623 45.2013L155.143 45.1783ZM199.486 45.3641L199.671 1.26448L205.089 1.28717L204.904 45.3868L199.486 45.3641ZM257.265 46.2361C256.131 46.2314 254.977 46.0165 253.802 45.5916C252.67 45.1669 251.455 44.4688 250.157 43.4973C248.901 42.5261 247.457 41.26 245.826 39.6991L230.391 24.5774L230.304 45.4932L224.823 45.4702L225.007 1.3706L230.488 1.39356L230.42 17.6474L247.55 34.2253C248.888 35.5329 250.039 36.6088 251.001 37.4528C252.006 38.255 252.885 38.8887 253.639 39.3539C254.436 39.7772 255.148 40.0952 255.777 40.3078C256.407 40.4785 257.057 40.5652 257.729 40.568C257.813 40.5684 257.939 40.5689 258.107 40.5696C258.275 40.5703 258.422 40.5709 258.548 40.5714L258.525 46.1154C258.273 46.1563 258.042 46.1764 257.832 46.1755C257.622 46.2166 257.433 46.2368 257.265 46.2361ZM237.376 26.5596L233.924 23.3322C235.104 22.4971 236.389 21.5155 237.78 20.3873C239.17 19.2591 240.562 18.0259 241.953 16.6877C243.387 15.3497 244.8 13.8856 246.193 12.2954C247.586 10.6633 248.874 8.92564 250.058 7.08259C251.283 5.2397 252.363 3.27021 253.295 1.1741L257.508 3.27076C256.446 5.95434 255.134 8.44786 253.57 10.7513C252.049 13.055 250.381 15.19 248.566 17.1564C246.752 19.0808 244.876 20.837 242.937 22.4249C241.041 23.971 239.187 25.3492 237.376 26.5596Z"
            class="tawfik"
          />
        </svg>
      </figure>

      <div class="logo">
        <figure>
          <svg
            class="logo"
            width="78"
            height="75"
            viewBox="0 0 78 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9855 61V23.3575H5.57454V16.9H37.4525V23.3575H25.0415V61H17.9855Z"
              fill="#222222"
            />
            <path
              d="M61.9395 62.945C58.9785 62.945 56.091 62.5355 53.277 61.7165C50.463 60.8765 48.09 59.6795 46.158 58.1255L49.119 53.495C50.211 54.398 51.45 55.1645 52.836 55.7945C54.222 56.4245 55.692 56.9075 57.246 57.2435C58.8 57.5795 60.375 57.7475 61.971 57.7475C65.1 57.7475 67.6095 57.1385 69.4995 55.9205C71.4105 54.7025 72.366 52.9175 72.366 50.5655C72.366 48.8435 71.7255 47.384 70.4445 46.187C69.1845 44.99 66.822 43.898 63.357 42.911L58.569 41.4935C54.537 40.3175 51.5865 38.774 49.7175 36.863C47.8485 34.952 46.914 32.558 46.914 29.681C46.914 27.749 47.3025 26.006 48.0795 24.452C48.8565 22.898 49.9485 21.5645 51.3555 20.4515C52.7625 19.3175 54.4215 18.4565 56.3325 17.8685C58.2645 17.2595 60.375 16.955 62.664 16.955C65.499 16.955 68.1345 17.375 70.5705 18.215C73.0275 19.034 75.054 20.1365 76.65 21.5225L73.5945 25.964C72.6495 25.166 71.568 24.4835 70.35 23.9165C69.132 23.3285 67.83 22.8875 66.444 22.5935C65.058 22.2785 63.651 22.121 62.223 22.121C60.312 22.121 58.6215 22.4045 57.1515 22.9715C55.7025 23.5175 54.5685 24.3365 53.7495 25.4285C52.9515 26.4995 52.5525 27.8015 52.5525 29.3345C52.5525 30.4475 52.815 31.424 53.34 32.264C53.865 33.083 54.7785 33.839 56.0805 34.532C57.3825 35.225 59.178 35.9075 61.467 36.5795L66.57 38.0915C70.497 39.2465 73.3845 40.769 75.2325 42.659C77.0805 44.528 78.0045 46.985 78.0045 50.03C78.0045 52.592 77.3745 54.8495 76.1145 56.8025C74.8755 58.7345 73.059 60.2465 70.665 61.3385C68.271 62.4095 65.3625 62.945 61.9395 62.945Z"
              fill="#222222"
            />
          </svg>
        </figure>
      </div>

      <nav>
        <button>
          <span class="text"> MENU</span>
          <div class="reveal-bottom"></div>
        </button>
      </nav>
    </header>

    <section id="menu">
      <figure class="imgContainer">
        <NuxtImg
          src="/images/first-image.jpg"
          alt="tawfik picture"
          width="300"
          height="400"
          loading="lazy"
        />
        <NuxtImg
          src="/images/secund-image.jpg"
          alt="tawfik picture"
          width="300"
          height="400"
          loading="lazy"
        />
        <NuxtImg
          src="/images/third-image.jpg"
          alt="tawfik picture"
          width="300"
          height="400"
          loading="lazy"
        />
        <NuxtImg
          src="/images/fourth-image.jpeg"
          alt="tawfik picture"
          width="300"
          height="400"
          loading="lazy"
        />
        <NuxtImg
          src="/images/fifth-image.jpeg"
          alt="tawfik picture"
          width="300"
          height="400"
          loading="lazy"
        />
        <NuxtImg
          src="/images/sixth-image.jpeg"
          alt="tawfik picture"
          width="300"
          height="400"
          loading="lazy"
        />
      </figure>

      <div class="logo">
        <figure>
          <svg
            class="logo"
            width="78"
            height="75"
            viewBox="0 0 78 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9855 61V23.3575H5.57454V16.9H37.4525V23.3575H25.0415V61H17.9855Z"
              fill="#222222"
            />
            <path
              d="M61.9395 62.945C58.9785 62.945 56.091 62.5355 53.277 61.7165C50.463 60.8765 48.09 59.6795 46.158 58.1255L49.119 53.495C50.211 54.398 51.45 55.1645 52.836 55.7945C54.222 56.4245 55.692 56.9075 57.246 57.2435C58.8 57.5795 60.375 57.7475 61.971 57.7475C65.1 57.7475 67.6095 57.1385 69.4995 55.9205C71.4105 54.7025 72.366 52.9175 72.366 50.5655C72.366 48.8435 71.7255 47.384 70.4445 46.187C69.1845 44.99 66.822 43.898 63.357 42.911L58.569 41.4935C54.537 40.3175 51.5865 38.774 49.7175 36.863C47.8485 34.952 46.914 32.558 46.914 29.681C46.914 27.749 47.3025 26.006 48.0795 24.452C48.8565 22.898 49.9485 21.5645 51.3555 20.4515C52.7625 19.3175 54.4215 18.4565 56.3325 17.8685C58.2645 17.2595 60.375 16.955 62.664 16.955C65.499 16.955 68.1345 17.375 70.5705 18.215C73.0275 19.034 75.054 20.1365 76.65 21.5225L73.5945 25.964C72.6495 25.166 71.568 24.4835 70.35 23.9165C69.132 23.3285 67.83 22.8875 66.444 22.5935C65.058 22.2785 63.651 22.121 62.223 22.121C60.312 22.121 58.6215 22.4045 57.1515 22.9715C55.7025 23.5175 54.5685 24.3365 53.7495 25.4285C52.9515 26.4995 52.5525 27.8015 52.5525 29.3345C52.5525 30.4475 52.815 31.424 53.34 32.264C53.865 33.083 54.7785 33.839 56.0805 34.532C57.3825 35.225 59.178 35.9075 61.467 36.5795L66.57 38.0915C70.497 39.2465 73.3845 40.769 75.2325 42.659C77.0805 44.528 78.0045 46.985 78.0045 50.03C78.0045 52.592 77.3745 54.8495 76.1145 56.8025C74.8755 58.7345 73.059 60.2465 70.665 61.3385C68.271 62.4095 65.3625 62.945 61.9395 62.945Z"
              fill="#222222"
            />
          </svg>
        </figure>
      </div>

      <ul class="socialMedia">
        <li>
          <NuxtLink
            to="https://www.facebook.com/tawfik.shaban.5"
            class="text"
            target="_blank"
            >facebook</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://www.instagram.com/tawfik.shaban/"
            class="text"
            target="_blank"
            >instagram</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://api.whatsapp.com/send/?phone=201065834919"
            class="text"
            target="_blank"
            >whatsapp</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://www.linkedin.com/in/tawfikshaban-div/"
            class="text"
            target="_blank"
            >linkedin</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://github.com/tawfikshaban"
            class="text"
            target="_blank"
            >github</NuxtLink
          >
        </li>
      </ul>

      <ul class="linkscontainer">
        <li>
          <NuxtLink class="text" to="/" @mouseenter="ChangeImageSrc()"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="text" to="/works" @mouseenter="ChangeImageSrc()"
            >Works</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="text" to="/about" @mouseenter="ChangeImageSrc()"
            >About Me</NuxtLink
          >
        </li>

        <li>
          <NuxtLink class="text" to="/clients" @mouseenter="ChangeImageSrc()"
            >Clients</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="text" to="/Contact" @mouseenter="ChangeImageSrc()"
            >Contact</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="text" to="/cv" @mouseenter="ChangeImageSrc()"
            >My CV</NuxtLink
          >
        </li>
      </ul>

      <div class="menu-transition">
        <div class="cols col-1"></div>
        <div class="cols col-2"></div>
        <div class="cols col-3"></div>
        <div class="cols col-4"></div>
        <div class="cols col-5"></div>
      </div>
      <h4 class="close">X</h4>
    </section>

    <main>
      <article>
        <h1>Contact Me</h1>
        <p>
          If you have any questions, inquiries, or would like to discuss a
          potential project, please feel free to reach out to me. I am always
          open to new opportunities and collaborations. You can contact me via
          email at
          <a href="mailto:teefashaban@gmail.com">teefashaban@gmail.com</a>.
        </p>
        <ul>
          <p>or you can reach me on social media platforms. like :</p>
          <li>
            <NuxtLink
              to="https://www.facebook.com/tawfik.shaban.5"
              class="text"
              target="_blank"
              >facebook</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="https://www.instagram.com/tawfik.shaban/"
              class="text"
              target="_blank"
              >instagram</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="https://api.whatsapp.com/send/?phone=201065834919"
              class="text"
              target="_blank"
              >whatsapp</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="https://www.linkedin.com/in/tawfikshaban-div/"
              class="text"
              target="_blank"
              >linkedin</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="https://github.com/tawfikshaban"
              class="text"
              target="_blank"
              >github</NuxtLink
            >
          </li>
        </ul>
      </article>
      <figure>
        <NuxtImg
          src="/images/contact-image.jpg"
          alt="tawfik picture"
          width="300"
          height="400"
        />
      </figure>
    </main>

    <footer>
      <NuxtLink class="text" to="/">Home</NuxtLink>
      <NuxtLink class="text" to="/works">work</NuxtLink>
      <NuxtLink class="text" to="/cv">my cv</NuxtLink>
      <NuxtLink class="text" to="mailto::teefashaban@gmail.com"
        >contact me</NuxtLink
      >
    </footer>
  </div>
</template>

<style scoped>
div.contactPage {
  width: 100vw;
  height: 150vh;
  background-color: #e9e9e9;
  color: #222222;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: "PowerGroteskTrial", sans-serif;
  position: relative;
}
header {
  width: var(--main-width);
  max-width: var(--main-width);
  height: 80px;
  margin: 0px auto 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  font-weight: 400;
  text-transform: capitalize;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 3;
  /* border-bottom: 1px solid var(--white-color); */
}
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100px);
  width: 100dvw;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "PowerGroteskTrial";
  font-size: 18px;
  text-align: center;
  font-weight: 200;
  text-transform: uppercase;
  z-index: 2;
  background-color: #222222;
  color: #e9e9e9;
}
footer a {
  height: 23px;
  overflow-y: hidden;
}

.menu-transition {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
  /* overflow: hidden; */
  position: fixed;
  top: 0%;
  left: 0;
  z-index: 8;
  transition:
    transform 1s var(--main-transition),
    zIndex 1s var(--main-transition);
}

.cols {
  transform: translateY(-100dvh);
  width: 20%;
  height: 200%;
  background-color: #222222;
  display: inline-block;
  z-index: 999999;
  position: relative;
}

.tawfik {
  fill: #222222;
  stroke: #222222;
}

.shaban {
  fill: #222222;
  stroke: #222222;
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
  height: 30px;
  cursor: pointer;
  user-select: none;
  inset: unset;
  overflow: hidden;
  color: #222222;
  font-family: "Neue", monospace;
  font-size: 25px;
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
    opacity 1s var(--main-transition),
    zIndex 1s var(--main-transition);
  will-change: opacity, zIndex;
  width: 100vw;
  height: 100dvh;
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
  border-radius: 14px;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 9 / 16;

  position: absolute;
  clip-path: inset(100% 0 0 0);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: zIndex, clip-path;
}

#menu figure img:nth-child(1) {
  z-index: 6;
}

#menu figure img:nth-child(2) {
  z-index: 5;
}
#menu figure img:nth-child(3) {
  z-index: 4;
}
#menu figure img:nth-child(4) {
  z-index: 3;
}
#menu figure img:nth-child(5) {
  z-index: 2;
}
#menu figure img:nth-child(6) {
  z-index: 1;
}

#menu div.logo {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 12;
  height: fit-content;
  svg {
    fill: #222222;
  }
}

#menu ul.linkscontainer {
  transition:
    opacity 0.4s,
    var(--main-transition);
  list-style-type: none;
  width: 100%;
  height: 100%;
  background-color: #e9e9e9;
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
  color: #222222;
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
  transition: opacity 0.6 var(--main-transition);
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
  color: #222222;
  z-index: 11;
  width: 170px;
  height: -moz-fit-content;
  height: fit-content;
  list-style: none;
  transition: all 0.6 var(--main-transition);
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

.close {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #222222;
  color: #222222;
  font-size: 22px;
  font-weight: 300;
  font-family: sans-serif;
  border-radius: 50%;
  z-index: 9;
  cursor: pointer;
  transition:
    color 0.4s var(--secund-transition),
    background-color 0.4s var(--secund-transition),
    borderColor 0.4s var(--secund-transition);
}

.close:hover {
  color: #e9e9e9;
  background-color: #222222;
  border-color: #e9e9e9;
}

main {
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100vw;
}
main > article {
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  text-transform: uppercase;
}

main > article h1 {
  width: 100%;
  font-size: 6vw;
  font-weight: 900;
  font-family: "owners", monospace;

  margin-bottom: 20px;
}
main > article > p {
  font-size: 18px;
  font-weight: 200;
  font-family: "PowerGroteskTrial", sans-serif;
  margin-bottom: 20px;
  padding-left: 20px;
  width: 100%;
  line-height: 1;
  letter-spacing: 1px;
  text-wrap: balance;
}
main > article ul {
  padding-left: 20px;
  list-style-type: none;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 20px;
  flex-direction: column;
}
main > article ul p {
  font-size: 18px;
  text-wrap: balance;
  font-weight: 200;
  font-family: "PowerGroteskTrial", sans-serif;
  margin-bottom: 10px;
  width: 100%;
  line-height: 1;
  letter-spacing: 1px;
}
main > article ul li {
  font-size: 22px;
  text-wrap: balance;
  font-weight: 200;
  font-family: "PowerGroteskTrial", sans-serif;
  text-transform: capitalize;
  /* margin-bottom: 10px; */
  line-height: 1;
  letter-spacing: 1px;
  height: 22px;
  overflow: hidden;
  position: relative;
}

main > article > p a {
  text-decoration: underline;
}
main > figure {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
}
main > figure img {
  max-width: 100%;
  width: 80%;
  height: auto;
  max-height: 100%;
  border-radius: 14px;
  object-fit: cover;
  object-position: center;
}

@media screen and (min-width: 1000px) {
  #menu ul.socialMedia li::after,
  #menu ul.linkscontainer li::after,
  main > article ul li::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #222222;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 1s var(--main-transition);
    will-change: transform;
    border-radius: 2px;
  }
  #menu ul.socialMedia li:hover::after,
  #menu ul.linkscontainer li:hover::after,
  main > article ul li:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  footer a {
    position: relative;
  }
  footer a::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #e9e9e9;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 1s var(--main-transition);
    will-change: transform;
    border-radius: 2px;
  }
  footer a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}

@media screen and (max-width: 767px) {
  #menu ul.linkscontainer {
    justify-content: center;
    align-items: flex-start;
    padding-left: 0;
  }
  #menu ul.linkscontainer li {
    text-align: left;
    width: 220px;
  }
  #menu ul.socialMedia {
    align-items: flex-end;
    text-align: right;
  }
  #menu .imgContainer {
    display: none;
    pointer-events: none;
  }

  #menu figure img {
    display: none;
    pointer-events: none;
  }
  main {
    width: 90vw;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  main article {
    width: 100%;
    height: 50%;
  }
  main article p {
    font-size: 9px;
  }
  main article ul p {
    font-size: 9px;
  }
  main article ul li {
    font-size: 15px;
    height: 15px;
  }
  main figure {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 67%;
    flex-grow: 0;
  }
}
</style>
