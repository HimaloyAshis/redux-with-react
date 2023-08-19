import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllTodos from '../services/Action/TodosAction';

const Todos = () => {

    const { isLoading, todos, error } = useSelector((state) => state)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getAllTodos())

    }, [])

    return (
        <div>
            <h3>Todos</h3>
            {isLoading && <h3>Loading......</h3>}
            {error && <h3>{error.message}</h3>}
            {
                todos && todos.map(todo => {
                    return <article key={todo.id} >
                        <h4>{todo.id}</h4>
                        <h4> {todo.title}</h4>
                    </article>
                })
            }

        </div>
    );
};

export default Todos;