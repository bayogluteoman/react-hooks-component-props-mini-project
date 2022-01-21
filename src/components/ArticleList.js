import React from 'react';
import Article from './Article';

export default function ArticleList({ posts }) {
    return (
        <main>
            {
                posts.map((e) => {
                    if (e.date) {
                        return (
                            <Article
                                key={e.id.toString()}
                                title={e.title}
                                date={e.date}
                                preview={e.preview}
                                minutes={e.minutes} />
                        )
                    }
                    else {
                        return (
                            <Article
                                key={e.id.toString()}
                                date={"January 1, 1970"}
                                title={e.title}
                                preview={e.preview}
                                minutes={e.minutes} />
                        )
                    }
                }
                )
            }
        </main>
    )
}
