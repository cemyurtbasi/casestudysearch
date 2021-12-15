import { memo } from "react";
import DashboardLayout from "../../Shared/dashboardLayout";
import './css/dashboard.scss';

const Dashboard = memo(() => {

    return (
        //Class'ı komponent ismi ile aynı başlatarak kolay bulunmasına yardımcı oluyorum
        <DashboardLayout>
            <main className="dashboard">
                Home Page
            </main>
        </DashboardLayout>
    );
});

export default Dashboard;
