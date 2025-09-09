// Import project images
import timelycareImage from '../assets/Projects/timelycare.avif'
import foodpantryImage from '../assets/Projects/foodpantry.avif'
import asdvcorgImage from '../assets/Projects/asdvcorg.avif'
import inclusivitywellnesscenterImage from '../assets/Projects/inclusivitywellnesscenter.avif'

const ProjectsGalleryPage = () => {
  return (
    <div className="bg-asdvc-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-6">Projects</h1>
            <p className="text-lg text-asdvc-gray-700 max-w-4xl mx-auto">
              Explore our projects, events, and moments that showcase the impact of ASDVC in our community.
            </p>
          </div>
          
          {/* Major Projects Section */}
          <div className="space-y-12 mb-16">
            {/* TimelyMD Telehealth Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={timelycareImage} 
                    alt="TimelyMD Telehealth Services" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-bold text-asdvc-gray-800 mb-4">TimelyMD Telehealth Services</h2>
                <p className="text-asdvc-gray-700 mb-4">
                  Created by ASDVC to advocate for student health and provide essential health services to all students. 
                  More information about Telehealth Services can be found at{' '}
                  <a 
                    href="https://www.dvc.edu/basic-needs/timelymd.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-asdvc-forest hover:underline"
                  >
                    https://www.dvc.edu/basic-needs/timelymd.html
                  </a>
                </p>
              </div>
            </div>

            {/* Food Pantry */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={foodpantryImage} 
                    alt="Food Pantry" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-asdvc-gray-800 mb-4">Food Pantry</h2>
                <p className="text-asdvc-gray-700 mb-4">
                  The Diablo Valley College Food Pantry, initiative of which was led by ASDVC, opened in March 2018 in partnership 
                  with a number of organizations including the English Department, College Administration, Student Life Office, 
                  Foundation Office, and the Contra Costa/Solano County Food Bank. Our goal is to address the issue of food insecurity 
                  among students and to provide access to food for those who need it. We believe that every student should have the 
                  opportunity to succeed, and we are committed to helping our community flourish both inside and outside the classroom. 
                  More information about food pantry can be found at{' '}
                  <a 
                    href="https://www.dvc.edu/student-services/student-life/food-pantry.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-asdvc-forest hover:underline"
                  >
                    https://www.dvc.edu/student-services/student-life/food-pantry.html
                  </a>
                </p>
              </div>
            </div>

            {/* Website */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={asdvcorgImage} 
                    alt="ASDVC Website" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-bold text-asdvc-gray-800 mb-4">Website</h2>
                <p className="text-asdvc-gray-700 mb-4">
                  <strong>asdvc.org</strong><br />
                  Created by the technology committee to modernize our web presence and create greater interactivity with DVC students.
                </p>
              </div>
            </div>


            {/* Inclusivity & Wellness Center */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={inclusivitywellnesscenterImage} 
                    alt="Inclusivity & Wellness Center" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-bold text-asdvc-gray-800 mb-4">Inclusivity & Wellness Center</h2>
                <p className="text-asdvc-gray-700 mb-4">
                  Inclusivity and Wellness Center is more than just a space, it's a community. Spring 2021 student leaders within 
                  Associated Students of Diablo Valley College repurposed the Inclusivity and Wellness Center as a collaborative effort 
                  with the college to create the Basic Needs, Dreamer, Health, LGBTQ+ and SparkPoint Center. The expected opening is 
                  Spring 2024. More information about the inclusivity and wellness center can be found at{' '}
                  <a 
                    href="https://www.dvc.edu/inclusivity-and-wellness-center" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-asdvc-forest hover:underline"
                  >
                    www.dvc.edu/inclusivity-and-wellness-center
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="border-t border-asdvc-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-asdvc-gray-800 mb-8 text-center">Gallery</h2>
            <p className="text-center text-asdvc-gray-700 mb-8">
              A collection of photos showcasing ASDVC events, activities, and community moments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder for future gallery items */}
              <div className="bg-asdvc-gray-50 rounded-lg p-6 text-center border-2 border-dashed border-asdvc-gray-300">
                <div className="h-32 bg-asdvc-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-asdvc-gray-500 font-semibold">Coming Soon</span>
                </div>
                <h3 className="font-semibold text-asdvc-gray-600 mb-2">Event Photos</h3>
                <p className="text-sm text-asdvc-gray-500">More gallery content coming soon</p>
              </div>
              
              <div className="bg-asdvc-gray-50 rounded-lg p-6 text-center border-2 border-dashed border-asdvc-gray-300">
                <div className="h-32 bg-asdvc-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-asdvc-gray-500 font-semibold">Coming Soon</span>
                </div>
                <h3 className="font-semibold text-asdvc-gray-600 mb-2">Community Events</h3>
                <p className="text-sm text-asdvc-gray-500">More gallery content coming soon</p>
              </div>
              
              <div className="bg-asdvc-gray-50 rounded-lg p-6 text-center border-2 border-dashed border-asdvc-gray-300">
                <div className="h-32 bg-asdvc-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-asdvc-gray-500 font-semibold">Coming Soon</span>
                </div>
                <h3 className="font-semibold text-asdvc-gray-600 mb-2">Student Life</h3>
                <p className="text-sm text-asdvc-gray-500">More gallery content coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsGalleryPage
