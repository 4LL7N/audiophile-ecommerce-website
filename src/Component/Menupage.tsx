import PageMenu from "./PageMenu"

function Menupage(props:{Menu:boolean}){
    return(
        <>
            <div className={` w-[100%] bg-[#FFF] pt-[32px] pb-[32px] absolute left-0 ${props.Menu?" duration-700 ease-out top-[87px] ":" duration-700 ease-in top-[-752px] "} z-200 `} >
                <PageMenu/>
            </div>
        </>
    )
}

export default Menupage