const EventsPage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-4">Events & Activities</h1>
          <p className="text-lg text-asdvc-gray-700">Discover all campus events and activities</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-asdvc-forest rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">View All Events on DVCSync</h2>
            <p className="text-asdvc-gray-700 mb-6 max-w-2xl mx-auto">
              To view all upcoming events for ASDVC and other campus clubs, please visit DVCSync. 
              DVCSync is DVC's official platform for student organizations, events, and campus activities.
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3 text-asdvc-gray-600">
              <svg className="w-5 h-5 text-asdvc-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>ASDVC meetings and events</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-asdvc-gray-600">
              <svg className="w-5 h-5 text-asdvc-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>All campus club activities</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-asdvc-gray-600">
              <svg className="w-5 h-5 text-asdvc-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Student organization events</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-asdvc-gray-600">
              <svg className="w-5 h-5 text-asdvc-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Community and social activities</span>
            </div>
          </div>
          
          <a
            href="https://dvc.campuslabs.com/engage/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-asdvc-forest text-white px-8 py-4 rounded-lg font-semibold hover:bg-asdvc-forest-light transition-colors duration-200 text-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Go to DVCSync
          </a>
          
          <div className="mt-8 pt-6 border-t border-asdvc-gray-200">
            <p className="text-sm text-asdvc-gray-500">
              Need help accessing DVCSync? Contact the Student Life Office or visit the Student Government Office.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsPage
