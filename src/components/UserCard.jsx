

const UserCard = ( {user, deleteUser, setUserUpdate, setIsFormClose} ) => {
    const handleDelete = ()  => {
        deleteUser(user.id)

    }
    const handleEdit = () => {
        setUserUpdate(user)
        setIsFormClose(false)
    }
return (
<article>
    <div  className="container__card">

    
    
    <h2 className="title__name">{user.first_name} {user.last_name}</h2>
    
    <ul className="container__data">
        <li><span>Email</span><span>{user.email}</span></li>
        <li className="container__bir"><span>Birthday</span><span>{user.birthday}</span></li>
    </ul>
    
    <footer>
        <button className="container__dele" onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button className="container__edi" onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
    </footer>
    </div>
    </article>
)
}

export default UserCard