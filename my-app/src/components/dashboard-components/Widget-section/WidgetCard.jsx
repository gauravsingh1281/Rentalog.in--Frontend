import { Link } from "react-router-dom";

const WidgetCard = ({ route, widgetName }) => {
  return (
    <Link to={route}>
      <section className="w-full m-auto aspect-square bg-textWhite p-4 font-semibold flex justify-center items-center rounded-lg shadow-widget opacity-1 hover:shadow-widget-hover text-center">
        <span>{widgetName}</span>
      </section>
    </Link>
  );
};
export default WidgetCard;
