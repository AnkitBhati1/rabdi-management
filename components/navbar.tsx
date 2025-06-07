import React, { Suspense, useState } from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';


type ViewName = 'dashboard' | 'milk' | 'rabdi' | 'gas' | 'generateBill';

interface NavbarProps {
    setView: (v: ViewName) => void;
}

interface NavbarProps {
    setView: (v: ViewName) => void;
    currentView: ViewName;
}

export default function Navbar({ setView }: { setView: (v: string) => void }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', view: 'dashboard' },
        { name: 'Milk', view: 'milk' },
        { name: 'Rabdi', view: 'rabdi' },
        { name: 'Gas', view: 'gas' },
        { name: 'Generate Bills', view: 'generateBill' },
    ];

    const handleNavClick = (view: string) => {
        setView(view);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-red-900 p-4 sm:px-6 lg:px-8 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between">
                {/* Logo / Brand */}
                <div className="hover:scale-105 transition text-gray-800 dark:text-white sm:text-2xl">
                    <p className="text-3xl font-bold">Shri Krishna</p>
                    <p className="text-xl">rabdi bhandar</p>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-gray-200 hover:text-white"
                >
                    {isMobileMenuOpen ? (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
                        </svg>
                    )}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 text-gray-600 dark:text-gray-300">
                    {navItems.map((item) => (
                        <button
                            key={item.view}
                            onClick={() => handleNavClick(item.view)}
                            className="text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:block">
                    <div className="flex items-center gap-2">
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <Suspense fallback={<div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />}>
                                <UserButton showName />
                            </Suspense>
                        </SignedIn>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
                <div className="flex flex-col space-y-4 px-2 pt-2 pb-3">
                    {navItems.map((item) => (
                        <button
                            key={item.view}
                            onClick={() => handleNavClick(item.view)}
                            className="text-xl font-bold text-gray-300 hover:text-white block px-3 py-2 rounded-md"
                        >
                            {item.name}
                        </button>
                    ))}
                    <div className="pt-4 border-t border-gray-700">
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <Suspense fallback={<div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />}>
                                <UserButton showName />
                            </Suspense>
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// import React, { Suspense, useState } from 'react'
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';



// // export default function Navbar() {
// export default function Navbar({ setView }: { setView: (v: string) => void }) {

//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     return (
//         <div className="bg-red-900 p-4 sm:px-6 lg:px-8 rounded-2xl shadow-lg flex items-center justify-between">
//             {/* Logo / Brand */}
//             <div className="hover:scale-105 transition text-gray-800 dark:text-white sm:text-2xl">
//                 <p className="text-3xl font-bold">
//                     Shri Krishna
//                 </p>
//                 <p className="text-xl">
//                     rabdi bhandar
//                 </p>
//             </div>

//             {/* Navigation Links */}
//             <div className="hidden md:flex space-x-6 text-gray-600 dark:text-gray-300">
//                 <button
//                     onClick={() => setView("dashboard")}
//                     className="text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
//                 >
//                     Dashboard
//                 </button>
//                 <button
//                     onClick={() => setView("milk")}
//                     className="text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
//                 >
//                     Milk
//                 </button>
//                 <button
//                     onClick={() => setView("rabdi")}
//                     className="text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
//                 >
//                     Rabdi
//                 </button>
//                 <button
//                     onClick={() => setView("gas")}
//                     className="text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
//                 >
//                     Gas
//                 </button>
//                 <button
//                     onClick={() => setView("generateBill")}
//                     className="text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
//                 >
//                     Generate Bills
//                 </button>
//             </div>

//             {/* Right Side (e.g. user/avatar/menu) */}
//             <div className="md:block">
//                 <div className="flex items-center gap-2">
//                     <SignedOut>
//                         <SignInButton />
//                     </SignedOut>
//                     <SignedIn>
//                         <Suspense fallback={<div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />}>
//                             <UserButton showName />
//                         </Suspense>
//                     </SignedIn>
//                 </div>
//             </div>
//         </div>

//     )
// }