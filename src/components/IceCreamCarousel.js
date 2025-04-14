// src/components/IceCreamCarousel.jsx
import React, { useEffect, useState } from "react";

function IceCreamCarousel() {
  const [iceCreams, setIceCreams] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [beverages, setBeverages] = useState([]);

  useEffect(() => {
    // Mock Ice Cream Data
    const mockIceCreams = [
      { title: "Gadbad Ice Cream", image: "https://i.ytimg.com/vi/LvyGMCRNnw8/maxresdefault.jpg" },
      { title: "Chocolate Sundae", image: "https://bakesbychichi.com/wp-content/uploads/2015/05/DSC_1274.jpg" },
      { title: "Strawberry Delight", image: "https://img.freepik.com/premium-photo/strawberry-ice-cream-delight_729149-4780.jpg" },
      { title: "Mango Sorbet", image: "https://www.scoopclub.com.au/wp-content/uploads/2019/12/Mango-Ice-Cream-Recipe.jpg" },
      { title: "Vanilla Bean", image: "https://img.taste.com.au/erX_KgeO/taste/2016/11/vanilla-bean-ice-cream-12608-1.jpeg" },
      { title: "Mint Chocolate Chip", image: "https://amandascookin.com/wp-content/uploads/2020/07/mint-chocolate-chip-ice-cream-SQ-500x500.jpg" },
    ];

    // Mock Dessert Data
    const mockDesserts = [
      { title: "Chocolate Cake", image: "https://www.yummycake.co.in/wp-content/uploads/2022/11/Yummy-Chocolate-Cake.jpeg" },
      { title: "Cheesecake", image: "https://enzasquailhollowkitchen.com/wp-content/uploads/2023/01/Italian-Ricotta-Cheesecake-10.jpg" },
      { title: "Brownies", image: "https://www.quickneasyrecipes.net/wp-content/uploads/2012/12/Red-Velvet-Brownies.jpg" },
    ];

    // Mock Beverage Data
    const mockBeverages = [
      { title: "Milkshake", image: "https://www.forkandbeans.com/wp-content/uploads/2017/05/Nice-Cream-Milkshakes-4b.jpg" },
      { title: "Iced Coffee", image: "https://www.spicesinmydna.com/wp-content/uploads/2018/05/Mocha-Coconut-Iced-Coffees-3.jpg" },
      { title: "Lemonade", image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Sparkling-Ginger-Lemonade_EXPS_FT21_40142_F_0521_1.jpg" },
    ];

    setIceCreams(mockIceCreams);
    setDesserts(mockDesserts);
    setBeverages(mockBeverages);
  }, []); // Runs only once when the component mounts

  return (
    <div className="mt-4"> {/* Margin top for spacing */}
      <h2 className="text-center">Ice Creams</h2>
      <CategorySection items={iceCreams} />

      <h2 className="text-center">Desserts</h2>
      <CategorySection items={desserts} />

      <h2 className="text-center">Beverages</h2>
      <CategorySection items={beverages} />
    </div>
  );
}

// ✅ Component to Reuse for Ice Creams, Desserts, Beverages
function CategorySection({ items }) {
  return (
    <div className="d-flex flex-wrap justify-content-center"> {/* Flexbox for layout */}
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="m-2 text-center"> {/* Margin for spacing */}
            <img 
              src={item.image} 
              alt={item.title} 
              className="img-fluid rounded" // Bootstrap classes for responsive image and rounded corners
              style={{ width: "500px", height: "300px" }} // Fixed size for images
              onError={(e) => e.target.src = "https://via.placeholder.com/300x200"} // Fallback image
            />
            <p>{item.title}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default IceCreamCarousel;