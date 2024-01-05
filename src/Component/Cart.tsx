import { useContext, useEffect } from "react";
import { AudiophileEcommerceWebsite } from "../App";
import { useNavigate } from "react-router-dom";

interface ProductInfo {
  [x: string]: any;
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
  sum:number,
  setSum:(sum:number) => void,
  checkout:boolean,
  setCheckout:(checkout:boolean) => void
}

function Cart(porps: { openCart: boolean,setOpenCart:(openCart:boolean) => void }) {
  const context = useContext<context>(AudiophileEcommerceWebsite);
  const navigate =  useNavigate()
  
  useEffect(()=>{
    context.sum = 0
    let allSum = 0
    for(let i = 0; i< context.cart.length;i++){
      console.log(context.cart[i]);
        allSum += (context.cart[i].price)*context.cart[i].quantity
           
    }
    context.setSum(allSum)
  },[context.total])

  return (
    <>
      <div
        className={` w-[327px] md:w-[377px] h-[488px] bg-[#FFF] rounded-[8px] px-[28px] py-[32px] absolute left-[24px] md:left-[351px] ${
          porps.openCart
            ? "duration-700 ease-out top-[114px] "
            : "duration-700 ease-out top-[-488px] "
        } `}
      >
        <div className=" flex justify-between w-[100%] ">
          <h1 className="text-[18px] text-black font-bold tracking-[1.2px] ">
            CART ({context.cart.length})
          </h1>
          <p className="text-[15px] text-black font-medium opacity-50 underline underline-offset-1 " onClick={() => {context.setCart([]);context.setSum(0)}} >
            Remove all
          </p>
        </div>
        <div className="flex flex-col gap-[24px] w-[100%] h-[240px] overflow-scroll mt-[32px] ">
          {context.cart.map((items: Cart) => {
            return (
              <>
                <div className="flex justify-between items-center w-[100%] h-[64px] ">
                  <div className="flex" >
                    <img
                      className="w-[64px] h-[64px] rounded-[8px] "
                      src={items.image}
                    />
                    <div className=" flex flex-col justify-center ml-[16px]">
                      <h1 className="text-black text-[15px] font-bold  ">
                        {items.name}
                      </h1>
                      <p className="text-black text-[15px] font-bold opacity-50 ">
                        ${items.price}
                      </p>
                    </div>
                  </div>
                  <div className=" w-[96px] h-[32px] flex items-center justify-between bg-[#F1F1F1] px-[11.5px] ml-[20px] ">
                    <p
                      className="text-[13px] text-black font-bold opacity-25 "
                      onClick={() => {items.quantity -= 1;context.setCart([...context.cart]);context.setTotal(!context.total)}}
                    >
                      -
                    </p>
                    <p className="text-[13px] text-black font-bold">
                      {items.quantity}
                    </p>
                    <p
                      className="text-[13px] text-black font-bold opacity-25 "
                      onClick={() => {items.quantity += 1;context.setCart([...context.cart]);context.setTotal(!context.total)}}
                    >
                      +
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className=" flex justify-between w-[100%] mt-[31px] ">
          <p className="text-[15px] text-black font-medium opacity-50 ">
            TOTAL
          </p>
          <p className="text-[18px] text-black font-bold">${context.sum}</p>
        </div>
        <button className="w-[100%] h-[48px] flex items-center justify-center bg-[#D87D4A] mt-[24px] "  onClick={() => {navigate("/checkout");context.setCheckout(true);porps.setOpenCart(false)} }>
          <p className="text-[#FFF] text-[13px] font-bold " >CHEKOUT</p>
        </button>
      </div>
    </>
  );
}

export default Cart;
