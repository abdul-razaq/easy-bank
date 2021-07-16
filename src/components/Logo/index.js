import { logoBox, logo} from "./Logo.module.scss";

import logoImage from "../../images/logo.svg";


export default function Logo(props) {
  return (
		<div className={logoBox}>
			<img src={logoImage} alt="logo" className={logo} />
		</div>
	);
}
