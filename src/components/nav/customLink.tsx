'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type CustomLinkProps = {
	href: string
	children: React.ReactNode
	title: string
}
const CustomLink = ({ href, children, title }: CustomLinkProps) => {
	const pathname = usePathname()

	const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)

	return (
		<Link
			href={href}
			aria-label={title}
			className={`
			${isActive ? 'text-violet-600 dark:text-violet-400' : 'text-zinc-400'}
			hover:text-violet-600 dark:text-violet-400 transition duration-500
		`}
		>
			{children}
		</Link>
	)
}

export default CustomLink
