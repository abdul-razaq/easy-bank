import { header, logoBox, header__logo } from "./Header.module.scss";
import Logo from "../../images/logo.svg";

export default function Header(props) {
	return (
		<header className={header}>
			<div className={logoBox}>
				<img src={Logo} alt="logo" className={header__logo} />
			</div>
		</header>
	);
}
