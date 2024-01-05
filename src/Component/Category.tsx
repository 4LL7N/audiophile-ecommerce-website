import { useContext, useEffect, useRef } from "react";
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

// interface Others {
//   slug: string;
//   name: string;
//   image: {
//     mobile: string;
//     tablet: string;
//     desktop: string;
//   };
// }

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
}

function Category() {
  const context = useContext<context>(AudiophileEcommerceWebsite);
  const params = useParams();

  const naviagte = useNavigate();

  const pageData = useRef<ProductInfo[] | undefined>();


  useEffect(() => {
    context.setPage(params.page);
  }, []);

    pageData.current = context.data
      .filter((items: ProductInfo) => items.category == params.page)
      .reverse();
  
    
    // console.log(typeof pageData.current);
  
  // console.log(pageData);

  return (
    <>
      {params.page == "headphones" ||
      params.page == "earphones" ||
      params.page == "speakers" ? (
        <header className="w-[100%] h-[102px] md:h-[246px] bg-black flex items-center justify-center">
          <p className="text-[28px] md:text-[40px] text-[#FFF] font-bold tracking-[2px] ">
            {params.page?.toUpperCase()}
          </p>
        </header>
      ) : null}
      <div className=" flex flex-col items-center px-[24px] md:px-[39px] mb-[120px] bg-[#FAFAFA] ">
         { pageData.current?.map((items: ProductInfo) => {
            // const random = Math.random();
            return (
              <>
                <div className=" flex flex-col items-center mt-[64px]">
                  <img
                    className="rounded-[8px] "
                    src={
                      window.screen.width > 367
                        ? items.categoryImage.tablet
                        : items.categoryImage.mobile
                    }
                  />
                  <div className="flex flex-col items-center gap-[24px] md:gap-[0px] mt-[32px] md:mt-[52px] ">
                    <h2 className="text-[14px] text-[#D87D4A] tracking-[10px]">
                      NEW PRODUCT
                    </h2>
                    <h1 className=" md:w-[272px] text-[28px] md:text-[40px] text-black text-center font-bold mt-[16px] md:leading-[40px]  ">
                      {items.name}
                    </h1>
                    <p className=" md:w-[572px] text-[15px] text-black text-center opacity-50 font-medium md:mt-[32px] ">
                      {items.description}
                    </p>
                    <button
                      className="w-[160px] h-[48px] flex items-center justify-center bg-[#D87D4A] md:mt-[24px] "
                      onClick={() => naviagte(`/${params.page}/${items.slug}`)}
                    >
                      <p className="text-[#FFF] text-[13px] font-bold ">
                        See Product
                      </p>
                    </button>
                  </div>
                </div>
              </>
            )
          })}
      </div>
    </>
  );
}

export default Category;
