import NextArrowIcon from "@/assets/icons/svg/NextArrowIcon";
import PrevArrowIcon from "@/assets/icons/svg/PrevArrowIcon";

const PaginationController = ({ currentPage, totalPages, pageChanger }) => {
  const pageNumbers = [];
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;

  pageNumbers.push(1);
  if (currentPage > 3) pageNumbers.push("...");

  if (currentPage === 1) afterPage += 3;
  if (currentPage === 2) afterPage += 2;
  if (currentPage === 3) afterPage += 1;

  if (currentPage === totalPages) beforePage -= 2;
  else if (currentPage === totalPages - 1) beforePage -= 1;

  for (let i = beforePage; i <= afterPage; i++) {
    if (i > 1 && i < totalPages) {
      pageNumbers.push(i);
    }
  }
  if (currentPage < totalPages - 2) pageNumbers.push("...");
  pageNumbers.push(totalPages);

  return (
    <div className=" flex items-center justify-center">
        <div className=" flex items-center">
            <button disabled={currentPage <= 1} onClick={()=> pageChanger(currentPage - 1)} className={`${currentPage <= 1 ? 'cursor-no-drop text-[#697077]' : 'cursor-pointer text-blue'} p-2 flex items-center gap-x-2 font-inter font-medium text-base leading-[100%]  tracking-[0.5px] `}>
                <PrevArrowIcon/>
                <span className=" hidden md:flex">
                    Previous
                </span>
            </button>

            {
                pageNumbers.map((item,index)=>
                    <button disabled={item === '...'} onClick={()=> pageChanger(item)} key={index} className={`${currentPage === item ? 'bg-[#A6C8FF]' : ' bg-transparent'} 
                    ${item === '...' ? "cursor-no-drop" : 'cursor-pointer'} size-7 sm:h-10 sm:w-10.5 flex items-center justify-center font-inter font-medium text-sm sm:text-base leading-[100%]  tracking-[0.5px] text-blue`}>
                        {item}
                    </button>
                )
            }

            <button disabled={currentPage >= totalPages} onClick={()=> pageChanger(currentPage + 1)} className={`${currentPage >= totalPages ? 'cursor-no-drop text-[#697077]' : 'cursor-pointer  text-blue '} p-2 flex items-center gap-x-2 font-inter font-medium text-base leading-[100%]  tracking-[0.5px]`}>
                <span className=" hidden md:flex">
                    Next
                </span>
                <NextArrowIcon/>
            </button>
        </div>
    </div>
  )
};

export default PaginationController;
