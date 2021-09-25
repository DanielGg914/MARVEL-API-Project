import React from 'react'
import EventWidget from '../components/EventWidget'
import SearchBar from '../components/SearchBar'

const EventList = () => {
    return (
        <div>
            <SearchBar />
            Events List
            <EventWidget />
        </div>
    )
}

export default EventList;
