import { navigation } from "./Navigation.module.scss";

import Logo from "../Logo";
import NavLinks from "../NavLinks";
import PrimaryButton from "../PrimaryButton";

export default function Navigation(props) {
	return (
		<nav className={navigation}>
			<Logo />
			<NavLinks />
			<PrimaryButton title="Request Invite" />
		</nav>
	);
}
