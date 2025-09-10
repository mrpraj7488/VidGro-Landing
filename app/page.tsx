export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 gradient-text">
            VidGro - Grow Your Video Content
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your video content strategy with VidGro. Boost engagement, increase views, and grow your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hover px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold text-lg">
              Get Started Free
            </button>
            <button className="btn-hover px-8 py-4 bg-white dark:bg-gray-800 text-primary-500 rounded-lg font-semibold text-lg border-2 border-primary-500">
              Watch Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}