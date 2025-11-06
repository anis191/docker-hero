import { useState, useEffect, useRef, useCallback } from 'react';

const TAGS = ["docker", "linux", "devops", "kubernetes", "redis", "all"];
const PER_PAGE = 15;

export default function useTechArticles() {
  const [tag, setTag] = useState("docker");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  
  const abortRef = useRef(null);

  const buildApiUrl = useCallback((selectedTag, pageNum) => {
    if (selectedTag === "all") {
      return `https://dev.to/api/articles?per_page=${PER_PAGE}&page=${pageNum}`;
    }
    
    return `https://dev.to/api/articles?tag=${encodeURIComponent(selectedTag)}&per_page=${PER_PAGE}&page=${pageNum}`;
  }, []);

  const fetchArticles = useCallback(async (selectedTag = tag, pageNum = page) => {
    setLoading(true);
    setError(null);

    if (abortRef.current) {
      abortRef.current.abort();
    }
    
    abortRef.current = new AbortController();

    try {
      const url = buildApiUrl(selectedTag, pageNum);
      const res = await fetch(url, { 
        signal: abortRef.current.signal 
      });
      
      if (!res.ok) {
        throw new Error(`Failed to fetch articles: ${res.status}`);
      }
      
      const data = await res.json();

      setArticles(prev => pageNum === 1 ? data : [...prev, ...data]);
      
    } catch (err) {
      if (err.name === "AbortError") return; // Ignore abort errors
      console.error("Fetch articles error:", err);
      setError(err.message || "Unknown error occurred while fetching articles");
    } finally {
      setLoading(false);
    }
  }, [tag, page, buildApiUrl]);

  const changeTag = useCallback((newTag) => {
    setTag(newTag);
    setPage(1);
  }, []);

  const loadMore = useCallback(() => {
    setPage(prev => prev + 1);
  }, []);

  const refresh = useCallback(() => {
    setPage(1);
    fetchArticles(tag, 1);
  }, [tag, fetchArticles]);

  useEffect(() => {
    fetchArticles(tag, page);
    
    return () => {
      if (abortRef.current) {
        abortRef.current.abort();
      }
    };
  }, [tag, page, fetchArticles]);

  return {
    // State
    tag,
    tags: TAGS,
    articles,
    loading,
    error,
    page,
    hasMore: articles.length >= PER_PAGE,
    
    changeTag,
    loadMore,
    refresh,
    fetchArticles,
    
    setError,
  };
}