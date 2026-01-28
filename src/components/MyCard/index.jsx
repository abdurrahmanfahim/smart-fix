const MyCard = ({ preIcon, posIcon, count, title, percent }) => {
  return (
    <div
      className={`color-card p-6 rounded-2xl flex gap-2 font-inter justify-between`}
    >
      <div className="flex flex-col flex-1 gap-2 ">
        <div className="flex gap-3">
          {preIcon && <div className="">{preIcon}</div>}
          <p className="text-gray text-sm font-normal leading-5">{title}</p>
        </div>
        <p className="text-2xl leading-9 text-white "> {count}</p>
        {
          !percent.startsWith('+') && !percent.startsWith('-') && <span className="text-gray text-sm font-normal leading-5"> {percent}</span>
        }
        {
          percent.startsWith('+') && <span className="text-success text-sm font-normal leading-5"> {percent}</span>
        }
        {
          percent.startsWith('-') && <span className="text-red text-sm font-normal leading-5"> {percent}</span>
        }
      </div>
      {posIcon && <div className="">{posIcon}</div>}
    </div>
  );
};

export default MyCard;
