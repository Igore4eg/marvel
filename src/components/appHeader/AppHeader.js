import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><a href="https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0">Characters</a></li>
                    /
                    <li><a href="https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0">Comics</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;