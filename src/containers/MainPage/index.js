import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actions
import * as NewsActionCreator from './../../reducers/news/actionCreator'
// components
import { MainView } from './../../components'

class MainPage extends React.Component {
    render () {
        return (
            <MainView {...this.props} />
        )
    }
}

MainPage.propTypes = {}

const mapStateToProps = (state) => {
    return {
        news: state.news
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            news: bindActionCreators(NewsActionCreator, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
