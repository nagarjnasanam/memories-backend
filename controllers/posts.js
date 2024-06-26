import PostMessage from "../models/postMessge.js"
export const getPosts = async(req,res)=>{
    try {
        const allPost = await PostMessage.find()
        // return allPost
        res.status(200).json(allPost)
        
    } catch (error) {
        res.status(404).json({message:error.message})
        
    }
}

export const createPost = async (req,res)=>{
    const post = req.body
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message:error.message})
        
    }
}