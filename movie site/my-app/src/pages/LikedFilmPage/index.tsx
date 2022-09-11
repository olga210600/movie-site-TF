import React from 'react';
import FilmsRendering from "../../components/FilmsRendering";

const LikedFilmPage = () => {
    return (
            <div>
                <FilmsRendering currentValue='isLiked'/>
            </div>
    );
};

export default LikedFilmPage;