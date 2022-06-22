const tasksForm = document.getElementById('form-add-task');
const usersControl = document.getElementById('users-control');

const loadUsers = async () => {
    const users = await getUsers()

    usersControl.innerHTML = '';

    users.forEach(us => {
        const optionName = document.createElement('option')
        const txtName = document.createTextNode(us.name)
       
        optionName.appendChild(txtName)
        
        usersControl.appendChild(optionName)
    })
    
}

loadUsers()

const categoryControl = document.getElementById('category-control');

const loadCategories = async () => {
    const users = await getCategories()
    
    categoryControl.innerHTML = '';

    users.forEach(cat => {
        const optionName = document.createElement('option')
        const txtName = document.createTextNode(cat.name)
       
        optionName.appendChild(txtName)
        
        categoryControl.appendChild(optionName)
    })
    
}

loadCategories()

/**
 * 1 - Obtener por id el desplegable (select)
2 - ir a buscar los usuarios a la api
3 - Pasarlos por el mapToArray para tenerlos en un array de objetos
5 - Iterar los usuarios creando options (<option>) con su value y su texto como en el ejemplo que dejamos comentado en el html
6 - Agregarlos al select con appendChild. */
