import css from "./LoadMoreBtn.module.css";
import { MouseEvent } from "react";

type LoadMoreProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function LoadMoreBtn({ onClick }: LoadMoreProps) {
  return (
    <button onClick={onClick} className={css.btn}>
      <b>Load more</b>
    </button>
  );
}
