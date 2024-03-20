import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button } from 'react-bootstrap'; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.module.css';


const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [author, setAuthor] = useState(props.author || '');
    

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
      };

    return (
        <Container style={{ marginLeft: '200px' }}>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
                <Form.Label>Title:</Form.Label>
                <Form.Control
                    type="text" 
                    value={title} 
                    style={{ width: '300px' }} 
                    onChange={e => setTitle(e.target.value)} 
                    placeholder="Enter title">
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="author">
                <Form.Label>Author:</Form.Label>
                <Form.Control 
                    style={{ width: '300px' }} 
                    placeholder="Enter Author"
                    type="text" 
                    value={author} 
                    onChange={e => setAuthor(e.target.value)}>
                </Form.Control>      
            </Form.Group>
            <Form.Group controlId="publishedDate">
                <Form.Label>Published Date:</Form.Label>
                    <ReactDatePicker
                     selected={publishedDate}
                     value={publishedDate} 
                     onChange={(date) => setPublishedDate(date)} 
                     className="form-control" 
                     placeholderText="Date" 
                     dateFormat='dd/mm/yyyy'
                    />      
            </Form.Group>
            <Form.Group controlId="shortDescription">
                <Form.Label>Short Description:</Form.Label>
                    <Form.Control
                        style={{ width: '700px' }} 
                        placeholder="Enter description"
                        aria-label="Short Description"
                        aria-describedby="shortDescription"
                        value={shortDescription}
                        onChange={e => setShortDescription(e.target.value)}>
                    </Form.Control>
            </Form.Group>
            <Form.Group controlId="content">
                <Form.Label>Main Content:</Form.Label>
                <ReactQuill theme="snow" style={{ width: '700px' }} 
                    placeholder="Enter content"
                    as="textarea" 
                    rows={5}  value={content} onChange={setContent} />
            </Form.Group>
            <div style={{ marginTop: '20px' }}></div>
            <Button variant="primary" type="submit">{actionText}</Button>
        </Form>
    </Container>
    );
};

PostForm.propTypes = {
    action: PropTypes.string.isRequired,
    actionText: PropTypes.string.isRequired,
    title: PropTypes.string,
    shortDescription: PropTypes.string,
    content: PropTypes.string,
    publishedDate: PropTypes.string,
    author: PropTypes.string
};

export default PostForm;