import { useState, useEffect } from "react";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLinkClick = () => {
        setNavbar(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-100 shadow' : 'bg-transparent'}`}>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 my-5">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center font-mono pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center text-lg justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200 cursor-pointer hover:underline">
                                <a href="#home" onClick={handleLinkClick}>Home</a>
                            </li>
                            <li className="text-white hover:text-indigo-200 hover:underline">
                                <a href="#about" onClick={handleLinkClick}>About Us</a>
                            </li>
                            <li className="text-white hover:text-indigo-200 hover:underline">
                                <a href="#contact" onClick={handleLinkClick}>Contact</a>
                            </li>
                            <li className="text-white hover:text-indigo-200 hover:underline">
                                <a href="#events" onClick={handleLinkClick}>Events</a>
                            </li>
                            <li className="text-white hover:text-indigo-200 hover:underline">
                                <a href="javascript:void(0)" onClick={handleLinkClick}>Sponsors</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
