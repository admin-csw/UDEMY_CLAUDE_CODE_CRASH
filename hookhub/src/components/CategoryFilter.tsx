import { HookCategory } from "@/types/hook";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  categories: string[];
}

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  categories,
}: CategoryFilterProps) {
  const getCategoryColor = (category: string, isSelected: boolean) => {
    if (!isSelected) {
      return "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700";
    }

    const colors: Record<string, string> = {
      "Code Quality": "bg-blue-600 text-white border-blue-600",
      "Notifications": "bg-purple-600 text-white border-purple-600",
      "Testing": "bg-green-600 text-white border-green-600",
      "Git/Version Control": "bg-orange-600 text-white border-orange-600",
      "Security": "bg-red-600 text-white border-red-600",
      "Logging": "bg-yellow-600 text-white border-yellow-600",
      "Custom Validation": "bg-pink-600 text-white border-pink-600",
      "Other/Utilities": "bg-gray-600 text-white border-gray-600",
    };
    return colors[category] || colors["Other/Utilities"];
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-3">
        <svg
          className="w-5 h-5 text-gray-600 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Filter by Category:
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            selectedCategory === null
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
        >
          All Categories
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${getCategoryColor(
              category,
              selectedCategory === category
            )}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
