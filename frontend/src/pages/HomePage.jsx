import { Link } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import asdvcLogo from '../assets/asdvc_logo.jpg'
import dvcCampus from '../assets/dvc-campus.avif'
import asdvcHome1 from '../assets/asdvc-home-1.avif'
import asdvcHome2 from '../assets/asdvc-home-2.avif'
import asdvcHome3 from '../assets/asdvc-home-3.avif'

const HomePage = () => {
  const [visibleElements, setVisibleElements] = useState(new Set())
  const observerRef = useRef(null)

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right')
    animatedElements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="bg-asdvc-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${dvcCampus})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg ring-2 ring-white ring-opacity-20">
                <img 
                  src={asdvcLogo} 
                  alt="ASDVC Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up visible" id="hero-title">
              Welcome to <span className="text-asdvc-gold transition-colors duration-300 hover:text-asdvc-gold-light">ASDVC</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto fade-in-up visible" id="hero-subtitle">
              Associated Students of Diablo Valley College - Your voice in student government
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up visible" id="hero-buttons">
              <Link 
                to="/join" 
                className="bg-gradient-to-r from-asdvc-forest to-asdvc-forest-light text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out active:scale-95"
              >
                Join ASDVC
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-white hover:text-asdvc-forest hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out active:scale-95"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up visible" id="features-header">
            <h2 className="text-3xl md:text-4xl font-bold text-asdvc-gray-800">
              What We Do
            </h2>
            <p className="text-lg text-asdvc-gray-700 max-w-2xl mx-auto">
              ASDVC represents and serves the student body of Diablo Valley College through various programs and initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-out border border-asdvc-gray-200 hover:scale-105 ${visibleElements.has('feature-1') ? 'fade-in-up visible' : 'fade-in-up'}`} id="feature-1">
              <div className="w-16 h-16 bg-gradient-to-br from-asdvc-forest to-asdvc-forest-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-md transition-all duration-300 hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-2">Student Representation</h3>
              <p className="text-asdvc-gray-700">We advocate for student interests and ensure your voice is heard in college decisions.</p>
            </div>
            
            <div className={`text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-out border border-asdvc-gray-200 hover:scale-105 ${visibleElements.has('feature-2') ? 'fade-in-up visible' : 'fade-in-up'}`} id="feature-2">
              <div className="w-16 h-16 bg-gradient-to-br from-asdvc-navy to-asdvc-navy-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-md transition-all duration-300 hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-2">Campus Events</h3>
              <p className="text-asdvc-gray-700">We organize and support campus events that bring our community together.</p>
            </div>
            
            <div className={`text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-out border border-asdvc-gray-200 hover:scale-105 ${visibleElements.has('feature-3') ? 'fade-in-up visible' : 'fade-in-up'}`} id="feature-3">
              <div className="w-16 h-16 bg-gradient-to-br from-asdvc-gold to-asdvc-gold-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-md transition-all duration-300 hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-2">Student Services</h3>
              <p className="text-asdvc-gray-700">We provide resources and support to help students succeed academically and personally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - We are ASDVC */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`fade-in-left ${visibleElements.has('asdvc-text') ? 'visible' : ''}`} id="asdvc-text">
              <h2 className="text-3xl md:text-4xl font-bold text-asdvc-gray-800 mb-6">
                We are ASDVC: Representing your voice
              </h2>
              <p className="text-lg text-asdvc-gray-700 mb-6">
                ASDVC is the student government of Diablo Valley College that is responsible for advocating and representing students' perspectives on College and District committees, councils, and task forces.
              </p>
              <p className="text-lg text-asdvc-gray-700 mb-6">
                As the voices of Diablo Valley College, we speak for the student body. Together we advocate and represent the innovative perspectives of our current and future students. We ensure the student body feels empowered and heard.
              </p>
              <Link 
                to="/about" 
                className="bg-gradient-to-r from-asdvc-forest to-asdvc-forest-light text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out active:scale-95 inline-block"
              >
                Learn More About Us
              </Link>
            </div>
            <div className={`relative fade-in-right ${visibleElements.has('asdvc-image') ? 'visible' : ''}`} id="asdvc-image">
              <img 
                src={asdvcHome1} 
                alt="ASDVC Student Government" 
                className="w-full h-96 object-cover rounded-lg shadow-lg image-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - What have we done so far? */}
      <section className="py-16 bg-asdvc-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`order-2 lg:order-1 fade-in-left ${visibleElements.has('accomplishments-image') ? 'visible' : ''}`} id="accomplishments-image">
              <img 
                src={asdvcHome2} 
                alt="ASDVC Accomplishments" 
                className="w-full h-96 object-cover rounded-lg shadow-lg image-hover"
              />
            </div>
            <div className={`order-1 lg:order-2 fade-in-right ${visibleElements.has('accomplishments-text') ? 'visible' : ''}`} id="accomplishments-text">
              <h2 className="text-3xl md:text-4xl font-bold text-asdvc-gray-800 mb-6">
                What have we done so far?
              </h2>
              <p className="text-lg text-asdvc-gray-700 mb-6">
                Creation of a Food Pantry, Extended library hours, Fall Festival, Multi-cultural Center, ICC collaborative events, statewide student advocacy. These are just a few of the things your student government has accomplished.
              </p>
              <p className="text-lg text-asdvc-gray-700 mb-8">
                The meetings are held during Fall and Spring semesters on Tuesdays from 2:10 PM - 4:00 PM at Student Union Building Room 204.
              </p>
              <Link 
                to="/events" 
                className="bg-gradient-to-r from-asdvc-forest to-asdvc-forest-light text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out active:scale-95 inline-block"
              >
                View Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - DVC Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`fade-in-left ${visibleElements.has('dvc-text') ? 'visible' : ''}`} id="dvc-text">
              <h2 className="text-3xl md:text-4xl font-bold text-asdvc-gray-800 mb-6">
                DVC Resources
              </h2>
              <p className="text-lg text-asdvc-gray-700 mb-6">
                The cost of living is a major cost of being a student.
              </p>
              <p className="text-lg text-asdvc-gray-700 mb-8">
                DVC acknowledges this barrier and provides a variety of support, from housing to student healthcare.
              </p>
              <p className="text-lg text-asdvc-gray-700 mb-8">
                Click on Learn more below for the link to all the support that you can utilize!
              </p>
              <Link 
                to="/about-dvc" 
                className="bg-gradient-to-r from-asdvc-forest to-asdvc-forest-light text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out active:scale-95 inline-block"
              >
                Learn More
              </Link>
            </div>
            <div className={`relative fade-in-right ${visibleElements.has('dvc-image') ? 'visible' : ''}`} id="dvc-image">
              <img 
                src={asdvcHome3} 
                alt="DVC Student Resources" 
                className="w-full h-96 object-cover rounded-lg shadow-lg image-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-asdvc-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up visible" id="quick-links-header">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Involved
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Explore opportunities to make a difference in your college community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <Link to="/events" className="group">
              <div className="bg-gradient-to-br from-asdvc-navy to-asdvc-navy-light p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out" id="quick-link-1">
                 <h3 className="text-lg font-semibold text-white mb-2 group-hover:underline transition-all duration-300">Events</h3>
                <p className="text-sm text-white">Upcoming campus events and activities</p>
              </div>
            </Link>
            
            <Link to="/join" className="group">
              <div className="bg-gradient-to-br from-asdvc-navy to-asdvc-navy-light p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out" id="quick-link-2">
                 <h3 className="text-lg font-semibold text-white mb-2 group-hover:underline transition-all duration-300">Join Us</h3>
                <p className="text-sm text-white">Become a member of ASDVC</p>
              </div>
            </Link>
            
            <Link to="/asdvc-boards" className="group">
              <div className="bg-gradient-to-br from-asdvc-navy to-asdvc-navy-light p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out" id="quick-link-3">
                 <h3 className="text-lg font-semibold text-white mb-2 group-hover:underline transition-all duration-300">Boards</h3>
                <p className="text-sm text-white">Meet our leadership team</p>
              </div>
            </Link>
            
            <Link to="/projects-gallery" className="group">
              <div className="bg-gradient-to-br from-asdvc-navy to-asdvc-navy-light p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out" id="quick-link-4">
                 <h3 className="text-lg font-semibold text-white mb-2 group-hover:underline transition-all duration-300">Projects</h3>
                <p className="text-sm text-white">See what we're working on</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default HomePage