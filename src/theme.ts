import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brandBgLight: { value: "#FBF3D1" }, // light nijansa
        brandBgDark: { value: "#B6AE9F" },  // dark nijansa
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
      },
    },
  },
})