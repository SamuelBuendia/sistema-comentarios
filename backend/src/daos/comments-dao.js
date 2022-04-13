import Comments from '../models/comments-model.js'

let coleccion = Comments

const getAll = async () => {
    try {
        const content = await coleccion.find({}).lean()
        return content
    } catch(err) {
        return {msg: `Error: ${err}`}
    }
}

const getById = async (id) => {
    try {
        const content = await coleccion.find({id: id}).lean()
        return content
    } catch(err) {
        return {msg: `Error: ${err}`}
    }
}

const save = async (obj) => {
    try {

        let ultimoID = 0;
        let estaVacio = await coleccion.find({});

        if (estaVacio != '') {
            const ultimo = await coleccion.find().sort({'_id':-1}).limit(1);
            ultimoID = ultimo[0].id;
        }
        
        await coleccion.create({ id: ultimoID + 1, ...obj })
        return { msg: "Mensaje guardado con exito" }
        
    } catch (err) {
        return {msg: `Error: ${err}`}
    }
}

const update = async (id, obj) => {
    try {
        await coleccion.findOneAndUpdate({id: id},{...obj})
        return { msg: 'Mensaje actualizado con exito' }
    } catch (err) {
        return {msg: `Error: ${err}`}
    }
    
}

const deleteById = async (id) => {
    try {
        await coleccion.deleteOne({id: id})
        return { msg: 'Mensaje eliminado con exito' }
    } catch (err) {
        return {msg: `Error: ${err}`}
    }

}

export {
    getAll,
    getById,
    save,
    update,
    deleteById,
} 