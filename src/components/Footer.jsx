// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="bg-[#6A1B9A] text-white py-10 mt-12">
//       <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
//         <p className="text-[#F8BBD0] text-sm sm:text-base">
//           Built with 💜 by the{" "}
//           <span className="text-[#FFFFFF] font-semibold">DigitalSafe</span> Team
//         </p>
//         <div className="flex justify-center space-x-6 text-xl">
//           <a href="#" className="hover:text-[#BA68C8]">FB</a>
//           <a href="#" className="hover:text-[#BA68C8]">TW</a>
//           <a href="#" className="hover:text-[#BA68C8]">IN</a>
//         </div>
//       </div>
//     </footer>
//   );
// }
import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#6A1B9A] text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
        <p className="text-[#F8BBD0] text-sm sm:text-base">
          {t("footer.builtWith")}{" "}
          <span className="text-[#FFFFFF] font-semibold">{t("footer.team")}</span>
        </p>
        <div className="flex justify-center space-x-6 text-xl">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#BA68C8]"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#BA68C8]"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#BA68C8]"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
