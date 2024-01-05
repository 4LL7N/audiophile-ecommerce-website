import { useNavigate } from "react-router-dom"
import { AudiophileEcommerceWebsite } from "../App";
import { useContext } from "react";

interface ProductInfo {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}

interface Cart {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface context {
  data: ProductInfo;
  Pages: any;
  setPage: (Pages: any) => void;
  cart:Cart[];
  setCart:(cart:Cart[]) => void;
  total:boolean;
  setTotal:(total:boolean) =>  void;
  sum:number;
  setSum:(sum:number) => void;
  checkout:boolean;
  setCheckout:(checkout:boolean) => void;
  order:boolean;
  setOrder:(order:boolean) => void;
  Menu:boolean;
  setMenu:(Menu:boolean) => void;
}


function PageMenu(){
  const navigation = useNavigate()
  const context = useContext<context>(AudiophileEcommerceWebsite)
    return(
        <>
        <section className=" flex flex-col md:flex-row bg-[#FAFAFA] md:px-[39px] ">
        <div className=" flex flex-col items-center justify-end w-[100%] h-[217px] bg-trasnparent relative  ">
            <img
              className=" w-[140px] h-[140px] absolute top-[0]  "
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            />
          <div className=" flex flex-col items-center justify-end w-[327px] md:w-[223px] h-[165px] bg-[#F1F1F1] rounded-[8px] " >
            <h1 className=" text-[#000000] text-[15px] font-bold mb-[17px] ">
              HEADPHONES
            </h1>
            <div className="flex items-center justify-center gap-[13.32px] mb-[22px]" onClick={() => {navigation("/headphones");context.Menu?context.setMenu(false):null}} >
              <p className=" text-[13px] text-[#000000] text-opacity-50 font-bold ">
                SHOP
              </p>
              <img src="/assets/shared/desktop/icon-arrow-right.svg" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-end w-[100%] h-[217px] bg-trasnparent relative mt-[16px] md:mt-[0px] ">
            <img
              className="mb-[-51px] w-[155px] h-[150px] absolute top-[0] "
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            />
          <div className=" flex flex-col items-center justify-end w-[327px]  md:w-[223px] h-[165px] bg-[#F1F1F1] rounded-[8px] " >
            <h1 className=" text-[#000000] text-[15px] font-bold mb-[17px] ">
              SPEAKERS
            </h1>
            <div className="flex items-center justify-center gap-[13.32px] mb-[22px] " onClick={() => {navigation("/speakers");context.Menu?context.setMenu(false):null}} >
              <p className=" text-[13px] text-[#000000] text-opacity-50 font-bold ">
                SHOP
              </p>
              <img src="/assets/shared/desktop/icon-arrow-right.svg" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-end w-[100%] h-[217px] bg-trasnparent relative mt-[16px] md:mt-[0px] ">
            <img
              className="w-[147px] h-[133px] absolute top-[0] "
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            />
          <div className=" flex flex-col items-center justify-end w-[327px] md:w-[223px] h-[165px] bg-[#F1F1F1] rounded-[8px] " >
            <h1 className=" text-[#000000] text-[15px] font-bold mb-[17px] ">
              EARPHONES
            </h1>
            <div className="flex items-center justify-center gap-[13.32px] mb-[22px] " onClick={() => {navigation("/earphones");context.Menu?context.setMenu(false):null}} >
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