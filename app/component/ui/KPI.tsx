"use client"
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import React from "react";

type KPICardProps = {
    title: string;
    value: number | string;
    icon?: React.ReactNode;
    trend?: string;
    color?: string;
    direction?: "up" | "down";
};

export default function KPICard({title, value, icon, trend, color, direction = "up",}: KPICardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: direction === "up" ? 40 : -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Card className="p-4 flex flex-col gap-3 shadow-md rounded-lg">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                    {icon && <div className="text-gray-400">{icon}</div>}
                </div>

                <CardContent className="p-0">
                    <p className={`text-2xl font-bold ${color ?? "text-gray-900"}`}>
                        {value}
                    </p>
                    {trend && (
                        <span className={`text-sm ${
                                trend.includes("-") ? "text-red-500" : "text-green-500"}`}>
              {trend}
            </span>)}
                </CardContent>
            </Card>
        </motion.div>
    );
}
