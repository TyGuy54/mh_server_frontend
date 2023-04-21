import React from "react";
import { HomeComponent } from "../components/UI/home_component";
import { Navbar } from "../components/UI?navbar_component";

export const HomePage = () => {
    return (
        <>
            <Navbar/>
            <HomeComponent/>
        </>
    );
}