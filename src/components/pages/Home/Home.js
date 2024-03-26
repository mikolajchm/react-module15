import React from 'react';
import { getAllPosts } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const Home = () => {
    const posts = useSelector(state => getAllPosts(state));
    
    return (
        <div>
           <Row className="align-items-center justify-content-between mb-4">
                <Col>
                    <h1>AllPosts</h1>
                </Col>
                <Col xs="auto">
                    <Link to={`/post/add`}>
                        <Button variant="outline-info">Add post</Button>
                    </Link>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4">
                {posts.map(post => (
                    <Col key={post.id}>
                        <Card style={{ width: '25rem' }}>
                            <Card.Body>
                                <Card.Title className="mb-3">{post.title}</Card.Title>
                                <Card.Subtitle className="mb-2">Author: {post.author}</Card.Subtitle>
                                <Card.Subtitle className="mb-2">Published: {post.publishedDate.toLocaleString()}</Card.Subtitle>
                                <Card.Subtitle className="mb-2">Category: {post.category}</Card.Subtitle>
                                <Card.Text>{post.shortDescription}</Card.Text>
                                <Link to={`/post/${post.id}`}>
                                    <Button variant="primary">Read more</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Home;