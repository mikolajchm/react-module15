import React from 'react';
import { getAllPosts } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const Home = () => {
    const posts = useSelector(state => getAllPosts(state));
    
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {posts.map(post => (
                <Col key={post.id}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title className="mb-3">{post.title}</Card.Title>
                            <Card.Subtitle className="mb-2">Author: {post.author}</Card.Subtitle>
                            <Card.Subtitle className="mb-2">Published: {post.publishedDate}</Card.Subtitle>
                            <Card.Text>{post.shortDescription}</Card.Text>
                            <Button href="#">Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Home;