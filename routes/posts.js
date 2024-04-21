import expres from "express";
const router = expres.Router()
import { getPosts,createPost } from "../controllers/posts.js";


router.get('/',getPosts)
router.post('/',createPost)


export default router