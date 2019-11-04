import React, { Component } from 'react'
import moment from 'moment-timezone'

import {
    Paper,
    Grid,
    Avatar,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography
} from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    avatar: {
        margin: 10,
        width: '50px',
        height: '50px',
        backgroundColor: '#bdbdbd',
        color: '#fafafa'
    },
    // topRightConatiner: {
    //     flexGrow: 1,
    //     paddingLeft: '10px'
    // },
    // nameConatiner: {
    //     flexGrow: 1,
    //     height: '70px'
    // },
    // nameConatinerItem: {
    //     margin: '10px 0'
    // },
    // newsImg: {
    //     width: '100%'
    // },
    card: {
        maxWidth: 345,
        minWidth: 290,
        width: '100%',
        height: '560px',
        margin: 'auto',
        boxShadow: 'none'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        backgroundColor: 'gainsboro'
    },
    textHeaderColor: {
        color: 'rgba(0, 0, 0, 0.87)'
    },
    textContentColor: {
        color: 'rgba(0, 0, 0, 0.54)',
        overflow: 'hidden'
    },
    dateContainer: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    nameContainer: {
        color: 'rgba(0, 0, 0, 0.87)'
    },
    paperContainer: {
        maxWidth: 345,
        minWidth: 290,
        width: '100%',
        height: '560px',
        margin: 'auto',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.2), 0px 1px 3px 0px rgba(0,0,0,0.2)'
    },
    linkContainer: {
        textDecoration: 'none'
    }
})

class NewsFeedItemView extends Component {
    render () {
        const styles = this.props.classes

        const data = this.props.data

        const dateToHKtz = moment(data.publishedAt).tz('Asia/Hong_Kong').format('YYYY-MM-DD HH:mm')
        const avatarName = data.source.name[0] || ''

        return (
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Paper className={styles.paperContainer}>
                    <a href={data.url} target="_blank" className={styles.linkContainer}>
                        <Card className={styles.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={styles.avatar}>
                                        {avatarName}
                                    </Avatar>
                                }
                                title={
                                    <Grid className={styles.nameContainer}>
                                        {data.source.name}
                                    </Grid>
                                }
                                subheader={
                                    <Grid className={styles.dateContainer}>
                                        {dateToHKtz}
                                    </Grid>
                                }
                            />
                            <CardMedia
                                className={styles.media}
                                image={data.urlToImage === '' ? undefined : data.urlToImage}
                                src={data.urlToImage === '' ? undefined : data.urlToImage}
                                title="News Image"
                            />
                            <CardContent>
                                <Typography variant="h5" component="p" className="textHeaderColor">
                                    {data.title}
                                </Typography>

                                <Typography variant="body2" component="p" className="textContentColor">
                                    {data.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </a>
                </Paper>
            </Grid>
        )
    }
}

NewsFeedItemView.propTypes = {}

export default withStyles(useStyles)(NewsFeedItemView)
