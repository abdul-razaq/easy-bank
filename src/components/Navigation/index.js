import { navigation } from "./Navigation.module.scss";

import NavLinks from "../NavLinks";
import Logo from "../Logo";

export default function Navigation(props) {
	return (
		<nav className={navigation}>
			<Logo />
			<NavLinks />
		</nav>
	);
}
