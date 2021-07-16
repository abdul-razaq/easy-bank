export default function NavLinks(props) {
	return (
		<ul className="navigation__items">
			<li className="navigation__item">
				<a href="home" className="navigation__link">
					Home
				</a>
			</li>
			<li className="navigation__item">
				<a href="about" className="navigation__link">
					About
				</a>
			</li>
			<li className="navigation__item">
				<a href="contact" className="navigation__link">
					Contact
				</a>
			</li>
			<li className="navigation__item">
				<a href="blog" className="navigation__link">
					Blog
				</a>
			</li>
			<li className="navigation__item">
				<a href="careers" className="navigation__link">
					Careers
				</a>
			</li>
		</ul>
	);
}
