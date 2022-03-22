import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, i) => (
        <img key={i} src={`https://source.unsplash.com/300x300/?${i}`} alt={i} />
      ))}
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/teams">Teams</Link>
      </nav>
    </div>
  );
}

export default Home;
