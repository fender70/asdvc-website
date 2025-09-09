import anthonyImage from '../../assets/2025-2026_board/anthony.avif'

const ActivitiesCommittee = () => {
  return (
    <div className="bg-asdvc-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-6">Activities Committee</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">Committee Chair</h2>
              <div className="flex items-center mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mr-6 shadow-lg">
                  <img 
                    src={anthonyImage} 
                    alt="Anthony Kam" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-asdvc-gray-700 font-semibold">Anthony Kam</p>
                  <p className="text-asdvc-gray-600">Activities Coordinator</p>
                </div>
              </div>
              <p className="text-asdvc-gray-700 mb-4">
                The committee is open to the student body and meets in the Student Union Building.
              </p>
              <p className="text-asdvc-gray-700 mb-6">
                <strong>Email:</strong> DVCASAct@email.4cd.edu
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">About the Committee</h2>
              <p className="text-asdvc-gray-700 mb-6">
                Our committee is committed to creating engaging, inclusive events that bring students together and make campus life more vibrant. We focus on boosting student involvement with experiences that promote learning, growth, and community. Every event we plan is designed to benefit students by connecting them with resources, new perspectives, and each other. With each initiative, we aim to make a positive impact, fostering a campus environment that feels welcoming and inspiring. Through our work, we're helping to build a community that students are proud to be a part of.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Current Project</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">Holiday Drive</h3>
                <p className="text-asdvc-gray-700 mb-4">
                  An initiative led by the Activities Committee to support the local homeless shelter during the holiday season. The drive encourages donations (clothing, non-perishable food, hygiene products, blankets). Collection boxes are placed across campus to facilitate participation. This project aims to foster a sense of giving and community while addressing local needs during the holidays.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Past Projects</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">Hispanic Heritage Month</h3>
                <p className="text-asdvc-gray-700">
                  Hosted a full-day cultural celebration with interactive displays, traditional music, food tastings, and cultural performances to educate and bring campus communities together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivitiesCommittee
