import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoute, authRoutes, adminRoutes } from "../config/routes";
import { useStore } from "../config/context";
import { observer } from "mobx-react";
import NotFound from "./notfound";
const Main:React.FC = observer(()=>{
    const rootStore = useStore();
    const {userStore} = rootStore!;
    return(
        <main>
            <Routes>
                {publicRoute.map((el,i)=><Route key={i} path={el.path} Component={el.component}/>)}
                {userStore.token && authRoutes.map((el,i)=><Route key={i} path={el.path} Component={el.component}/>)}
                {userStore.role=='admin' && adminRoutes.map((el,i)=><Route key={i} path={el.path} Component={el.component}/>)}
                <Route path="*" Component={NotFound}/>
            </Routes>
        </main>
    );
})

export default Main;