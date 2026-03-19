import { createSystem, defaultConfig } from "@chakra-ui/react"

export const theme = {
  tokens: {
    colors: {
      /* Background za light / dark */
      brandBgLight: { value: "#FBF3D1" },
      brandBgDark: { value: "#B6AE9F" },

      /* Champagne palette */
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

      /* Nude palette */
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

      /* Rose palette */
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

      /* Gold accent */
     gold: {
  50: { value: "#fdfaf5" },
  100: { value: "#f6efe4" },
  200: { value: "#eadfcd" },
  300: { value: "#dcc9b0" },
  400: { value: "#cdb394" },
  500: { value: "#b79b76" }, // primary accent
  600: { value: "#9f835f" },
  700: { value: "#836a4c" },
  800: { value: "#67533b" },
  900: { value: "#4d3d2b" },
},
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