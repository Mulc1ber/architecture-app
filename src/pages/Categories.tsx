import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { CardItem } from "../components";
import { useListCards } from "../hooks";

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

type CategoryData = Character | Location | Episode;

type CategoryParams = {
  name: "character" | "location" | "episode";
};

export const Categories: React.FC = () => {
  const params = useParams<CategoryParams>();

  const [categoriesName, setCategoriesName] = useState(params.name);
  const [pageNumberCategories, setPageNumberCategories] = useState(1);

  const { categories, isLoading, errorCategories, hasMore } = useListCards(
    categoriesName,
    pageNumberCategories
  );

  const observer = useRef<IntersectionObserver | null>(null);
  const lastNodeRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumberCategories((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    setCategoriesName(params.name);
    setPageNumberCategories(1);
  }, [params.name]);

  return (
    <div className="category-container">
      <h2>{params.name?.toUpperCase()}</h2>

      <div className="list-container">
        {categories &&
          categories.map((item: CategoryData, index: number) => {
            if (index === categories.length - 1) {
              return (
                <CardItem
                  key={`${item.id}-${item?.name}`}
                  item={item}
                  ref={lastNodeRef}
                />
              );
            } else {
              return <CardItem key={`${item.id}-${item.name}`} item={item} />;
            }
          })}
      </div>

      <div className="cardLoading">{isLoading && "Loading..."}</div>
      <div className="cardError">{errorCategories && errorCategories}</div>
    </div>
  );
};
