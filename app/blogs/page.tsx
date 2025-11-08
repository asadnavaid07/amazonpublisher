"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Lightbulb,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Tag,
  Mail
} from "lucide-react"
import { Card } from "@/components/ui/card"

const categories = [
  { name: "Craft & Writing", icon: BookOpen, color: "text-blue-500", count: 2 },
  { name: "Publishing Industry", icon: TrendingUp, color: "text-purple-500", count: 2 },
  { name: "Marketing & Promotion", icon: Users, color: "text-green-500", count: 2 },
  { name: "Author Branding", icon: Lightbulb, color: "text-orange-500", count: 2 }
]

const blogPosts = [
  {
    id: 1,
    title: "5 Ways to Overcome Writer's Block",
    excerpt: "Discover proven strategies to break through creative barriers and get your words flowing again. From changing your environment to using writing prompts, we cover techniques that work.",
    category: "Craft & Writing",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    author: "Sarah Mitchell",
    date: "Nov 5, 2025",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Self-Publishing vs Traditional Publishing",
    excerpt: "Making the right choice for your book journey. We break down the pros, cons, costs, and long-term implications of each publishing path to help you decide.",
    category: "Publishing Industry",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&h=400&fit=crop",
    author: "James Cooper",
    date: "Nov 3, 2025",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Building Your Author Platform Before Launch",
    excerpt: "Start marketing before you finish writing. Learn how to build an engaged audience, create anticipation, and ensure your book launch is a massive success from day one.",
    category: "Marketing & Promotion",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&h=400&fit=crop",
    author: "Emily Rodriguez",
    date: "Oct 30, 2025",
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "Designing an Author Website That Converts",
    excerpt: "Your website is your digital home base. Discover essential elements, design principles, and conversion strategies that turn visitors into readers and fans.",
    category: "Author Branding",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    author: "Michael Chen",
    date: "Oct 28, 2025",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "How to Outline a Memoir",
    excerpt: "Structure your life story with clarity and impact. Learn the framework that helps memoirists craft compelling narratives that resonate with readers and publishers alike.",
    category: "Craft & Writing",
    image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600&h=400&fit=crop",
    author: "Linda Thompson",
    date: "Oct 25, 2025",
    readTime: "10 min read"
  },
  {
    id: 6,
    title: "Understanding ISBNs and Print On Demand",
    excerpt: "Demystify the technical side of publishing. Everything you need to know about ISBN registration, print-on-demand services, and distribution channels.",
    category: "Publishing Industry",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&h=400&fit=crop",
    author: "David Kumar",
    date: "Oct 22, 2025",
    readTime: "6 min read"
  },
  {
    id: 7,
    title: "How to Get Book Reviews That Drive Sales",
    excerpt: "Reviews are social proof that sells books. Learn where to find reviewers, how to approach them professionally, and strategies to generate authentic testimonials.",
    category: "Marketing & Promotion",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
    author: "Rachel Green",
    date: "Oct 20, 2025",
    readTime: "9 min read"
  },
  {
    id: 8,
    title: "Using Social Media for Book Launch Success",
    excerpt: "Master the art of social media marketing for authors. Platform-specific strategies, content ideas, and engagement techniques that build buzz and drive pre-orders.",
    category: "Author Branding",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    author: "Alex Turner",
    date: "Oct 18, 2025",
    readTime: "11 min read"
  }
]

const recentPosts = blogPosts.slice(0, 4)

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [email, setEmail] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleSubscribe = () => {
    if (email) {
      alert("Thank you for subscribing! Check your email for the FREE Chapter Planning Kit.")
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-background">
        <Header />
      {/* Hero Section */}

      <section className="relative py-30 bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
            >
              <BookOpen className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8">
              Author <span className="bg-primary text-primary-foreground px-3 pb-1 rounded-xl">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Welcome to our Author Insights blog, a place where writers learn the craft, discover 
              publishing best practices, explore marketing strategies, and get inspired by author success stories.
            </p>

            {/* Subscribe CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto shadow-lg"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Stay Updated</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Subscribe to our mailing list and get exclusive author content + a <span className="text-primary font-semibold">FREE Chapter Planning Kit</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all duration-300 text-foreground"
                />
                <motion.button
                  onClick={handleSubscribe}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Search */}
              <Card className="p-4 bg-card border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-all text-foreground"
                  />
                </div>
              </Card>

              {/* Categories */}
              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-primary" />
                  Categories
                </h3>
                <div className="space-y-2">
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedCategory("All")}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === "All" 
                        ? "bg-primary/10 text-primary font-semibold" 
                        : "text-muted-foreground hover:bg-primary/5"
                    }`}
                  >
                    All Articles ({blogPosts.length})
                  </motion.button>
                  {categories.map((category) => (
                    <motion.button
                      key={category.name}
                      whileHover={{ x: 5 }}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all flex items-center justify-between ${
                        selectedCategory === category.name 
                          ? "bg-primary/10 text-primary font-semibold" 
                          : "text-muted-foreground hover:bg-primary/5"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <category.icon className={`w-4 h-4 ${category.color}`} />
                        {category.name}
                      </span>
                      <span className="text-xs">({category.count})</span>
                    </motion.button>
                  ))}
                </div>
              </Card>

              {/* Recent Posts */}
              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      whileHover={{ x: 5 }}
                      className="cursor-pointer group"
                    >
                      <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.aside>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedCategory === "All" ? "All Articles" : selectedCategory}
                </h2>
                <p className="text-muted-foreground">
                  {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group overflow-hidden border-border bg-card hover:shadow-2xl transition-all duration-500 h-full flex flex-col cursor-pointer">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>

                        {/* Read More Button */}
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="mt-4 text-primary font-semibold flex items-center gap-2 group/btn"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-bold text-foreground mb-2">No articles found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Publish Your Book?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's turn your manuscript into a bestseller. Start your publishing journey today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-3 shadow-xl"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.section>
        <Footer />
    </div>
  )
}