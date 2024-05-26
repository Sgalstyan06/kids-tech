import React, { useState, useEffect, Suspense, lazy } from "react";

import Categories from "../components/Categories/Categories";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Loading from "../components/Loading/Loading";

import { KidstechType } from "../services/types";

import "./Container.css";

const Courses = lazy(() => import("../components/Courses/Courses"));

interface ContainerProps {
  data: KidstechType[];
  error: string;
}

const Container: React.FC<ContainerProps> = ({ data, error }) => {
  const [kidstechData, setKidstechData] = useState<KidstechType[]>([]);

  useEffect(() => {
    if (data.length > 0) {
      setKidstechData(data);
    }
  }, [data]);

  function changeCategory(category: string) {
    if (category === "") {
      setKidstechData(data);
    } else {
      const filterByCategory = data.filter((item) =>
        item.tags.includes(category)
      );
      setKidstechData(filterByCategory);
    }
  }

  return (
    <main>
      <Categories changeCategory={changeCategory} />
      <ErrorBoundary error={error}>
        <Suspense fallback={<Loading />}>
          <Courses courses={kidstechData} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};

export default Container;



