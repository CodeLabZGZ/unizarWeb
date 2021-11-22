// --control-border-color: #101113;
// --control-background-color: #fff;
// --control-caret-color: #000;
// --control-transition-duration: 0.3s;
// --control-transition-easing: ease;
// --control-dropdown-background-color: #eff2f5;
// --theme-color: #3861fb;
// --theme-light-color: #cfd6e4;
// --theme-light-blue-color: #e6f0ff;
// --theme-light-blue: #f0f6ff;
// --theme-light-blue-font: #3861fb;
// --text-color: #000;
// --info-icon-color: #a6b0c3;
// --text-color-sub: #58667e;
// --text-color-error: #ea3943;
// --bt-light-blue: #f0f6ff;
// --var-text-small: 14px;
// --up-color: #16c784;
// --down-color: #ea3943;
// --border-color: #eff2f5;
// --bg-color: #fff;
// --color-primary-black: #000;
// --color-primary-white: #fff;
// --color-primary-blue: #3861fb;
// --color-light-neutral-1: #f8fafd;
// --color-light-neutral-2: #eff2f5;
// --color-light-neutral-4: #a6b0c3;
// --color-light-neutral-5: #808a9d;
// --color-light-neutral-6: #58667e;
// --color-light-neutral-7: #eff2f5;
// --color-gradient-end: rgba(248,250,253,0);
// --button-border-color: #cfd6e4;
// --button-bg-color: #222531;
// --breakpoint-md: 768px;
// --dark-bg: #000;
// --card-bg: #fff;

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "#3861fb",
        danger: "#ea3943",
        success: "#16c784",
        "color-light-neutral-1": "#f8fafd",
        "color-light-neutral-2": "#eff2f5",
        "color-light-neutral-4": "#a6b0c3",
        "color-light-neutral-5": "#808a9d",
        "color-light-neutral-6": "#58667e",
        "color-light-neutral-7": "#eff2f5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
