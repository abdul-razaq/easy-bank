import { button } from './PrimaryButton.module.scss';

export default function PrimaryButton(props) {

  return (
    <button className={button}>{props.title}</button>
  );
}
