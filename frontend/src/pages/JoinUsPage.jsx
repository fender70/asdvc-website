const JoinUsPage = () => {
  return (
    <div className="bg-asdvc-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-6">Join ASDVC</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-asdvc-gray-700 mb-8">
              The Associated Students of Diablo Valley College (ASDVC) is the student government at DVC. ASDVC is responsible for advocating for and representing students' perspectives on College and District committees, councils and task forces.
            </p>
            
            <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">How to Become an ASDVC Senator</h2>
            <p className="text-asdvc-gray-700 mb-6">
              There are two primary ways to start your journey as an ASDVC Senator. You can either attend an informational session to learn more or directly announce your interest at a General Meeting. Follow these steps to initiate your path to leadership:
            </p>
            
            <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">Information Session</h3>
            <div className="bg-asdvc-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-asdvc-gray-800 mb-4">1. Attend an Info Session:</h4>
              <p className="text-asdvc-gray-700 mb-4">
                First two weeks of every Fall or Spring semester on Tuesdays, Wednesdays, or Thursdays from
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-asdvc-gray-800">2:00 PM - 3:00 PM</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-asdvc-gray-800">3:00 PM - 4:00 PM</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-asdvc-gray-800 mb-2">Location:</p>
                <p className="text-asdvc-gray-700">Student Union Conference Room 204</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">General Meeting Joining Process</h3>
            <div className="bg-asdvc-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-asdvc-gray-800 mb-4">Announce Your Interest:</h4>
              <ul className="list-disc list-inside text-asdvc-gray-700 mb-6 space-y-2">
                <li>Attend a General Meeting.</li>
                <li>When: Tuesdays 2:10 PM - 4:00 PM in Room SU 204.</li>
                <li>Announce your interest during Public Forum.</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-asdvc-gray-800 mb-4">Attend Consecutive Meetings:</h4>
              <p className="text-asdvc-gray-700 mb-4">
                Attend two more consecutive General Meetings.
              </p>
              
              <h4 className="text-lg font-semibold text-asdvc-gray-800 mb-4">Official Petition:</h4>
              <p className="text-asdvc-gray-700">
                The General Senate will vote on your petition to become a Senator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUsPage
