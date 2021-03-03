import React, { Fragment } from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <Fragment>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading ...</p>}
            <div className="card-grid">
                {
                    images.map((image) => {
                        return <GifGridItem key={image.id} {...image} />
                    })
                }
            </div>
        </Fragment>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}