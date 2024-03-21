'use client'

import { CircleUserRound } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const DropDown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="flex gap-2">
					<CircleUserRound />
					<span>Minha conta</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<Link href="/minha-conta/pedidos">Pedidos</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href="/minha-conta/meus-dados">Meus Dados</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default DropDown
