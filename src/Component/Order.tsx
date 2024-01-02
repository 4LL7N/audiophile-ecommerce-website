import { useContext } from "react";
import { AudiophileEcommerceWebsite } from "../App";
import { useNavigate } from "react-router-dom";

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
  cart: Cart[];
  setCart: (cart: Cart[]) => void;
  total: boolean;
  setTotal: (total: boolean) => void;
  sum: number;
  checkout: boolean;
  setCheckout: (checkout: boolean) => void;
  order: boolean;
  setOrder: (order: boolean) => void;
}

function Order() {
  const context = useContext<context>(AudiophileEcommerceWebsite);
  const navigate = useNavigate()
  return (
    <>
      <div
        className={` w-[327px] min-h-[600px] bg-[#FFF] p-[32px] absolute left-[24px] z-[3] ${
          context.order
            ? "duration-800 ease-out top-[224px]"
            : "duration-800 ease-in top-[-700px]"
        } rounded-[8px] `}
      >
        <img
          className="w-[64px] h-[64px]"
          src="/assets/checkout/icon-order-confirmation.svg"
        />
        <h1 className="text-[24px] text-black font-bold mt-[23px] ">
          THANK YOU FOR YOUR ORDER
        </h1>
        <p className="text-[18px] text-black font-medium opacity-50 mt-[16px] ">
          You will receive an email confirmation shortly.
        </p>
        <div className="w-[100%] h-[232px] rounded-[8px] overflow-hidden mt-[24px] ">
          <div className="flex flex-col items-center p-[24px] bg-[#F1F1F1] ">
            <div className="flex justify-between w-[100%] pb-[12px] border-b border-b-solid border-b-[#000000] border-opacity-10 ">
              <div className="flex">
                <img
                  className=" w-[50px] h-[50px] "
                  src={context.cart[0]?.image}
                />
                <div className=" flex flex-col justify-center ml-[16px] ">
                  <h3 className=" text-[15px] text-black font-bold ">
                    {context.cart[0]?.name}
                  </h3>
                  <p className="text-[14px] text-black font-bold opacity-50 ">
                    {context.cart[0]?.price}
                  </p>
                </div>
              </div>
              <p className="text-[15px] text-black font-bold opacity-50 ">
                x{context.cart[0]?.quantity}
              </p>
            </div>
            <p className="mt-[12px] mb-[1px] text-[12px] text-black opacity-50 ">
              and {context.cart.length - 1} other item(s)
            </p>
          </div>
          <div className="flex flex-col gap-[8px] pl-[24px] pt-[15px] bg-black w-[100%] h-[100%] ">
            <p className="text-[15px] text-[#FFF] font-medium opacity-50 ">
              GRAND TOTAL
            </p>
            <h3 className="text-[18px] text-[#FFF] font-bold ">
              {context.sum}
            </h3>
          </div>
        </div>
        <button
          className="w-[100%] h-[48px] flex items-center justify-center bg-[#D87D4A] mt-[24px] "
          onClick={() => {
            navigate("/home");
            context.setOrder(false)
          }}
        >
          <p className="text-[#FFF] text-[13px] font-bold ">CHEKOUT</p>
        </button>
      </div>
    </>
  );
}

export default Order;
