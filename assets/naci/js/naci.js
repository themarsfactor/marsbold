// const generateOverlayHTML = ({ btnColor, iconColor, linkVideo, linkCode }) =>
//   document.body.insertAdjacentHTML(
//     "beforeend",
//     `<style>
//     .cip-wrapper {
//       position: fixed;
//       inset: 0;
//       background-color: transparent;
//       z-index: 9999;
//       transition: background-color 0.2s ease-in-out;
//       pointer-events: none;
//     }
//     .cip-wrapper[data-active="true"] {
//       pointer-events: all;
//       background-color: rgba(0, 0, 0, 0.15);
//     }

//     aside.cip-project-info {
//     font-size: 17px;
//     --cip-btn-color: ${btnColor};
//     --cip-icon-color: ${iconColor};
//     --cip-gap: .6em;
//     font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
//     position: fixed;
//     bottom: 1.3em;
//     right: 1.3em;
//     display: flex;
//     align-items: center;
//     gap: var(--cip-gap);
//     z-index: 9999;
//   }
//   aside.cip-project-info .cip-btn-container {
//     display: flex;
//     gap: var(--cip-gap);
//     align-items: center;
//   }
//   aside.cip-project-info .cip-btn-container[aria-hidden="true"] {
//     display: none;
//   }
//   aside.cip-project-info .cip-btn {
//     display: grid;
//     place-items: center;
//     aspect-ratio: 1/1;
//     font: inherit;
//     cursor: pointer;
//     position: relative;
//     border: none;
//     text-decoration: none;
//     margin: 0;
//     width: clamp(2.4em, 8vw, 3.2em);
//     height: clamp(2.4em, 8vw, 3.2em);
//     border-radius: 100vmax;
//     border: .15em solid transparent;
//     background-color: hsl(var(--cip-btn-color));
//     box-shadow:
//       .1em .2em .65em hsl(var(--cip-btn-color) / .3),
//       0 0 0 -.1em hsl(var(--cip-icon-color)),
//       0 0 0 -.2em hsl(var(--cip-btn-color));
//     transition:
//       box-shadow 300ms cubic-bezier(.5,-.5,.1,1.5),
//       border-color 300ms ease-in-out,
//       color 300ms ease-in-out;
//   }
//   aside.cip-project-info .cip-btn:hover{
//     border-color: hsl(var(--cip-icon-color));
//   }
//   aside.cip-project-info .cip-btn:is(:hover,:focus-visible)::after {
//     content: attr(data-label);
//     top: -31px;
//     white-space: nowrap;
//     font-size: .6em;
//     position: absolute;
//     background-color: #fff;
//     color: #000;
//     padding: .2em .5em;
//     border-radius: .5em;
//   }
//   aside.cip-project-info .cip-btn:is(:hover,:focus-visible)::before {
//     content: "";
//     top: -13px;
//     position: absolute;
//     width: 0;
//     height: 0;
//     border-left: .3em solid transparent;
//     border-right: .3em solid transparent;
//     border-top: .3em solid #fff;
//   }

//   aside.cip-project-info .cip-btn:focus {
//     outline: none;
//   }
//   aside.cip-project-info .cip-btn:focus-visible {
//     opacity: 1;
//     box-shadow:
//       0 0 0 hsl(var(--cip-btn-color)),
//       0 0 0 .1em hsl(var(--cip-icon-color)),
//       0 0 0 .35em hsl(var(--cip-btn-color));
//   }
//   aside.cip-project-info .cip-btn[aria-expanded] {
//     order: 1;
//   }
//   aside.cip-project-info .cip-btn .icon {
//     width: clamp(1.4em, 5vw, 1.75em);
//     height: clamp(1.4em, 5vw, 1.75em);
//     aspect-ratio: 1/1;
//     pointer-events: none;
//     color: hsl(var(--cip-icon-color));
//     stroke: hsl(var(--cip-icon-color));
//     fill: none;
//   }
// </style>
// <div class="cip-wrapper" data-active="false"></div>
// <aside class="cip-project-info">
//   <button id="cip-overlay-btn" class="cip-btn" data-label="Project Info" aria-controls="cip-btn-container" aria-expanded="false">
//     <svg width="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//       <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//     </svg>
//   </button>
//   <div id="cip-btn-container" aria-labelledby="cip-overlay-btn" class="cip-btn-container" role="group" aria-hidden="true">
//     <a href="/" tabindex="-1" class="cip-btn" data-label="Go Home">
//       <svg width="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//       </svg>
//     </a>
//     <a href="/projects/" tabindex="-1" class="cip-btn" data-label="Other Projects">
//       <svg width="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
//       </svg>
//     </a>
//     <a href=${linkCode} tabindex="-1" class="cip-btn" id="cip-btn--code" data-label="GitHub Code">
//       <svg width="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//       </svg>
//     </a>
//     <a href=${linkVideo} tabindex="-1" class="cip-btn" data-label="YouTube Video">
//       <svg width="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//       </svg>
//     </a>
//   </div>
// </aside>
// `
//   );

// let cipWrapper;
// let cipOverlayBtn;
// let cipOverlayContainer;

// async function fetchProjectInfo() {
//   const l = window.location.pathname.split("/")[2];
//   const res = await fetch("/projects.json");
//   const data = await res.json();
//   const p = Object.values(data).find((project) => project.url === l);
//   return {
//     btnColor: p.btnColor || "#fff",
//     iconColor: p.iconColor || "#000",
//     linkVideo: p.youtube,
//     linkCode: p.code,
//   };
// }

// const cipCloseOverlay = () => {
//   cipWrapper.setAttribute("data-active", "false");
//   cipOverlayBtn.setAttribute("aria-expanded", "false");
//   cipOverlayBtn.setAttribute("aria-hidden", "true");
//   cipOverlayContainer.setAttribute("aria-hidden", "true");
// };

// function toggleOverlay(e) {
//   if ((e.target.id = "cip-overlay-btn")) {
//     const active = JSON.parse(cipOverlayBtn.getAttribute("aria-expanded"));
//     cipWrapper.setAttribute("data-active", !active);
//     cipOverlayBtn.setAttribute("aria-expanded", !active);
//     cipOverlayBtn.setAttribute("aria-hidden", !active);
//     cipOverlayContainer.setAttribute("aria-hidden", active);
//     cipOverlayContainer
//       .querySelectorAll(".cip-btn")
//       .forEach((btn) => btn.setAttribute("tabindex", active ? "-1" : "0"));
//   }
// }

// (async function initProjectInfoOverlay() {
//   const projectInfo = await fetchProjectInfo();
//   generateOverlayHTML(projectInfo);
//   cipWrapper = document.querySelector(".cip-wrapper");
//   cipOverlayBtn = document.querySelector("#cip-overlay-btn");
//   cipOverlayContainer = document.querySelector("#cip-btn-container");
//   cipWrapper.addEventListener("click", () => cipCloseOverlay());
//   window.addEventListener("keydown", (e) => {
//     if (e.key !== "Escape") return;
//     if (cipWrapper.getAttribute("data-active") === "true") {
//       cipCloseOverlay();
//     }
//   });
//   cipOverlayBtn.addEventListener("click", toggleOverlay);
//   document.head.insertAdjacentHTML(
//     "beforeend",
//     `<!-- Google Analytics -->
//   <script async src="https://www.googletagmanager.com/gtag/js?id=G-TW8WDRTN9N"></script>
//   <script>
//     window.dataLayer = window.dataLayer || [];
//     function gtag() { dataLayer.push(arguments); }
//     gtag('js', new Date());
//     gtag('config', 'G-TW8WDRTN9N');
//   </script>`
//   );
// })();

// /*==================== ACCORDION ====================*/
    document.addEventListener('alpine:init', () => {
      Alpine.store('accordion', {
        tab: 0
      });
      
      Alpine.data('accordion', (idx) => ({
        init() {
          this.idx = idx;
        },
        idx: -1,
        handleClick() {
          this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
        },
        handleRotate() {
          return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
        },
        handleToggle() {
          return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
        }
      }));
    })


// /*==================== SCROLL REVEAL ANIMATION ====================*/

const sr = ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 2000,
	reset: true
});

sr.reveal(`.slider__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
	interval: 200
})

// for snackbar notification
function mySnack() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}