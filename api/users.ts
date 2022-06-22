const addUser = async (users) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(users)
    }
    
    await fetch('https://todolist-58dc6-default-rtdb.firebaseio.com/users.json', options)
    
}

const getUsers = async () => {
  const response = await fetch('https://todolist-58dc6-default-rtdb.firebaseio.com/users.json')
  const data = await response.json();  

  return mapToArray(data)
} 