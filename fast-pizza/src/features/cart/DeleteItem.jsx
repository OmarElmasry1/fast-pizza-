import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItems } from "../../storeRedux/CartSlice";

function DeleteItem({deletePizzaId}) {
    const dispatch = useDispatch();
    
    return<>
    <Button type="small" onClick={()=> dispatch(deleteItems(deletePizzaId))}>Delete</Button>
    
    </>
}

export default DeleteItem;
