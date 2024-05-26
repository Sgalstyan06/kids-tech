import { useState } from "react";

import Category, { category } from "../Category/Category";

import "./Categories.css";

const InitialCategories: category[] = [
  { label: "Все темы", value: "", selected: true },
  { label: "Логика и мышление", value: "Логика и мышление", selected: false },
  { label: "Загадки", value: "Загадки", selected: false },
  { label: "Головоломки", value: "Головоломки", selected: false },
  { label: "Путешествия", value: "Страны и столицы", selected: false },
  { label: "Окружающий мир", value: "Окружающий мир", selected: false },
];

const Categories = ({
  changeCategory,
}: {
  changeCategory: (category: string) => void;
}) => {
  const [categories, setCategories] = useState(InitialCategories);

  function selectCategory(value: string) {
    changeCategory(value);
    setCategories((prev) =>
      prev.map((item) =>
        item.value === value
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  }
  
  return (
    <aside>
      <ul>
        {categories.map((category) => (
          <Category
            key={category.label}
            selectCategory={selectCategory}
            category={category}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Categories;
