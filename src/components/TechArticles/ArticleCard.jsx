export default function ArticleCard({ article }) {
  const handleImageError = (e) => {
    e.currentTarget.src = `https://picsum.photos/seed/${article.id}/800/400`;
  };

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
      <div className="h-44 bg-slate-100 w-full flex items-center justify-center overflow-hidden">
        <img
          src={article.cover_image || article.social_image || `https://picsum.photos/seed/${article.id}/800/400`}
          alt={article.title}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-semibold text-slate-900 line-clamp-2">{article.title}</h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-3">{article.description}</p>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 rounded-full">
              {article.readable_publish_date}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 rounded-full">
              ⭐ {article.positive_reactions_count}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 rounded-full">
              ⏱ {article.reading_time_minutes}m
            </span>
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="text-sky-600 hover:underline ml-3"
          >
            Read
          </a>
        </div>
      </div>
    </article>
  );
}


