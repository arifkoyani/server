"use client";
import { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  graphic: string;
}

export default function GetArticles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch("/api/getArticles");
      const data = await res.json();
      if (res.ok) setArticles(data.data);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((a) => (
        <div key={a.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h2>{a.title}</h2>
          <p>{a.description}</p>
          <p>{a.content}</p>
          {a.thumbnail && <img src={a.thumbnail} alt="Thumbnail" width={150} />}
          {a.graphic && <img src={a.graphic} alt="Graphic" width={150} />}
        </div>
      ))}
    </div>
  );
}
