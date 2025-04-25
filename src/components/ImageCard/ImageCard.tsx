import css from "./ImageCard.module.css";
import { Image } from "../../services/types";

type ImageCardProps = {
  galleryImages: Image;
};

export default function ImageCard({ galleryImages }: ImageCardProps) {
  return (
    <div>
      <img src={galleryImages.urls.small} alt="Gallery" className={css.img} />
    </div>
  );
}
