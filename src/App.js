import React, { useEffect, useState } from "react"
import './App.css';

const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div class = "container">

      <table id="users">
        <tr> 
          <th>id</th>
          <th>name </th>
          <th>email</th>
          <th>phone</th>
          <th>website</th>
        </tr>

        {users.map(user => (
          <tr>
            <td class = "id">{user.id}</td>
            <td class = "name">{user.name}</td>
            <td class = "email">{user.email}</td>
            <td class = "phone">{user.phone}</td>
            <td class = "website">{user.website}</td>
          </tr>  
        ))}
      </table>

      <p>
      Chupa chups dragée chocolate bar icing jelly-o gingerbread brownie. Sweet gummies soufflé jujubes pudding macaroon liquorice donut. Bear claw pastry macaroon cupcake fruitcake. Candy canes candy canes gingerbread apple pie sugar plum caramels tart. Shortbread tart tart sweet roll apple pie. Tart cake wafer marshmallow tootsie roll lemon drops candy canes danish jelly. Sesame snaps dragée halvah chocolate sweet roll chocolate cake. Chupa chups topping powder biscuit gummi bears biscuit oat cake. Sesame snaps topping sweet roll donut cookie candy pastry shortbread sweet roll. Pudding tart fruitcake chocolate chocolate bar cookie topping cake powder. Donut cotton candy caramels tart croissant chocolate cake topping caramels. Danish jujubes dragée donut jelly-o brownie. Topping cake lemon drops carrot cake marzipan toffee powder lemon drops. Bonbon icing pastry fruitcake dragée cake brownie cupcake.
      </p>

      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
     
  
    </div>
  )
}

export default UsingFetch
