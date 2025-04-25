import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../../services/types";

type ImageGalleryProps = {
  items: Image[];
  onImageClick: (image: Image) => void;
};

export default function ImageGallery({
  items,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {items.map((image) => (
        <li
          key={image.id}
          onClick={() => onImageClick(image)}
          className={css.gallery_item}
        >
          <ImageCard galleryImages={image} />
        </li>
      ))}
    </ul>
  );
}
