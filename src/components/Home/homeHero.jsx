function HeroSection() {
  return (
    <>
      <div className="relative flex justify-center h-full w-full">
        <img
          className="brightness-50 w-full h-screen object-cover"
          src="https://images.unsplash.com/photo-1683402964714-a161848996d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="architecture"
        />
        <div className="flex flex-col absolute top-0 bottom-0 left-0 right-0 justify-center items-center text-[#FAFBF3]">
          <h1 className="text-3xl md:text-8xl uppercase text-center font-sansserif font-bold mb-3">
            Alcove
          </h1>
          <p className="text-base md:text-2xl text-center italic">
            Building Visions, Creating Reality
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
