import BookCarousel from "./client-side/bookcarousel"

// --- Data Definition (Server Side) ---
const books = [
  {
    id: 1,
    title: "The Midnight Chronicles",
    author: "Sarah Anderson",
    description: "An epic fantasy adventure spanning three kingdoms and one unforgettable destiny.",
    cover: "/cover10.webp",
    genre: "Fantasy",
  },
  {
    id: 2,
    title: "Echoes of Tomorrow",
    author: "James Mitchell",
    description: "A gripping sci‑fi thriller about time travel, paradoxes, and the cost of changing fate.",
    cover: "/book-special.webp",
    genre: "Science Fiction",
  },
  {
    id: 3,
    title: "The Last Harbor",
    author: "Emma Richardson",
    description: "A poignant mystery novel set in a coastal town with secrets buried for decades.",
    cover: "/cover12.webp",
    genre: "Mystery",
  },
  {
    id: 4,
    title: "Whispers in the Garden",
    author: "Michael Chen",
    description: "A romantic drama exploring love, loss, and the beauty of second chances.",
    cover: "/cover13.webp",
    genre: "Romance",
  },
  {
    id: 5,
    title: "The Forgotten Code",
    author: "Lisa Thompson",
    description: "A thrilling adventure about decoding ancient mysteries and uncovering hidden truths.",
    cover: "/cover8.webp",
    genre: "Adventure",
  },
]

export default function LampSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50 py-24 overflow-hidden">
      
      {/* --- STATIC HEADING SECTION --- */}
      {/* We use standard CSS classes from globals.css instead of styled-jsx */}
      <div className="relative text-center mb-20 px-4 animate-fade-in-up">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-yellow-600 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            Featured Published Works
          </span>
        </h2>
        
        {/* Animated divider */}
        <div className="h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-4 mx-auto max-w-xs animate-scale-x-in" />
        
        <p className="mt-6 text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto font-medium leading-relaxed">
          Discover the exceptional books we've brought to life. Each one a testament to our commitment to quality publishing.
        </p>
      </div>

      {/* --- CLIENT INTERACTIVE SECTION --- */}
      <BookCarousel books={books} />
      
    </section>
  )
}