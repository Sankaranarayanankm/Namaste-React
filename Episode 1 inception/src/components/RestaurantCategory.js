import ItemList from "./ItemList";

const RestaruantCategory = (props) => {
  return (
    <div>
      <div className="w-6/12 cursor-pointer bg-gray-50 shadow-lg p-4 my-4 mx-auto ">
        <div onClick={props.setShowItem} className="flex justify-between">
          <span className="font-bold text-lg ">
            {props.title}({props.itemCards.length})
          </span>
          <span>{props.showItem ? "⬆️" : "⬇️"}</span>
        </div>
        {props.showItem &&
          props.itemCards.map((item) => {
            const info = item.card.info;
            return <ItemList key={info.id} {...info} />;
          })}
        ;
      </div>
    </div>
  );
};

export default RestaruantCategory;
