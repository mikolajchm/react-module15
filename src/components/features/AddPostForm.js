import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { Form, Button,  Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({ title, shortDescription, content, publishedDate, author }));
        setTitle('');
        setShortDescription('');
        setContent('');
        setPublishedDate('');
        setAuthor('');
        navigate('/');
    };

    return (
        <Container style={{ marginLeft: '200px' }}>
            <Form  onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={title} 
                        style={{ width: '300px' }} 
                        onChange={e => setTitle(e.target.value)} 
                        placeholder="Enter title" />
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control 
                        style={{ width: '300px' }} 
                        placeholder="Enter Author"
                        type="text" 
                        value={author} 
                        onChange={e => setAuthor(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="publishedDate">
                    <Form.Label>Published Date:</Form.Label>
                    <Form.Control 
                        style={{ width: '300px' }} 
                        type="date" 
                        value={publishedDate} 
                        onChange={e => setPublishedDate(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="shortDescription">
                    <Form.Label>Short Description:</Form.Label>
                        <Form.Control
                            style={{ width: '700px' }} 
                            placeholder="Enter description"
                            aria-label="Short Description"
                            aria-describedby="shortDescription"
                            value={shortDescription}
                            onChange={e => setShortDescription(e.target.value)}
                        />
                </Form.Group>
                <Form.Group controlId="content">
                    <Form.Label>Main Content:</Form.Label>
                    <Form.Control 
                        style={{ width: '700px' }} 
                        placeholder="Enter content"
                        as="textarea" 
                        rows={5} 
                        value={content} 
                        onChange={e => setContent(e.target.value)} />
                </Form.Group>
                <div style={{ marginTop: '20px' }}></div>
                <Form onSubmit={handleSubmit}>
                    <Button variant="primary" type="submit">Add post</Button>
                </Form>
            </Form>
        </Container>
    );
};

export default AddPostForm;