import React from 'react';

const CategoryGrid = (props) => {
  const toggleCheckbox = () => {
    props.toggleCategorySelect(props.category._id);
  };
  return (
    <div className="col-md-2 category-single" onClick={toggleCheckbox}>
      <input type="checkbox" name="category" readOnly
      checked={props.selectedCategories.indexOf(props.category._id) === -1 ? false : true} />
      <label htmlFor="category">{props.category.name}</label>
    </div>
  )
}

export default CategoryGrid;
