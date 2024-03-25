import DropDown from '@/components/header/dropDown'
import Nav from '@/components/nav'
import { Separator } from '@/components/ui/separator'
import ClerkAuth from './clerkAuth'

const Header = () => {
	return (
		<header className="py-4">
			<div className="container mx-auto">
				<div className="w-full flex justify-between items-center">
					<h1 className="block font-bold text-2xl">Fit Shop</h1>

					<div className="flex items-center gap-6">
						<ClerkAuth />
						<DropDown />
					</div>
				</div>
				<Separator orientation="horizontal" className="my-4" />
				<Nav />
				<Separator orientation="horizontal" className="my-4" />
			</div>
		</header>
	)
}

export default Header
