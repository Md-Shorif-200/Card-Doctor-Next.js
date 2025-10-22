import Container from "./Container";

export default function CommonBanner({ Route, Title, Bg_img }) {
  return (
    <div
      className="w-full h-[300px] bg-black/30 rounded-sm relative"
      style={{
        backgroundImage: `url(${Bg_img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
    >
      <Container>
        <div>
          <h1 className="absolute top-1/2 text-3xl lg:text-[45px] capitalize text-white font-semibold transform  -translate-y-[50%]">
            {" "}
            {Title}{" "}
          </h1>

          <div className=" absolute bottom-0 left-[50%] transform -translate-x-[50%] bg-[#FF3811] text-white text-[20px] p-3 w-[250px] text-center capitalize ">
            <p>
              {" "}
              {Route}/{Title}{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
