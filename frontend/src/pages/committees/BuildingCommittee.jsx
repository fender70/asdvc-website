import takuseiImage from '../../assets/2025-2026_board/takusei.avif'

const BuildingCommittee = () => {
  return (
    <div className="bg-asdvc-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-6">Building Committee</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">Committee Chair</h2>
              <div className="flex items-center mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mr-6 shadow-lg">
                  <img 
                    src={takuseiImage} 
                    alt="Takusei Shen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-asdvc-gray-700 font-semibold">Takusei Shen</p>
                  <p className="text-asdvc-gray-600">Secretary</p>
                </div>
              </div>
              <p className="text-asdvc-gray-700 mb-4">
                The committee is open to the student body and meets in the Student Union Building.
              </p>
              <p className="text-asdvc-gray-700 mb-6">
                <strong>Email:</strong> DVCASsec@dvc.edu
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">About the Committee</h2>
              <p className="text-asdvc-gray-700 mb-6">
                Responsible for campus facilities and infrastructure advocacy. The committee evaluates building conditions, proposes improvements, and ensures the physical environment supports student safety and activities. It collaborates with administration and stakeholders to drive enhancements.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Current Project</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">ASDVC End-of-Year Banquet</h3>
                <p className="text-asdvc-gray-700 mb-4">
                  A celebratory banquet to honor the year's accomplishments with catered dinner, recognition, entertainment, music, and engaging activities—designed to bring the community together.
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

export default BuildingCommittee
