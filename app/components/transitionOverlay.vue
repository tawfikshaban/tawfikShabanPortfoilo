<script setup>
import gsap from "gsap";
const router = useRouter();
const route = useRoute();
const BgColor = ref("var(--main-green-color)");
watch(route, (newRoute) => {
  switch (newRoute.name) {
    case "index":
      BgColor.value = "var(--main-green-color)";
      break;
    case "works":
      BgColor.value = "var(--secundBlue-color)";
      break;
    case "about":
      BgColor.value = "var(--white-color)";
      break;

    case "clients":
      BgColor.value = "var(--white-color)";
      break;
    default:
      break;
  }
});
router.beforeEach((to, from, next) => {
  requestAnimationFrame(() => {
    gsap.to(".transition-col-top", {
      duration: 1.5,
      scaleY: 1,
      stagger: 0.2,
    });
    gsap.to(".transition-col-bottom", {
      duration: 1.5,
      scaleY: 1,
      stagger: 0.2,
    });
    gsap.set(".transition-col-top", {
      backgroundColor: BgColor.value,
    });

    gsap.set(".transition-col-bottom", {
      backgroundColor: BgColor.value,
    });
  });
  switch (route.name) {
    case "index":
      BgColor.value = "var(--main-green-color)";
      break;
    case "works":
      BgColor.value = "var(--secundBlue-color)";
      break;
    case "about":
      BgColor.value = "var(--white-color)";
      break;

    case "clients":
      BgColor.value = "var(--white-color)";
      break;
    default:
      break;
  }

  setTimeout(() => {
    next();
  }, 2000); // نفس مدة الـ transition في الـ CSS
});

router.afterEach(() => {
  switch (route.name) {
    case "index":
      BgColor.value = "var(--main-green-color)";
      break;
    case "works":
      BgColor.value = "var(--secundBlue-color)";
      break;
    case "about":
      BgColor.value = "var(--white-color)";
      break;

    case "clients":
      BgColor.value = "var(--white-color)";
      break;
    case "cv":
      BgColor.value = "#222222";
      break;
    case "Contact":
      BgColor.value = "#222222";
      break;
    default:
      break;
  }

  setTimeout(() => {
    requestAnimationFrame(() => {
      gsap.set(".transition-col-top", {
        backgroundColor: BgColor.value,
      });

      gsap.set(".transition-col-bottom", {
        backgroundColor: BgColor.value,
      });
      gsap.to(".transition-col-top", {
        duration: 1.5,
        scaleY: 0,
        stagger: 0.2,
      });
      gsap.to(".transition-col-bottom", {
        duration: 1.5,

        scaleY: 0,
        stagger: 0.2,
      });
    });
  }, 2500);
});
</script>
<template>
  <div class="transition-container">
    <ul class="transition-row">
      <li v-for="i in 5" :key="i" class="transition-col-top"></li>
    </ul>
    <ul class="transition-row">
      <li v-for="i in 5" :key="i" class="transition-col-bottom"></li>
    </ul>
  </div>
  <slot />
</template>
<style scoped>
.transition-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  z-index: 99999;
  will-change: transform;
  transition: transform 1s var(--main-transition);
}

.transition-row {
  display: flex;
  flex: 1;
  /* width: 100%; */
}

.transition-col-top,
.transition-col-top,
.transition-col-top,
.transition-col-top {
  transform-origin: top;
}

.transition-col-bottom,
.transition-col-bottom,
.transition-col-bottom,
.transition-col-bottom {
  transform-origin: bottom;
}

.transition-row li {
  flex: 1;
  background-color: var(--main-green-color);
  transform: scaleY(0) scaleX(1.5);
  will-change: transform;
  transition: transform 0.6s var(--secund-transition);
  list-style: none;
}
</style>
