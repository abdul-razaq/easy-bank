import { navigation } from "./Navigation.module.scss";

import Logo from "../Logo";
import NavLinks from "../NavLinks";

export default function Navigation(props) {
	return (
		<nav className={navigation}>
			<Logo />
			<NavLinks />
		</nav>
	);
}
