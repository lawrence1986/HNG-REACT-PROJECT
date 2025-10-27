export const Footer = () => {
  return (
    <footer className="border-t bg-white mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4">E-Ticketing</h3>
            <p className="text-gray-600">
              Saves Time & Provide convinience.
            </p>
          </div>
          <div>
            <h3 className="mb-4">Products</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-[#2563eb] transition-colors">
                 Integration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563eb] transition-colors">
                 Support
                </a>
              </li>
             
            </ul>
          </div>
          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-[#2563eb] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563eb] transition-colors">
                  Contact
                </a>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; 2025 Ticketing System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
