import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SimpleForm from "../components/pages/SimpleForm";
// import EssentialForm from "../components/pages/EssentialForm";
import Main from "../components/pages/Main";
import RouterNavigation from "../components/RouterNavigation";
import FilmPage from "../components/FilmPage";
import Registration from "../components/pages/Registration";


const withNavigation = (Component, data = {}, options = {}) => {
    return (
        <>
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
                <Route path="/registration-form" element={withNavigation(Registration)} />



                {/*<Route*/}
                {/*    path="/advanced-form"*/}
                {/*    element={withNavigation(AdvancedForm, mockedData, mockedOptions)}*/}
                {/*/>*/}
            </Routes>
        </BrowserRouter>
    );
};

export default PublicRoutes;