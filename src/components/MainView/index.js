import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import InfiniteScroll from 'react-infinite-scroller'

import {
    Grid,
    CircularProgress,
    Typography
} from '@material-ui/core'

// components
import {
    AppBarView,
    NewsFeedItemView
    // CustomLoadingView
} from './..'

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        maxWidth: theme.custom.contentMaxWidth,
        // margin: '80px auto 10px auto',
        margin: 'auto'
        // paddingTop: '70px'
        // backgroundColor: 'red'
    },
    bodyContainer: {
        padding: '100px 15px 15px 15px'
    },
    loadingContainer: {
        textAlign: 'center',
        margin: '20px auto',
        height: '100px'
    },
    progress: {
        color: '#3c3b63'
    }
})

class MainView extends Component {
    constructor (props) {
        super(props)
        const news = this.props.news

        const option = {
            sources: 'the-washington-post,the-new-york-times',
            pageSize: news.pageSize,
            page: typeof news.newsList === 'undefined' ? 1 : (news.newsList.length / news.pageSize) + 1
        }
        this.props.actions.news.getNewsList(option)
    }

    render () {
        const styles = this.props.classes
        const news = this.props.news
        const newsAction = this.props.actions.news

        const getNewsOption = {
            sources: 'the-washington-post,the-new-york-times',
            pageSize: news.pageSize,
            page: typeof news.newsList === 'undefined' ? 1 : (news.newsList.length / news.pageSize) + 1
        }

        let displayNewsList
        let isNotMatchNews = false

        if (Array.isArray(news.filteredNewsList) && news.filteredNewsList.length === 0) {
            displayNewsList = news.filteredNewsList
            isNotMatchNews = true
        } else if (Array.isArray(news.filteredNewsList)) {
            displayNewsList = news.filteredNewsList
        } else if (Array.isArray(news.newsList)) {
            displayNewsList = news.newsList
        } else {
            displayNewsList = news.newsList = []
        }

        return (
            <div className={styles.root}>
                <div className={styles.bodyContainer}>
                    <AppBarView actions={this.props.actions} />

                    <div>
                        <InfiniteScroll
                            loadMore={() => newsAction.getNewsList(getNewsOption)}
                            hasMore={news.hasMoreNews || false}
                            loader={
                                <Grid container direction="row" justify="center" alignItems="center" className={styles.loadingContainer}>
                                    <CircularProgress size={80} className={styles.progress} />
                                </Grid>
                            }
                        >
                            <Grid container spacing={3}>
                                {
                                    displayNewsList.map((data, index) => (
                                        <NewsFeedItemView key={index} data={data} />
                                    ))
                                }
                            </Grid>
                        </InfiniteScroll>

                        { (isNotMatchNews)
                            ? (
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Typography variant="subtitle1" gutterBottom>
                                        No matched news
                                    </Typography>
                                </Grid>
                            )
                            : (
                                null
                            )
                        }
                    </div>

                </div>
            </div>
        )
    }
}

MainView.propTypes = {}

export default withStyles(useStyles)(MainView)
