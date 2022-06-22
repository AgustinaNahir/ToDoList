const formCategory = document.getElementById('form-add-category');

const addCategory = async (e) => {
    e.preventDefault()
    const form = e.target

    const category = {
        name: form.name.value 
    }

    await addCategory(category)
    loadCategories()
    
}

formCategory.addEventListener('submit', addCategory)

