import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'


export default function AdminRoute({children, ...props}) {
    const {useInfo} = useSelector((state)=>state.authReducer)
    
    // Chua Dang Nhap
    if(!useInfo){
        return <Redirect to={`/login?redirectTo=${props.path}`}/>
    }

    if(useInfo.maLoaiNguoiDung !== "GV"){
        return <Redirect to="/"/>
    }

    return <Route {...props}>
        {children}
    </Route>
}
