import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SimpleForm from "../components/pages/SimpleForm";
// import EssentialForm from "../components/pages/EssentialForm";
import Main from "../pages/Main";
import RouterNavigation from "../components/RouterNavigation";
import FilmPage from "../components/FilmPage";
import Registration from "../pages/Registration";
import LikedFilmPage from "../pages/LikedFilmPage";
import WatchLateFilmPage from "../pages/WatchLateFilmPage";
import Navigation from "../components/RouterNavigation";

export const mockedOptions =[
    { value: "unselected", label: "Select genre" },
    { value: "actionMovie", label: "action" },
    { value: "adventureMovie", label: "Adventure film" },
    { value: "comedy movie", label: "comedy" },
    { value: "drama", label: "Drama" },
    { value: "fantasy movie", label: "Fantasy movie" },
    { value: "historical movie", label: "Historical movie" },
    { value: "horror movie", label: "Horror movie" },
    { value: "cartoons", label: "Cartoons" },

]


// export const mockedOptions = [
//     genres: [
//         { value: "unselected", label: "Select genre" },
//         { value: "action movie", label: "action" },
//         { value: "comedy", label: "comedy" },
//     ],
// ];

const mockedData = {
//     userName: "",
//     role: "user",
//     email: "my-email@example.com",
//     password: "",

    genres: 'unselected'

};


const withNavigation = (Component, data = {}, options = {}) => {
    return (
        <>
            {/*<Navigation/>*/}
            {/*<RouterNavigation />*/}
            <Component data={data} options={options} />
        </>
    );
};

const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={withNavigation(Main , mockedData, mockedOptions)} />
                <Route path="/movie-details" element={withNavigation(FilmPage)} />
                <Route path="/registration-form" element={withNavigation(Registration, mockedData, mockedOptions)} />
                <Route path="/liked-movies" element={withNavigation(LikedFilmPage)} />
                <Route path="/watch-late-movies" element={withNavigation(WatchLateFilmPage)} />



                {/*<Route*/}
                {/*    path="/advanced-form"*/}
                {/*    element={withNavigation(AdvancedForm, mockedData, mockedOptions)}*/}
                {/*/>*/}
            </Routes>
        </BrowserRouter>
    );
};

export default PublicRoutes;