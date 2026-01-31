import image5 from "./images/image 5.svg";

function Image() {
  return (
    <div className="w-full flex justify-center mb-12">
      <div className="w-[95%] md:w-[80%] relative bottom-[10%]">
        <img
          src={image5}
          alt=""
          className="w-full h-auto rounded-lg object-contain mb-10"
        />
      </div>
    </div>
  );
}

export default Image;
