import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error('Failed to fetch articles', err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      {articles.map(article => (
        <div key={article.id} className="mb-6 border p-4 rounded">
          <h2 className="text-xl font-semibold">{article.title}</h2>
          <p className="text-sm text-gray-500 mb-2">{new Date(article.created_at).toLocaleString()}</p>
          <p>{article.content}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag.id} className="text-xs bg-gray-200 px-2 py-1 rounded">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


export default App;
