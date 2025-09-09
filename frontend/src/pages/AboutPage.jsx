const AboutPage = () => {
  return (
    <div className="bg-asdvc-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-6">About ASDVC</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-asdvc-gray-700 mb-6">
              The Associated Students of Diablo Valley College (ASDVC) is the official student government organization 
              representing all students at Diablo Valley College. We serve as the voice of the student body and work 
              to enhance the college experience for all students.
            </p>
            
            <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">Our Mission</h2>
            <p className="text-asdvc-gray-700 mb-6">
              To represent, serve, and advocate for the interests of all students at Diablo Valley College, 
              while fostering a sense of community and providing opportunities for student leadership and engagement.
            </p>
            
            <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">What We Do</h2>
            <ul className="list-disc list-inside text-asdvc-gray-700 mb-6 space-y-2">
              <li>Represent student interests in college governance and decision-making</li>
              <li>Organize campus events and activities</li>
              <li>Provide funding for student clubs and organizations</li>
              <li>Advocate for student rights and welfare</li>
              <li>Foster leadership development opportunities</li>
              <li>Promote campus community and school spirit</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">Get Involved</h2>
            <p className="text-asdvc-gray-700">
              We encourage all students to get involved with ASDVC. Whether you're interested in leadership positions, 
              event planning, or simply want to have your voice heard, there are many ways to participate in student government.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
