import {
	navigation,
	logoBox,
	navigation__logo,
} from "./Navigation.module.scss";

import Logo from "../../images/logo.svg";

import NavLinks from "../NavLinks";

export default function Header(props) {
	return (
		<nav className={navigation}>
			<div className={logoBox}>
				<img src={Logo} alt="logo" className={navigation__logo} />
			</div>
			<NavLinks />
		</nav>
	);
}
