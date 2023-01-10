import { useForm } from "../hook/useForm"

export const TodoAdd = ({ onNewValue }) => {


    const { onInputChange, description, onResetForm } = useForm({
        description: ''
    })


    const onSubmit = (event) => {
        event.preventDefault();
        if( description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }
        onNewValue( newTodo );
        onResetForm();
    }

  return (
    <form onSubmit={ onSubmit }>
            <input
             type="text"
             placeholder="Add TODO"
             className="form-control p-1"
             name="description"
             value={ description }
             onChange={ onInputChange }
             />

             <button
                      type="submit"
              className="btn btn-outline-primary mt-1"
                     >
                Add 
             </button>
        </form>
  )
}
