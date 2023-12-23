import React from 'react'
import { useLocation } from 'react-router-dom'

const TripPage = () => {
  const location = useLocation();
  const searchText = location.state?.searchText || '';
  return (
    <div>
      <h1>전달받은 값: {searchText}</h1>
    </div>
  )
}

export default TripPage