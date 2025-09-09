import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import JoinUsPage from './pages/JoinUsPage'
import EventsPage from './pages/EventsPage'
import ProjectsGalleryPage from './pages/ProjectsGalleryPage'
import GoverningDocumentsPage from './pages/GoverningDocumentsPage'
import FinancialDocumentsPage from './pages/FinancialDocumentsPage'
import AboutDvcPage from './pages/AboutDvcPage'
import Layout from './components/Layout'

// Committee Pages
import LegislativeAffairsCommittee from './pages/committees/LegislativeAffairsCommittee'
import PublicRelationsCommittee from './pages/committees/PublicRelationsCommittee'
import RulesCommittee from './pages/committees/RulesCommittee'
import ElectionCommittee from './pages/committees/ElectionCommittee'
import BuildingCommittee from './pages/committees/BuildingCommittee'
import CivicEngagementCommittee from './pages/committees/CivicEngagementCommittee'
import BudgetOversightCommittee from './pages/committees/BudgetOversightCommittee'
import ActivitiesCommittee from './pages/committees/ActivitiesCommittee'
import TechnologyCommittee from './pages/committees/TechnologyCommittee'

// Board Pages
import Board2025_2026 from './pages/boards/Board2025-2026'
import Board2024_2025 from './pages/boards/Board2024-2025'
import { Routes, Route } from 'react-router'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/join' element={<JoinUsPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/projects-gallery' element={<ProjectsGalleryPage />} />
        <Route path='/governing-documents' element={<GoverningDocumentsPage />} />
        <Route path='/financial-documents' element={<FinancialDocumentsPage />} />
        <Route path='/about-dvc' element={<AboutDvcPage />} />
        
        {/* Committee Routes */}
        <Route path='/committees/legislative-affairs' element={<LegislativeAffairsCommittee />} />
        <Route path='/committees/public-relations' element={<PublicRelationsCommittee />} />
        <Route path='/committees/rules' element={<RulesCommittee />} />
        <Route path='/committees/election' element={<ElectionCommittee />} />
        <Route path='/committees/building' element={<BuildingCommittee />} />
        <Route path='/committees/civic-engagement' element={<CivicEngagementCommittee />} />
        <Route path='/committees/budget-oversight' element={<BudgetOversightCommittee />} />
        <Route path='/committees/activities' element={<ActivitiesCommittee />} />
        <Route path='/committees/technology' element={<TechnologyCommittee />} />
        
        {/* Board Routes */}
        <Route path='/boards/2025-2026' element={<Board2025_2026 />} />
        <Route path='/boards/2024-2025' element={<Board2024_2025 />} />
      </Routes>
    </Layout>
  )
}

export default App