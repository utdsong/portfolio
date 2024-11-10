import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, Mail, Phone, Linkedin, Github, ChevronLeft, ChevronRight } from "lucide-react"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    { id: 1, name: "Tanya Beniquez", role: "Founder", company: "ETeach", text: "Mr. Utdam has been a huge asset to the development of my online course program. His ability to detect areas of improvement and suggest powerful solutions has dramatically improved our product, and I couldn't be happier for the collaboration." },    
    { id: 2, name: "Anna Spear", role: "Chief Academic Officer", company: "IDOL Academy", text: "The attention to detail in developing our Lectora course was outstanding. He was responsive, open to feedback, and quick to implement changes, all while maintaining a focus on achieving the desired learning outcomes. His dedication and hard work exceeded our expectations." },
    { id: 3, name: "Solomon Song", role: "Energy Consultant", company: "Sevea", text: "Utdam has a gift for making complex topics crystal clear. His thoughtful and patient approach helped me understand concepts I'd struggled with for years. Beyond his technical expertise, it's his genuine desire to see others succeed that sets him apart." },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-light text-dark">
      {/* Top Banner */}
      <div className="bg-dark text-light text-center py-2">
        <p className="text-sm">✨ Welcome to My Instructional Design and E-learning Development Portfolio ✨</p>
      </div>

      {/* Navigation */}
      <nav className="bg-light shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl md:text-2xl font-bold text-black">
              Sereyutdam Song
            </a>
            <div className="hidden md:flex space-x-4 items-center">
              <a href="#about" className="text-dark hover:text-primary transition duration-300">About</a>
              <a href="#what-i-do" className="text-dark hover:text-primary transition duration-300">Portfolio</a>
              <a href="#contact" className="text-dark hover:text-primary transition duration-300">Contact</a>
              <a href="#contact" className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
                Hire Me
              </a>
            </div>
            <button 
              className="md:hidden text-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </button>
          </div>
          <div className={`md:hidden mt-4 space-y-2 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
            <a href="#about" className="block text-dark hover:text-primary transition duration-300">About</a>
            <a href="#what-i-do" className="block text-dark hover:text-primary transition duration-300">Portfolio</a>
            <a href="#contact" className="block text-dark hover:text-primary transition duration-300">Contact</a>
            <a href="#" className="block bg-secondary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition duration-300 text-center">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-accent text-light overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] bg-primary/10">
            <div className="absolute inset-0 bg-grid-white/10 bg-grid [mask-image:radial-gradient(white,transparent_85%)]"></div>
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-10 flex items-center justify-center min-h-[80vh]">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-8 relative">
              <div className="absolute inset-0 animate-pulse bg-primary/20 rounded-full"></div>
              <Image 
                src="/placeholder.svg"
                alt="Sereyutdam Song"
                width={224}
                height={224}
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative mb-4 p-2">
              <div className="absolute inset-0 bg-primary opacity-10 rounded-lg blur-xl animate-pulse"></div>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">Sereyutdam Song</h1>
            </div>
            <div className="relative mb-8">
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium">
                Instructional Designer & E-Learning Specialist
              </p>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary scale-x-0 animate-[expandWidth_1s_ease-out_forwards]"></div>
            </div>
            <div className="opacity-100">
              <button 
                className="bg-primary text-white p-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105"
                aria-label="Scroll to About section"
              >
                <ChevronDown className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-20 -left-20 w-64 h-64 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 -right-20 w-64 h-64 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl animate-[floatDelayed_6s_ease-in-out_infinite_1s]"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/placeholder.svg"
                  alt="Sereyutdam Song"
                  width={256}
                  height={256}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-4 about-text text-black">
                I'm an experienced instructional design and e-learning specialist with a passion to bridge the learning experience gaps. With over 12 years in the educational field training to the field of instructional design and online development, I specialize in conducting gaps analysis, storyboarding bridging-gaps solution, and rapid-prototyping the E-learning experiences.
              </p>
              <p className="text-lg mb-4 about-text text-black">
                The ultimate package I have to offer is to help my clients design and ​develop Simplified learning solutions and E-Learning Materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="what-i-do" className="py-20 bg-accent text-light overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What I Do!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['E-learning', 'Instructional-Led', 'Job-Aids Infographic', 'Scripting & Storyboard'].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md flex flex-col items-center service-card">
                <div className="w-full p-4">
                  <Image src="/placeholder.svg" alt={service} width={400} height={300} className="w-full h-auto object-contain" />
                </div>
                <div className="p-4 mt-auto">
                  <a href={`#${service.toLowerCase().replace(' ', '-')}`} className="bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-opacity-90 transition duration-300 inline-block">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-primary">What People Say</h2>
          <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md text-dark">
              <div className="relative min-h-[200px] sm:min-h-[180px] md:min-h-[160px] overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute w-full transition-all duration-300 ease-in-out ${
                      index === currentTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <p className="mb-4 italic text-gray-700 text-sm sm:text-base md:text-lg text-center">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900 text-base sm:text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-3 sm:-left-4 md:-left-8 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md hover:bg-opacity-80 transition duration-300 z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-3 sm:-right-4 md:-right-8 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md hover:bg-opacity-80 transition duration-300 z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-4">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
              <div className="space-y-2">
                <p className="flex items-center"><Mail className="mr-2" /> [Protected Email]</p>
                <p className="flex items-center"><Phone className="mr-2" /> (855) 77-735-356</p>
                <p className="flex items-center"><Linkedin className="mr-2" /> <a href="https://linkedin.com/in/sereyutdamsong/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition duration-300">linkedin.com/in/sereyutdamsong/</a></p>
                <p className="flex items-center"><Github className="mr-2" /> <a href="https://github.com/utdsong" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition duration-300">github.com/utdsong</a></p>
              </div>
            </div>
            <form className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300" />
              <input type="text" name="subject" placeholder="Subject" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300" />
              <textarea name="message" placeholder="Your Message" required className="w-full px-3 py-2 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"></textarea>
              <button type="submit" className="w-full bg-secondary text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition duration-300 transform hover:scale-105">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}