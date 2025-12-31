"use client";
import { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  slug: string;
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
         title: <h2 className="text-2xl font-bold" >{a.title}</h2>
          slug: <p className="text-lg">{a.slug}</p>
          description: <p className="text-lg">{a.description}</p>
          content: <p className="text-lg">{a.content}</p><br />
          thumbnail: <img src={a.thumbnail} alt="Thumbnail" width={150} /><br />
          graphic: <img src={a.graphic} alt="Graphic" width={150} /><br />
        </div>
      ))}
    </div>
  );
}
