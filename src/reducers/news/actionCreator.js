export function getNewsList (option) {
    return {
        type: 'NEWS_GET_NEWS_LIST',
        payload: {
            option
        }
    }
}

export function updateNewsIsLoading () {
    return {
        type: 'NEWS_UPDATE_NEWS_IS_LOADING'
    }
}

export function updateNewsList (data) {
    return {
        type: 'NEWS_UPDATE_NEWS_LIST_DATA',
        payload: {
            data: data
        }
    }
}

export function updateSearchKey (keyStr) {
    return {
        type: 'NEWS_UPDATE_SEARCH_KEYWORD',
        payload: {
            keyword: keyStr
        }
    }
}

export function updateFilteredNewsList (list) {
    return {
        type: 'NEWS_UPDATE_FILTERED_NEWS_LIST',
        payload: {
            filteredNewsList: list
        }
    }
}
