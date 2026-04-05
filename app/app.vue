<script setup lang="ts">
import { useDocumentVisibility } from "@vueuse/core";
useSeoMeta({
  // title: "Tawfik Shaban | Performance-Driven Front-End Developer",
  description:
    "Specializing in high-performance, animated, and scalable web experiences using Nuxt 4 and Vue.js. Explore my professional portfolio and open-source projects.",

  ogTitle: "Tawfik Shaban - Creative Front-End Developer",
  ogDescription:
    "Crafting fast, immersive web experiences with Vue.js, Nuxt, and GSAP.",
  ogImage: "/images/ogImage.png", // تأكد إن الصورة موجودة في public folder
  ogType: "profile", // غيرناها لـ profile عشان ده موقع شخصي
});

// 2. الـ JSON-LD (ده اللي بيربط LinkedIn و GitHub بموقعك برمجياً)
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Tawfik Shabaan",
        url: "https://tawfik-shaban-portfoilo.vercel.app",
        jobTitle: "Front-End Developer",
        description: "Expert in Vue.js, Nuxt 4, and web animations.",
        sameAs: [
          "https://github.com/tawfikshaban", // لينك جيت هاب بتاعك
          "https://www.linkedin.com/in/tawfikshaban-div", // لينك لينكد إن بتاعك
        ],
      }),
    },
  ],
});
const visibility = useDocumentVisibility();
const originalIcon = "/images/icon.svg"; // تأكد إن لوجو الـ TS موجود في مجلد public بالاسم ده

// دالة لرسم العين (لما المستخدم يبعد)
const drawEyeIcon = (): string => {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  // رسم جفن العين (قوس)
  ctx.strokeStyle = "#00c3cc"; // نفس درجة لون اللوجو بتاعك تقريباً
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(16, 12, 10, 0.2 * Math.PI, 0.8 * Math.PI, false);
  ctx.stroke();

  // رسم الرموش عشان تبان إنها عين مقفولة (Sleeping Eye)
  const lashes = [
    { x1: 16, y1: 22, x2: 16, y2: 28 }, // اللي في النص
    { x1: 10, y1: 20, x2: 8, y2: 26 }, // شمال
    { x1: 22, y1: 20, x2: 24, y2: 26 }, // يمين
  ];

  lashes.forEach((l) => {
    ctx.beginPath();
    ctx.moveTo(l.x1, l.y1);
    ctx.lineTo(l.x2, l.y2);
    ctx.stroke();
  });

  return canvas.toDataURL("image/png");
};

// دالة تحديث الـ Link Tag في الـ Head
const updateFavicon = (href: string) => {
  if (!import.meta.client) return;
  const link: HTMLLinkElement | null =
    document.querySelector("link[rel*='icon']");
  if (link) {
    link.href = href;
  }
};

// مراقبة الحالة وتغيير الأيقونة
watch(visibility, (current) => {
  if (current === "hidden") {
    updateFavicon(
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGZlemtjNDMwb20yYms0dmVvaWMxYTQ5emNmNGRyczR6eHp3NXBwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Xr9TlAqw3S7VPOrftK/giphy.gif",
    );
  } else {
    updateFavicon(originalIcon);
  }
});
</script>

<template>
  <div>
    <transitionOverlay>
      <NuxtPage />
    </transitionOverlay>
  </div>
</template>

<style></style>
