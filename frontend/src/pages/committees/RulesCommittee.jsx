import hongbinImage from '../../assets/2025-2026_board/hongbin.avif'

const RulesCommittee = () => {
  return (
    <div className="bg-asdvc-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-6">Rules Committee</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">Committee Chair</h2>
              <div className="flex items-center mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mr-6 shadow-lg">
                  <img 
                    src={hongbinImage} 
                    alt="Hongbin Zhao" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-asdvc-gray-700 font-semibold">Hongbin Zhao</p>
                  <p className="text-asdvc-gray-600">Parliamentarian</p>
                </div>
              </div>
              <p className="text-asdvc-gray-700 mb-4">
                The committee is open to the student body and meets in the Student Union Building.
              </p>
              <p className="text-asdvc-gray-700 mb-6">
                <strong>Email:</strong> DVCASpar@dvc.edu
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">About the Committee</h2>
              <p className="text-asdvc-gray-700 mb-6">
                The Rules Committee plays a crucial role in maintaining and updating ASDVC's governing documents. They review the Constitution, Bylaws, and procedural issues, recommending amendments to ensure clarity, relevance, and alignment with organizational goals. Their work promotes effective governance, transparency, and accountability.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Current Projects</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg">
                <p className="text-asdvc-gray-700 text-center italic">
                  Current projects will be updated as they become available.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Past Projects</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">Election Code</h3>
                <p className="text-asdvc-gray-700 mb-4">
                  Updated with a new section on Special Elections, in collaboration with the Vice President of Executive Affairs, enhancing transparency and procedural consistency.
                </p>
              </div>

              <div className="bg-asdvc-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">A New Executive Position</h3>
                <p className="text-asdvc-gray-700">
                  Worked with the Legislative Committee to draft and refine the position of Vice President of San Ramon Campus Affairs. They amended the Bylaws to include the position's qualifications and responsibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RulesCommittee
