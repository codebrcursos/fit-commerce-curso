import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import ClerkProvider from '@/components/providers/clerkProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Fit Commerce',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang="pt-br">
				<body className={inter.className}>
					<Header />
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}
