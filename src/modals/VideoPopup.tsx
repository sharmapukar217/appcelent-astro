import UseMounted from "@/hooks/UseMount";
import ModalVideo from "react-modal-video";

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "bgMEvrd2E",
}: any) => {
  const mounted = UseMounted();

  return (
    <>
      {mounted && (
        <ModalVideo
          channel="youtube"
          // autoplay
          isOpen={isVideoOpen}
          videoId={videoId}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </>
  );
};

export default VideoPopup;
