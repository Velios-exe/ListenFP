import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {Song} from "../../pages/Song/Song.tsx";
import {Search} from "../../pages/Search/Search.tsx";
import {Library} from "../../pages/Library/Library.tsx";
import {Favorites} from "../../pages/Favorites/Favorites.tsx";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/song/:id"   element={<Song />} />
            <Route path="/search"     element={<Search />} />
            <Route path="/library"    element={<Library />} />
            <Route path="/favorites"  element={<Favorites />} />
        </Routes>
    )
}