import { memo } from "react";
import HeaderSearch from "../../components/headerSearch";
import './css/dashboardHeader.scss';

const DashboardHeader = memo(() => {

    return (
        <header className="dashboardHeader">
            <div className="dashboardHeader-container">
                <h1 className="dashboardHeader-container__siteTitle">Case Study Search</h1>
                <h1 className="dashboardHeader-container__siteTitle--mobile">CSS</h1>
                <HeaderSearch />
            </div>
        </header>
    );
});

export default DashboardHeader;
