import { Hook } from "@/types/hook";

interface HookCardProps {
  hook: Hook;
}

export default function HookCard({ hook }: HookCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Code Quality": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Notifications": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Testing": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Git/Version Control": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "Security": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "Logging": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      "Custom Validation": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
      "Other/Utilities": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    };
    return colors[category] || colors["Other/Utilities"];
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col h-full border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between mb-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
            hook.category
          )}`}
        >
          {hook.category}
        </span>
        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{hook.stars}</span>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {hook.name}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
        {hook.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {hook.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            by {hook.author}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {formatDate(hook.lastUpdated)}
          </span>
        </div>

        <a
          href={hook.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 px-4 py-2 rounded-md transition-colors duration-200 font-medium text-sm"
        >
          View Repository →
        </a>
      </div>
    </div>
  );
}
