"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle2,
  MessageSquare,
  Clock,
  Sparkles
} from "lucide-react"

const services = [
  "Ghostwriting",
  "Editing & Proofreading",
  "Publishing & Distribution",
  "Book Cover & Design",
  "Book Promotion & Marketing",
  "E-Book & Audio Book Production"
]

const budgetRanges = [
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "$20,000+"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  })
  const [focusedField, setFocusedField] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const form = e.target
    const formData = new FormData(form)
    
    try {
      await fetch('https://formsubmit.co/info@amazonauthorpartners.com', {
        method: 'POST',
        body: formData
      })
      
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: ""
      })
      
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting the form. Please try again.')
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
    <Header/>
      {/* Animated Background Elements
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
      </div> */}

      {/* Hero Section */}
      <section className="relative py-30  pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Let&apos;s Bring Your <span className="bg-primary text-primary-foreground px-3 rounded-xl">Book</span> To Life
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We'd love to hear about your project. Fill out the form below or book a free 30-minute 
              consultation to discuss your vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Contact Info Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-6">Get In Touch</h3>
                
                <div className="space-y-4">
                  <motion.a
                    href="mailto:info@amazonauthorpartners.com"
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email Us</p>
                      <p className="text-foreground font-medium">info@amazonauthorpartners.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+17133224829"
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                      <p className="text-foreground font-medium">+1 305-765-7102</p>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="text-foreground font-medium">ST PETERSBURG, FL 33702</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Free 30-min consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Custom project planning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">No obligation quote</span>
                  </div>
                </div>
              </motion.div>

              {/* Live Chat CTA */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-foreground text-background rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-3">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  <h3 className="text-lg font-bold">Prefer Live Chat?</h3>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  Click the chat icon at the bottom right for instant support.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Available 24/7</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                {/* Form Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-foreground mb-2">Start Your Journey</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex flex-col items-center justify-center py-12"
                    >
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                      <p className="text-muted-foreground text-center">
                        We've received your message and will get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Hidden Fields for FormSubmit */}
                      <input type="hidden" name="_subject" value="New Contact Form Submission - Amazon Author Partners" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />
                      
                      {/* Name Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Full Name *
                        </label>
                        <motion.input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField("")}
                          className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all duration-300 text-foreground"
                          placeholder="John Doe"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </motion.div>

                      {/* Email & Phone Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.65 }}
                        >
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Email Address *
                          </label>
                          <motion.input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField("")}
                            className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all duration-300 text-foreground"
                            placeholder="john@example.com"
                            whileFocus={{ scale: 1.01 }}
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Phone Number
                          </label>
                          <motion.input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField("")}
                            className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all duration-300 text-foreground"
                            placeholder="+1 (555) 000-0000"
                            whileFocus={{ scale: 1.01 }}
                          />
                        </motion.div>
                      </div>

                      {/* Service & Budget Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.75 }}
                        >
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Select Service *
                          </label>
                          <motion.select
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("service")}
                            onBlur={() => setFocusedField("")}
                            className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all duration-300 text-foreground"
                            whileFocus={{ scale: 1.01 }}
                          >
                            <option value="">Choose a service...</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </motion.select>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Estimated Budget *
                          </label>
                          <motion.select
                            name="budget"
                            required
                            value={formData.budget}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("budget")}
                            onBlur={() => setFocusedField("")}
                            className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all duration-300 text-foreground"
                            whileFocus={{ scale: 1.01 }}
                          >
                            <option value="">Select budget range...</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>
                                {range}
                              </option>
                            ))}
                          </motion.select>
                        </motion.div>
                      </div>

                      {/* Message Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.85 }}
                      >
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Project Summary *
                        </label>
                        <motion.textarea
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField("")}
                          rows={5}
                          className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all duration-300 text-foreground resize-none"
                          placeholder="Tell us about your book project, goals, and any specific requirements..."
                          whileFocus={{ scale: 1.01 }}
                        />
                      </motion.div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-primary hover:bg-primary/90 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                      >
                        Get My Free Consultation
                        <Send className="w-5 h-5" />
                      </motion.button>

                      <p className="text-sm text-muted-foreground text-center">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Publishing Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of authors who have brought their stories to life with our help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-3 shadow-xl"
          >
            Schedule Free Consultation
            <Clock className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.section>
      <Footer/>
    </div>
  )
}