import React from 'react'
import ComicsWidget from '../components/ComicsWidget'
import SearchBar from '../components/SearchBar'

const ComicsList = () => {
    return (
        <div>
            <SearchBar />
            Comics List
            <ComicsWidget />
        </div>
    )
}

export default ComicsList;
