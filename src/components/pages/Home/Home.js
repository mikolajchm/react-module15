import { getAllPosts } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const Home = () => {
    const posts = useSelector(state => getAllPosts(state));
    
    return (
        <div>
            {posts.map(post => (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.author}</p>
                    <p>{post.publishedDate}</p>
                    <p>{post.shortDescription}</p>
                </article>
            ))}
        </div>
    );
}

export default Home;

