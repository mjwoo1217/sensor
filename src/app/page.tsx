"use client";

import Image from "next/image";
import {useState} from "react";

export default function Home() {
    // 상수 선언
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    // 아이콘 선언
    const navItems = [
        {name: "대쉬보드", icon: "💻"},
        {name: "프로젝트", icon: "💼"},
        {name: "캘린더", icon: "📆"},
        {name: "문서", icon: "📝"},
        {name: "보고서", icon: "🧾️"}
    ]

    return (
        <div className={"flex bg-gray-100 h-screen"}>
            {/* sidebar */}
            <div
                className={`fixed bg-white w-64 h-screen shadow ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-64"
                } lg:translate-x-0 lg:static`}
            >
                <div className={"p-4 flex justify-between border-b"}>
                    <div className={"text-xl font-bold"}>Logo</div>
                    <button
                        className={"lg:hidden"}
                        onClick={() => setSidebarOpen(false)}
                    >X
                    </button>
                </div>

                {/* nav category */}
                <div className={"p-4 space-y-2"}>
                    {navItems.map((item) => {
                        return (
                            <div className={"flex p-2"}>
                                <div className={"text-xl"}>{item.icon}</div>
                                <div className={"text-xl"}>{item.name}</div>
                            </div>
                        )
                    })}
                </div>
                {/*darkMode*/}
              <div className={"flex text-2xl justify-left p-4"}>
                {darkMode ?
                    (
                        <button
                            className={"p-2 bg-black rounded-full"}
                            onClick={() => setDarkMode(false)}
                        >🌙</button>
                    ) : (
                        <button
                            className={"p-2 bg-black rounded-full"}
                            onClick={() => setDarkMode(false)}
                        >⭐</button>
                  )}
              </div>
            </div>


            {/* main content */}
            <main className={"flex-1"}>
                <header className={"bg-white flex justify-between p-4"}>
                    <button
                        className={"p-2 text-xl font-bold lg:hidden"}
                        onClick={() => setSidebarOpen(true)}
                    >☰
                    </button>
                    <h1 className={"text-2xl font-bold"}></h1>
                    <div className={"bg-gray-300 w-10 h-10 rounded-full"}></div>
                </header>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4"}>
                  <div className={"bg-white p-6 shadow-lg rounded-lg"}>
                    <h2 className={"text-xl font-bold"}>Card</h2>
                    <p className={"text-lg p-1 text-gray-700"}>test</p>
                  </div>
                  <div className={"bg-white p-6 shadow-lg rounded-lg"}>
                    <h2 className={"text-xl font-bold"}>Card</h2>
                    <p className={"text-lg p-1 text-gray-700"}>test</p>
                  </div>
                  <div className={"bg-white p-6 shadow-lg rounded-lg"}>
                    <h2 className={"text-xl font-bold"}>Card</h2>
                    <p className={"text-lg p-1 text-gray-700"}>test</p>
                  </div>
                </div>
            </main>
        </div>
    )
}
