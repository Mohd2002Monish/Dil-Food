'use client';
import React, { useState } from 'react';

import styles from './styles/Cart.module.css';
function CartPriceComponent({ data }) {
  const price = data.reduce((acc, curr) => acc + curr.price * curr.qty, 0) || 0;

  let gst = (price / 100) * 5;
  gst = Number(gst.toFixed(2));
  const hs = 35;
  const total = price + hs + gst;
  const [checked, setchecked] = useState(false);

  return (
    <div>
      <div className={styles.priceCompo}>
        <div className={styles.cartOffer}>
          <div className={styles.cartOfferLink}>
            <img
              className={styles.cartOfferIcon}
              src="https://online.kfc.co.in/static/media/Offers_Coupon_Icon.72b94c41.svg"
              alt=""
            />
            <span className={styles.cartOfferText}>Apply Offers & Deals</span>
          </div>
          <button className={styles.cartOfferBtn}>View All</button>
        </div>
        <div className={styles.cartOfferSum}>
          <div className={styles.sub}>
            <div className={styles.Sum}>Subtotal</div>
            <div className={styles.Amo}>₹ {price}</div>
          </div>
          <div className={styles.sub}>
            <div className={styles.Sum}>GST</div>
            <div className={styles.Amo}>₹ {gst}</div>
          </div>
          <div className={styles.sub}>
            <div className={styles.Sum}>Shipping Charge (Incl. Taxes)</div>
            <div className={styles.Amo}>₹ {hs}</div>
          </div>
        </div>

        <div>
          <button
            onClick={() => {
              alert(`Your Order has been placed for ₹ ${Math.ceil(total)}`);
            }}
            className={styles.checkOut}
          >
            <span>Checkout</span>₹{Math.ceil(total)}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPriceComponent;
