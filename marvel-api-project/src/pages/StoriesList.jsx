import React from 'react'
import SearchBar from '../components/SearchBar'
import StoriesWidget from '../components/StoriesWidget'

const StoriesList = () => {
    return (
        <div>
            <SearchBar />
            Stories List
            <StoriesWidget />
        </div>
    )
}

export default StoriesList
