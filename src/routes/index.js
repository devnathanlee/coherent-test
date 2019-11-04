import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Theme from './../lib/configureUITheme'
import AppRoutes from './AppRoutes'

class Routes extends React.Component {
    render () {
        const { history } = this.props
        return (
            <MuiThemeProvider theme={Theme}>
                <div>
                    <AppRoutes history={history} />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Routes
