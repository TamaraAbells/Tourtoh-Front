import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "",
        color: "",
      },
      heading: {
        fontFamily: 'Philosopher',
      },
      // styles for the `a`
      a: {
        color: "",
        _hover: {
          textDecoration: "underline",
        },
      },
      // button: {
      //   _focus: {
      //     outline: 'none'
      //   }
      // }
    },
  },
})

export default theme