import React from 'react';

export default function Article({ title, date, preview, minutes }) {
    if (!date) {
        return (
            <article>
                <h3>{title}</h3>
                <small>January 1, 1970 • </small>
                <small>{minutes} min read</small>
                <p>{preview}</p>
            </article>
        );
    } else {
        return (
            <article>
                <h3>{title}</h3>
                <small>{date} • </small>
                <small>{minutes} min read</small>
                <p>{preview}</p>
            </article>
        );
    }
}
