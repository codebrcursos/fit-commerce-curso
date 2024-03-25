import { ClerkProvider as Provider } from '@clerk/nextjs'

type Props = {
	children: React.ReactNode
}
const ClerkProvider = ({ children }: Props) => {
	return <Provider>{children}</Provider>
}

export default ClerkProvider
