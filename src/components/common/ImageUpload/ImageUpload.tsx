import { useRef } from "react";
import placeholderImage from "../../../assets/placeholder-image.png";
import { IImageUpload } from "../../../core/interfaces/Common";

import Button from "../Button/Button";
import { ImageHolder } from "./ImageUpload.style";

const ImageUpload = ({
  src,
  handleImageInput,
  removeSelectedImage,
}: IImageUpload) => {
  const imageRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (src === "") imageRef?.current?.click();
    else {
      if (imageRef.current) {
        imageRef.current.value = "";
        removeSelectedImage();
      }
    }
  };

  return (
    <ImageHolder className="flex">
      <input
        ref={imageRef}
        onChange={handleImageInput}
        type="file"
        className="add-employee-input-image"
        accept="image/*"
      />
      <Button className="add-image-btn" onClick={() => handleButtonClick()}>
        {src !== "" ? "x" : "+"}
      </Button>
      <div className="image-round-container">
        <img src={src ? src : placeholderImage} alt="Employee Image" />
      </div>
    </ImageHolder>
  );
};

export default ImageUpload;
