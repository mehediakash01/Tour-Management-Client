import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosAddCircleOutline } from "react-icons/io";
import useAuth from "../../Hooks/AuthInfo"
import { 
  IoLogOutOutline,
  IoClose,
  IoMenu
} from "react-icons/io5";
import { 
  MdOutlineManageAccounts,
  MdDashboard,
  MdTravelExplore
} from "react-icons/md";
import { FaUser, FaHome, FaBox, FaInfoCircle, FaPhone, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router";
import ThemeToggle from "../Theme/ThemeToggle";
import { AuthContext } from "../../Auth/AuthProvider/AuthContext";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();
  const {user}=useAuth();
  const {logoutUser} = useContext(AuthContext);
  // Mock user - replace with your actual AuthInfo hook
  // const user = {
  //   photoURL: "https://i.pravatar.cc/150?img=12",
  //   displayName: "John Doe",
  //   email: "john@example.com"
  // };
  
  

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: FaHome, path: "/" },
    { id: "packages", label: "All Packages", icon: FaBox, path: "/allPackage" },
    { id: "bookings", label: "My Bookings", icon: MdDashboard, path: "/my-bookings", protected: true },
    { id: "about", label: "About Us", icon: FaInfoCircle, path: "/About-Us" },
    { id: "contact", label: "Contact", icon: FaPhone, path: "/contact" },
    { id: "services", label: "Services", icon: FaCog, path: "/service" }
  ];

  const userMenuItems = [
    { 
      icon: IoIosAddCircleOutline, 
      label: "Add Package", 
      path: "/add-package",
      color: "text-blue-400" 
    },
    { 
      icon: MdOutlineManageAccounts, 
      label: "Manage Packages", 
      path: "/managePackage",
      color: "text-purple-400" 
    }
  ];

  const handleNavClick = (id,path) => {
    setActiveLink(id);
    setMobileOpen(false);
  navigate(path)
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-primary/95 backdrop-blur-lg shadow-xl" 
          : "bg-primary/90 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo Section */}
          <motion.div 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur-md opacity-50"
              />
              <div className="relative bg-white rounded-full p-2 shadow-lg">
                <MdTravelExplore className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
              </div>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl lg:text-3xl tracking-tight">
                Trip<span className="text-secondary">Ease</span>
              </h1>
              <p className="text-white/60 text-xs hidden lg:block">Your Journey Simplified</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.protected && !user) return null;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.path)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeLink === item.id
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <item.icon className="text-lg" />
                  <span>{item.label}</span>
                  {activeLink === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 rounded-lg border border-white/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Desktop User Section */}
            {user ? (
              <div className="hidden lg:block relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsClicked(!isClicked)}
                  className="cursor-pointer"
                >
                  <div className="relative">
                    <img
                      className="w-12 h-12 rounded-full ring-2 ring-secondary object-cover"
                      src={user.photoURL}
                      alt="User"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-primary" />
                  </div>
                </motion.div>

                <AnimatePresence>
                  {isClicked && (
                    <>
                      {/* Backdrop */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsClicked(false)}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                        style={{ top: 0, left: 0 }}
                      />
                      
                      {/* Dropdown */}
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-4 w-72 bg-base-100 rounded-2xl shadow-2xl overflow-hidden z-50"
                      >
                        {/* User Info Header */}
                        <div className="bg-gradient-to-r from-primary to-secondary p-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={user.photoURL}
                              alt="User"
                              className="w-14 h-14 rounded-full ring-2 ring-white object-cover"
                            />
                            <div className="text-white">
                              <h3 className="font-bold text-lg">{user.displayName}</h3>
                              <p className="text-sm opacity-90">{user.email}</p>
                            </div>
                          </div>
                        </div>

                        {/* Menu Items */}
                        <div className="p-2">
                          {userMenuItems.map((item, index) => (
                            <motion.button
                              key={index}
                              whileHover={{ x: 4 }}
                              onClick={() => {
                                setIsClicked(false);
                                navigate(item.path);
                              }}
                              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-base-200 transition-colors"
                            >
                              <item.icon className={`text-2xl ${item.color}`} />
                              <span className="font-medium">{item.label}</span>
                            </motion.button>
                          ))}
                          
                          <div className="divider my-2" />
                          
                          {/* Logout Button */}
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              logoutUser();
                             
                            }}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-error/10 hover:bg-error/20 text-error font-bold rounded-lg transition-colors"
                          >
                            <IoLogOutOutline className="text-xl" />
                            Logout
                          </motion.button>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-2">
                <motion.button
                  onClick={() => navigate('/login')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-sm bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                  Login
                </motion.button>
                <motion.button
                  onClick={() => navigate('/register')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-sm bg-secondary hover:bg-secondary/90 text-white border-none shadow-lg"
                >
                  Register
                </motion.button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden btn btn-ghost btn-circle text-white"
            >
              {mobileOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <IoMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              style={{ top: '4rem' }}
            />
            
            {/* Mobile Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-16 bottom-0 w-80 bg-base-100 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                
                {/* User Section (Mobile) */}
                {user && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-4"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={user.photoURL}
                        alt="User"
                        className="w-16 h-16 rounded-full ring-2 ring-white object-cover"
                      />
                      <div className="text-white">
                        <h3 className="font-bold text-lg">{user.displayName}</h3>
                        <p className="text-sm opacity-90">{user.email}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {userMenuItems.map((item, index) => (
                        <motion.button
                          key={index}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            navigate(item.path);
                            setMobileOpen(false);
                          }}
                          className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white text-center transition-colors"
                        >
                          <item.icon className="text-2xl mx-auto mb-1" />
                          <span className="text-xs font-medium">{item.label.split(' ')[0]}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Navigation Links */}
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    if (item.protected && !user) return null;
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavClick(item.id, item.path)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                          activeLink === item.id
                            ? "bg-primary text-white shadow-lg"
                            : "hover:bg-base-200"
                        }`}
                      >
                        <item.icon className="text-xl" />
                        <span>{item.label}</span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Mobile Actions */}
                <div className="pt-4 border-t border-base-300">
                  {user ? (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        logoutUser();
                        setMobileOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-error/10 hover:bg-error/20 text-error font-bold rounded-xl transition-colors"
                    >
                      <IoLogOutOutline className="text-xl" />
                      Logout
                    </motion.button>
                  ) : (
                    <div className="space-y-2">
                      <button 
                        onClick={() => {
                          navigate('/login');
                          setMobileOpen(false);
                        }}
                        className="w-full btn bg-primary text-white"
                      >
                        Login
                      </button>
                      <button 
                        onClick={() => {
                          navigate('/register');
                          setMobileOpen(false);
                        }}
                        className="w-full btn bg-secondary text-white"
                      >
                        Register
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;