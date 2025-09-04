# Frontend Mentor - Space Tourism Website Solution 🚀

This is my solution to the [Space Tourism Website Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). The challenge was to build a responsive, multi-page website and make it look as close as possible to the given design.

## 📑 Table of Contents

* [Overview](#overview)

  * [The Challenge](#the-challenge)
  * [Screenshot](#screenshot)
  * [Links](#links)
* [My Process](#my-process)

  * [Built With](#built-with)
  * [What I Learned](#what-i-learned)
  * [Continued Development](#continued-development)
  * [Useful Resources](#useful-resources)
* [Author](#author)

---

## 🌍 Overview

### The Challenge

Users should be able to:

* View the optimal layout for each page depending on their device’s screen size
* See hover states for all interactive elements
* Navigate between **Home**, **Destination**, **Crew**, and **Technology** pages
* Toggle between tabs (Destination planets, Crew members, Technology) to display the correct content

### Screenshot

![Preview of Space Tourism Website](./public/previews.png)

### Links

* Live Site URL: [Link](https://1732-space-tourism.netlify.app)

---

## 🔨 My Process

### Built With

* [Vue 3](https://vuejs.org/) – Composition API with `<script setup>`
* [TypeScript](https://www.typescriptlang.org/) – Type safety
* [Vue Router](https://router.vuejs.org/) – Page navigation
* [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
* [Vite](https://vitejs.dev/) – Lightning-fast build tool
* Mobile-first responsive workflow
* Semantic HTML5 markup & CSS Grid/Flexbox

### What I Learned

This project helped me strengthen my skills with:

* Using `<script setup lang="ts">` with Vue 3
* Managing dynamic backgrounds based on `vue-router` paths
* Building accessible tab navigation with keyboard focus states
* Leveraging `<picture>` and `srcset` for responsive images

```html
<picture>
  <source :srcset="space_tech['image']['src']['landscape']" media="(min-width: 1024px)" />
  <img :src="space_tech['image']['src']['portrait']" :alt="space_tech['image']['alt']" />
</picture>
```

### Continued Development

In future projects, I’d like to:

* Add animations with [Framer Motion for Vue](https://motion.vueuse.org/)
* Explore using [Pinia](https://pinia.vuejs.org/) for state management
* Improve performance with lazy-loaded routes and components

### Useful Resources

* [Vue 3 Docs](https://vuejs.org/guide/introduction.html) – Official docs
* [TailwindCSS Docs](https://tailwindcss.com/docs) – Utility-first styling
* [TypeScript ESLint Guide](https://typescript-eslint.io/) – Helped set up linting with Vue and TS

---

## 👩🏽‍🚀 Author

* Website – [Portfolio](https://ejemeniboi.com)
* Twitter – [@EjemenIboi](https://twitter.com/EjemenIboi)
