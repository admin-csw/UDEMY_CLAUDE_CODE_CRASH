"use client";

import { useState, useMemo } from "react";
import { Hook } from "@/types/hook";
import HookCard from "./HookCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

interface HookGridProps {
  hooks: Hook[];
}

export default function HookGrid({ hooks }: HookGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories from hooks
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(hooks.map((hook) => hook.category))
    );
    return uniqueCategories.sort();
  }, [hooks]);

  // Filter hooks based on search query and category
  const filteredHooks = useMemo(() => {
    return hooks.filter((hook) => {
      // Category filter
      if (selectedCategory && hook.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          hook.name.toLowerCase().includes(query) ||
          hook.description.toLowerCase().includes(query) ||
          hook.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          hook.category.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [hooks, searchQuery, selectedCategory]);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          HookHub
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover and browse community-created Claude Code hooks to automate
          your development workflow
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-8 space-y-6">
        <div className="flex justify-center">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categories={categories}
        />
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {filteredHooks.length} of {hooks.length} hooks
          {selectedCategory && (
            <span className="font-medium">
              {" "}
              in {selectedCategory}
            </span>
          )}
          {searchQuery && (
            <span className="font-medium">
              {" "}
              matching &quot;{searchQuery}&quot;
            </span>
          )}
        </p>
      </div>

      {/* Grid */}
      {filteredHooks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredHooks.map((hook) => (
            <HookCard key={hook.id} hook={hook} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
            No hooks found
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter criteria
          </p>
          {(searchQuery || selectedCategory) && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory(null);
              }}
              className="mt-4 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
