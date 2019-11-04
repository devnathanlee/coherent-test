import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import {
    MainPage
} from './../../containers'

class AppRoutes extends Component {
    render () {
        const { history } = this.props
        return (
            <Router history={history}>
                <div>

                    <Switch>
                        <Route component={MainPage} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

AppRoutes.propTypes = {}

const mapToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapToProps, mapDispatchToProps)(AppRoutes)
