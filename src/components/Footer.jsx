import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    // <footer className="px-4 py-8 bg-slate-100 mt-24">
    //   <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
    //     <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
    //       <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-600">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 32 32"
    //           fill="currentColor"
    //           className="w-5 h-5 rounded-full dark:text-gray-50"
    //         >
    //           <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
    //         </svg>
    //       </div>
    //       <ul className="flex flex-wrap items-center space-x-4 sm:space-x-6">
    //         <li>
    //           <a target="_blank" href="#">
    //             Terms and Condition
    //           </a>
    //         </li>
    //         <li>
    //           <a target="_blank" href="#">
    //             Privacy Policy
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-6">
    //       <li>
    //
    //       </li>
    //       <li>
    //
    //       </li>
    //       <li>
    //
    //       </li>
    //     </ul>
    //   </div>
    // </footer>
    <footer className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We offer innovative solutions that help businesses succeed online.
              Join thousands who trust us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-5">
              <a target="_blank" href="#">
                <FaFacebook className="text-blue-500" size={28} />
              </a>
              <a target="_blank" href="#">
                <FaYoutube className="text-red-500" size={30} />
              </a>

              <a target="_blank" href="#">
                <FaInstagram className="text-pink-500" size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
