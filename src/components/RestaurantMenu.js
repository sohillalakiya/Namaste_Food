import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlicer"

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  const dispatch = useDispatch()

  if (resInfo === null) return <Shimmer />;
  console.log(resInfo);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

    // const { itemCards } =
    // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // const categories =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.["card"]?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );
  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((card) => {
          const {name, defaultPrice, price} = card.card.info;
          return (
            <li >
              <div className="m-3">
                <span>{name} - Rs. {price ? Math.floor(price/100) : Math.floor(defaultPrice/100)}</span>
                <button className="p-1 m-1 bg-purple-100 rounded" onClick={() => handleAddItem(card.card.info)}>Add</button>
              </div>
            </li>
          );
        })}
      </ul>

      {/* categories accordions */}
      {/* {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))} */}
    </div>
  );
};

export default RestaurantMenu;
