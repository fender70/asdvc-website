// Import board member images
import luismarioImage from '../../assets/2025-2026_board/luismario.avif'
import elmiraImage from '../../assets/2025-2026_board/elmira.avif'
import hongbinImage from '../../assets/2025-2026_board/hongbin.avif'
import janiceImage from '../../assets/2025-2026_board/janice.avif'
import kingchowImage from '../../assets/2025-2026_board/kingchow.avif'
import takuseiImage from '../../assets/2025-2026_board/takusei.avif'
import mohamedImage from '../../assets/2025-2026_board/mohamed.avif'
import kanamiImage from '../../assets/2025-2026_board/kanami.avif'
import clarenceImage from '../../assets/2025-2026_board/clarence.avif'
import alexImage from '../../assets/2025-2026_board/alex.avif'
import anthonyImage from '../../assets/2025-2026_board/anthony.avif'
import moniqueImage from '../../assets/2025-2026_board/monique.avif'

const Board2025_2026 = () => {
  const boardMembers = [
    {
      name: "Luismario Hernandez Fernandez",
      position: "President",
      email: "DVCASpre@dvc.edu",
      committee: "Executive Committee",
      image: luismarioImage
    },
    {
      name: "Elmira Rozymuradova",
      position: "Public Relations Chair",
      email: "DVCASpr@dvc.edu",
      committee: "Public Relations Committee",
      image: elmiraImage
    },
    {
      name: "Hongbin Zhao",
      position: "Parliamentarian",
      email: "DVCASpar@dvc.edu",
      committee: "Rules Committee",
      image: hongbinImage
    },
    {
      name: "Janice Harsono",
      position: "Civic Engagement Officer",
      email: "DVCAScivic@dvc.edu",
      committee: "Civic Engagement Committee",
      image: janiceImage
    },
    {
      name: "Fall Election",
      position: "Technology Chair",
      email: "DVCAStechnology@dvc.edu",
      committee: "Technology Committee",
      image: "/api/placeholder/200/200"
    },
    {
      name: "King Chow (KC) Wong",
      position: "Legislative Affairs VP",
      email: "DVCASvp@dvc.edu",
      committee: "Legislative Committee",
      image: kingchowImage
    },
    {
      name: "Takusei Shen",
      position: "Secretary",
      email: "DVCASsec@dvc.edu",
      committee: "Building Committee",
      image: takuseiImage
    },
    {
      name: "Mohamed Alderei",
      position: "Inter Club Council Chair",
      email: "DVCASicc@dvc.edu",
      committee: "ICC Meetings: Thursdays from 3:30-5 pm in SU 204",
      image: mohamedImage
    },
    {
      name: "Kanami Ikeda",
      position: "Environmental Affairs Chair",
      email: "DVCASenvironmental@dvc.edu",
      committee: "Environmental Affairs Committee",
      image: kanamiImage
    },
    {
      name: "Fall Election",
      position: "Vice President of San Ramon Campus",
      email: "DVCASsrcvp@dvc.edu",
      committee: "San Ramon Campus Committee",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Clarence Leung",
      position: "Executive Affairs VP",
      email: "DVCASvpx@dvc.edu",
      committee: "Elections Committee",
      image: clarenceImage
    },
    {
      name: "Alex Ren",
      position: "Controller",
      email: "DVCAScon@dvc.edu",
      committee: "Budget Oversight Committee",
      image: alexImage
    },
    {
      name: "Anthony Kam",
      position: "Activities Coordinator",
      email: "DVCASact@dvc.edu",
      committee: "Activities Committee",
      image: anthonyImage
    },
    {
      name: "Monique Silva",
      position: "Diversity Affairs Chair",
      email: "DVCASdiv@dvc.edu",
      committee: "Diversity Affairs Committee",
      image: moniqueImage
    }
  ]

  return (
    <div className="bg-asdvc-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-8 text-center">Meet Our Board 2025-2026</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white border border-asdvc-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-asdvc-gray-200 flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-asdvc-gray-800 mb-2">{member.name}</h3>
                  <p className="text-asdvc-forest font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-asdvc-gray-600 mb-3 break-all">{member.email}</p>
                  <p className="text-sm text-asdvc-gray-700 bg-asdvc-gray-50 p-3 rounded-lg">
                    <strong>{member.committee}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board2025_2026
