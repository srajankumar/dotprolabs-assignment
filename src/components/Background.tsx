const Background = () => {
  return (
    <>
      <img
        src="/assets/foreground.png"
        alt=""
        className="w-full absolute bg-background -z-10"
      />
      <img
        src="/assets/blur.png"
        alt=""
        className="absolute opacity-15 right-0 top-full"
      />
      <img
        src="/assets/blur.png"
        alt=""
        className="absolute -z-10 opacity-15 top-full pt-[70rem] md:-left-96"
      />
    </>
  );
};

export default Background;
