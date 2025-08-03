export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="mb-4">© {new Date().getFullYear()} ThreadLock. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 text-sm mb-6">
          <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
          <a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
        </div>
        <p className="text-xs text-gray-300 max-w-2xl mx-auto">
          The information provided by ThreadLock is for informational purposes only
          and does not constitute legal advice. Always consult a qualified attorney
          for advice on your individual situation.
        </p>
      </div>
    </footer>
  )
}
