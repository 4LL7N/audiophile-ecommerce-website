import { useNavigate, useParams } from "react-router-dom"

function PageMenu(){
  const navigation = useNavigate()
  // const params = useParams()
  // console.log(params);
  
  
    return(
        <>
        <section className=" flex flex-col bg-[#FFF] ">
        <div className=" flex flex-col items-center justify-end w-[100%] h-[217px] bg-trasnparent relative">
            <img
              className=" w-[140px] h-[140px] absolute top-[0]  "
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            />
          <div className=" flex flex-col items-center justify-end w-[327px] h-[165px] bg-[#F1F1F1] rounded-[8px] " >
            <h1 className=" text-[#000000] text-[15px] font-bold mb-[17px] ">
              HEADPHONES
            </h1>
            <div className="flex items-center justify-center gap-[13.32px] mb-[22px]" onClick={() => navigation("/headphones")} >
              <p className=" text-[13px] text-[#000000] text-opacity-50 font-bold ">
                SHOP
              </p>
              <img src="/assets/shared/desktop/icon-arrow-right.svg" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-end w-[100%] h-[217px] bg-trasnparent relative mt-[16px] ">
            <img
              className="mb-[-51px] w-[155px] h-[150px] absolute top-[0] "
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            />
          <div className=" flex flex-col items-center justify-end w-[327px] h-[165px] bg-[#F1F1F1] rounded-[8px] " >
            <h1 className=" text-[#000000] text-[15px] font-bold mb-[17px] ">
              SPEAKERS
            </h1>
            <div className="flex items-center justify-center gap-[13.32px] mb-[22px] " onClick={() => navigation("/speakers")} >
              <p className=" text-[13px] text-[#000000] text-opacity-50 font-bold ">
                SHOP
              </p>
              <img src="/assets/shared/desktop/icon-arrow-right.svg" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-end w-[100%] h-[217px] bg-trasnparent relative mt-[16px] ">
            <img
              className="w-[147px] h-[133px] absolute top-[0] "
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            />
          <div className=" flex flex-col items-center justify-end w-[327px] h-[165px] bg-[#F1F1F1] rounded-[8px] " >
            <h1 className=" text-[#000000] text-[15px] font-bold mb-[17px] ">
              EARPHONES
            </h1>
            <div className="flex items-center justify-center gap-[13.32px] mb-[22px] " onClick={() => navigation("/earphones")} >
              <p className=" text-[13px] text-[#000000] text-opacity-50 font-bold ">
                SHOP
              </p>
              <img src="/assets/shared/desktop/icon-arrow-right.svg" />
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default PageMenu