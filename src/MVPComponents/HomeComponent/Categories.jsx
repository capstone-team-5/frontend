import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from './Spinner'; // Let's assume you have a Spinner component for the category images

const Categories = () => {
  const GroceryCategories = [
    {
      name: "Fruits",
      logoSrc:
        "https://images.immediate.co.uk/production/volatile/sites/30/2023/02/Bowl-of-fruit-5155e6f.jpg?quality=90&resize=440,400",
      link: "/fruits",
    },
    {
      name: "Vegetables",
      logoSrc:
        "https://media.post.rvohealth.io/wp-content/uploads/2020/08/fruits-and-vegetables-thumb-1-732x549.jpg",
      link: "/vegetables",
    },
    {
      name: "Meat",
      logoSrc: "https://m.media-amazon.com/images/I/61iGja+X-PS.jpg",
      link: "/meat",
    },
    {
      name: "Seafood",
      logoSrc:
        "https://farmtojar.com/wp-content/uploads/2022/09/012BD4A8-9167-4182-BFDD-0CDDE752D2B0.jpeg",
        link: "/seafood",
    },
    {
      name: "Poultry",
      logoSrc:
        "https://cdn11.bigcommerce.com/s-efc47/images/stencil/1280x1280/products/2579/5433/images__13526__32612.1535055045.jpg?c=2",
        link: "/poultry"
    },
    {
      name: "Dairy",
      logoSrc:
        "https://www.usda.gov/sites/default/files/ams-june-natl-dairy-month-blog-060223.jpg",
      link: "/dairy",
    },
    {
      name: "Bread & Bakery",
      logoSrc:
        "https://www.referenceforbusiness.com/photos/bread-bakery-business-plan-437.jpg",
      link: "/bakery",
    },
    {
      name: "Spices",
      logoSrc:
        "https://www.tastingtable.com/img/gallery/tips-you-need-when-cooking-with-spices/intro-1683560012.jpg",
      link: "/spices",
    },
    {
      name: "Nuts",
      logoSrc:
        "https://www.tashasartisanfoods.com/blog/wp-content/uploads/2018/02/unnamed-2-2-1-scaled.jpg",
      link: "/nuts",
    },

    {
      name: "Pasta & Noodles",
      logoSrc:
        "https://www.tastingtable.com/img/gallery/30-types-of-pasta-and-when-you-should-be-using-them/l-intro-1659010210.jpg",
    },

    {
      name: "Condiments",
      logoSrc:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2020_06/3219176/condiments.jpeg",
    },

    {
      name: "Sweet Treats",
      logoSrc:
        "https://img.freepik.com/free-vector/realistic-sweet-treats-composition_1284-25449.jpg",
    },

    {
      name: "Snacks",
      logoSrc:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/unhealthy-snacks.png?strip=all",
      link: "/snacks",
    },

    {
      name: "Legumes",
      logoSrc:
        "https://oldwayspt.org/sites/default/files/thumbnails/image/iStock-1292432879_0.jpg",
      link: "/legumes",
    },

    {
      name: "Grains",
      logoSrc:
        "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-4foodgroups_grains_detailfeatureb.jpg?sfvrsn=3c347197_6",
      link: "/grains",
    },

    {
      name: "Canned Goods",
      logoSrc:
        "https://www.thedailymeal.com/img/gallery/13-canned-foods-you-should-avoid-at-the-grocery-store/intro-1688139829.jpg",
    },

    {
      name: "Hot Beverages",
      logoSrc:
        "https://www.comunicaffe.com/wp-content/uploads/2018/10/Hot-beverage.jpg",
    },
    {
      name: "Cold Beverages",
      logoSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIksH6bdhP1hxnFsM05sEybSWCnDqAkEpu5FWzsTLNqGL9dAtlPUTtM4Us5XpXw-rpnGI&usqp=CAU",
    },
    {
      name: "Breakfast & Cereal",
      logoSrc:
        "https://izzycooking.com/wp-content/uploads/2021/12/Fluffy-Breakfast-Pancakes.jpeg",
    },
    {
      name: "Frozen Foods",
      logoSrc:
        "https://www.mytwintiers.com/wp-content/uploads/sites/89/2019/04/2189636061fc636026d5517d51b3adf4_1554642775935_81008419_ver1.0.png?w=650",
    },
    {
      name: "International Foods",
      logoSrc:
        "https://thumbs.dreamstime.com/z/international-food-fork-plate-knife-isolated-world-17390585.jpg",
    },
    {
      name: "Vegan Foods",
      logoSrc: "https://s41230.pcdn.co/wp-content/uploads/2017/07/smoothie.jpg",
    },
    {
      name: "Dietary Lifestyles",
      logoSrc:
        "https://target.scene7.com/is/image/Target/GUEST_716b28c5-09ee-440e-8864-43b46f29bbc9?wid=167&hei=167&qlt=100&fmt=webp",
    },
    {
      name: "Baking Goods",
      logoSrc: "https://static.toiimg.com/photo/70074592.cms",
    },
    {
      name: "Halal Foods",
      logoSrc:
        "https://chiknrice.com/wp-content/uploads/2021/07/halal-food-asia-768x518-1.jpg",
    },
    {
      name: "Kosher Foods",
      logoSrc:
        "https://media.licdn.com/dms/image/D4D12AQHGy-kRjPnaOg/article-cover_image-shrink_600_2000/0/1689653913059?e=2147483647&v=beta&t=5FK8yHZRwxSQfUsW3wI0867PNqZ3fkuvgEUpFRUaefU",
    },
    {
      name: "Organic Foods",
      logoSrc:
        "https://learningtreechildcare.com/wp-content/uploads/2019/09/organic-food-on-board-fb.jpg",
    },
    {
      name: "Allergy Friendly",
      logoSrc:
        "https://www.eatingwithfoodallergies.com/wp-content/uploads/2018/01/Allergy-Friendly-Substitutes-1.jpg",
    },

    {
      name: "Non Processed",
      logoSrc:
        "https://img.livestrong.com/-/clsd/getty/887e538ab41a4f5b82ab53a5548a8d81.jpg",
    },
    {
      name: "Herbs",
      logoSrc:
        "https://i.etsystatic.com/6186509/r/il/5ead75/3817289188/il_fullxfull.3817289188_52d3.jpg",
    },
    // Add other partner objects here
  ];

  // if you wanted a spinner until all images load
  // const [imagesToLoad, setImagesToLoad] = useState(GroceryCategories.length);
  //
  // const imageLoaded = () => {
  //   setImagesToLoad((prevCount) => prevCount - 1);
  // };
  //
  // useEffect(() => {
  //   if (imagesToLoad === 0) {
  //     setLoading(false);
  //   }
  // }, [imagesToLoad]);

  //if (loading) {
  //   return <Spinner />;
  // }
  // and then your image has this onLoad handler:
  // <img
  //   src={category.logoSrc}
  //   alt={category.name}
  //   className="w-full h-full rounded-lg shadow-xl object-cover"
  //   onLoad={imageLoaded}
  // />
  const [showAllCategories, setShowAllCategories] = useState(false);
  const displayedCategories = showAllCategories
    ? GroceryCategories
    : GroceryCategories.slice(0, 8);

  const handleToggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoaded = (name) => {
    setLoadedImages(prevState => ({ ...prevState, [name]: true }));
  };


  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl mt-1 px-4">
        <h2 className="mb-4 lg:mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Featured Categories
        </h2>
        {/* <p className="mb-8 lg:mb-16 text-gray-500 text-center">Shop All</p> */}

        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-4 dark:text-gray-400">
          {displayedCategories.length > 0 ? (
            displayedCategories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <Link
                  to={category.link || "#"}
                  className="flex flex-col items-center p-4 rounded-lg"
                >
                  <div
                    className="w-48 h-40 mb-4 relative"> {/* the relative helps maintain the layout's stability. Even if the image is not yet visible (because it's still loading and has the class invisible), the space for the image is reserved, preventing layout shifts when the image loads. */}
                    {!loadedImages[category.name] &&
                      <Spinner/>} {/* Show spinner until image is loaded. Once the image loads, the onLoad handler is triggered, updating the state and making the image visible while hiding the spinner. */}
                    <img
                      src={category.logoSrc}
                      alt={category.name}
                      className={`w-full h-full rounded-lg shadow-xl object-cover ${!loadedImages[category.name] ? 'invisible' : ''}`}
                      onLoad={() => handleImageLoaded(category.name)}
                    />
                  </div>
                  <h3 className="mt-2 text-center font-bold">
                    {category.name}
                  </h3>
                </Link>
              </div>
            ))
          ) : (
            <p>No Categories Found!</p>
          )}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleToggleCategories}
            className="text-indigo-600 hover:underline mb-4 lg:mb-8 text-xl font-extrabold tracking-wide leading-tight text-center dark:text-white md:text-2xl"
          >
            {showAllCategories
              ? "Show Less Categories"
              : "Explore More Categories"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
