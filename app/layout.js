import Logo from "./_components/Logo";
import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
    subsets: ["latin"],
    display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
    // title: "The Wild Oasis ",

    title: {
        template: "%s - The Wild Oasis",
        default: "Welcome - The Wild Oasis",
    },
    description:
        "Luxurious cabin hotel, located in the heart of the italian Dolomites, surrounded by beatiful mountains and dark forests",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={` ${josefin.className} min-h-screen bg-primary-950 text-primary-100 flex flex-col`}
            >
                <Header />
                <div className="grid flex-1 px-8 py-12">
                    <main className="w-full mx-auto max-w-7xl">{children}</main>
                </div>
            </body>
        </html>
    );
}
