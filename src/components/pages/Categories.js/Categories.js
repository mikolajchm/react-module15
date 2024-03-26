import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { Card, ListGroup } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";


const Categories = () => {
    const categories = useSelector(getAllCategories);
    
    return (
        <section>
            <h1>Categories</h1>
            <ListGroup className="mt-5">
                {categories.map((category, index) => (
                    <ListGroup.Item key={index}>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </section>
    )
}
export default Categories;