import React, { useState } from 'react';
import SidebarItem from "./sidebarItem";

import SidebarHaeder from "./sidebarHeader";
import SidebarUserPanel from "./sidebarUserPanel";

export default function Sidebar({ routes }) {

    let [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(activeIndex = index);
    }

    const [height, setHeight] = useState(0);

    function checkHeightChange() {
        const newHeight = document.getElementsByClassName('wrap')[0].offsetHeight;
        setHeight(newHeight);
    }

    setInterval(checkHeightChange, 1000);

    return (
        <>
            <aside className="main-sidebar sidebar-dark-navy elevation-4" style={{ height: height }}>
                <SidebarHaeder />
                {/* Sidebar */}
                <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
                    <div className="os-resize-observer-host">
                        <div className="os-resize-observer observed" style={{ left: 0, right: 'auto' }} />
                    </div>
                    <div className="os-size-auto-observer" style={{ height: 'calc(100% + 1px)', float: 'left' }}>
                        <div className="os-resize-observer observed" />
                    </div>
                    <div className="os-content-glue" style={{ margin: '0px -8px', width: 73, height: 912 }} />

                    <div className="os-padding">
                        <div className="os-viewport os-viewport-native-scrollbars-invisible" style={{ overflowY: 'scroll' }}>

                            <div className="os-content" style={{ padding: '0px 8px', height: '100%', width: '100%' }}>

                                <SidebarUserPanel />

                                {/* Sidebar Menu */}
                                <nav className="mt-2">
                                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                        {routes.map((route, index) => (

                                            <SidebarItem
                                                key={index}
                                                path={route.path}
                                                name={route.name}
                                                iconClass={route.iconClass}
                                                index={index}
                                                isActive={window.location.pathname === route.path}
                                                onClick={handleClick}
                                            />
                                        ))}

                                    </ul>
                                </nav>
                                {/* /.sidebar-menu */}
                            </div>
                        </div>
                    </div>
                    <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
                        <div className="os-scrollbar-track">
                            <div className="os-scrollbar-handle" style={{ width: '100%', transform: 'translate(0px, 0px)' }} />
                        </div>
                    </div>
                    <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
                        <div className="os-scrollbar-track">
                            <div className="os-scrollbar-handle" style={{ height: '88.3833%', transform: 'translate(0px, 0px)' }} />
                        </div>
                    </div>
                    <div className="os-scrollbar-corner" />
                </div>
                {/* /.sidebar */}
            </aside>
        </>
    )
}
