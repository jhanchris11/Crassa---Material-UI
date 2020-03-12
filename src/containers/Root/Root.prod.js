import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

const Root = (props) => {
  const { store, children } = props

  useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side')
    if(jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles)
  })

  return (
    <Provider store={store}>{children}</Provider>
  )
}
export default Root

Root.propTypes = {
  store: PropTypes.object.isRequired
}
