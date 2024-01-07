import { useContext, useRef, useState } from "react";
import { AudiophileEcommerceWebsite } from "../App";
import { useNavigate, useParams } from "react-router-dom";

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
  
  interface Others {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
  
  interface Cart {
    image: string|undefined;
    name: string|undefined;
    price: number|undefined;
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
  }
  

function Product(){
    const context = useContext<context>(AudiophileEcommerceWebsite);
    const [productNum, setProductNum] = useState<number>(1);
    const pageData = useRef<ProductInfo | undefined>();
    const params = useParams();
    const naviagte = useNavigate();
    console.log(context.data)

    pageData.current = context.data.find(
        (item: ProductInfo) => item.slug == params.product
      );

      console.log(pageData.current?.image.tablet)

    function productPush() {
        let Pname:string|string[]|undefined = pageData.current?.name;
        Pname = Pname?.split(" ");
        Pname?.pop();
        Pname = Pname?.join(" ");
        let inCart = true;
        context.cart.find((element) => {
          element.name == Pname;
          element.name == Pname ? (element.quantity += productNum) : null;
          element.name == Pname ? (inCart = false) : (inCart = true);
        });
    
        console.log(inCart);
    
        if (inCart) {
          let productNumber = productNum;
          let obj: Cart = {
            image: pageData.current?.image.mobile,
            name: Pname,
            price: pageData.current?.price,
            quantity: productNumber,
          };
          context.setCart([...context.cart, obj]);
        }
        setProductNum(1);
        context.setTotal(!context.total);
      }
    

    return(
        <>
        <div className="flex flex-col items-start mt-[16px] lg:mt-[80px] bg-[#FAFAFA] px-[24px] md:px-[39px] lg:px-[165px] ">
            <p
              className="text-[15px] text-black font-medium opacity-50 "
              onClick={() => history.back()}
            >
              Go Back
            </p>
            <div className=" lg:w-[100%] md:flex md:gap-[69px] md:items-center lg:justify-between " >
              <img
                className="rounded-[8px] mt-[24px] md:w-[281px] md:h-[480px] lg:w-[540px] lg:h-[560px] "
                src={window.screen.width > 769?  "../" + pageData.current?.image.desktop  :window.screen.width > 367? "../" + pageData.current?.image.tablet :"../" + pageData.current?.image.mobile}
              />
              <div className="lg:w-[445px] " >
                <h2 className="text-[14px] text-[#D87D4A] tracking-[10px] mt-[32px] ">
                  NEW PRODUCT
                </h2>
                <h1 className="text-[24px] text-black font-bold mt-[24px] md:mt-[17px] ">
                  {pageData.current?.name}
                </h1>
                <p className="text-[15px] text-black font-medium opacity-50 mt-[24px] md:mt-[32px] ">
                  {pageData.current?.description}
                </p>
                <p className="text-[18px] text-black font-bold tracking-[1.286px] mt-[24px] md:mt-[32px] ">
                  $ {pageData.current?.price}
                </p>
                <div className=" w-[100%] flex justify-between lg:justify-start lg:gap-[16px] mt-[32px] ">
                  <div className=" w-[120px] h-[48px] flex items-center justify-between bg-[#F1F1F1] px-[15.5px]">
                    <p
                      className="text-[13px] text-black font-bold opacity-25 "
                      onClick={() => setProductNum(productNum - 1)}
                    >
                      -
                    </p>
                    <p className="text-[13px] text-black font-bold">
                      {productNum}
                    </p>
                    <p
                      className="text-[13px] text-black font-bold opacity-25 "
                      onClick={() => setProductNum(productNum + 1)}
                    >
                      +
                    </p>
                  </div>
                  <button
                    className="w-[160px] h-[48px] flex items-center justify-center bg-[#D87D4A] "
                    onClick={() => productPush()}
                  >
                    <p className="text-[#FFF] text-[13px] font-bold ">
                      ADD TO CART
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-[100%]  lg:flex lg:justify-between " >
            <div className="flex flex-col mt-[88px] ">
              <h2 className="text-[24px] md:text-[32px] text-black font-bold tracking-[0.8px] ">
                FEATURES
              </h2>
              <p className=" lg:w-[635px] text-[15px] text-black font-medium opacity-50 mt-[24px] md:mt-[32px] ">
                {pageData.current?.features}
              </p>
            </div>
            {/* <div className=" flex flex-col mt-[88px] "> */}
              <div className="lg:w-[350px] md:flex lg:flex-col md:gap-[250px] lg:gap-[30px] mt-[88px] " >
              <h2 className="text-[24px] md:text-[32px] text-black font-bold tracking-[0.8px] ">
                IN THE BOX
              </h2>
              <div className="flex flex-col mt-[24px] md:mt-[0] gap-[8px] ">
                {pageData.current?.includes.map(
                  (items: { quantity: number; item: string }) => {
                    return (
                      <>
                        <div className="flex ">
                          <p className="text-[ 15px] text-[#D87D4A] font-bold mr-[10px] opacity-100 ">
                            {items.quantity}x
                          </p>
                          <p className="text-[15px] text-black font-medium opacity-50">
                            {items.item}
                          </p>
                        </div>
                      </>
                    );
                  }
                )}
              </div>
              </div>
              </div>
              <div className="mt-[88px] md:flex md:gap-[16px] lg:gap-[30px] ">
                <div className="md:flex md:flex-col md:gap-[16px] lg:gap-[30px] " >
                  <img
                    className=" rounded-[8px] md:w-[277px] md:h-[174px] lg:w-[445px] lg:h-[280px] "
                    src={window.screen.width > 769?"../" + pageData.current?.gallery.first.desktop :window.screen.width > 367? "../" + pageData.current?.gallery.first.tablet : "../" + pageData.current?.gallery.first.mobile}
                  />
                  <img
                    className=" rounded-[8px] mt-[24px] md:mt-[0] md:w-[277px] md:h-[174px] lg:w-[445px] lg:h-[280px]  "
                    src={window.screen.width > 769?"../" + pageData.current?.gallery.second.desktop :window.screen.width > 367? "../" + pageData.current?.gallery.second.tablet :"../" +  pageData.current?.gallery.second.mobile}
                  />
                </div>
                <img
                  className=" rounded-[8px] mt-[24px] md:mt-[0] md:w-[395px] md:h-[368px] lg:w-[635px] lg:h-[592px] "
                  src={window.screen.width > 769?"../" + pageData.current?.gallery.third.desktop :window.screen.width > 367? "../" + pageData.current?.gallery.third.tablet :"../" + pageData.current?.gallery.third.mobile}
                />
              </div>
              <div className="flex flex-col items-center mt-[120px] lg:mt-[125px] ">
                <h1 className="text-[24px] md:text-[32px] text-black font-bold tracknig-[0.8px] ">
                  YOU MAY ALSO LIKE
                </h1>
                <div className="md:w-[100%] md:justify-between flex flex-col md:flex-row items-center gap-[56px] md:gap-[11px] mt-[40px] lg:mt-[64px] ">
                  {pageData.current?.others.map((items: Others) => {
                    let categroy:string| string[] = items.slug.split("-")
                    categroy = categroy[categroy.length - 1]
                    return (
                      <div className="flex flex-col items-center gap-[32px]  ">
                        <img
                          className="rounded-[8px] "
                          src={window.screen.width > 769?`../${items.image.desktop}`:window.screen.width > 367? `../${items.image.tablet}` :"../" + items.image.mobile}
                        />
                        <h2 className="text-[24px] text-black font-bold tracking-[1.7px] md:mt-[8px] ">
                          {items.name}
                        </h2>
                        <button
                          className="w-[160px] h-[48px] flex items-center justify-center bg-[#D87D4A] "
                          onClick={() => naviagte(`/${categroy}/${items.slug}`)}
                        >
                          <p className="text-[#FFF] text-[13px] font-bold ">
                            See Product
                          </p>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            {/* </div> */}
          </div>
        </>
    )
}

export default Product