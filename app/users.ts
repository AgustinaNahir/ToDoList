const formUsers = document.getElementById('form-add-users');
const tableUsers = document.getElementById('table-users');

const createUser = async (e) => {
    e.preventDefault()
    const formU = e.target

    const user = {
        name: formU.name.value, 
        email: formU.email.value,
        pass: formU.pass.value
    }

    await addUser(user)
    loadUsers()
    
}

formUsers.addEventListener('submit', createUser)


const loadUsers = async () => {
    const users = await getUsers()

    const tbody = tableUsers.querySelector('tbody')

    tbody.innerHTML = '';

    users.forEach(us => {
        const tr = document.createElement('tr')
        const tdName = document.createElement('td')
        const tdEmail = document.createElement('td')
        const txtName = document.createTextNode(us.name)
        const txtEmail = document.createTextNode(us.email)
        const tdPass = document.createElement('td')
        const textPass = document.createTextNode(us.pass);

        tr.appendChild(tdName)
        tr.appendChild(tdEmail)
        tr.appendChild(tdPass)
        tdName.appendChild(txtName)
        tdEmail.appendChild(txtEmail)
        tdPass.appendChild(textPass)
        

        tbody.appendChild(tr)
    })
    
}

loadUsers()



// 1 - Crear el formulario para agregar categoras.
    // Los controles (input, textarea, select) tienen que tener un name.

// 2 - Quedar a la escucha de un evento submit

// 3 - Crear una funcin que se invoque al producirse el evento.

// 4 - Armar un objeto con los datos del formulario y enviar a una funcion que lo guarde en la DB

// 5 - Armar una funcin que tome los datos del formulario y realizar la request a la DB

// 6 - La respuesta de la base de datos deberiamos tratarla de alguna manera. Vamos a utilizar 
//     la funcin de ayuda que convierte la respuesta en un array.