import kingchowImage from '../../assets/2025-2026_board/kingchow.avif'

const LegislativeAffairsCommittee = () => {
  return (
    <div className="bg-asdvc-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-6">Legislative Affairs Committee</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">Committee Chair(s)</h2>
              <div className="flex items-center mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mr-6 shadow-lg">
                  <img 
                    src={kingchowImage} 
                    alt="King Chow (KC) Wong" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-asdvc-gray-700 font-semibold">King Chow (KC) Wong</p>
                  <p className="text-asdvc-gray-600">Legislative Affairs VP</p>
                </div>
              </div>
              <p className="text-asdvc-gray-700 mb-4">
                The committee is open to the student body and meets in the Student Union Building.
              </p>
              <p className="text-asdvc-gray-700 mb-6">
                <strong>Email:</strong> DVCAStechnology@dvc.edu
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">About the Committee</h2>
              <p className="text-asdvc-gray-700 mb-6">
                The committee is central to legislative activities on campus, acting as a bridge between students and administration. It identifies student issues and develops strategic, effective solutions. Through dialogue and discussion, it enhances student involvement in governance.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Current Projects</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">EBT Program</h3>
                <p className="text-asdvc-gray-700 mb-4">
                  Working to make Electronic Benefit Transfer (EBT) accepted in the school's cafeteria and bookstore. Conducting research into how other community colleges have implemented this.
                </p>
              </div>

              <div className="bg-asdvc-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">Menstrual Equity Across Campus</h3>
                <p className="text-asdvc-gray-700 mb-4">
                  Surveyed restrooms across both campuses to assess availability of feminine hygiene products, launching an initiative to ensure consistent stocking and product variety.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Past Projects</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">Voter Registration</h3>
                <p className="text-asdvc-gray-700">
                  In partnership with the Building Committee, organized voter registration booths and informational materials on campus and promoted on-campus registration kiosks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LegislativeAffairsCommittee
