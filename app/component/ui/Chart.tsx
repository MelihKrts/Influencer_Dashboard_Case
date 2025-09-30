"use client"
import React from "react";
import {BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid,} from "recharts";

type GraphicProps = {
    week: string;
    followers: number;
};

const graphicData: GraphicProps[] = [
    { week: "1. Hafta", followers: 200 },
    { week: "2. Hafta", followers: 450 },
    { week: "3. Hafta", followers: 300 },
    { week: "4. Hafta", followers: 600 },
];

export default function ChartInfo() {
    return (
        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={graphicData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                    <XAxis dataKey="week" tick={{ fontSize: 12 }} />

                    <YAxis tick={{ fontSize: 12 }} />

                    <Tooltip
                        cursor={{ fill: "rgba(0,0,0,0.05)" }}
                        contentStyle={{ backgroundColor: "white", borderRadius: "8px", border: "1px solid #ddd" }}
                    />

                    <Bar
                        dataKey="followers"
                        fill="url(#colorFollowers)"
                        radius={[6, 6, 0, 0]}
                    />

                    <defs>
                        <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.4} />
                        </linearGradient>
                    </defs>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}