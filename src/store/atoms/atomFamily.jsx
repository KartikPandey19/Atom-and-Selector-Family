import{atomFamily} from 'Recoil';
import { Todos } from '../../todos';


export const todosAtomFmily = atomFamily({
    key:'todosAtomFmily',
    default: id=>{
        return Todos.find(x=>x.id===id)
    }
})

