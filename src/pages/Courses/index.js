import React from 'react'
import {useParams,} from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getCoursesByCategory} from '../../actions/courses'

export default function Courses() {
    const dispatch = useDispatch();
    const {courses,isLoading,error} = useSelector((state)=>state.coursesReducer);
    console.log(courses);

    const {category} = useParams();

    // Duoc chay moi ki param category thay doi, de goi lai API moi tuong ung vs categgory moi
    useEffect(() => {
       // dispatch action goi API lay DSKH
       dispatch(getCoursesByCategory(category));
    }, [category])


    return (
        <div>
            <h1>Courses List By Category</h1>
        </div>
    )
}
