import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.txt}>
      <b>Whoops, something went wrong! Please try reloading this page!</b>
    </p>
  );
}
