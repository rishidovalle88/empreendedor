import React from 'react';

import imgJiddu from '../../assets/img/JidduFace.jpg';

export default function Sidebar() {
    return(
        <>
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src={imgJiddu} className="img-circle elevation-2" alt="User Image" />
                </div>
                <div className="info">
                    <a href="#" className="d-block">Jiddu do Valle</a>
                </div>
            </div>
        </>
    )
}
