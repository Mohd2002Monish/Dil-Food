'use client';
import React from 'react';
import data from '../../../../data';
import NavBar from '../../../Components/navbar';
import { ADD_TO_CART } from '@/app/redux/actionTypes';
import { useDispatch } from 'react-redux';

function Page({ params }) {
  const { product } = params;
  const pro = data.find((el) => {
    return el.id == product;
  });
  const dispatch = useDispatch();
  return (
    <>
      <NavBar />
      <div style={styles.container}>
        <div style={styles.card}>
          <img src={pro.image} alt={pro.title} style={styles.image} />
          <div style={styles.details}>
            <h2 style={styles.title}>{pro.title}</h2>
            <p style={styles.description}>{pro.description}</p>
            <p style={styles.category}>Category: {pro.category}</p>
            <p style={styles.price}>Price: ${pro.price}</p>
            <p style={styles.rating}>
              Rating: {pro.rating.rate} ({pro.rating.count} reviews)
            </p>
            <button
              onClick={() => {
                dispatch({ type: ADD_TO_CART, payload: pro });
              }}
              className="addtocart2"
            >
              Add TO Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#fff',
  },
  card: {
    background: '#e4002b',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    maxWidth: '600px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  details: {
    padding: '20px',
    textAlign: 'left',
    color: '#fff', // White text color
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  category: {
    fontSize: '14px',
    marginBottom: '10px',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  rating: {
    fontSize: '16px',
  },
};

export default Page;
