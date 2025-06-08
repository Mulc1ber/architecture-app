import axios from "axios";
import { useEffect, useState } from "react";

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

type CategoryType = "character" | "location" | "episode" | undefined;

export const useListCards = (
  categoriesName: CategoryType,
  pageNumberCategories: number
) => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorCategories, setErrorCategories] = useState<boolean | string>(
    false
  );
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    setCategories([]);
  }, [categoriesName]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setIsLoading(true);
    setErrorCategories(false);

    axios
      .get(
        `https://rickandmortyapi.com/api/${categoriesName}?page=${pageNumberCategories}`,
        { signal }
      )
      .then((res) => {
        setCategories((prev) => [...prev, ...res.data.results]);

        setHasMore(res.data.info.next !== null);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorCategories(err);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [categoriesName, pageNumberCategories]);

  return { categories, isLoading, errorCategories, hasMore };
};
