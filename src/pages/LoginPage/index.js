import React, {useRef} from "react";
import {useForm,Controller} from 'react-hook-form'
import {Input,FormGroup,Label,Alert} from 'reactstrap'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup  from 'yup'
import {useSelector,useDispatch} from 'react-redux'
import {login} from 'src/actions/auth'
import { Redirect,useLocation } from "react-router-dom";
import qs from 'qs'

// controlled Component: Control tat ca moi thu tren giao dien bang state, props
// uncontrolled component: control giao dien khong thong qua state, props


// Ca useState lan useRef deu dung de luu tru data
// Khac: khi state thay doi component bi render lai, ref thay doi component khong bi render lai

// Tao schame validation
const schema = yup.object().shape({
    taikhoan:yup.string().required("Tai khoan khong duoc de trong").min(5,"tai khoan p tu 5 den 20 ki tu").max(20,"tai khoan p tu 5 den 20 ki tu"),
    matkhau:yup.string().required("mat khau khong duoc de trong")
}) 

export default function LoginPage() {
    // const inpTaiKhoan = useRef();
    // const inpMatKhau = useRef();

    const dispatch = useDispatch();
    const {useInfo,isLoading,error} = useSelector((state)=>state.authReducer)
    const location = useLocation();

    const {register ,handleSubmit,formState:{errors}, control} = useForm({resolver:yupResolver(schema)});
    const handleLogin = (values)=>{
        console.log(values);
        dispatch(login(values))
    }

    // userInfo co data => da dang se chuyen nguoi dung ve trang home
    if(useInfo){
        const {redirectTo} = qs.parse(location.search,{ignoreQueryPrefix:true})
        if(redirectTo){
            return <Redirect to={redirectTo}/>
        }
        return <Redirect to="/"/>
    }
   
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <h1>Login Page</h1>
            <div className="form-group">
                <label>Tai Khoan</label>
                <input
                    type="text" className="form-control" {...register("taikhoan",
                    // {required:{value:true,message:"Tai Khoan khong duoc de trong"},
                    // minLength:{value:5,message:"Tai khoan phai tu 5 den 20 ki tu"},}, {pattern: /^[A-Za-z]+$/i })
                    
                    )}
                />
              {errors.taikhoan&&(
                  <div className="alert alert-danger">{errors.taikhoan.message}</div>
              )}
            </div>
            {/* <div className="form-group">
                <label>Mat Khau</label>
                <input
                    type="text" className="form-control" {...register("matkhau",{required:true})}
                /> 
            </div>
            {errors.matkhau&&(
                  <div className="alert alert-danger">Mat khau khong duoc de trong</div>
              )} */}
              {/* <FormGroup>
                  <Label>Mat Khau</Label>
                  <Input type="text" {...register("matkhau",{required:{value:true,message:"mat khau khong duoc de trong"},minLength:{value:8,message:"mat khau phai tu 8 ki tu tro len"}})}/>
              </FormGroup>
              {errors.matkhau&&(
                 <Alert color="danger">{errors.matkhau.message}</Alert>
              )}  */}

              <FormGroup>
                  <Label>
                      Mat Khau
                  </Label>
                  <Controller name="matkhau" control={control} defaultValue="" rules={{required:{value:true,message:"mat khau khong duoc de trong"},}} render={({field})=>{
                      return <Input {...field}/>
                  }}/>
                    {errors.matkhau&&(
                 <Alert color="danger">{errors.matkhau.message}</Alert>
              )}
              </FormGroup>
            <button className="btn btn-success" >Dang nhap</button>
        </form>
    );
}
