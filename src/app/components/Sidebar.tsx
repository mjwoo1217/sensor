"use client";
import React from "react";

export type NavItem = {
    name: string;
    icon: string;
}

type SidebarProps = {
    open: boolean;
    onClose: () => void;
}

// 아이콘 선언
const navItems:NavItem[] = [
    {name: "대쉬보드", icon: "💻"},
    {name: "프로젝트", icon: "💼"},
    {name: "캘린더", icon: "📆"},
    {name: "문서", icon: "📝"},
    {name: "보고서", icon: "🧾️"}
]

export default function Sidebar({ open, onClose } : SidebarProps){
    return (
        <aside
            className={`fixed bg-white w-64 h-screen shadow transform transition-transform ${
                open ? "translate-x-0" : "-translate-x-64"
            } lg:translate-x-0 lg:static`}
        >
            <div className={"p-4 flex justify-between border-b"}>
                <div className={"text-xl font-bold"}>Logo</div>
                <button
                    className="lg:hidden p-1 rounded hover:bg-gray-100"
                    onClick={onClose}
                    aria-label="Close sidebar"
                >X</button>
            </div>


            {/* nav category */}
            <nav className="p-4 space-y-2">
                {navItems.map((item) => (
                    <div
                        key={item.name}
                        className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-base">{item.name}</span>
                    </div>
                ))}
            </nav>
        </aside>
    )
}