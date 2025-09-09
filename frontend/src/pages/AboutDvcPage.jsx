const AboutDvcPage = () => {
  return (
    <div className="bg-asdvc-soft-gold min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-6">About Diablo Valley College</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-asdvc-gray-700 mb-6">
              Diablo Valley College (DVC) is a public community college located in Pleasant Hill, California, 
              serving students in Contra Costa County and beyond. Founded in 1949, DVC has been providing 
              quality education and opportunities for over 70 years.
            </p>
            
            <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">Our Mission</h2>
            <p className="text-asdvc-gray-700 mb-6">
              Diablo Valley College provides quality educational programs and services that are student-centered, 
              accessible, comprehensive, and flexible to meet the needs of our diverse community.
            </p>
            
            <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">Academic Programs</h2>
            <ul className="list-disc list-inside text-asdvc-gray-700 mb-6 space-y-2">
              <li>Associate degrees in over 60 fields of study</li>
              <li>Transfer programs to UC and CSU systems</li>
              <li>Career and technical education programs</li>
              <li>Continuing education and community programs</li>
              <li>Online and hybrid course options</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">Campus Life</h2>
            <p className="text-asdvc-gray-700 mb-6">
              DVC offers a vibrant campus life with numerous student clubs, organizations, and activities. 
              The Associated Students of Diablo Valley College (ASDVC) plays a crucial role in representing 
              student interests and organizing campus events.
            </p>
            
            <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">Contact Information</h2>
            <div className="bg-asdvc-soft-gold p-6 rounded-lg">
              <p className="text-asdvc-gray-700 mb-2"><strong>Address:</strong> 321 Golf Club Rd, Pleasant Hill, CA 94523</p>
              <p className="text-asdvc-gray-700 mb-2"><strong>Phone:</strong> (925) 685-1230</p>
              <p className="text-asdvc-gray-700 mb-2"><strong>Website:</strong> www.dvc.edu</p>
              <p className="text-asdvc-gray-700"><strong>Email:</strong> info@dvc.edu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutDvcPage
