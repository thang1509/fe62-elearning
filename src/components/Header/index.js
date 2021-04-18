import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <h1>Đây là header</h1>
            <Link to="/admin">admin</Link>
            <Link to="/">Home</Link>
            <Link className="m-5" to="/courses/frontend">Courses List</Link>
            <Link to="/course/bootcamp">Course detail</Link>
        </div>
    )
}
