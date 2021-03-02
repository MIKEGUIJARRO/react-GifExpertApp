import React, { useState } from "react";
import PropTypes from "prop-types";
//Aqui recibimos las (props) de AddCategory 
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setInputValue("");
            setCategories((items) => {
                return [inputValue, ...items];
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
