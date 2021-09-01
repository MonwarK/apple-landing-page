import Image from "next/image"
import { SearchIcon, ShoppingBagIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const navbarOptions = [
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "TV",
        "Music",
        "Support"
    ]

    return (
        <>
            <header className="bg-gray-900 w-full py-1 text-gray-300 fixed top-0 z-50">
                <nav className="hidden md:flex items-center justify-around max-w-screen-lg w-full mx-auto">
                    <Image
                        src="https://www.apple.com/ac/globalnav/6/en_GB/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_small.svg"
                        height={40}
                        width={40}
                        alt="apple logo"
                    />
                    {
                        navbarOptions.map((props) => <p className="cursor-pointer hover:text-white hover:animate-bounce" key={props.index + 1}>{props}</p>)
                    }
                    <SearchIcon width={20} />
                    <ShoppingBagIcon width={20} />
                </nav>

                <nav className="md:hidden flex items-center justify-between max-w-screen-lg w-full mx-auto px-4">
                    {
                        !isOpen ? (
                            <MenuIcon className="cursor-pointer" width={20} onClick={() => setIsOpen(!isOpen)} />
                        )
                        : (
                            <XIcon className="cursor-pointer" width={20} onClick={() => setIsOpen(!isOpen)} />
                        )
                    }
                    <Image
                        src="https://www.apple.com/ac/globalnav/6/en_GB/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_small.svg"
                        height={40}
                        width={40}
                        alt="apple logo"
                    />
                    <ShoppingBagIcon width={20} />
                </nav>
            </header>

            <motion.div 
                initial={{height: 0}}
                animate={isOpen?{height: "100vh"}:{height: 0}}
                className={`md:hidden overflow-hidden top-10 fixed h-screen bg-gray-900 w-full z-50`}
            >
                <div className="w-[95%] bg-gray-700 my-2 mx-auto p-2 text-gray-400 flex rounded-md">
                    <SearchIcon width={20} />
                    <input className="bg-transparent ml-2 flex-1 focus:outline-none text-white" type="text" placeholder="Search apple.com" />
                </div>

                <hr className="my-5 border-gray-600" />

                <div className="px-8 text-gray-300 text-lg cursor-pointer">
                    <div className="border-b-[1px] border-gray-500 py-2 hover:text-white">Mac</div>
                    <div className="border-b-[1px] border-gray-500 py-2 hover:text-white">iPad</div>
                    <div className="border-b-[1px] border-gray-500 py-2 hover:text-white">iPhone</div>
                    <div className="border-b-[1px] border-gray-500 py-2 hover:text-white">Watch</div>
                    <div className="border-b-[1px] border-gray-500 py-2 hover:text-white">TV</div>
                    <div className="border-b-[1px] border-gray-500 py-2 hover:text-white">Music</div>
                    <div className="border-b-[1px] border-gray-500 py-2 hover:text-white">Support</div>
                </div>

            </motion.div>

            <div className="bg-gray-100 py-3 text-center mt-11">
                <div className="max-w-screen-lg px-2 w-full m-auto text-sm font-medium">
                    <span className="text-blue-500">Shop online</span> and get fast, free, contactless delivery, Specialist help, and for a limited time, pay over 24 months at 0% APR.‡
                </div>
            </div>
        </>
    )
}
