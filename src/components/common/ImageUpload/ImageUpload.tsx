import placeholderImage from "../../../assets/placeholder-image.png";
import { IImageUpload } from "../../../core/interfaces/Common";

import Button from "../Button/Button";
import { ImageHolder } from "./ImageUpload.style";

const ImageUpload = ({
  src = placeholderImage,
  value,
  onChange,
}: IImageUpload) => {
  return (
    <ImageHolder className="flex">
      <input
        value={value}
        onChange={onChange}
        type="file"
        className="add-employee-input-image"
        accept="image/*"
      />
      <Button className="add-image-btn">+</Button>
      <div className="image-round-container">
        <img src={src} alt="Employee Image" />
      </div>
    </ImageHolder>
  );
};

export default ImageUpload;
