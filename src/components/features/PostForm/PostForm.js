import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button } from 'react-bootstrap'; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.module.css';
import { useForm } from "react-hook-form";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { useSelector } from 'react-redux/es/hooks/useSelector';



const PostForm = ({ action, actionText, ...props }) => {
    const categories = useSelector(getAllCategories)
    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    const [title, setTitle] = useState(props.title || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || ''); 
    const [category, setCategories] = useState(props.category || '');
    const [author, setAuthor] = useState(props.author || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [categoriesError, setCategoriesError] = useState(false);
    
    

    const handleSubmit = () => {
        setContentError(!content)
        setDateError(!publishedDate)
        setCategoriesError(!category)
        if(content && publishedDate && category) {
          action({ title, author, publishedDate, category, shortDescription, content });
        }
      };

    return (
        <Container style={{ marginLeft: '200px' }}>
        <Form onSubmit={validate(handleSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Title</Form.Label>
                    <Form.Control
                        {...register("title", { required: true, minLength: 3 })}
                        value={title}
                        style={{ width: '320px' }} 
                        onChange={e => setTitle(e.target.value)}
                        type="text" placeholder="Enter title"
                    />
                    {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="author">
             <Form.Label>Author</Form.Label>
                    <Form.Control
                        {...register("author", { required: true, minLength: 3 })}
                        style={{ width: '320px' }} 
                        placeholder="Enter author"
                        type="text" 
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                    {errors.author && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="publishedDate">
                <Form.Label>Published Date:</Form.Label>
                {" "}
                    <DatePicker
                     selected={publishedDate}
                     value={publishedDate}  
                     onChange={(date) => setPublishedDate(date)} 
                     className="form-control" 
                     placeholderText="Date" 
                     dateFormat='dd/MM/yyyy'
                    />   
                    {dateError && <small className="d-block form-text text-danger mt-2">DatePicker can't be empty</small>}   
            </Form.Group>
            <Form.Group className="mb-3" controlId="categories">
                <Form.Label>Categories:</Form.Label>
                    <Form.Select aria-label="Default select example"
                    {...register('categories', {required: true})}
                    style={{ width: '320px' }} 
                    as="textarea" 
                    value={category} 
                    onChange={e => setCategories(e.target.value)}
                    >       
                <option>Select category</option>
                    {categories.map((category, index) => (
                    <option key={index} value={category}>
                    {category}
                    </option>
                ))}
                </Form.Select>
                {categoriesError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="shortDescription">
             <Form.Label>Short Description:</Form.Label>
                    <Form.Control
                        {...register("shortDescription", { required: true, minLength: 20 })}
                        style={{ width: '700px' }} 
                        placeholder="Enter description"
                        aria-label="Short Description"
                        aria-describedby="shortDescription"
                        value={shortDescription}
                        onChange={e => setShortDescription(e.target.value)}
                    />
                    {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>
            <Form.Group controlId="content">
                <Form.Label>Main Content:</Form.Label>
                <ReactQuill theme="snow" style={{ width: '700px' }} 
                    placeholder="Enter content"
                    as="textarea" 
                    rows={5}  value={content} onChange={setContent} />
                    {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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