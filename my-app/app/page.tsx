import Rain from './components/Rain';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden flex items-center justify-center">
      <Rain />

      <div className="relative z-10">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
              HookHub
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-12">
              Publish and discover Claude Code hooks
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Browse Hooks
              </button>
              <button className="bg-blue-600/20 text-cyan-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600/30 transition-colors border border-blue-400/30">
                Publish Hook
              </button>
            </div>

            <div className="text-slate-400 text-sm">
              Built with Claude Code
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="absolute bottom-0 w-full">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-cyan-400 transition-colors">Docs</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
              <span>&copy; 2025 HookHub</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
