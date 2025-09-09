import janiceImage from '../../assets/2025-2026_board/janice.avif'

const CivicEngagementCommittee = () => {
  return (
    <div className="bg-asdvc-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-6">Civic Engagement Committee</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">Committee Chair</h2>
              <div className="flex items-center mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mr-6 shadow-lg">
                  <img 
                    src={janiceImage} 
                    alt="Janice Harsono" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-asdvc-gray-700 font-semibold">Janice Harsono</p>
                  <p className="text-asdvc-gray-600">Civic Engagement Officer</p>
                </div>
              </div>
              <p className="text-asdvc-gray-700 mb-4">
                The committee is open to the student body and meets in the Student Union Building.
              </p>
              <p className="text-asdvc-gray-700 mb-6">
                <strong>Email:</strong> DVCAScivic@email.4cd.edu
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-4">About the Committee</h2>
              <p className="text-asdvc-gray-700 mb-6">
                I am willing to build Civic Engagement on campus as a cornerstone for cultivating a culture of active citizenship, inclusivity, and social responsibility among students and the broader community. Improving civic engagement on campus involves creating opportunities for DVC students to actively participate in the community, both within and outside the college setting.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Current Project</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">Corporations with IGNITE</h3>
                <p className="text-asdvc-gray-700 mb-4">
                  This project partners with IGNITE, a group that helps young people, especially women, get involved in their communities and take on leadership roles. The goal is to give DVC students opportunities to learn about civic issues, develop leadership skills, and take action on the causes they care about. By working together, we aim to build a campus culture of inclusion, active citizenship, and positive social change, helping students make a real difference in their communities.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-asdvc-gray-800 mb-6">Past Projects</h2>
              
              <div className="bg-asdvc-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">Corporations with League of Women Voters</h3>
                <p className="text-asdvc-gray-700 mb-4">
                  This project partners with the League of Women Voters to empower DVC students to become informed and active participants in democracy. Through this collaboration, students will have access to resources and events that promote voter education, civic awareness, and engagement with local and national issues.
                </p>
              </div>

              <div className="bg-asdvc-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-4">Voter Registration tabling events</h3>
                <p className="text-asdvc-gray-700">
                  The Voter Registration Tabling Events aim to make registering to vote easy and accessible for DVC students and the campus community. These events will feature staffed tables in high-traffic areas on campus where students can stop by to register to vote, check or update their voter registration status, and learn about upcoming elections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CivicEngagementCommittee
