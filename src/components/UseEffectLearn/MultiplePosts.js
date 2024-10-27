import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MultiplePosts() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res);
                setPost(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }); // Empty array to run only once when the component mounts

    return (
        <div>
            <ul>
                {post.map((p) => (
                    <li key={p.id}>
                        {p.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
