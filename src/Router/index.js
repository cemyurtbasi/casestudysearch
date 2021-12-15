import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/dashboard";
const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Dashboard />} />
        </Routes>
    );
};

export default Router;
