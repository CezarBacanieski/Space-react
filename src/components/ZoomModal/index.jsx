import Image from '../Gallery/GalleryImage';

const ZoomModal = ({ photo }) => {
  return (
    <>
      {photo && (
        <dialog open={!!photo}>
          <Image photo={photo} expanded={true} />
          <form method='dialog'>
            <button>OK</button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default ZoomModal;
