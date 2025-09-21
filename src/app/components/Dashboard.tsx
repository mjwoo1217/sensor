"use client";

import React from "react";

// type CardsGridProps = {
//
// }

export default function Dashboard() {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4"}>
            {[1,2,3].map((i) => (
                <div key={i} className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-xl font-bold">Card</h2>
                    <p className="text-lg p-1 text-gray-700">test</p>
                </div>
            ))}
        </div>
    )
}