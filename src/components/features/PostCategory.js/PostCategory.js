import { useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom"
import { getPostByCategory } from "../../../redux/postsRedux";
import { Button, Card, Col, Row } from "react-bootstrap";
import { dateToStr } from "../../../utils/dateToStr";
import { getPostCategory } from "../../../redux/categoriesRedux";

const PostCategory = () => {
    const { category } = useParams();
    
    const categoryData = useSelector(state => getPostByCategory(state, category));
    const postCategoryData = useSelector(state => getPostCategory(state, category));
    if(!categoryData) return <Navigate to='/'/>
    if(!postCategoryData) return <Navigate to='*'/>

   
    
    return (
        <Row>
        <Col className="p-2">
          <h1>Category: {category}</h1>
        </Col>
      <Row className="my-3 px-3">
        
          {categoryData.map((post) => (
            <Col key={post.id} className="col-lg-4 p-2">
              <Card>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className="mb-2">
                    <strong>Author:</strong> {post.author}
                  </Card.Text>
                  <Card.Text className="mb-2">
                    <strong>Published:</strong> {dateToStr(new Date(post.publishedDate))}
                  </Card.Text>
                  <Card.Text className="mb-2">
                    <strong>Category:</strong> {post.category}
                  </Card.Text>
                  <Card.Text>{post.shortDescription}</Card.Text>
                  <Link to={`/post/${post.id}`}>
                    <Button>Read more</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>   
    </Row>
  );
 
}
export default PostCategory;