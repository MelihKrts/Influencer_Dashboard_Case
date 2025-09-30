import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/app/component/layout/Header";
import Footer from "@/app/component/layout/Footer";
import Sidebar from "@/app/component/layout/SideBar";
import MobileMenu from "@/app/component/ui/MobileMenu";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Influencer Dashboard",
    description: "Manage your influencer campaigns",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        <Sidebar/>
        <MobileMenu/>
        <div className="@container">
            <main className="min-h-dvh @3xs:@max-5xl:pt-16 @5xl:pl-60 bg-gray-50 ">
                <div className="container mx-auto p-4 md:p-6">
                    {children}
                </div>
            </main>
        </div>

        <Footer/>
        </body>
        </html>
    );
}