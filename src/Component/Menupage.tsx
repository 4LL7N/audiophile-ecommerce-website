import { useContext } from "react"
import { AudiophileEcommerceWebsite } from "../App"
import PageMenu from "./PageMenu"

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
  

function Menupage(){
    const context = useContext<context>(AudiophileEcommerceWebsite)
    return(
        <>
            <div className={` w-[100%] bg-[#FFF] py-[32px] md:pt-[57px] md:pb-[67px] md:px-[39px]  absolute left-0 ${context.Menu?" duration-700 ease-out top-[87px] ":" duration-700 ease-in top-[-752px] "} z-200 `} >
                <PageMenu  />
            </div>
        </>
    )
}

export default Menupage