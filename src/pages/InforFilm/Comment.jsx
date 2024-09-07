import React, { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

const FbComment = () => {
  const fbRef = useRef(null)
  const path = useLocation().pathname
  useEffect(() => {
    // Check if FB object is available and parse the FB Comments plugin
    if (window.FB) {
      window.FB.XFBML.parse(fbRef.current)
    }
  }, [path]) // Re-render when the route changes

  const commentUrl = `nicephim.com/${path.split("/")[2]}`
  return (
    <div ref={fbRef} className='bg-white my-10'>
      <div
        className='fb-comments'
        data-href={commentUrl}
        data-width='100%'
        data-numposts='5'
        style={{ width: "100%" }}
      />
    </div>
  )
}

export default FbComment
