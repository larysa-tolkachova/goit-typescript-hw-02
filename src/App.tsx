import { useState, useEffect } from "react";
import "./App.css";
import { fetchArt } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Image } from "./services/types";
// import { showToast } from "./services/toast";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [largeImage, setLargeImage] = useState<Image | null>(null);

  const handleSearch = (newImages: string): void => {
    if (!newImages.trim()) {
      // showToast("The field is empty. Please enter a query", "warning");
      alert("The field is empty. Please enter a query");
      return;
    }

    setSearch(newImages);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (search === "") {
      return;
    }

    async function getImages() {
      try {
        setError(false);
        setLoading(true);
        const request: Image[] = await fetchArt(page, search);

        if (request.length === 0) {
          // showToast("No images found. Try another search term", "info");
          alert("No images found. Try another search term");
          return;
        }

        setImages((prevImages) => {
          return [...prevImages, ...request];
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [page, search]);

  function openModal(image: Image) {
    setIsOpen(true);
    setLargeImage(image);
  }

  function closeModal() {
    setIsOpen(false);
    setLargeImage(null);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={() => setPage(page + 1)} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        image={largeImage}
      />
    </>
  );
}

export default App;
