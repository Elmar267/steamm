import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { IoClose } from "react-icons/io5";
import { FaSteam } from "react-icons/fa";

function MobileSidebar({ isOpen, onClose }) {
  const location = useLocation();

  useEffect(() => {
    onClose();
  }, [location.pathname])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        onClose();
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 z-40 bg-black/50" />
      )}
    
      <div className={`fixed top-0 right-0 h-full w-[240px] sm:w-[350px] bg-[#171a22] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <nav className="flex flex-col h-full py-4 overflow-y-auto">
          <div className="flex justify-between gap-3">
              <div className='max-w-[120px] mx-4 mb-4'>
                  <FaSteam className="text-[36px] text-[#c5c3c0]" />
              </div>
              <IoClose  onClick={onClose} className="text-white cursor-pointer text-[24px] m-3" />
          </div>
          <ul>
            <div className='flex items-center justify-center gap-2 px-5 py-4 border-b border-slate-700'>
              <Link to="/"><p className='text-[#c5c3c0]'>Log in</p></Link>
            </div>
              <li><Link to={'/store'} className="block px-5 py-4 text-white font-semibold text-lg border-b border-slate-700">STORE</Link></li>
              <li><Link to={'/about'} className="block px-5 py-4 text-white font-semibold text-lg border-b border-slate-700">ABOUT</Link></li>
          </ul>
        </nav>
      </div>
    </>

  );
}

export default MobileSidebar