const addCategory = async (category) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(category)
    }
    
    fetch('https://todolist-58dc6-default-rtdb.firebaseio.com/categories.json', options)
    
}

const getCategories = async () => {
  const response = await fetch('https://todolist-58dc6-default-rtdb.firebaseio.com/categories.json')
  const data = await response.json();  

  return mapToArray(data)
} 