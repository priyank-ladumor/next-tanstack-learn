"use client";
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const Products = () => {
    const mutation: any = useMutation({
        mutationFn: (newTodo) => {
            return axios.post('http://localhost:4000/product', newTodo)
        },
    })
    return (
        <div>
            <div>
                {mutation.isPending ? (
                    'Adding todo...'
                ) : (
                    <>
                        {mutation.isError ? (
                            <div>An error occurred: {mutation.error.message}</div>
                        ) : null}

                        {mutation.isSuccess ? <div>Todo added!</div> : null}

                        <button
                            onClick={() => {
                                mutation.mutate({ id: new Date(), title: 'Do Laundry' })
                            }}
                        >
                            Create Todo
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Products
