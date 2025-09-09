import alexImage from '../../assets/2025-2026_board/alex.avif'

const BudgetOversightCommittee = () => {
  return (
    <div className="bg-asdvc-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-6">Budget Oversight Committee</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">Committee Chair</h2>
              <div className="flex items-center mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mr-6 shadow-lg">
                  <img 
                    src={alexImage} 
                    alt="Alex Ren" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-asdvc-gray-700 font-semibold">Alex Ren</p>
                  <p className="text-asdvc-gray-600">Controller</p>
                </div>
              </div>
              <p className="text-asdvc-gray-700 mb-4">
                The committee is open to the student body and meets in the Student Union Building.
              </p>
              <p className="text-asdvc-gray-700 mb-6">
                <strong>Email:</strong> DVCASCon@email.4cd.edu
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">About the Committee</h2>
              <p className="text-asdvc-gray-700 mb-6">
                Ensures financial transparency and responsible management within ASDVC. Reviews funding requests, monitors expenditures, and aligns budgeting with strategic student goals.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Current Project</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">12-Passenger Van Purchase & Donation</h3>
                <p className="text-asdvc-gray-700 mb-4">
                  Secured and donated a van to DVC's Student Life Office with prioritized ASDVC access—supporting events, outreach, and transportation needs.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Past Projects</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">2025–2026 Fee Budget Drafting/Projection</h3>
                <p className="text-asdvc-gray-700 mb-4">
                  Developed drafts for Student Representation Fee and Student Union Fee through expenditure analysis and forecasting.
                </p>
              </div>

              <div className="bg-asdvc-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">Budget Code Amendment</h3>
                <p className="text-asdvc-gray-700">
                  Updated ASDVC's Budget Code to improve clarity, efficiency, and alignment with financial goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BudgetOversightCommittee
