import {BrowserRouter, Route, Routes} from "react-router-dom";
import {App} from "../app.jsx";
import Service from "../pages/service/Service.jsx";
import About from "../pages/about/About.jsx";
import Contacts from "../pages/contacts/Contacts.jsx";
import Subscription from "../pages/subscription/Subscription.jsx";
import Reporting from "../pages/reporting/Reporting.jsx";
import ReqIp from "../pages/reqIp/ReqIp.jsx";
import ReqO from "../pages/reqO/ReqO.jsx";
import Consultation from "../pages/consultation/Consultation.jsx";
import Failure from "../pages/failure/Failure.jsx";
import Req from "../pages/auth/Req.jsx";
import Login from "../pages/auth/Login.jsx";
import Shop from "../pages/shop/Shop.jsx";
import Buy from "../pages/buy/Buy.jsx";
import Search from "../pages/search/Search.jsx";


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />} path={"/"}/>
                <Route element={<Service />} path={"/service"}/>
                <Route element={<About />} path={"/about"} />
                <Route element={<Contacts/>} path={"/contacts"} />
                <Route element={<Subscription/>} path={"/subscription"}/>
                <Route element={<Reporting />} path={"/reporting"} />
                <Route element={<ReqIp />} path={"/reqIp"} />
                <Route element={<ReqO />} path={"/reqO"} />
                <Route element={<Consultation/>} path={"/consultation"}/>
                <Route element={<Failure/>} path={"/failure"} />
                <Route element={<Req/>} path={"/req"} />
                <Route element={<Login />} path={"/login"}/>
                <Route element={<Shop />} path={"/shop"} />
                <Route element={<Buy />} path={"/buy"}/>
                <Route element={<Search />} path={"/search/:keyword"}/>
                <Route path={"*"} element={<div>Not Found</div>} />
            </Routes>
        </BrowserRouter>
)
}

export default Router;
