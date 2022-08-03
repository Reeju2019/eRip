import React from 'react'

const Profile: React.FunctionComponent = () => {
  return (
    <div>
      <h1>{window.localStorage.getItem('phone')}</h1>
    </div>
  )
}

export default Profile
