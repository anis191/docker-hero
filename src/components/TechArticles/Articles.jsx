import React from "react";
import useTechArticles from "../../hooks/fetchDockerArticle";
import Header from "./Header";
import ArticleGrid from "./ArticleGrid";
import ErrorMessage from "./ErrorMessage";
import ActionsFooter from "./ActionsFooter";
import AppFooter from "./AppFooter";

export default function TechArticlesDashboard() {
  const {
    tag,
    tags,
    articles,
    loading,
    error,
    changeTag,
    loadMore,
    refresh,
  } = useTechArticles();

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto mt-14">
        <Header
          tag={tag}
          onTagClick={changeTag}
          tags={tags}
        />

        <main>
          <ErrorMessage error={error} />
          
          <ArticleGrid articles={articles} />

          {/* Show article count */}
          <div className="text-center text-sm text-slate-500 mt-4">
            Showing {articles.length} articles
          </div>

          <ActionsFooter
            loading={loading}
            onRefresh={refresh}
            onLoadMore={loadMore}
          />

          <AppFooter />
        </main>
      </div>
    </div>
  );
}
