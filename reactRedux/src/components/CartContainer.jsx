import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import CartItems from '../components/CartItems';
import { openModal } from '../features/cart/modalSlice';

function CartContainer() {
    const { cartItems, total, amount } = useSelector((store) => store.cart)

    const dispatch = useDispatch()

    if (amount < 1) {
        return (
            <section className='cart'>
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        );
    }

    return   (
        <section className='cart'>
          {/* cart header */}
          <header>
            <h2>your bag</h2>
          </header>
          {/* cart items */}
          <div>
            {cartItems.map((item) => {
              return <CartItems key={item.id} {...item} />;
            })}
          </div>
          {/* cart footer */}
          <footer>
            <hr />
            <div className='cart-total'>
              <h4>
                total <span>${total}</span>
              </h4>
            </div>
            <button className='btn clear-btn' onClick={()=> dispatch(openModal())}>clear cart</button>
          </footer>
        </section>
      );
    
}

export default CartContainer