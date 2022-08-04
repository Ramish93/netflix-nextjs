import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import MuiModal from "@mui/material/Modal";
import { XIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    if (!movie) return;
    const fetchMovie = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/${
            movie?.media_type === "tv" ? "tv" : "movie"
          }/${movie?.id}?api_key=${
            process.env.NEXT_PUBLIC_API_KEY
          }&language=en-US&append_to_response=videos`
        ).then((responce) => responce.json());

        setTrailer(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [movie]);
  console.log(trailer);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 boarder-none bg-[#181818]"
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div></div>
      </>
    </MuiModal>
  );
};

export default Modal;
