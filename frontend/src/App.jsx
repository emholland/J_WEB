import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/articles/")
      .then((res) => setArticles(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((a) => (
        <div key={a.id}>
          <h2>{a.title}</h2>
          <p>{a.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
