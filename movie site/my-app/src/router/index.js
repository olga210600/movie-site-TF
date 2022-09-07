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

const mockedOptions = {
    roles: [
        { value: "admin", label: "Admin role" },
        { value: "user", label: "User role" },
    ],
};

const mockedData = {
    userName: "",
    role: "user",
    email: "my-email@example.com",
    password: "",

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
                <Route exact path="/" element={withNavigation(Main)} />
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