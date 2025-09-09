const GoverningDocumentsPage = () => {
  return (
    <div className="bg-asdvc-soft-gold min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-6">Governing Documents</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-asdvc-gray-700 mb-6">
              Access important governing documents that outline ASDVC's structure, policies, and procedures.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-asdvc-bright-gold pl-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-2">ASDVC Constitution</h3>
                <p className="text-asdvc-gray-700 mb-2">The foundational document that establishes ASDVC's purpose and structure.</p>
                <button className="text-asdvc-bright-gold hover:text-asdvc-muted-olive font-medium">Download PDF</button>
              </div>
              
              <div className="border-l-4 border-asdvc-bright-gold pl-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-2">Bylaws</h3>
                <p className="text-asdvc-gray-700 mb-2">Detailed rules and procedures for ASDVC operations and governance.</p>
                <button className="text-asdvc-bright-gold hover:text-asdvc-muted-olive font-medium">Download PDF</button>
              </div>
              
              <div className="border-l-4 border-asdvc-bright-gold pl-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-2">Meeting Minutes</h3>
                <p className="text-asdvc-gray-700 mb-2">Official records of ASDVC board meetings and decisions.</p>
                <button className="text-asdvc-bright-gold hover:text-asdvc-muted-olive font-medium">View Archive</button>
              </div>
              
              <div className="border-l-4 border-asdvc-bright-gold pl-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-2">Policies & Procedures</h3>
                <p className="text-asdvc-gray-700 mb-2">Current policies governing student activities and campus life.</p>
                <button className="text-asdvc-bright-gold hover:text-asdvc-muted-olive font-medium">View Documents</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoverningDocumentsPage
