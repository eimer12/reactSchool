import React from 'react'
import TodoItem from './TodoItem'

const lista = ['asdf', 'fdsa']

export default function ListaTodo() {
    return (
        lista.map(el => {
            return <TodoItem />
        })
    )
}
