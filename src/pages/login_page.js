import React from "react";
import { Navbar } from "../components/UI/navbar_component";
import { LoginComponent } from "../components/UI/login_component"

export const LoginPage = () => {
    return (
        <>
            <Navbar/>
            <LoginComponent/>
        </>
    );
}