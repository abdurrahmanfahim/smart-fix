const MyCard = ({ preIcon, posIcon, count, title, percent }) => {
  return (
    <div
      className={`color-card p-2 sm:p-6 rounded-2xl flex sm:flex-row flex-col-reverse items-center sm:items-start gap-2 font-inter justify-between text-center sm:text-start`}
    >
      <div className="flex flex-col flex-1 gap-1 sm:gap-2 ">
        <div className="flex gap-3 ">
          {preIcon && <div className="">{preIcon}</div>}
          <p
            className={`text-gray text-sm font-normal leading-5 ${preIcon || "h-10 sm:h-auto"}`}
          >
            {title}
          </p>
        </div>
        <p className="text-lg sm:text-2xl leading-9 text-white "> {count}</p>
        <span
          className={`text-sm font-normal leading-5 ${
            percent?.startsWith("+")
              ? "text-success"
              : percent?.startsWith("-")
                ? "text-red"
                : "text-gray"
          }`}
        >
          {percent}
        </span>
      </div>
      {posIcon && <div className="size-8">{posIcon}</div>}
    </div>
  );
};

export default MyCard;
