import React from 'react'
import './UsersList.css'

export const UsersList= ({user,changeUsers})=> {

  const {street,suit,city,zipcode,geo:{lat,lng}}=user.address
      const {name:cName, catchPhrase: cType , bs}=user.company
      // console.log(cName, cType , bs);
      const removeUser = (uId)=> {
        // alert(`remove user is ${uId}`)
        changeUsers(uId)
      }
      return (
          <div className="user-container"  >
            <div className="header-part">
            <h2>{user.name}</h2>
            <button onClick={()=>removeUser(user.id)}>Delete </button>
            </div>
            <div className="user-card">
            <div className="card-labels">
              <p>Username :</p>
              <p>email : </p>
              <p>Website : </p>
              <p>Company : </p>
            </div>
            <div className="card-values">
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.website}</p>
            <p>{cName}</p>
            </div>
            </div>
          </div>

  )
}
