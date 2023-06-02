import { useState, useEffect } from 'react';
import { getUsers, deleteUsers } from './apiMethod';
function App() {
  const [userList, setUserList] = useState([]);
  useEffect( () => {
    async function fetchData(){
      const arr_user = await getUsers();
      setUserList([...userList, ...arr_user]);
    }
    fetchData();
  },[getUsers]);

  const handleDelete = (name) => {
    console.log('parameter' , name);
      userList.filter(user => user.first_name !== name);
  }

  return (
      <div>
          <h1>Users from API:</h1>
            <ul>
              {userList.map((user, index) => {
                return (
                  <li key={index}>
                      {user.first_name} {user.last_name} <button onClick={handleDelete(user.first_name)}>delete</button>
                  </li>
                )
              })}
            </ul>
      </div>
  );
}

export default App;
