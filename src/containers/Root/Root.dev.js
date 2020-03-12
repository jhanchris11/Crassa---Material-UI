import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import DevTools from './DevTools'

const Root = (props) => {
  const { store, children } = props

  return (
    <Provider store={store}>
      <Fragment>
        {children}
        <DevTools />
      </Fragment>
    </Provider>
  )
}
export default Root

Root.propTypes = {
  store: PropTypes.object.isRequired
}
