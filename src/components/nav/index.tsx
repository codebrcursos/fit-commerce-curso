import CustomLink from './customLink'
import { data } from './data'

const Nav = () => {
	return (
		<nav>
			<ul className="flex gap-3">
				<li>
					<CustomLink href="/" title="Home">
						Home
					</CustomLink>
				</li>
				{data.map((category) => (
					<li key={category.href}>
						<CustomLink href={category.href} title={category.title}>
							{category.title}
						</CustomLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
