import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PageMenu from "./PageMenu";
import { AudiophileEcommerceWebsite } from "../App";
import Menupage from "./Menupage";
import Cart from "./Cart";
import Order from "./Order";

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


function Layout() {
  const navigation = useNavigate();
  const context = useContext<context>(AudiophileEcommerceWebsite)
  
  const [openCart , setOpenCart ] = useState<boolean>(false)
  

  useEffect(() => {
    context.setPage("home")
    
    navigation("/home");
  }, []);


  return (
    <>
      <header className={` w-[100%] bg-[#000000] h-[89px] flex ${ window.screen.width > 376?" px-[39.61px]": " px-[24px]  border-b-solid border-b border-b-[rgba(255,255,255,0.1)] "} items-center relative z-[1] `}>
        <div className={`flex justify-between w-[100%] items-center ${window.screen.width > 376? " h-[100%] border-b-solid border-b border-b-[rgba(255,255,255,0.1)]   " : "" } `} >
        <img  className="w-[16px] h-[15px] " src="/assets/shared/tablet/icon-hamburger.svg" onClick={() => context.setMenu(!context.Menu) } />
        <img className={` ${window.screen.width > 376 ? "ml-[42px]" :"" } `} src="/assets/shared/desktop/logo.svg" />
        <img className={` w-[23px] h-[20px] ${window.screen.width > 376 ? "ml-[465px]" :"" } `} src="/assets/shared/desktop/icon-cart.svg" onClick={() => setOpenCart(!openCart) } />
        </div>
      </header>
      <Outlet />
      { context.Pages == "home" || context.checkout  ? null : <PageMenu />}
      {context.checkout?null:
      
      <div className="flex flex-col items-center px-[24px] md:px-[39px] pt-[120px] bg-[#FAFAFA] ">
        <img
          className="rounded-[8px] "
          src={window.screen.width > 376? "/assets/shared/tablet/image-best-gear.jpg":"/assets/shared/mobile/image-best-gear.jpg"}
        />
        <h1 className="md:w-[573px] text-[28px] md:text-[40px] font-bold text-black text-center mt-[40px] ">
          BRINGING YOU THE <a className="text-[#D87D4A]">BEST</a> AUDIO GEAR
        </h1>
        <p className="md:w-[573px] text-[15px] text-black text-center font-medium mt-[32px] mb-[120px] opacity-50 ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      }
      <footer className=" flex flex-col items-center md:items-start md:px-[39px] w-[100%] h-[654px] md:h-[400px] bg-[#101010] px-[24px] ">
        <div className=" w-[101px] h-[4px] bg-[#D87D4A] mb-[48px] md:mb-[56px] " />
        <img className="mb-[48px] md:mb-[32px] " src="/assets/shared/desktop/logo.svg" />
        <div className="md:flex gap-[34px] md:mb-[16px] " >
        <h2 className=" text-[#FFF] text-[13px] font-bold tracking-[2px] mb-[16px] md:h-[25px] " onClick={() => navigation("/home")} >
          HOME
        </h2>
        <h2 className="text-[#FFF] text-[13px] font-bold tracking-[2px] mb-[16px] md:h-[25px] "  onClick={() => navigation("/headphones")} >
          HEADPHONES
        </h2>
        <h2 className="text-[#FFF] text-[13px] font-bold tracking-[2px] mb-[16px] md:h-[25px] "  onClick={() => navigation("/speakers")}>
          SPEAKERS
        </h2>
        <h2 className="text-[#FFF] text-[13px] font-bold tracking-[2px] mb-[48px] md:mb-[16px] md:h-[25px] " onClick={() => navigation("/earphones")}>
          EARPHONES
        </h2>
        </div>
        <p className=" text-[#FFF] text-[15px] text-center md:text-start text-opacity-50 font-medium mb-[48px] md:mb-[80px] ">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className=" md:w-[100%] md:flex  md:justify-between " >
        <h3 className=" text-[#FFF] text-[15px] text-opacity-50 font-bold mb-[48px] ">
          Copyright 2021. All Rights Reserved
        </h3>
        <div className="flex justify-between w-[120px] mb-[38px] ">
          <img src="/assets/shared/desktop/icon-facebook.svg" />
          <img src="/assets/shared/desktop/icon-twitter.svg" />
          <img src="/assets/shared/desktop/icon-instagram.svg" />
        </div>
        </div>
      </footer>
      
      <div className={`${ context.Menu || openCart || context.order ?"":"hidden"} duration-700 w-[100%] min-h-[4409px] max-h-[6200px] bg-black opacity-40 absolute top-[0] left-0 ${context.order?"z-[1]":""} `} />
      <Menupage />
      <Cart openCart={openCart} setOpenCart={setOpenCart} />
      <Order/>
    </>
  );
}

export default Layout;
