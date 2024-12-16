import React from "react";
import CustomNavbar from "../components/navbar";
import Footer from "../components/footer";
import Welcome from "../components/welcome";
import Kalimat from "../components/kalimat";

function Beranda() {
    return (
        <>
            <CustomNavbar />
            <Welcome />
            <Kalimat />
            <Footer />
        </>
    );
}

export default Beranda;