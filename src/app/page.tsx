"use client";

import {useState} from "react";
import Sidebar from "@/app/components/Sidebar";
import Dashboard from "@/app/components/Dashboard";

export default function Home() {
    // 상수 선언
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className={"flex bg-gray-100 h-screen"}>
            {/* sidebar */}
            <Sidebar
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />


            {/* main content */}
            <main className={"flex-1"}>
                {/* header */}
                <header className={"bg-white flex justify-between p-4"}>
                    <button
                        className={"p-2 text-xl font-bold lg:hidden"}
                        onClick={() => setSidebarOpen(true)}
                    >☰
                    </button>
                    <h1 className={"text-2xl font-bold"}></h1>
                    <div className={"bg-gray-300 w-10 h-10 rounded-full"}></div>
                </header>

                {/* 위젯 */}
                <Dashboard />
            </main>
        </div>
    )
}
