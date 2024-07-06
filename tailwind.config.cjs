const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      "fontSize": {
        "2xl": [
          "1.7142857142857142rem",
          {
            "lineHeight": "2.2857142857142856rem"
          }
        ],
        "3xl": [
          "2.142857142857143rem",
          {
            "lineHeight": "2.5714285714285716rem"
          }
        ],
        "4xl": [
          "2.5714285714285716rem",
          {
            "lineHeight": "2.857142857142857rem"
          }
        ],
        "5xl": [
          "3.4285714285714284rem",
          {
            "lineHeight": "3.1428571428571428rem"
          }
        ],
        "6xl": [
          "4.285714285714286rem",
          {
            "lineHeight": "4.1428571428571428rem"
          }
        ],
        "7xl": [
          "5.142857142857143rem",
          {
            "lineHeight": "5.1428571428571428rem"
          }
        ],
        "8xl": [
          "6.857142857142857rem",
          {
            "lineHeight": "6.1428571428571428rem"
          }
        ],
        "9xl": [
          "9.142857142857142rem",
          {
            "lineHeight": "9.1428571428571428rem"
          }
        ],
        "base": [
          "1.1428571428571428rem",
          {
            "lineHeight": "1.7142857142857142rem"
          }
        ],
        "lg": [
          "1.2857142857142858rem",
          {
            "lineHeight": "2rem"
          }
        ],
        "sm": [
          "1rem",
          {
            "lineHeight": "1.4285714285714286rem"
          }
        ],
        "xl": [
          "1.4285714285714286rem",
          {
            "lineHeight": "2rem"
          }
        ],
        "xs": [
          "0.8571428571428571rem",
          {
            "lineHeight": "1.1428571428571428rem"
          }
        ]
      },
      screens: Object.keys(defaultTheme.screens).reduce((obj, key) => {
        const [rawMin] = defaultTheme.screens[key].split("px");
        const max = parseInt(rawMin) - 1;
        obj[`!${key}`] = { max: `${max}px` };
        return obj;
      }, {}),
      colors: {
        black: "hsl(var(--black))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundImage: {
        "background-pattern":
          "radial-gradient(at 80% 8%, hsla(267,64%,84%,1) 0px, transparent 50%), radial-gradient(at 54% 52%, hsla(224,100%,95%,1) 0px, transparent 50%), radial-gradient(at 3% 18%, hsla(171,62%,84%,1) 0px, transparent 50%), radial-gradient(at 46% 82%, hsla(296,69%,85%,1) 0px, transparent 50%);",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      dropShadow: {
        sm: "0 1px 1px hsla(var(--black) / 0.05)",
        "drop-shadow": [
          "0 1px 2px hsla(var(--black) / 0.1)",
          "0 1px 1px hsla(var(--black) / 0.06)",
        ],
        md: [
          "0 4px 3px hsla(var(--black) / 0.07)",
          "0 2px 2px hsla(var(--black) / 0.06)",
        ],
        lg: [
          "0 10px 8px hsla(var(--black) / 0.04)",
          "0 4px 3px hsla(var(--black) / 0.1)",
        ],
        xl: [
          "0 20px 13px hsla(var(--black) / 0.03)",
          "0 8px 5px hsla(var(--black) / 0.08)",
        ],
        "2xl": "0 25px 25px hsla(var(--black) / 0.15)",
        glow: ["0px 0px 20px #FFFFFF", "0px 0px 20px #FFFFFF"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
