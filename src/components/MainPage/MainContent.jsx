import React from "react";
import dp from "../../assets/dp.jpeg"; 
import divImage from "../../assets/mountain.jpg"; 
import { Home, Search, Bell, User, Image, Paperclip, ChevronDown, Heart, MessageCircle, Repeat, Mail } from "lucide-react"; // Importing Lucide icons

export default function MainContent() {
    return (
        <div className="flex min-h-screen p-4 md:p-8 bg-[url('/src/assets/background.jpg')] bg-cover bg-center">
            <nav className="w-16 md:w-20 flex flex-col justify-center items-center space-y-4 md:space-y-8"> 
                <button className="rounded-full bg-white bg-opacity-10 backdrop-blur-sm p-2 md:p-3">
                    <Home className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </button>
                <button className="rounded-full bg-white bg-opacity-10 backdrop-blur-sm p-2 md:p-3">
                    <Search className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </button>
                <button className="rounded-full bg-white bg-opacity-10 backdrop-blur-sm p-2 md:p-3">
                    <Bell className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </button>
                <button className="rounded-full bg-white bg-opacity-10 backdrop-blur-sm p-2 md:p-3">
                    <User className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </button>
            </nav>

            <div className="flex-1 mx-auto flex flex-col md:flex-row gap-6 rounded-3xl backdrop-blur-sm bg-gray-500 bg-opacity-10 mt-10 w-full">
                <aside className="w-full md:w-80 flex-grow">
                    <div className="flex flex-col mb-6">
                        <main className="flex-grow rounded-3xl bg-opacity-20 p-4 md:p-6 text-white">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={dp} alt="User" className="mr-3 h-8 w-8 md:h-10 md:w-10 rounded-full" />
                                    <span className="font-semibold">Jacob Jones</span>
                                </div>
                                <button className="rounded-full font-semibold bg-white bg-opacity-20 px-3 py-1 md:px-4 md:py-2 text-sm">Post</button>
                            </div>

                            <div className="mb-4 rounded-lg bg-opacity-50 bg-gray-700 p-2 md:p-3">
                                <input type="text" placeholder="Start a thread..." className="w-full bg-transparent outline-none" />
                            </div>

                            <div className="flex flex-col md:flex-row mb-5 items-center justify-between space-y-2 md:space-y-0 border-1 border-white border-opacity-50">
                                <div className="flex space-x-2">
                                    <button className="flex rounded-full font-semibold bg-white bg-opacity-10 items-center px-3 py-1 text-sm">
                                        Upload Image <Image className="ml-2" />
                                    </button>
                                    <button className="flex rounded-full font-semibold bg-white bg-opacity-10 items-center px-3 py-1 text-sm">
                                        Attach File <Paperclip className="ml-2" />
                                    </button>
                                </div>
                                <button className="flex items-center rounded-full font-semibold bg-white bg-opacity-10 px-3 py-1 md:px-4 md:py-2 text-sm">
                                    Anyone can reply <ChevronDown className="ml-2" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="m-2 flex items-center justify-between border-t border-white border-opacity-50 p-2">
                                    <div className="flex items-center">
                                        <img src={dp} alt="Devon Lane" className="mr-3 h-8 w-8 md:h-10 md:w-10 rounded-full" />
                                        <div>
                                            <div className="font-semibold">Devon Lane</div>
                                            <div className="text-sm text-gray-400">6m</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="m-4 md:m-8 bg-opacity-60 p-3 border-l border-white border-opacity-50">
                                    <p className="mb-3">
                                        Christopher Nolan tells a secondary story of the top-secret Manhattan Project. Few people have shaped the course of history as dramatically as J. Robert Oppenheimer, and now Christopher Nolan has captured his sometimes inspiring, sometimes chilling story in this epic Atomic Age thriller.
                                    </p>
                                    <img src={divImage} alt="The Man Behind The Bomb" className="m-2 md:m-3 w-full rounded-3xl p-3 md:p-4" />
                                </div>

                                <div className="flex mt-1 space-x-4">
                                    <button>
                                        <Heart className="text-gray-400" />
                                    </button>
                                    <button>
                                        <MessageCircle className="text-gray-400" />
                                    </button>
                                    <button>
                                        <Repeat className="text-gray-400" />
                                    </button>
                                    <button>
                                        <Mail className="text-gray-400" />
                                    </button>
                                </div>
                            </div>
                        </main>
                    </div>
                </aside>

                <div className="flex-1 border-l border-white border-opacity-50">
                    {/* Additional content can go here */}
                </div>
            </div>
        </div>
    );
}
