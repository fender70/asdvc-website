import elmiraImage from '../../assets/2025-2026_board/elmira.avif'

const PublicRelationsCommittee = () => {
  return (
    <div className="bg-asdvc-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-6">Public Relations Committee</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">Committee Chair</h2>
              <div className="flex items-center mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mr-6 shadow-lg">
                  <img 
                    src={elmiraImage} 
                    alt="Elmira Rozymuradova" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-asdvc-gray-700 font-semibold">Elmira Rozymuradova</p>
                  <p className="text-asdvc-gray-600">Public Relations Chair</p>
                </div>
              </div>
              <p className="text-asdvc-gray-700 mb-4">
                The committee is open to the student body and meets in the Student Union Building.
              </p>
              <p className="text-asdvc-gray-700 mb-6">
                <strong>Email:</strong> DVCASpr@insite.4cd.edu
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">About the Committee</h2>
              <p className="text-asdvc-gray-700 mb-6">
                Our Committee is responsible for promoting all events organized by ASDVC and maintaining its social media presence. We ensure DVC students stay informed about ASDVC activities. Internally, we assist other committees by creating flyers, posters, stickers, and other promotional materials, as well as designing ASDVC apparel.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Current Project</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">ASDVC Apparel Design and Social Media Posts</h3>
                <p className="text-asdvc-gray-700 mb-4">
                  Designing and promoting ASDVC apparel to boost school spirit and organizational identity via social media, engaging the student body and raising awareness of ASDVC initiatives.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Past Projects</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg">
                <p className="text-asdvc-gray-700 text-center italic">
                  Past projects will be updated as they become available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublicRelationsCommittee
