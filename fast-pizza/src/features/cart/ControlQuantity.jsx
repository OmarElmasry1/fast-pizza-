import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseQuantity, increaseQuantity } from "../../storeRedux/CartSlice";

function ControlQuantity({ controlId, currentQuantity }) {
  const disptach = useDispatch();

  return (
    <>
      <div className="flex items-center gap-1.5 font-bold">
        <Button
          onClick={() => disptach(increaseQuantity(controlId))}
          type="xsmall"
        >
          +
        </Button>
        <span>{currentQuantity}</span>
        <Button
          onClick={() => disptach(decreaseQuantity(controlId))}
          type="xsmall"
        >
          -
        </Button>
      </div>
    </>
  );
}

export default ControlQuantity;
