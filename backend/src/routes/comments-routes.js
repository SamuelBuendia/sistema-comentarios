import { Router } from 'express';

const commentRouter = Router()

import {
    getAllCommentsController,
    getCommentByIdController,
    postCommentController,
    putCommentController,
    deleteCommentController,
} from '../controllers/comments-controller.js'

commentRouter.get('/', getAllCommentsController)
commentRouter.get('/:id', getCommentByIdController)
commentRouter.post('/', postCommentController)
commentRouter.put('/:id', putCommentController)
commentRouter.delete('/:id', deleteCommentController)

export default commentRouter