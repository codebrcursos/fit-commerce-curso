'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'

const ClerkAuth = () => {
	return (
		<>
			<SignedIn>
				<UserButton afterSignOutUrl="/" />
			</SignedIn>
			<SignedOut>
				<SignInButton
					mode="modal"
					afterSignInUrl="/"
					afterSignUpUrl="/"
				>
					<Button>
						<LogIn className="mr-2 h-4 w-4" />
						Login
					</Button>
				</SignInButton>
			</SignedOut>
		</>
	)
}

export default ClerkAuth
