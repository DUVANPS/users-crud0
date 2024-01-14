
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'


function App() {

  const [userUpdate, setUserUpdate] = useState()
  const [isFormClose, setIsFormClose] = useState(true)
  
const baseUrl = 'https://users-crud.academlo.tech'
const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)

useEffect(() => {
getUsers()
}, [])


const handleOpenForm = () => {
  setIsFormClose(false)

}

  return (
    <div>
      <div className='container__btnCrud'>
        <h1 className='title__crud'>User Crud</h1>
      <button className='title__btnOpen' onClick={handleOpenForm}>Open Form</button>
      </div>
      
      <div className={`form__container ${isFormClose && 'form__close'}`}>
      <FormUser
        createUser={createUser}
        userUpdate={userUpdate}
        updateUser={updateUser}
        setUserUpdate={setUserUpdate}
        setIsFormClose={setIsFormClose}
        />
      </div>
      
      
      <div className='container__general'>
        
        {
          users?.map(user => (
            <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUserUpdate={setUserUpdate}
            setIsFormClose={setIsFormClose}
            />
          ))
        }
      </div>
    
    </div>
  )
}

export default App
