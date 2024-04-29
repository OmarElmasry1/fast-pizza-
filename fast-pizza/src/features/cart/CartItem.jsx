
import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import ControlQuantity from './ControlQuantity';
import DeleteItem from './deleteItem';
import { getCurrentQuantity } from '../../storeRedux/CartSlice';



function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantity(pizzaId));


  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <ControlQuantity controlId={pizzaId} currentQuantity = {currentQuantity} />
        <DeleteItem deletePizzaId ={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
