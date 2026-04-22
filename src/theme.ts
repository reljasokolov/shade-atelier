import { createSystem, defaultConfig } from "@chakra-ui/react"

export const theme = {
  tokens: {
    colors: {
      brandBgLight: { value: "#fbf9f4" },
      brandBgDark: { value: "#1a1816" },

      champagne: {
        50: { value: "#fdfcf7" },
        100: { value: "#f7f1df" },
        200: { value: "#f0e5c6" },
        300: { value: "#e9d9ad" },
        400: { value: "#e2cd94" },
        500: { value: "#d6b96f" },
        600: { value: "#b49a57" },
        700: { value: "#8f7742" },
        800: { value: "#6a562e" },
        900: { value: "#44361c" },
      },

      nude: {
        50: { value: "#faf6f3" },
        100: { value: "#f1e3da" },
        200: { value: "#e8d0c2" },
        300: { value: "#dfbdaa" },
        400: { value: "#d6aa92" },
        500: { value: "#c89a82" },
        600: { value: "#a57e69" },
        700: { value: "#82624f" },
        800: { value: "#5f4637" },
        900: { value: "#3c2b21" },
      },

      rose: {
        50: { value: "#fff5f7" },
        100: { value: "#ffe3e8" },
        200: { value: "#ffcfd8" },
        300: { value: "#ffb3c1" },
        400: { value: "#ff8fa3" },
        500: { value: "#f46b85" },
        600: { value: "#d9556e" },
        700: { value: "#b84257" },
        800: { value: "#8f2f41" },
        900: { value: "#661c2b" },
      },

      /* 💎 LUXURY GOLD */
      gold: {
        50:  { value: "#F5F1EB" }, // ivory light        
        100: { value: "#E7DCCF" }, // base (sa slike)
        200: { value: "#D8C3A5" }, // sand       
      300: { value: "#C6AE8A" }, // warm beige
        400: { value: "#BFA58A" }, // coffee milk
        500: { value: "#B08A4A" }, // 🔥 main (soft gold, ne prežuto)
        600: { value: "#9A763F" }, // deeper gold
        700: { value: "#7A5E33" }, // taupe brown
        800: { value: "#5B4726" }, // dark taupe
        900: { value: "#3E2F19" }, // espresso
      },
    },

    fonts: {
      heading: { value: "'Playfair Display', serif" },
      body: { value: "'Inter', sans-serif" },
    },

    radii: {
      xl: { value: "16px" },
      "2xl": { value: "22px" },
      full: { value: "9999px" },
    },

    shadows: {
      gold: { value: "0 10px 30px rgba(184,150,82,0.25)" },
      luxury: { value: "0 20px 60px rgba(0,0,0,0.15)" },
      soft: { value: "0 8px 25px rgba(0,0,0,0.08)" },
    },
  },

  semanticTokens: {
    colors: {
      bg: {
        canvas: {
          value: {
            base: "{colors.brandBgLight}",
            _dark: "{colors.brandBgDark}",
          },
        },
      },

      text: {
        primary: {
          value: {
            base: "#1a1a1a",
            _dark: "#ffffff",
          },
        },
      },
    },
  },
}

export const system = createSystem(defaultConfig, {
  theme,
})