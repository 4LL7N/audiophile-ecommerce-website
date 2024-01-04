import { useNavigate } from "react-router-dom";
import PageMenu from "./PageMenu";

function Home() {
  const navigaton = useNavigate();

  return (
    <>
      <div
        className={` flex flex-col items-center w-[100%] ${
          window.screen.width > 367
            ? "bg-[url(/assets/home/tablet/image-header.jpg)] h-[639px]"
            : "bg-[url(/assets/home/mobile/image-header.jpg)] h-[510px]"
        } relative bg-brightness-50 bg-cover bg-bottom  `}
      >
        <div className="bg-black bg-opacity-60 h-[100%] w-[100%]" />
        <div className={` flex flex-col items-center w-[100%] px-[23px] md:px-[194.5px] absolute top-0 left-0 md:pt-[126px] pt-[108px] `}>
          <h2 className="text-[#FFF] text-opacity-50 text-[14px] tracking-[10px] mb-[16px] md:mb-[24px] ">
            NEW PRODUCT
          </h2>
          <h1 className="text-[#FFF] text-[36px] md:text-[56px] text-center font-bold tracking-[1.3px] md:tracking-[2px] mb-[24px] ">
            XX99 Mark II HeadphoneS
          </h1>
          <p className=" md:w-[349px] text-[#FFF] text-opacity-70 text-[15px] text-center font-medium mb-[28px] ">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button
            className="w-[160px] h-[48px] flex items-center justify-center bg-[#D87D4A] "
            onClick={() => navigaton("/xx99-mark-two-headphones")}
          >
            <p className="text-[#FFF] text-[13px] font-bold ">See Product</p>
          </button>
        </div>
      </div>
      <section className=" px-[24px] md:px-[39px] mt-[40px]">
        <PageMenu />
        <div className=" flex flex-col items-center w-[100%] h-[600px] rounded-[8px] bg-[#D87D4A] mt-[120px] px-[23px] relative overflow-hidden ">
          <div className="flex items-center justify-center bg-transparent rounded-[50%] border border-solid border-[#FFF] w-[558px] h-[558px]  absolute top-[-119px] opacity-20 ">
            <div className="flex items-center justify-center bg-transparent rounded-[50%] border border-solid border-[#FFF] w-[320px] h-[320px] ">
              <div className=" bg-transparent rounded-[50%] border border-solid border-[#FFF] w-[279px] h-[279px] " />
            </div>
          </div>
          <img
            className="w-[155px] h-[195px] mt-[57px] mb-[32px] "
            src="/assets/home/mobile/image-speaker-zx9.png"
          />
          <h1 className="text-[36px] text-[#FFF] text-center font-bold mb-[24px] ">
            ZX9
            <br />
            SPEAKER
          </h1>
          <p className="text-[15px] text-[#FFF] text-center font-medium opacity-75 mb-[24px] ">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button
            className="w-[160px] h-[48px] flex items-center justify-center bg-black"
            onClick={() => navigaton(`/zx9-speaker`)}
          >
            <p className=" text-[13px] text-[#FFF] font-bold ">See Product</p>
          </button>
        </div>
        <div
          className={` flex flex-col justify-center gap-[32px] w-[100%] h-[320px] overflow-hidden rounded-[8px] mt-[24px] relative `}
        >
          <img
            className="w-[100%] h-[100%] "
            src="/assets/home/mobile/image-speaker-zx7.jpg"
          />
          <div className="absolute left-[24px]">
            <h1 className="text-[28px] text-black font-bold tracking-[2px] ">
              ZX7 SPEAKER
            </h1>
            <button
              className=" flex items-center justify-center w-[160px] h-[48px] bg-[transparent] border border-solid border-black "
              onClick={() => navigaton(`/zx7-speaker`)}
            >
              <p className="text-[13px] text-black font-bold ">See Product</p>
            </button>
          </div>
        </div>
        <div>
          <img
            className="w-[100%] h-[200px] rounded-[8px] mt-[24px] "
            src="/assets/home/mobile/image-earphones-yx1.jpg"
          />
          <div className=" flex flex-col justify-center gap-[32px] w-[100%] h-[200px] bg-[#F1F1F1] rounded-[8px] pl-[24px] mt-[24px] ">
            <h1 className="text-[28px] text-black font-bold tracking-[2px] ">
              YX1 EARPHONES
            </h1>
            <button
              className=" flex items-center justify-center w-[160px] h-[48px] bg-[transparent] border border-solid border-black "
              onClick={() => navigaton(`/yx1-earphones`)}
            >
              <p className="text-[13px] text-black font-bold ">See Product</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
