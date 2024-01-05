import { useContext, useEffect, useRef, useState } from "react";
import { AudiophileEcommerceWebsite } from "../App";

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
  setSum: (sum: number) => void;
  checkout: boolean;
  setCheckout: (checkout: boolean) => void;
  order: boolean;
  setOrder: (order: boolean) => void;
}

function Checkout() {
  const context = useContext<context>(AudiophileEcommerceWebsite);
  const [Emoney, setEmoney] = useState<boolean>(true);
  const [CashonDelivery, setCashonDelivery] = useState<boolean>(false);
  const [shipping, setShipping] = useState<number>(0);
  const [VAT, setVAT] = useState<number>(0);

  const Name = useRef<any>(null);
  const Email = useRef<any>(null);
  const Phone = useRef<any>(null);
  const Address = useRef<any>(null);
  const ZIP = useRef<any>(null);
  const City = useRef<any>(null);
  const Country = useRef<any>(null);
  const ENumber = useRef<any>(null);
  const EPIN = useRef<any>(null);

  const [regError, setRegError] = useState<boolean>(false);
  const RegError = useRef<boolean>(false);
  const [emptyEmail, setEmptyEmail] = useState<boolean>(false);
  const EmptyEmail = useRef<boolean>(false);
  const [empName, setEmpName] = useState<boolean>(false);
  const EmpName = useRef<boolean>(false);
  const [empPhone, setEmpPhone] = useState<boolean>(false);
  const EmpPhone = useRef<boolean>(false);
  const [empAddress, setEmpAddress] = useState<boolean>(false);
  const EmpAddress = useRef<boolean>(false);
  const [empZIP, setEmpZIP] = useState<boolean>(false);
  const EmpZIP = useRef<boolean>(false);
  const [empCity, setEmpCity] = useState<boolean>(false);
  const EmpCity = useRef<boolean>(false);
  const [empCountry, setEmpCountry] = useState<boolean>(false);
  const EmpCountry = useRef<boolean>(false);
  const [empENumber, setEmpENumber] = useState<boolean>(false);
  const EmpENumber = useRef<boolean>(false);
  const [empEPIN, setEmpEPIN] = useState<boolean>(false);
  const EmpEPIN = useRef<boolean>(false);
  // console.log(Email.current?.value)

  function EmnoeyHandle() {
    setEmoney(true);
    setCashonDelivery(false);
  }
  function CashonDeliveryHandle() {
    setEmoney(false);
    setCashonDelivery(true);
  }

  useEffect(() => {
    // console.log(context.sum);
    setShipping(Number((context.sum * 0.009).toFixed(0)));
    setVAT(Number((context.sum / 5).toFixed(0)));
    // console.log(shipping);
    // console.log(VAT);
  }, []);

  function ErrorCheck() {
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (Email.current.value == "") {
      setEmptyEmail(true);
      EmptyEmail.current = true;
    } else if (!emailRegex.test(Email.current.value)) {
      setRegError(true);
      RegError.current = true;
    } else {
      setRegError(false);
      setEmptyEmail(false);
      EmptyEmail.current = false;
      RegError.current = false;
    }

    if (Name.current.value == "") {
      setEmpName(true);
      EmpName.current = true;
    } else {
      setEmpName(false);
      EmpName.current = false;
    }

    if (Phone.current.value == "") {
      setEmpPhone(true);
      EmpPhone.current = true;
    } else {
      setEmpPhone(false);
      EmpPhone.current = false;
    }

    if (Address.current.value == "") {
      setEmpAddress(true);
      EmpAddress.current = true;
    } else {
      setEmpAddress(false);
      EmpAddress.current = false;
    }

    if (ZIP.current.value == "") {
      setEmpZIP(true);
      EmpZIP.current = true;
    } else {
      setEmpZIP(false);
      EmpZIP.current = false;
    }

    if (City.current.value == "") {
      setEmpCity(true);
      EmpCity.current = true;
    } else {
      setEmpCity(false);
      EmpCity.current = false;
    }

    if (Country.current.value == "") {
      setEmpCountry(true);
      EmpCountry.current = true;
    } else {
      setEmpCountry(false);
      EmpCountry.current = false;
    }
    if (Emoney) {
      if (ENumber.current.value == "") {
        setEmpENumber(true);
        EmpENumber.current = true;
      } else {
        setEmpENumber(false);
        EmpENumber.current = false;
      }

      if (EPIN.current.value == "") {
        setEmpEPIN(true);
        EmpEPIN.current = true;
      } else {
        setEmpEPIN(false);
        EmpEPIN.current = false;
      }
    }else{
      EmpENumber.current = false;
      EmpEPIN.current = false;
    }
  }

  return (
    <>
      <div className="pt-[16px] pb-[97px] px-[24px] bg-[#FAFAFA] ">
        <p
          className="text-[15px] text-black font-medium opacity-50 "
          onClick={() => history.back()}
        >
          Go Back
        </p>
        <div className="p-[23px] pb-[31px] bg-[#FFF] rounded-[8px] mt-[24px] ">
          <h1 className="text-[32px] text-black font-bold  ">CHECKOUT</h1>
          <div>
            <h2 className="text-[13px] text-[#D87D4A] font-bold mt-[32px] md:mt-[41px] ">
              BILLING DETAILS
            </h2>
            <div className="flex flex-wrap md:gap-x-[16px] ">
              <div className=" flex flex-col mt-[16px] gap-[9px] ">
                <div className="flex justify-between  w-[100%] ">
                  <h3
                    className={`text-[12px] ${
                      empName ? "text-[#CD2C2C]" : "text-black"
                    } font-bold tracking-[-0.2] `}
                  >
                    Name
                  </h3>
                  <p className="text-[12px] text-[#CD2C2C] font-medium ">
                    {empName ? "cannot be empty" : ""}
                  </p>
                </div>
                <input
                  className={`w-[280px] md:w-[309px] h-[56px] rounded-[8px] border border-solid ${
                    empName ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                  } bg-transparent px-[24px] py-[18px] text-[14px] text-black font-bold `}
                  type="text"
                  placeholder="Alexei Ward"
                  ref={Name}
                />
              </div>
              <div className=" flex flex-col w-[280px] mt-[24px] md:mt-[16px] gap-[9px] ">
                <div className="flex justify-between  w-[100%] ">
                  <h3
                    className={`text-[12px] ${
                      regError || emptyEmail ? "text-[#CD2C2C]" : "text-black"
                    } font-bold tracking-[-0.2] `}
                  >
                    Email Address
                  </h3>
                  <p className="text-[12px] text-[#CD2C2C] font-medium ">
                    {regError
                      ? "Wrong format"
                      : emptyEmail
                      ? "cannot be empty"
                      : ""}
                  </p>
                </div>
                <input
                  className={`w-[100%] md:w-[309px] h-[56px] rounded-[8px] border border-solid ${
                    regError || emptyEmail
                      ? "border-[#CD2C2C]"
                      : "border-[#CFCFCF]"
                  } bg-transparent px-[24px] py-[18px] text-[14px] text-black font-bold `}
                  type="text"
                  placeholder="alexei@mail.com"
                  ref={Email}
                />
              </div>
              <div className=" flex flex-col mt-[24px]  md:mt-[16px] gap-[9px] ">
                <div className="flex justify-between  w-[100%] ">
                  <h3
                    className={`text-[12px] ${
                      empPhone ? "text-[#CD2C2C]" : "text-black"
                    } font-bold tracking-[-0.2] `}
                  >
                    Phone Number
                  </h3>
                  <p className="text-[12px] text-[#CD2C2C] font-medium ">
                    {empPhone ? "cannot be empty" : ""}
                  </p>
                </div>
                <input
                  className={`w-[280px] md:w-[309px] h-[56px] rounded-[8px] border border-solid ${
                    empPhone ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                  } bg-transparent px-[24px] py-[18px] text-[14px] text-black font-bold `}
                  type="text"
                  placeholder="+1 202-555-0136"
                  ref={Phone}
                />
              </div>
            </div>
          </div>
          <div className=" mt-[32px] md:mt-[52px] ">
            <h2 className="text-[13px] text-[#D87D4A] font-bold mt-[32px] ">
              SHIPPING INFO
            </h2>
            <div className="flex flex-wrap md:gap-x-[16px] ">
              <div className=" flex flex-col mt-[16px] gap-[9px] ">
                <div className="flex justify-between  w-[100%] ">
                  <h3
                    className={`text-[12px] ${
                      empAddress ? "text-[#CD2C2C]" : "text-black"
                    } font-bold tracking-[-0.2] `}
                  >
                    Your Address
                  </h3>
                  <p className="text-[12px] text-[#CD2C2C] font-medium ">
                    {empAddress ? "cannot be empty" : ""}
                  </p>
                </div>
                <input
                  className={`w-[280px] md:w-[634px] md:w-[100%] h-[56px] rounded-[8px] border border-solid ${
                    empAddress ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                  } bg-transparent px-[24px] py-[18px] text-[14px] text-black font-bold `}
                  type="text"
                  placeholder="1137 Williams Avenue"
                  ref={Address}
                />
              </div>
              <div className=" flex flex-col mt-[24px] md:mt-[16px] gap-[9px] ">
                <div className="flex justify-between  w-[100%] ">
                  <h3
                    className={`text-[12px] ${
                      empZIP ? "text-[#CD2C2C]" : "text-black"
                    } font-bold tracking-[-0.2] `}
                  >
                    ZIP Code
                  </h3>
                  <p className="text-[12px] text-[#CD2C2C] font-medium ">
                    {empZIP ? "cannot be empty" : ""}
                  </p>
                </div>
                <input
                  className={`w-[280px] md:w-[309px] h-[56px] rounded-[8px] border border-solid ${
                    empZIP ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                  } bg-transparent px-[24px] py-[18px] text-[14px] text-black font-bold `}
                  type="text"
                  placeholder="10001"
                  ref={ZIP}
                />
              </div>
              <div className=" flex flex-col mt-[24px] md:mt-[16px] gap-[9px] ">
                <div className="flex justify-between  w-[100%] ">
                  <h3
                    className={`text-[12px] ${
                      empCity ? "text-[#CD2C2C]" : "text-black"
                    } font-bold tracking-[-0.2] `}
                  >
                    City
                  </h3>
                  <p className="text-[12px] text-[#CD2C2C] font-medium ">
                    {empCity ? "cannot be empty" : ""}
                  </p>
                </div>
                <input
                  className={`w-[280px] md:w-[309px] h-[56px] rounded-[8px] border border-solid ${
                    empCity ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                  } bg-transparent px-[24px] py-[18px] text-[14px] text-black font-bold `}
                  type="text"
                  placeholder="New York"
                  ref={City}
                />
              </div>
              <div className=" flex flex-col mt-[24px] md:mt-[16px] gap-[9px] ">
                <div className="flex justify-between  w-[100%] ">
                  <h3
                    className={`text-[12px] ${
                      empCountry ? "text-[#CD2C2C]" : "text-black"
                    } font-bold tracking-[-0.2] `}
                  >
                    Country
                  </h3>
                  <p className="text-[12px] text-[#CD2C2C] font-medium ">
                    {empCountry ? "cannot be empty" : ""}
                  </p>
                </div>
                <input
                  className={`w-[280px] md:w-[309px] h-[56px] rounded-[8px] border border-solid ${
                    empCountry ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                  } bg-transparent px-[24px] py-[18px] text-[14px] text-black font-bold `}
                  type="text"
                  placeholder="United States"
                  ref={Country}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[13px] text-[#D87D4A] font-bold mt-[32px] ">
              PAYMENT DETAILS
            </h2>
            <div className="flex flex-col md:flex-row mt-[16px] gap-[16px] md:gap-[229px] ">
              <h2 className="text-[13px] text-black font-bold tracking-[-0.2]">
                Payment Method
              </h2>
              <div className="md:flex md:flex-col gap-y-[16px] ">
                <div
                  className={`flex items-center gap-[16px]  w-[280px] md:w-[309px] h-[56px] rounded-[8px] border border-solid ${
                    Emoney ? "border-[#D87D4A]" : "border-[#CFCFCF]"
                  } bg-transparent px-[16px] relative `}
                >
                  <input
                    className="appearance-none w-[20px] h-[20px] rounded-[10px] border border-solid border-[#CFCFCF] "
                    id="e-Money"
                    name="e-Money"
                    type="checkbox"
                    onChange={EmnoeyHandle}
                    checked={Emoney}
                  />
                  <label
                    className="text-[14px] text-black font-bold tracking-[-0.2.5]"
                    htmlFor="e-Money"
                  >
                    e-Money
                  </label>
                  <div
                    className={` w-[10px] h-[10px] absolute left-[21px] top-[22px] rounded-[50%] bg-[#D87D4A] ${
                      Emoney ? "" : "hidden"
                    } `}
                  />
                </div>

                <div
                  className={`flex items-center gap-[16px]  w-[280px] md:w-[309px] h-[56px] rounded-[8px] border border-solid ${
                    CashonDelivery ? "border-[#D87D4A]" : "border-[#CFCFCF]"
                  } bg-transparent px-[16px] relative `}
                >
                  <input
                    className="appearance-none w-[20px] h-[20px] rounded-[10px] border border-solid border-[#CFCFCF]"
                    id="Cash-on-Delivery"
                    name="Cash-on-Delivery"
                    type="checkbox"
                    onChange={CashonDeliveryHandle}
                    checked={CashonDelivery}
                  />
                  <label
                    className="text-[14px] text-black font-bold tracking-[-0.2.5]"
                    htmlFor="Cash-on-Delivery"
                  >
                    Cash-on-Delivery
                  </label>
                  <div
                    className={` w-[10px] h-[10px] absolute left-[21px] top-[22px] rounded-[50%] bg-[#D87D4A] ${
                      CashonDelivery ? "" : "hidden"
                    }  `}
                  />
                </div>
              </div>
            </div>
            {Emoney ? (
              <div className="flex flex-col md:flex-row mt-[32px] gap-[24px] ">
                <div className="flex flex-col gap-[9px]">
                  <div className="flex justify-between  w-[100%] ">
                    <h2
                      className={`text-[12px] ${
                        empENumber ? "text-[#CD2C2C]" : "text-black"
                      } font-bold tracking-[-0.2] `}
                    >
                      e-Money Number
                    </h2>
                    <p className="text-[12px] text-[#CD2C2C] font-medium ">
                      {empENumber ? "cannot be empty" : ""}
                    </p>
                  </div>
                  <input
                    className={`w-[280px] md:w-[309px] h-[56px] rounded-[8px] border border-solid ${
                      empENumber ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                    } bg-transparent px-[24px] py-[18px] text-[14px] text-black font-bold `}
                    type="text"
                    placeholder="238521993"
                    ref={ENumber}
                  />
                </div>
                <div className="flex flex-col gap-[9px]">
                  <div className="flex justify-between  w-[100%] ">
                    <h2
                      className={`text-[13px] ${
                        empEPIN ? "text-[#CD2C2C]" : "text-black"
                      } font-bold tracking-[-0.2] `}
                    >
                      e-Money PIN
                    </h2>
                    <p className="text-[12px] text-[#CD2C2C] font-medium ">
                      {empEPIN ? "cannot be empty" : ""}
                    </p>
                  </div>
                  <input
                    className={`w-[280px] md:w-[309px] h-[56px] rounded-[8px] border border-solid ${
                      empEPIN ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                    } bg-transparent px-[24px] py-[18px] text-[14px] text-black font-bold `}
                    type="text"
                    placeholder="6891"
                    ref={EPIN}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-[100%] h-[612px] rounded-[8px] bg-[#FFF] px-[24px] py-[32px] ">
          <h1 className="text-[18px] text-black font-bold ">SUMMERY</h1>
          <div className=" flex flex-col gap-[24px] mt-[31px] h-[240px] w-[100%] mt-[31px] mb-[31px] overflow-scroll ">
            {context.cart.map((items: Cart) => {
              return (
                <>
                  <div className="flex justify-between items-center w-[100%] h-[64px] ">
                    <div className="flex">
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
                    <p className="text-[15] text-black font-bold opacity-50">
                      x{items.quantity}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-between">
            <h3 className="text-[15px] text-black font-medium opacity-50 ">
              TOTAL
            </h3>
            <p className="text-[18px] text-black font-bold ">$ {context.sum}</p>
          </div>
          <div className="flex justify-between mt-[8px]">
            <h3 className="text-[15px] text-black font-medium opacity-50 ">
              SHIPPING
            </h3>
            <p className="text-[18px] text-black font-bold ">$ {shipping}</p>
          </div>
          <div className="flex justify-between mt-[8px]">
            <h3 className="text-[15px] text-black font-medium opacity-50 ">
              VAT (INCLUDED)
            </h3>
            <p className="text-[18px] text-black font-bold ">$ {VAT}</p>
          </div>
          <div className="flex justify-between mt-[24px] ">
            <h3 className="text-[15px] text-black font-medium opacity-50 ">
              TOTAL
            </h3>
            <p className="text-[18px] text-[#D87D4A] font-bold ">
              $ {context.sum + shipping + VAT}
            </p>
          </div>
          <button
            className="w-[100%] h-[48px] flex items-center justify-center bg-[#D87D4A] mt-[24px] "
            onClick={() => {
              ErrorCheck();
              !RegError.current &&
              !EmpAddress.current &&
              !EmpCity.current &&
              !EmpCountry.current &&
              !EmpENumber.current &&
              !EmpEPIN.current &&
              !EmpName.current &&
              !EmpPhone.current &&
              !EmpZIP.current &&
              !EmptyEmail.current
                ? context.setOrder(true)
                : null;
              !RegError.current &&
              !EmpAddress.current &&
              !EmpCity.current &&
              !EmpCountry.current &&
              !EmpENumber.current &&
              !EmpEPIN.current &&
              !EmpName.current &&
              !EmpPhone.current &&
              !EmpZIP.current &&
              !EmptyEmail.current
                ? context.setSum(context.sum + shipping + VAT)
                : null;
            }}
          >
            <p className="text-[#FFF] text-[13px] font-bold ">CONTINUE & PAY</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
