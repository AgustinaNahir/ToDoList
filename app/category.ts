const formCategory = document.getElementById('form-add-category');
const tableCategories = document.getElementById('table-categories');

const createCategory = async (e) => {
    e.preventDefault()
    const form = e.target

    const category = {
        name: form.name.value 
    }

    await addCategory(category)
    loadCategories()
    
}

formCategory.addEventListener('submit', createCategory)

// 1 - Crear el formulario para agregar categoras.
    // Los controles (input, textarea, select) tienen que tener un name.

// 2 - Quedar a la escucha de un evento submit

// 3 - Crear una funcion que se invoque al producirse el evento.

// 4 - Armar un objeto con los datos del formulario y enviar a una funcion que lo guarde en la DB

// 5 - Armar una funcion que tome los datos del formulario y realizar la request a la DB

// 6 - La respuesta de la base de datos deberiamos tratarla de alguna manera. Vamos a utilizar 
//     la funcin de ayuda que convierte la respuesta en un array.


const loadCategories = async () => {
    const categories = await getCategories()

    const tbody = tableCategories.querySelector('tbody')

    tbody.innerHTML = '';

    categories.forEach(cat => {
        const tr = document.createElement('tr')
        const tdId = document.createElement('td')
        const tdName = document.createElement('td')
        const txtId = document.createTextNode(cat.id)
        const txtName = document.createTextNode(cat.name);

        tr.appendChild(tdId)
        tr.appendChild(tdName)
        tdId.appendChild(txtId)
        tdName.appendChild(txtName)

        tbody.appendChild(tr)
    })
    
}

loadCategories()


