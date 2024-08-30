import {Task} from './types';
import { useState, useEffect } from 'react';

export const getAllTodos = async ( ): Promise<Task[ ]> => {
    const res = await fetch(`http://localhost:3001/tasks`,{
       cache:"no-store", 
    });
    const todos =res.json();
    return todos;
}

 export const addTodo = async (todo:Task):Promise<Task> => {
    const res =await fetch(`http://localhost:3005/tasks`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },   
        body:JSON.stringify(todo),
    });
    const newTodo = res.json();
    return newTodo;
}

/* ↓編集用のapi →Todo.tsxに編集画面作る */

export const editTodo = async (id:string,newText:string):Promise<Task> => {
    const res =await fetch(`http://localhost:3005/tasks/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
        },   
        body:JSON.stringify({text:newText}),
    });
    const updatedTodo = res.json();
    return updatedTodo;
}




