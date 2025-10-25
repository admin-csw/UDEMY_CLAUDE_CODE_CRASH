import HookGrid from "@/components/HookGrid";
import hooks from "@/data/hooks.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <HookGrid hooks={hooks} />
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            HookHub - Discover Claude Code Hooks |{" "}
            <a
              href="https://docs.claude.com/en/docs/claude-code/hooks-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Documentation
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
