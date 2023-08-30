import "@/styles/globals.css";
import { Metadata } from "next";
import { Providers } from "@/app/providers";
import { Navbar } from "@/app/navbar";
import { GithubIcon } from "@/components/icons";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
	title: 'Goal Trackr',
	description: 'Track your goals and habits',
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen text-foreground font-sans antialiased light:bg-background dark:bg-gradient-to-br dark:from-background dark:to-slate-900",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
							{children}
						</main>
						<footer className="flex items-center justify-center w-full py-3 gap-x-2">
							<div className="flex items-center justify-center gap-2">
								Created by 
								<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://www.linkedin.com/in/shawnlong636"
								title="nextui.org homepage"
							>
								<p className="text-primary">Shawn Long</p>
							</Link>
							</div>
							<Link href="https://github.com/shawnlong636" target="__blank">
								<GithubIcon size={24} className="text-gray-500"/>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
