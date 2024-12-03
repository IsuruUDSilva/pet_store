import { useDispatch } from "react-redux"
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "../../store/counter/counterSlice"

type Props = {}

const ShoppingCart = (props: Props) => {

    const counter = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>decrement</button>
        </div>
    )
}

export default ShoppingCart