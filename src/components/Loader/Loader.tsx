import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div>
      <BeatLoader className={css.spinner} />
    </div>
  );
}
