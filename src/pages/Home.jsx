import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/sign-in">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
