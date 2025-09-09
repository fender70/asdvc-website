const FinancialDocumentsPage = () => {
  return (
    <div className="bg-asdvc-soft-gold min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-asdvc-gray-800 mb-6">Financial Documents</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-asdvc-gray-700 mb-6">
              Access ASDVC's financial records, budgets, and transparency reports.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-asdvc-bright-gold pl-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-2">Annual Budget</h3>
                <p className="text-asdvc-gray-700 mb-2">Current fiscal year budget allocation and spending plans.</p>
                <button className="text-asdvc-bright-gold hover:text-asdvc-muted-olive font-medium">Download PDF</button>
              </div>
              
              <div className="border-l-4 border-asdvc-bright-gold pl-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-2">Financial Reports</h3>
                <p className="text-asdvc-gray-700 mb-2">Monthly and quarterly financial statements and reports.</p>
                <button className="text-asdvc-bright-gold hover:text-asdvc-muted-olive font-medium">View Reports</button>
              </div>
              
              <div className="border-l-4 border-asdvc-bright-gold pl-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-2">Audit Reports</h3>
                <p className="text-asdvc-gray-700 mb-2">Annual audit reports and financial compliance documentation.</p>
                <button className="text-asdvc-bright-gold hover:text-asdvc-muted-olive font-medium">Download PDF</button>
              </div>
              
              <div className="border-l-4 border-asdvc-bright-gold pl-6">
                <h3 className="text-xl font-semibold text-asdvc-gray-800 mb-2">Funding Requests</h3>
                <p className="text-asdvc-gray-700 mb-2">Information about how to request funding for student organizations and events.</p>
                <button className="text-asdvc-bright-gold hover:text-asdvc-muted-olive font-medium">View Guidelines</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialDocumentsPage
