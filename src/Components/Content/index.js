import React from 'react';
import ContentHeader from './contentHeader';
import ContentBody from './contentBody';

// import { Container } from './styles';

export default function Content({pageName, content}) {
    return (
        <div className="content-wrapper main" style={{ minHeight: 700 }}>

            {/* Content Header */}
            <ContentHeader pageName={pageName} />

            {/* Content Body */}
            <ContentBody content={content} />

        </div>
    );
}
