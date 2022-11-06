const Avatar = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`aspect-square rounded-full object-cover object-center ${className}`}
    />
  );
};

export default Avatar;
