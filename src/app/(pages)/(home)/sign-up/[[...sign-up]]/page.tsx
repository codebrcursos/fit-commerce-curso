import { Button } from '@/components/ui/button'
import { SignUp } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SignUpPage() {
	return (
		<section className="pb-20 flex justify-center relative before:block before:fixed before:w-full before:h-screen before:top-0 before:left-0 before:bg-black/50 before:z-10">
			<div className="relative flex flex-col gap-4 items-center z-50">
				<Link href="/">
					<Button>
						<ArrowLeft />
						Voltar página inicial
					</Button>
				</Link>
				<SignUp />
			</div>
		</section>
	)
}
