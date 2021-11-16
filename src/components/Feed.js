import React from 'react'
import './Feed.css'
import Post from './Post'


const Feed = () => {
  const data = [{
    name: "Anacostia Park",
    state: "DC",
    url: "https://www.nps.gov/anac/index.htm",
    image: "https://www.nps.gov/common/uploads/banner_image/ncr/homepage/20D7ECCC-1DD8-B71B-0B2B68C9415E82E0.jpg",
  },
  {
    name: "Catoctin",
    state: "MD",
    url: "https://www.nps.gov/cato/index.htm",
    image: "https://www.nps.gov/common/uploads/grid_builder/cato/crop16_9/E5DF3F2D-1DD8-B71B-0BFBE6750C985A7B.jpg?width=950&quality=90&mode=crop",

  },
  {
    name: "Great Falls",
    state: "VA",
    url: "https://www.nps.gov/grfa/index.htm",
    image: "https://www.nps.gov/common/uploads/banner_image/ncr/homepage/1CB2262D-BE64-E710-06C03F8E85060371.jpg",
  },
    ];

    return (
    <div className = "feed">
      {data.map((location) => (
        <Post name = {location.name} image = {location.image} />
      ))}
    </div>
  )
}

export default Feed
