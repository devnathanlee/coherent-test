import React, { Component } from 'react'

import {
    AppBar,
    Toolbar,
    Typography,
    InputBase
} from '@material-ui/core'
import {
    Search as SearchIcon
} from '@material-ui/icons'

import { fade, withStyles } from '@material-ui/core/styles'

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#3c3b63',
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'
    },
    toolbarContainer: {
        maxWidth: theme.custom.contentMaxWidth,
        width: '100%',
        margin: 'auto'
    },
    titleContainer: {
        flexGrow: 1,
        width: '100%'
    },
    title: {
        flexGrow: 1
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        marginRight: '30px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
            marginRight: '50px'
        }
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200
            }
        }
    }
})

class AppBarView extends Component {
    render () {
        const styles = this.props.classes
        const newsAction = this.props.actions.news

        return (
            <div>
                <AppBar className={styles.root} position="fixed">
                    <Toolbar className={styles.toolbarContainer}>

                        <div className={styles.titleContainer}>
                            <Typography className={styles.title} variant="h6" noWrap>
                            US News
                            </Typography>
                        </div>
                        <div className={styles.search}>
                            <div className={styles.searchIcon}>
                                <SearchIcon />
                            </div>

                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: styles.inputRoot,
                                    input: styles.inputInput
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={(e) => newsAction.updateSearchKey(e.target.value)}
                            />
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

AppBarView.propTypes = {}

export default withStyles(useStyles)(AppBarView)
