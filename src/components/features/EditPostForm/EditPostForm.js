import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { editPost, getPostById } from '../../../redux/postsRedux';
import { Navigate, useNavigate, useParams } from "react-router-dom"
import PostForm from '../PostForm/PostForm';

const EditPostForm = () => {
    const { id } = useParams();
    const post = useSelector((state) => getPostById(state, id));

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = post => {
        dispatch(editPost({...post, id}));
        navigate('/');
    };

    if(!post) return <Navigate to='/'/>
    
    return (
        <PostForm
        postId = {id}
        action={handleSubmit}
        actionText='EditPost'
        title={post.title}
        publishedDate={post.publishedDate}
        category={post.category}
        shortDescription={post.shortDescription}
        content={post.content}
        author={post.author}
    />

    )
};

export default EditPostForm;
