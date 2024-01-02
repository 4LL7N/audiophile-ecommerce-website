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
      <header className="bg-[#000000] h-[89px] flex justify-between items-center px-[24px] border-b-solid border-b border-b-[rgba(255,255,255,0.1)] relative z-[1] ">
        <img src="/assets/shared/tablet/icon-hamburger.svg" onClick={() => context.setMenu(!context.Menu) } />
        <img src="/assets/shared/desktop/logo.svg" />
        <img src="/assets/shared/desktop/icon-cart.svg" onClick={() => setOpenCart(!openCart) } />
      </header>
      <Outlet />
      { context.Pages == "home" || context.checkout  ? null : <PageMenu />}
      {context.checkout?null:
      
      <div className="flex flex-col items-center px-[24px] pt-[120px] bg-[#FAFAFA] ">
        <img
          className="rounded-[8px] "
          src="/assets/shared/mobile/image-best-gear.jpg"
        />
        <h1 className="text-[28px] font-bold text-black text-center mt-[40px] ">
          BRINGING YOU THE <a className="text-[#D87D4A]">BEST</a> AUDIO GEAR
        </h1>
        <p className="text-[15px] text-black text-center font-medium mt-[32px] mb-[120px] ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      }
      <footer className=" flex flex-col items-center w-[375px] h-[654px] bg-[#101010] px-[24px] ">
        <div className=" w-[101px] h-[4px] bg-[#D87D4A] mb-[48px] " />
        <img className="mb-[48px]" src="/assets/shared/desktop/logo.svg" />
        <h2 className="text-[#FFF] text-[13px] font-bold tracking-[2px] mb-[16px] " onClick={() => navigation("/home")} >
          HOME
        </h2>
        <h2 className="text-[#FFF] text-[13px] font-bold tracking-[2px] mb-[16px] "  onClick={() => navigation("/headphones")} >
          HEADPHONES
        </h2>
        <h2 className="text-[#FFF] text-[13px] font-bold tracking-[2px] mb-[16px] "  onClick={() => navigation("/speakers")}>
          SPEAKERS
        </h2>
        <h2 className="text-[#FFF] text-[13px] font-bold tracking-[2px] mb-[48px] " onClick={() => navigation("/earphones")}>
          EARPHONES
        </h2>
        <p className=" text-[#FFF] text-[15px] text-center text-opacity-50 font-medium mb-[48px] ">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <h3 className=" text-[#FFF] text-[15px] text-opacity-50 font-bold mb-[48px] ">
          Copyright 2021. All Rights Reserved
        </h3>
        <div className="flex justify-between w-[120px] mb-[38px] ">
          <img src="/assets/shared/desktop/icon-facebook.svg" />
          <img src="/assets/shared/desktop/icon-twitter.svg" />
          <img src="/assets/shared/desktop/icon-instagram.svg" />
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
