import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Storia</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#discover" className="text-gray-600 hover:text-indigo-600">Discover</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Start Writing
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#discover" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Discover</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Pricing</a>
            <button className="w-full mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Start Writing
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}