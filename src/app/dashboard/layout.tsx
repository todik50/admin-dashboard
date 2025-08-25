"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Users, UserCircle, ChevronDown
    ,User, Settings, LogOut
 } from "lucide-react";

export default function DashboardLayout({ children } : { children: React.ReactNode }){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-300">
            <aside className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white
            flex flex-col transform transition-transform duration-300
            z-20 md:translate-x-0 md:static">
                <div className="p-[20px] text-2xl font-bold border-b border-gray-700
                flex justify-between items-center">
                    Admin Dashboard
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Link
                    href="/dashboard"
                    className="flex items-center gap-2 px-4 py-2 rounded">
                        <LayoutDashboard size={18} />
                        Dashboard
                    </Link>
                    <Link
                    href="/dashboard/staff"
                    className="flex items-center gap-2 px-4 py-2 rounded">
                        <Users size={18} />
                        Staff
                    </Link>
                    <Link
                    href="/dashboard/clients"
                    className="flex items-center gap-2 px-4 py-2 rounded">
                        <UserCircle size={18} />
                        Clients
                    </Link>                                        
                </nav>
            </aside>
            <div className="flex-1 flex flex-col">
                <nav className="bg-white shadow-md px-4 py-[12px] flex items-center">
                    <div className="flex-1" />
                    <div className="relative flex items-center gap-2">
                        <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 px-2 py-1 rounded-full
                        focus:outline-none">
                            <div
                            className="w-10 h-10 rounded-full overflow-hidden relative">
                                <Image
                                    src="/images/profile-image.jpg"
                                    alt="avatar"
                                    fill
                                    className="object-cover" />
                            </div>
                            <span className="font-medium text-blue-700 hidden sm:inline">Todik</span>
                            <ChevronDown size={18} />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-48 w-40 bg-white border
                            border-gray-200 rounded-md shadow-lg py-1 z-30">
                                <Link
                                href="/dashboard/profile"
                                onClick={() => setIsDropdownOpen(false)}
                                className="flex items-center gap-2 w-full text-left
                                px-4 py-2 hover:bg-gray-100"
                                >
                                    <User size={18} />
                                    Profile
                                </Link>
                                <Link
                                href="/dashboard/settings"
                                onClick={() => setIsDropdownOpen(false)}
                                className="flex items-center gap-2 w-full text-left
                                px-4 py-2 hover:bg-gray-100"
                                >
                                    <Settings size={18} />
                                    Settings
                                </Link>
                                <button
                                onClick={() => setIsDropdownOpen(false)}
                                className="flex items-center gap-2 w-full text-left
                                px-4 py-2 hover:bg-gray-100"
                                >
                                    <LogOut size={18} />
                                    Logout
                                </button>                                                                
                            </div>
                        )}
                    </div>

                </nav>
                <main className="flex-1 overflow-auto">{children}</main>
            </div>
        </div>
    )
}