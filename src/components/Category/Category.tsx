import "./Category.css";

export type category = {
  label: string;
  value: string;
  selected: boolean;
};

export type CategoryProps = {
  selectCategory: (category: string) => void;
  category: category;
};

const Category: React.FC<CategoryProps> = ({ selectCategory, category }) => {
  return (
    <li
      key={category.label}
      onClick={() => {
        selectCategory(category.value);
      }}
      className={`${category.selected && "selected"}`}
    >
      {category.label}
    </li>
  );
};

export default Category;
