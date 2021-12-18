import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://evening-stream-40669.herokuapp.com/products-collection', data)
            .then(response => {
                if (response.data.insertedId) {
                    alert('New product successfully added.');
                    reset();
                }
            })
    }
    return (
        <div className="addProduct-section">
            <h3 className="pt-5">Add New Product and see in Explore Page</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Add new product" />
                <input type="number" {...register("price", { required: true })} placeholder="Product price" />
                <textarea className="ps-1" {...register("description", { required: true })} placeholder="Product description" />
                <input {...register("img", { required: true })} placeholder="Image url" />
                <input className="bg-info rounded-2 p-1 border-0 fw-bold fs-4" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;