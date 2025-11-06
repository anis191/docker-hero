// components/BlogSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import ArticleCard from '../TechArticles/ArticleCard';

export default function BlogSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDockerArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://dev.to/api/articles?tag=docker&per_page=3'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching Docker articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDockerArticles();
  }, []);

  if (loading) {
    return (
      <section className="px-6 py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-2">
              <span className="text-slate-900">Latest</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-500">Docker</span> <span className='text-slate-900'>Articles</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Stay updated with the latest Docker content from the community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
                <div className="h-44 bg-slate-200 w-full"></div>
                <div className="p-4 sm:p-5">
                  <div className="h-6 bg-slate-200 rounded mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded mb-1"></div>
                  <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                  <div className="mt-4 flex gap-3">
                    <div className="h-6 bg-slate-200 rounded-full w-20"></div>
                    <div className="h-6 bg-slate-200 rounded-full w-16"></div>
                    <div className="h-6 bg-slate-200 rounded-full w-12"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Latest Docker Articles
          </h2>
          <p className="text-red-500 mb-4">Error loading articles: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm hover:opacity-95"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 md:px-24 py-6 border-t border-slate-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-2">
              <span className="text-slate-900">Latest</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-500">Docker</span> <span className='text-slate-900'>Articles</span>
            </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Stay updated with the latest Docker content from the community
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <Link
            to="/article"
            className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:opacity-95 transform transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            See More Articles
            <span className="transform transition group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}