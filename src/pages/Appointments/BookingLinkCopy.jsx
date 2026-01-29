import { useState } from "react";
import CheckIcon from "@/assets/icons/svg/CheckIcon";
import CopyIcon from "@/assets/icons/svg/CopyIcon";

const BookingLinkCopy = () => {
    let [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        const link = "https://techstore.com/book?id=store123";
        navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(()=> setCopied(false), 1500)
    }

  return (
    <div className=" p-6.25 w-full rounded-4xl bg-linear-to-b from-[#1A1A2E] to-[#16213E]">
        <h3 className=" font-inter font-normal text-base leading-6 text-white">
            Booking Link
        </h3>

        <div className=" mt-4 flex items-center justify-center gap-x-3">
            <div className=" cursor-pointer grow py-3.25 px-4 rounded-[14px] border border-[#0e4236] bg-[#111421] font-arimo font-normal text-base leading-6 text-white">
                https://techstore.com/book?id=store123
            </div>
            <button onClick={()=> handleCopy()} className="inset-shadow-primary cursor-pointer rounded-2xl bg-linear-to-b from-[#152252] to-[#111B3C] flex items-center justify-center gap-x-4 h-12.5 w-37.25 font-inter font-medium text-base leading-[150%] text-white">
                {
                    copied ? 
                    <CheckIcon className={`${copied ? 'scale-100' : ' scale-0'}  transition-all duration-500 size-2xl`}/> 
                    :
                    <CopyIcon className={`${copied ? 'scale-0' : 'scale-100'} transition-all duration-500 size-2xl`}/>
                }
                Copy Link
            </button>
        </div>
    </div>
  )
}

export default BookingLinkCopy