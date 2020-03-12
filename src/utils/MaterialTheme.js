import { indigo, teal } from '@material-ui/core/colors'

const configDefault = {
  typography: {
    useNextVariants: true
  }
}

export default {
  dark: {
    ...configDefault,
    palette: {
      primary: {
        main: teal[500]
      },
      secondary: {
        main: indigo[500]
      },
      type: 'dark'
    }
  },
  ligth: {
    ...configDefault,
    palette: {
      primary: {
        main: indigo[500]
      },
      secondary: {
        main: teal[500]
      },
      type: 'light'
    }
  }
}
