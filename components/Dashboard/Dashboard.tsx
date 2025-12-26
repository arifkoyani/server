"use client";
import Link from "next/link";
import { FilePlus, Trash2, Edit, List } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Article Management Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Create Article Button */}
          <Link
            href="/create-articles"
            className="flex items-center justify-center gap-3 p-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors transform hover:scale-105"
          >
            <FilePlus className="w-8 h-8" />
            <span className="text-xl font-semibold">Create New Article</span>
          </Link>

          {/* Delete Article Button */}
          <Link
            href="/delete-articles"
            className="flex items-center justify-center gap-3 p-8 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg transition-colors transform hover:scale-105"
          >
            <Trash2 className="w-8 h-8" />
            <span className="text-xl font-semibold">Delete Article</span>
          </Link>

          {/* Update Article Button */}
          <Link
            href="/update-articles"
            className="flex items-center justify-center gap-3 p-8 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition-colors transform hover:scale-105"
          >
            <Edit className="w-8 h-8" />
            <span className="text-xl font-semibold">Update Article</span>
          </Link>

          {/* Show All Articles Button */}
          <Link
            href="/get-articles"
            className="flex items-center justify-center gap-3 p-8 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg transition-colors transform hover:scale-105"
          >
            <List className="w-8 h-8" />
            <span className="text-xl font-semibold">Show All Articles</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

