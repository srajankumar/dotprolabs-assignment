import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-background pt-14 pb-32 w-full">
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between lg:flex-row flex-col gap-10">
        <NavLink to="/">
          <img src="/assets/logo-4.png" alt="Logo" className="h-40" />
        </NavLink>
        <ul className="flex space-x-8 font-primaryBold tracking-wide text-center justify-center items-center">
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-white hover:text-secondary"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/roadmap"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-white hover:text-secondary"
              }
            >
              Roadmap
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-white hover:text-secondary"
              }
            >
              FAQs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-white hover:text-secondary"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="flex flex-col justify-center items-center">
          <h2 className="md:text-3xl text-2xl font-bold mb-10 font-secondaryUltraBold tracking-wide">
            Contact <span className="text-yellow-500">Us</span>
          </h2>
          <div className="grid grid-cols-3 gap-10">
            <svg
              className="hover:scale-105 transition-all duration-200 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"
              />
            </svg>
            <svg
              className="hover:scale-105 transition-all duration-200 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10.75 13.04c0-.57-.47-1.04-1.04-1.04s-1.04.47-1.04 1.04a1.04 1.04 0 1 0 2.08 0m3.34 2.37c-.45.45-1.41.61-2.09.61s-1.64-.16-2.09-.61a.26.26 0 0 0-.38 0a.26.26 0 0 0 0 .38c.71.71 2.07.77 2.47.77s1.76-.06 2.47-.77a.26.26 0 0 0 0-.38c-.1-.1-.27-.1-.38 0m.2-3.41c-.57 0-1.04.47-1.04 1.04s.47 1.04 1.04 1.04s1.04-.47 1.04-1.04S14.87 12 14.29 12"
              />
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5.8 11.33c.02.14.03.29.03.44c0 2.24-2.61 4.06-5.83 4.06s-5.83-1.82-5.83-4.06c0-.15.01-.3.03-.44c-.51-.23-.86-.74-.86-1.33a1.455 1.455 0 0 1 2.47-1.05c1.01-.73 2.41-1.19 3.96-1.24l.74-3.49c.01-.07.05-.13.11-.16c.06-.04.13-.05.2-.04l2.42.52a1.04 1.04 0 1 1 .93 1.5c-.56 0-1.01-.44-1.04-.99l-2.17-.46l-.66 3.12c1.53.05 2.9.52 3.9 1.24a1.455 1.455 0 1 1 1.6 2.38"
              />
            </svg>
            <svg
              className="hover:scale-105 transition-all duration-200 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m215.3 337.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
