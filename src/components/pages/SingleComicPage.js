import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { SpinnerCircular } from 'spinners-react';

import './singleComicPage.scss';

const SingleComicPage = () => {
    
    const {comicId} = useParams();
    const [comic, setComic] = useState(null);
    const {loading, error, getComics, clearError} = useMarvelService();

    useEffect(() => updateComics(), [comicId]);

    const updateComics = () => {
        clearError();
        getComics(comicId)
        .then(onComicLoaded);
    }
    
    const onComicLoaded = comic => setComic(comic);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({comic}) => {
    const {title, description, thumbnail, pages, lang, price} = comic;
    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">Number of pages: {pages}</p>
                <p className="single-comic__descr">Language: {lang}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}

const Spinner = () => {
    return (
        <div style={{margin: 'auto', background: 'none', display: 'flex', justifyContent: 'center'}}>
            <SpinnerCircular size={60} thickness={155} speed={121} color="rgba(159, 0, 19, 1)" secondaryColor="rgba(172, 57, 57, 0.48)" />
        </div>
    )
}

export default SingleComicPage;