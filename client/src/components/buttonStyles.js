// eslint-disable-next-line import/no-extraneous-dependencies
import { darken } from "@chakra-ui/theme-tools"
export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: "primary",
      color: "#fff",
      _hover: {
        bg: darken("primary", 10)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    secondary: {
      bg: darken("secondary", 20),
      color: "#fff",
      _hover: {
        bg: darken("secondary", 50)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    light: {
      bg: "#FFF",
      color: "primary",
      _hover: {
        bg: darken("#FFF", 10)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    third: {
      bg: "secondary",
      color: "primary",
      _hover: {
        bg: "primary",
        color: "#fff"
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    fourth: {
      bg: "#FFFF",
      color: "primary",
      border: "1px solid #304659",
      _hover: {
        bg: "primary",
        color: "#fff"
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    google: {
      bg: "#ffff",
      color: "#304659",
      border: "1px solid",
      borderColor: "#8298AB",
      _hover: {
        bg: darken("#ffff", 20)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    facebook: {
      bg: "#1877F2",
      color: "#ffff",
      _hover: {
        bg: darken("#1877F2", 20)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    danger: {
      bg: "#EF4444",
      color: "#ffff",
      _hover: {
        bg: darken("#EF4444", 20)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    warning: {
      bg: "#FCD34D",
      color: "#ffff",
      _hover: {
        bg: darken("#FCD34D", 20)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    success: {
      bg: "#34D399",
      color: "#ffff",
      _hover: {
        bg: darken("#34D399", 20)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    info: {
      bg: "#3B82F6",
      color: "#ffff",
      _hover: {
        bg: darken("#3B82F6", 20)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    }
  },
  // default values for `size` and `variant`
  defaultProps: {}
}