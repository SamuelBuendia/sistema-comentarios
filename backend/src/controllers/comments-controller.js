import { 
    getAll, 
    getById,
    save, 
    update,
    deleteById
} from '../daos/comments-dao.js'


async function getAllCommentsController(req, res) {
    const data = await getAll()
    res.json(data)
}

async function getCommentByIdController(req, res) {
    const data = req.params.id
    const response = await getById(data)
    res.status(201).json(response)
}

async function postCommentController(req, res) {
    const data = req.body
    const response = await save(data)
    res.status(201).json(response)
}


async function putCommentController(req, res) {
    const id = req.params.id
    const data = req.body
    const dataUpdate = await update(id, data)
    res.status(201).json(dataUpdate)
}

async function deleteCommentController(req, res) {
    const data = req.params.id
    const response = await deleteById(data)
    res.status(201).json(response)
}

export { 
    getAllCommentsController, 
    getCommentByIdController,
    postCommentController,
    putCommentController,
    deleteCommentController
}