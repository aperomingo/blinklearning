import React from 'react';
import '../../styles/checkoutbtn.css';

export default function CheckoutBtn() {
  return (
    <button className="btn-parent" onClick={() => {}}>
      <div className='btn-container'>
        <div className='btn-star'/>
        <div className='btn-text'>CHECKOUT</div>
        <div className='btn-star'/>
      </div>
    </button>
  );
}
