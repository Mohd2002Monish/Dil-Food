'use-client';
import React, { useEffect } from 'react';

import { useState } from 'react';

import styles from './Styles/cart.module.css';
import { useDispatch } from 'react-redux';
import { DESQTY, INCQTY, REMOVE_FROM_CART } from '../app/redux/actionTypes';

function CardCart({ data }) {
  const [cataShow, setCataShow] = useState(false);
  const dispatch = useDispatch();

  const handleclick = (id) => {
    console.log('l');
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };

  return (
    <div>
      <div className={styles.cartitem}>
        <div className={styles.m}>
          <img
            className={styles.cartitemImg}
            src={data.image}
            alt={data.title}
          />
          <div className={styles.cartbtnCont}>
            <div>
              <span className={styles.cartitemDish}>{data.title}</span>
            </div>
            <div className={styles.cartActions}>
              <div>
                <span
                  onClick={() => handleclick(data.id)}
                  className={styles.removebtn}
                >
                  Remove
                </span>
              </div>
              <div className={styles.cartCounterP}>
                <div className={styles.cartCounterC}>
                  <button
                    disabled={data.qty <= 1}
                    onClick={() => {
                      dispatch({ type: DESQTY, payload: data.id });
                    }}
                    className={styles.counterDec}
                  ></button>
                  <span className={styles.counterVal}>{data.qty}</span>
                  <span className={styles.srOnly}></span>
                  <button
                    disabled={data.qty === 4}
                    onClick={() => {
                      dispatch({ type: INCQTY, payload: data.id });
                    }}
                    className={styles.counterInc}
                  ></button>
                </div>
                <div className={styles.itemPrice}>{`₹${data.price}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCart;
