import React, { useEffect, useReducer } from "react";

// 1. Manage state for NewsData specifically
const newsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START": return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS": return { ...state, loading: false, results: action.payload };
    case "FETCH_ERROR": return { ...state, loading: false, error: action.payload };
    default: return state;
  }
};

export default function NewsDataFeed() {
  const [state, dispatch] = useReducer(newsReducer, {
    results: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const API_KEY = "pub_d38226078f954647a39d97e7be0d4b56"; 
    const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en`;

    dispatch({ type: "FETCH_START" });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          dispatch({ type: "FETCH_SUCCESS", payload: data.results });
        } else {
          throw new Error(data.results.message || "API Error");
        }
      })
      .catch((err) => dispatch({ type: "FETCH_ERROR", payload: err.message }));
  }, []);

  if (state.loading) return <h2>Scanning the globe for news...</h2>;
  if (state.error) return <p style={{ color: "red" }}>Error: {state.error}</p>;

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Latest News (NewsData.io)</h1>
      <div style={{ display: 'grid', gap: '20px' }}>
        {state.results.map((article) => (
          <article key={article.article_id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            {article.image_url && (
              <img src={article.image_url} alt="thumbnail" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            )}
            <h3>{article.title}</h3>
            <p>{article.description?.substring(0, 150)}...</p>
            <a href={article.link} target="_blank" rel="noreferrer">Read Full Article</a>
          </article>
        ))}
      </div>
    </div>
  );
}