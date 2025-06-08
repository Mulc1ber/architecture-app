import { forwardRef, type HTMLAttributes } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LOCATION from "../assets/location.svg";
import TV from "../assets/tv.svg";

interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  created: string;
  image: string;
}

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
}

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

type CategoryItem = Character | Location | Episode;

type CardItemProps = HTMLAttributes<HTMLDivElement> & {
  item: CategoryItem;
};

type CategoryParams = {
  name: "character" | "location" | "episode";
};

export const CardItem = forwardRef<HTMLDivElement, CardItemProps>(
  ({ item, ...props }, ref) => {
    const params = useParams<CategoryParams>();
    const navigate = useNavigate();

    const handleClick = (categoryData: CategoryItem) => {
      navigate(`/categories/${params.name}/${categoryData.id}`, {
        state: categoryData,
      });
    };

    const getImageSrc = (item: CategoryItem): string => {
      if ("image" in item && item.image) return item.image;
      if ("episode" in item) return TV;
      if ("dimension" in item) return LOCATION;
      return "";
    };

    return (
      <div
        {...props}
        ref={ref}
        className="item-card"
        onClick={() => handleClick(item)}
      >
        <img src={getImageSrc(item)} alt={item.name} className="avatar" />
        <h2>{item.name}</h2>
      </div>
    );
  }
);
