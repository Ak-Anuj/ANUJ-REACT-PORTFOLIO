import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">
          
          {/* Brand */}
          <div className="mx-auto sm:mx-0">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Anuj Kumar
            </h3>
            <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-sm mx-auto sm:mx-0">
              Frontend / React Developer passionate about building clean,
              modern, and responsive user interfaces.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Connect with me
            </h4>

            <div className="flex justify-center sm:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/anuj-yadav-89a970267/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/20 text-white/70 
                           hover:text-[#0A66C2] hover:border-[#0A66C2] 
                           transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/20 text-white/70 
                           hover:text-white hover:border-white 
                           transition duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-white/70">
              <a
                href="mailto:anujyadav999688@gmail.com"
                className="flex items-center justify-center sm:justify-start gap-2 
                           hover:text-white transition duration-300"
              >
                <FaEnvelope size={14} />
                anujyadav999688@gmail.com
              </a>

              <a
                href="tel:7988026148"
                className="flex items-center justify-center sm:justify-start gap-2 
                           hover:text-white transition duration-300"
              >
                <FaPhoneAlt size={14} />
                +91 79880 26148
              </a>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-white/60">
                <FaMapMarkerAlt size={14} />
                Jaipur, Rajasthan, India
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-xs sm:text-sm text-white/50 px-4">
        © {new Date().getFullYear()} Anuj Kumar. All rights reserved.
      </div>
    </footer>
  );
}
