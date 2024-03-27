import './App.css'
import {RecoilRoot,useRecoilState} from 'Recoil'
import { todosAtomFmily} from './store/atoms/atomFamily';


function App() {
  return (
    <div>
      <RecoilRoot>
      <Todo id={1} /><br />
      <Todo id={2} />
      </RecoilRoot>
    </div>
  )
}

function Todo({id}){
  const [todo,setTodo] = useRecoilState(todosAtomFmily(id));
  return(
    <>
    {todo.title}
    {todo.description}
    </>
  )
}




export default App
