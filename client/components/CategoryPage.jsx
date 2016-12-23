import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import CategoryCards from './CategoryCards';

const CategoryPage = () => {
  return(
    <div>
      <Header />
      <Sidebar />
      <CategoryCards />
    </div>
  )
}

export default CategoryPage;
