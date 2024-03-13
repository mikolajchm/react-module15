import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import initialState from '../../../redux/initialState'; 
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import styles from './Post.module.scss';
import { useDispatch } from 'react-redux'; 
import { removePost } from '../../../redux/postsRedux';

const Post = () =>  {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { id } = useParams(); 

    const handleRemove = e => {
        e.preventDefault();
        dispatch(removePost(post.id));
        navigate('/'); 
    }

    const post = initialState.posts.find(post => post.id === id);

    if (!post) navigate('/'); 

    return (
        <div>
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                    <h1>{post.title}</h1>
                    <p>Author: {post.author}</p>
                    <p>Published Date: {post.publishedDate}</p>
                    <p>{post.content}</p>
                </Col>
                <Col md={{ span: 4, offset: 3 }}>
                    <Link to={`/post/edit/${post.id}`}>
                        <Button variant="outline-success">Edit</Button>
                    </Link>
                    {' '}
                    <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
                    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className={styles.modalTitle}>Are you sure ?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className={styles.modalBody}>
                                <p>This operation will completely remove this post from the app.</p>
                                <p>Are you sure you want to do that ?</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                                <Button variant="danger" onClick={handleRemove}>Remove</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Post;