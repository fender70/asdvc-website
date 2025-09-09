const TechnologyCommittee = () => {
  return (
    <div className="bg-asdvc-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-6">Technology Committee</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">Committee Chair</h2>
              <div className="flex items-center mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mr-6 shadow-lg bg-asdvc-gray-200 flex items-center justify-center">
                  <span className="text-asdvc-gray-500 font-semibold text-sm">TBD</span>
                </div>
                <div>
                  <p className="text-lg text-asdvc-gray-700 font-semibold">Fall Election</p>
                  <p className="text-asdvc-gray-600">Technology Chair</p>
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
                The Technology Committee plays a pivotal role in managing the ASDVC website and addressing other technological needs on campus. This committee ensures that the website remains a current and informative hub by regularly updating it with the latest information, projects, and progress related to ASDVC activities. The Technology Committee's responsibilities extend beyond the website to include technological advancements and efficiencies that enhance student engagement at Diablo Valley College.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Current Project</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">Standardize DVCSync</h3>
                <p className="text-asdvc-gray-700 mb-4">
                  The DVCSync project aims to create a clear and consistent system for naming files and organizing folders in version-controlled projects. This system will make it easier for team members to find, manage, and collaborate on files by using standardized naming rules and a logical folder structure. By ensuring that files are named consistently and organized in a clear way, the project will help reduce confusion, prevent errors, and improve teamwork. The goal is to create a system that works well now and can grow as the project expands, making it easier to maintain and collaborate effectively.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Past Projects</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">ASDVC Website</h3>
                <p className="text-asdvc-gray-700 mb-4">
                  The ASDVC website is the primary source for information about how to join ASDVC, ongoing projects, governing documents, and more. The Technology Committee continuously works to enhance the user experience and ensure the site provides valuable and timely information to students and faculty alike.
                </p>
              </div>

              <div className="bg-asdvc-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">ASDVC Internship Program</h3>
                <p className="text-asdvc-gray-700">
                  Recently launched, the ASDVC Internship Program has welcomed two interns tasked with developing specific pages on the website. These pages will detail the main events ASDVC participates in and provide insights into the functions and contributions of each committee. This initiative not only helps in enriching the website's content but also offers practical experience to students interested in technology and web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyCommittee
