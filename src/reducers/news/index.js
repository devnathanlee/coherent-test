import Fuse from 'fuse.js'

const initialState = {
    newsList: undefined,
    isLoading: false,
    hasMoreNews: true,
    maxNoOfNewsList: 100,
    pageSize: 10,
    filteredNewsList: undefined,
    searchKey: ''
}

const searchOptions = {
    shouldSort: true,
    includeScore: true,
    // includeMatches: true,
    tokenize: true,
    findAllMatches: true,
    matchAllTokens: true,
    threshold: 0.0,
    location: 0,
    distance: 1000,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
        'title',
        'description'
    ]
}

export default function NewsReducer (state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'NEWS_GET_NEWS_LIST':
            break
        case 'NEWS_UPDATE_NEWS_LIST_DATA': {
            if (typeof state.newsList === 'undefined') {
                state.newsList = []
            }

            const newNewsList = state.newsList.concat(action.payload.data)

            nextState = Object.assign({}, state, {
                newsList: newNewsList,
                hasMoreNews: newNewsList.length < state.maxNoOfNewsList
            })
            break
        }
        case 'NEWS_UPDATE_NEWS_IS_LOADING':
            nextState = Object.assign({}, state, {
                isLoading: !state.isLoading
            })
            break
        case 'NEWS_UPDATE_FILTERED_NEWS_LIST' : {
            const { filteredNewsList } = action.payload

            nextState = Object.assign({}, state, {
                filteredNewsList: filteredNewsList
            })
            break
        }
        case 'NEWS_UPDATE_SEARCH_KEYWORD': {
            const { keyword } = action.payload

            let updateFilteredNewsList
            if (keyword.length > 0) {
                const fuse = new Fuse(state.newsList, searchOptions)

                const result = fuse.search(keyword)

                updateFilteredNewsList = result.map((data) => {
                    return data.item
                })
            }

            nextState = Object.assign({}, state, {
                searchKey: keyword,
                filteredNewsList: updateFilteredNewsList
            })
            break
        }
        default:
            break
    }
    return nextState || state
}
