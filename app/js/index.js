import { createStore } from 'redux'

//reducer
const counter = (count=0,action)=>{
  switch(action.type){
    case "INCREMENT":
      return count + 1;
    case "DECREMENT":
      return count - 1;
    default:
      return count;
  }
}
const initState ={
  name:"show",
  city:"beijing"
}

//reducer initState enhancer
let store = createStore(counter);

console.log(store);
console.log(store.getState());

store.dispatch({type:"INCREMENT"});
console.log(store.getState());

const listener = ()=>{
  document.body.innerText = store.getState();
}

//store 数据监听
store.subscribe(listener);

document.addEventListener('click',function(){
  store.dispatch({type:"INCREMENT"});
})
