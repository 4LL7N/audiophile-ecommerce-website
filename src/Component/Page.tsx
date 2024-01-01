import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AudiophileEcommerceWebsite } from "../App";

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

interface Cart{
  image:string,
  name:string,
  price:number,
  quantity:number
}

interface context {
  data: ProductInfo;
  Pages: any;
  setPage: (Pages: any) => void;
  cart:Cart[];
  setCart:(cart:Cart[]) => void;
  total:boolean;
  setTotal:(total:boolean) =>  void
}

function Page() {
  const context = useContext<context>(AudiophileEcommerceWebsite);
  const params = useParams();

  const naviagte = useNavigate();

  const pageData = useRef<ProductInfo | ProductInfo[] | undefined>();

  const [productNum , setProductNum] = useState<number>(1)

  useEffect(() => {
    context.setPage(params.page);
    // setProductNum(1)
  }, []);
  // console.log(params.page);
  // useEffect(() => {
    
  // },[pageData.current])
  
  function productPush(){
    let Pname = pageData.current?.name
    Pname = Pname.split(" ")
    Pname.pop()
    Pname = Pname.join(" ")
    let inCart = true
    context.cart.find((element) => {element.name == Pname;element.quantity += productNum;element.name == Pname?inCart = false:inCart=true;console.log(element.name);console.log(Pname) })

    console.log(inCart);
    
    if( inCart ){
      let obj:Cart = {
        image:pageData.current?.image.mobile,
        name:Pname,
        price:pageData.current?.price,
        quantity:productNum
      }
      context.setCart([...context.cart,obj])
    }
    setProductNum(1)
    context.setTotal(!context.total)
  }

  if (
    params.page == "headphones" ||
    params.page == "earphones" ||
    params.page == "speakers"
  ) {
    pageData.current = context.data
      .filter((items: ProductInfo) => items.category == params.page)
      .reverse();
  } else {
    pageData.current = context.data.find(
      (item: ProductInfo) => item.slug == params.page
    );
    // console.log(typeof pageData.current);
  }
  // console.log(pageData);



  return (
    <>
      {params.page == "headphones" ||
      params.page == "earphones" ||
      params.page == "speakers" ? (
        <header className="w-[100%] h-[102px] bg-black flex items-center justify-center">
          <p className="text-[28px] text-[#FFF] font-bold tracking-[2px] ">
            {params.page?.toUpperCase()}
          </p>
        </header>
      ) : null}
      <div className=" flex flex-col items-center px-[24px] mb-[120px] ">
        {params.page == "headphones" ||
        params.page == "earphones" ||
        params.page == "speakers" ? (
          pageData.current?.map((items: ProductInfo) => {
            // const random = Math.random();
            return (
              <>
                <div className=" flex flex-col items-center mt-[64px]">
                  <img
                    className="rounded-[8px] "
                    src={`${items.categoryImage.mobile}`}
                  />
                  <div className="flex flex-col items-center gap-[24px] mt-[32px] ">
                    <h2 className="text-[14px] text-[#D87D4A] tracking-[10px]">
                      NEW PRODUCT
                    </h2>
                    <h1 className="text-[28px] text-black text-center font-bold mt-[] ">
                      {items.name}
                    </h1>
                    <p className="text-[15px] text-black text-center opacity-50 font-medium  ">
                      {items.description}
                    </p>
                    <button
                      className="w-[160px] h-[48px] flex items-center justify-center bg-[#D87D4A] "
                      onClick={() => naviagte(`/${items.slug}`)}
                    >
                      <p className="text-[#FFF] text-[13px] font-bold ">
                        See Product
                      </p>
                    </button>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <div className="flex flex-col items-start mt-[16px]">
            <p className="text-[15px] text-black font-medium opacity-50 ">
              Go Back
            </p>
            <img
              className="rounded-[8px] mt-[24px] "
              src={pageData.current?.image.mobile}
            />
            <h2 className="text-[14px] text-[#D87D4A] tracking-[10px] mt-[32px] ">
              NEW PRODUCT
            </h2>
            <h1 className="text-[24px] text-black font-bold mt-[24px] ">
              {pageData.current?.name}
            </h1>
            <p className="text-[15px] text-black font-medium opacity-50 mt-[24px] ">
              {pageData.current?.description}
            </p>
            <p className="text-[18px] text-black font-bold tracking-[1.286px] mt-[24px] ">
              $ {pageData.current?.price}
            </p>
            <div className=" w-[100%] flex justify-between mt-[32px] ">
              <div className=" w-[120px] h-[48px] flex items-center justify-between bg-[#F1F1F1] px-[15.5px]">
                <p className="text-[13px] text-black font-bold opacity-25 " onClick={() => setProductNum(productNum - 1) } >
                  -
                </p>
                <p className="text-[13px] text-black font-bold">{productNum}</p>
                <p className="text-[13px] text-black font-bold opacity-25 "  onClick={() => setProductNum(productNum + 1) } >
                  +
                </p>
              </div>
              <button className="w-[160px] h-[48px] flex items-center justify-center bg-[#D87D4A] " onClick={() => productPush() } >
                <p className="text-[#FFF] text-[13px] font-bold ">
                  ADD TO CART
                </p>
              </button>
            </div>
            <div className="flex flex-col mt-[88px] ">
              <h2 className="text-[24px] text-black font-bold tracking-[0.8px] ">
                FEATURES
              </h2>
              <p className="text-[15px] text-black font-medium opacity-50 mt-[24px] ">
                {pageData.current?.features}
              </p>
            </div>
            <div className=" flex flex-col mt-[88px] ">
              <h2 className="text-[24px] text-black font-bold tracking-[0.8px] ">
                IN THE BOX
              </h2>
              <div className="flex flex-col mt-[24px] gap-[8px] ">
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
              <div className="mt-[88px]">
                <div>
                  <img
                    className=" rounded-[8px] "
                    src={pageData.current?.gallery.first.mobile}
                  />
                  <img
                    className=" rounded-[8px] mt-[24px] "
                    src={pageData.current?.gallery.second.mobile}
                  />
                </div>
                <img
                  className=" rounded-[8px] mt-[24px] "
                  src={pageData.current?.gallery.third.mobile}
                />
              </div>
              <div className="flex flex-col items-center mt-[120px] " >
                <h1 className="text-[24px] text-black font-bold tracknig-[0.8px] ">
                  YOU MAY ALSO LIKE
                </h1>
                <div className=" flex flex-col items-center gap-[56px] mt-[40px]">
                  {pageData.current?.others.map((items: Others) => {
                    return (
                      <div className="flex flex-col items-center gap-[32px] ">
                        <img
                          className="rounded-[8px] "
                          src={items.image.mobile}
                        />
                        <h2 className="text-[24px] text-black font-bold tracking-[1.7px] ">
                          {items.name}
                        </h2>
                        <button
                          className="w-[160px] h-[48px] flex items-center justify-center bg-[#D87D4A] "
                          onClick={() => naviagte(`/${items.slug}`)}
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
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Page;
