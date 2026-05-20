const galleryImages = [
  "/gallaryphotoes/PUKT0034.JPG",
  "/gallaryphotoes/PUKT0039.JPG",
  "/gallaryphotoes/PUKT0041.JPG",
  "/gallaryphotoes/PUKT0075.JPG",
  "/gallaryphotoes/PUKT0078.JPG",
  "/gallaryphotoes/PUKT0233.JPG",
  "/gallaryphotoes/PUKT0251.JPG",
  "/gallaryphotoes/PUKT0281.JPG",
  "/gallaryphotoes/PUKT0321.JPG",
  "/gallaryphotoes/PUKT0354.JPG",
  "/gallaryphotoes/PUKT0443.JPG",
  "/gallaryphotoes/PUKT0451.JPG",
  "/gallaryphotoes/PUKT0542.JPG",
];

const Gallery = () => {
  return (
    <div className="pt-24 p-6 grid grid-cols-3 gap-4">
      {galleryImages.map((src, i) => (
        <img key={src} src={src} alt={`Gallery ${i + 1}`} className="w-full h-60 object-cover rounded-xl" loading="lazy" />
      ))}
    </div>
  );
};

export default Gallery;