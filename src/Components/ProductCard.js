'use client';
import { ADD_TO_CART } from '@/app/redux/actionTypes';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
const ProductCard = ({ title, price, description, id, image, rating }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const addToCart = (data) => {
    dispatch({ type: ADD_TO_CART, payload: data });
  };
  return (
    <div
      style={{ ...styles.card, ...(isHovered && styles.hoverEffect) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.box}>
        <img src={image} alt={title} style={styles.image} />
      </div>
      <Link href={`/products/${id}`} style={styles.cardBody}>
        <h2 style={styles.title}>{title.slice(0, 50)}</h2>
        <p style={styles.description}>{description.slice(0, 100)}</p>
        <div style={styles.priceAndReview}>
          {' '}
          <p style={styles.price}>${price}</p>
          <div style={styles.rating}>
            <p>
              Rating: {rating.rate} ({rating.count} reviews)
            </p>
          </div>
        </div>
      </Link>
      <div style={styles.cardbtn}>
        <button
          onClick={() =>
            addToCart({ title, price, description, id, image, rating, qty: 1 })
          }
          style={styles.btn}
        >
          Add+
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    boxShadow:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '320px',
    padding: '20px 10px',
    transition: 'transform 0.2s ',
  },

  hoverEffect: {
    transform: 'scale(1.05)',
    boxShadow: '',
  },

  image: {
    width: '200px',
    height: '200px',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardBody: {
    padding: '10px',
    textDecoration: 'none',
  },
  title: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#e4002b',
  },
  description: {
    fontSize: '0.9em',
    margin: '10px 0',
    color: 'black',
  },
  priceAndReview: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '60px',
  },
  price: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#e4002b',
  },
  rating: {
    fontSize: '0.9em',
    color: '#e4002b',
  },
  cardbtn: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  btn: {
    border: 'none',
    backgroundColor: '#e4002b',
    color: 'white',
    padding: '10px 50px',
    borderRadius: '100px',
    fontWeight: 700,
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default ProductCard;
