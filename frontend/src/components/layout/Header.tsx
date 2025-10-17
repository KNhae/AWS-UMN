import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export default function Header() {
  const { user, logout } = useAuthStore();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - AWS Styled */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-br from-aws-squid to-aws-squid-light rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <span className="text-aws-orange font-bold text-lg tracking-tight">AWS</span>
              </div>
              {/* Small orange accent */}
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-aws-orange rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-aws-squid leading-tight">AWS Cloud Club</span>
              <span className="text-xs text-gray-500 font-medium">University of Minnesota</span>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/')
                  ? 'text-aws-orange bg-aws-orange/10'
                  : 'text-gray-700 hover:text-aws-orange hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/events')
                  ? 'text-aws-orange bg-aws-orange/10'
                  : 'text-gray-700 hover:text-aws-orange hover:bg-gray-50'
              }`}
            >
              Events
            </Link>
            <Link
              to="/members"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/members')
                  ? 'text-aws-orange bg-aws-orange/10'
                  : 'text-gray-700 hover:text-aws-orange hover:bg-gray-50'
              }`}
            >
              Members
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/about')
                  ? 'text-aws-orange bg-aws-orange/10'
                  : 'text-gray-700 hover:text-aws-orange hover:bg-gray-50'
              }`}
            >
              About
            </Link>
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-aws-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-gray-700 hover:text-aws-orange font-medium rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hidden sm:block px-4 py-2 text-gray-700 hover:text-aws-orange font-medium rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2.5 bg-aws-orange hover:bg-aws-orange-dark text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105"
                >
                  Join Now
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
