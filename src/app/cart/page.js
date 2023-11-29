'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import CardCart from '../../Components/cartCard';
import CartPriceComponent from '../../Components/priceComponent';
import NavBar from '../../Components/navbar';
function Page() {
  const { data } = useSelector((el) => {
    return el.cart;
  });

  return (
    <>
      <NavBar />
      {!data[0] ? (
        <h1 style={{ textAlign: 'center' }}>Cart is Empty</h1>
      ) : (
        <>
          {' '}
          <div className="cartmedia">
            <div className="cartmedia2">
              {data.map((el) => {
                return <CardCart key={Math.random() + el.id} data={el} />;
              })}
            </div>
            <div
              className="cartmedia3"
              style={{ width: '305', position: 'sticky' }}
            >
              <CartPriceComponent data={data} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Page;
