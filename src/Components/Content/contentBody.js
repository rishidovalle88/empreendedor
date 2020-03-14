import React from 'react';

// import { Container } from './styles';

export default function ContentBody({ content }) {
    return (
        <>
            <section className="content">
                <div className="container-fluid">
                    {content}
                </div>
            </section>
        </>
    )
}
