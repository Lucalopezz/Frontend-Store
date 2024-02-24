import React from "react";

export const RoundedImage = ({ src, alt, width }) => {
  return (
    <img
      className={`rounded-full ${width}`}
      src={src}
      alt={alt}
    />
  );
};
