import { combineReducers } from 'redux';
import { productsState } from './recipesReducer';
// import products from './products';


// export default combineReducers({
//     // products
//     // まとめ上げたreducerからstoreを作成完了。
// });

const rootReducer = combineReducers({
  ProductsState: productsState
})


export default rootReducer;

// ../index.jsにreducerをまとめて行くと複雑になるため,
//reducer/index.jsにまとめる