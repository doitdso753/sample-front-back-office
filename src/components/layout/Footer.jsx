import React, {useEffect, useState} from 'react';

function Footer() {
    return (
        <footer className="main-footer">
            {/* To the right */}
            <div className="float-right d-none d-sm-inline">
                Anything you want
            </div>
            {/* Default to the left */}
            <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights
            reserved.
        </footer>
    );
}

export default Footer;
