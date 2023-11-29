'use client';
import React from 'react';
import data from '../../data';
import ProductCard from '@/Components/ProductCard';
import { useSelector } from 'react-redux';
import NavBar from '@/Components/navbar';

function HomePage() {
  const store = useSelector((el) => {
    return el;
  });

  return (
    <div>
      {' '}
      <NavBar />
      <div style={styles.grid}>
        {data.map((el) => {
          return (
            <ProductCard
              key={el.id}
              id={el.id}
              title={el.title}
              price={el.price}
              description={el.description}
              category={el.category}
              image={el.image}
              rating={el.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
const styles = {
  grid: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(3, 360px)',
    gridGap: '20px',
  },

  '@media (max-width: 768px)': {
    grid: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
};
