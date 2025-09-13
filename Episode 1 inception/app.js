import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - RestaurantContainer
 *  - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - About
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-app-by-town-brandcrowd.png"
          alt="App Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    id: 1,
    name: "Meghna Foods",
    cuisines: ["Biriyani", "North Indian", "Asian"],
    rating: "4.4 stars",
    deliveryTime: "38 mins",
    image:
      "https://png.pngtree.com/background/20230528/original/pngtree-an-arrangement-of-various-indian-food-picture-image_2778221.jpg",
  },
  {
    id: 2,
    name: "Paradise Biryani",
    cuisines: ["Biryani", "Mughlai", "Hyderabadi"],
    rating: "4.6 stars",
    deliveryTime: "32 mins",
    image:
      "https://media.istockphoto.com/id/1137312508/photo/assortment-of-products-with-high-sugar-level.jpg?s=612x612&w=is&k=20&c=HcotHSUB1oxhXngR8-CBMmp3E1jV90MhgKjWRN42Wsg=",
  },
  {
    id: 3,
    name: "Haldiram’s",
    cuisines: ["Snacks", "North Indian", "Sweets"],
    rating: "4.2 stars",
    deliveryTime: "25 mins",
    image:
      "https://media.istockphoto.com/id/1084423556/photo/vegetarian-lentil-salad-with-fried-cheese-greens-and-fresh-vegeables.jpg?s=612x612&w=is&k=20&c=QPkaqNdsFbEoXsqwjD3G9nLpNBod-8JTexbhPfryrCs=",
  },
  {
    id: 4,
    name: "Saravana Bhavan",
    cuisines: ["South Indian", "Vegetarian", "Breakfast"],
    rating: "4.5 stars",
    deliveryTime: "28 mins",
    image:
      "https://media.istockphoto.com/id/617781022/photo/baskets-of-onion-rings-curly-fries-and-cheese-sticks.jpg?s=612x612&w=is&k=20&c=uBgRkHvXTmc8Ieo0oHEmjIfycGxjRWy142SGxgByIv8=",
  },
  {
    id: 5,
    name: "Barbeque Nation",
    cuisines: ["Grill", "North Indian", "Continental"],
    rating: "4.3 stars",
    deliveryTime: "42 mins",
    image:
      "https://media.istockphoto.com/id/1480296179/photo/bengali-wedding-ritual-bhat-kapor-of-bride.jpg?s=612x612&w=is&k=20&c=tJccZ18rdiv4nW4XPlKbKcu3OVD9yTAzpaLuKWgs6IY=",
  },
  {
    id: 6,
    name: "Bikanervala",
    cuisines: ["Street Food", "Chaat", "Sweets"],
    rating: "4.1 stars",
    deliveryTime: "22 mins",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    id: 7,
    name: "KFC",
    cuisines: ["Fast Food", "Burgers", "Snacks"],
    rating: "4.0 stars",
    deliveryTime: "30 mins",
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
  },
  {
    id: 8,
    name: "Domino’s Pizza",
    cuisines: ["Pizzas", "Italian", "Desserts"],
    rating: "4.2 stars",
    deliveryTime: "27 mins",
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
  },
  {
    id: 9,
    name: "Punjabi Dhaba",
    cuisines: ["Punjabi", "North Indian", "Tandoor"],
    rating: "4.3 stars",
    deliveryTime: "35 mins",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
  },
  {
    id: 10,
    name: "Wow! Momo",
    cuisines: ["Momos", "Chinese", "Snacks"],
    rating: "4.1 stars",
    deliveryTime: "20 mins",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img className="res-logo" src={resData.image} alt="res logo" />
      <h3>{resData?.name}</h3>
      <h4>{resData?.cuisines.join(", ")} </h4>
      <h4>{resData?.rating} </h4>
      <h4>{resData?.deliveryTime} </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((item) => (
          <RestaurantCard resData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />

      {/* {Footer} */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
