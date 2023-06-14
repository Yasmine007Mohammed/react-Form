import React, { useState } from "react";
export default function AddUser(){
    const [userForm, setUserForm] = useState ({
        name: '',
        email: '',
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState({
            nameError: null,
            emailError: null,
            userNameError: null,
            passwordError: null
        });
    const handelForm = (e) =>{
        console.log(e.target.name, e.target.value)
        switch (e.target.name) {
            case 'name':
                setUserForm({ ...userForm, name: e.target.value })
                setErrors({ ...errors,
                    nameError: e.target.value.lenght === 0 
                    ? 'this field is required' 
                    : e.target.value.lenght < 3 
                    ? 'at lest 3 letters' 
                    : null, 
                })
                break;
                case 'email':
                    setUserForm({ ...userForm, email: e.target.value })
                    setErrors({ ...errors,
                        emailErrorError: e.target.value.lenght === 0 
                        ? 'this field is required' 
                        : e.target.value.lenght < 3 
                        ? 'at lest 3 letters' 
                        : null, 
                    })
                
                break;
                case 'username':
                setUserForm({ ...userForm, username: e.target.value })
                setErrors({ ...errors,
                    userNameErrorError: e.target.value.lenght === 0 
                    ? 'this field is required' 
                    : e.target.value.lenght < 3 
                    ? 'at lest 3 letters' 
                    : null, 
                })
                break;

                case 'password':
                setUserForm({ ...userForm, password: e.target.value })
                setErrors({ ...errors,
                    passwordErrorError: e.target.value.lenght === 0 
                    ? 'this field is required' 
                    : e.target.value.lenght < 3 
                    ? 'at lest 3 letters' 
                    : null, 
                })
                break;
                default:
                break;

        }
}
        const submitForm = (e) => {
        e.preventDefault();
        console.log(errors)
        console.log(userForm)
    }
    
    return (

        <>
            <form onSubmit={submitForm}>
                <div className="form-group mt-5" style={{margin:"20px"}}>
                    <label  htmlFor="Name">Name</label>
                    <input type="text" name="name" value={userForm.name} placeholder="Name" id="Name"
                        className="form-control col-6 border-dark rounded-1" onChange={handelForm} />
                    <small className="text-danger">{errors.nameError}</small>
                </div>
                <div className="form-group mt-5" style={{margin:"20px"}}>
                    <label  htmlFor="email">email</label>
                    <input type="email" name="email" value={userForm.email} placeholder="email" id="email"
                        className="form-control col-6 border-dark rounded-1" onChange={handelForm} />
                    <small>{errors.emailError}</small>
                </div>
                <div className="row mb-2 " style={{margin:"20px"}}>
                    <label  htmlFor="userName">User Name</label>
                    <input type="text" name="username" value={userForm.username} placeholder="User Name" id="userName"
                        className="form-control col-6 border-dark rounded-1" onChange={handelForm} />
                    <small className="text-danger">{errors.userNameError}</small>
                </div>
                <div className="row mb-2 " style={{margin:"20px"}}>
                    <label className="form-label fw-bold fs-5" htmlFor="password">Password</label>
                    <input type="password" name="password" value={userForm.password} placeholder="Enter your Password" id="password"
                        className="form-control col-6 border-dark rounded-1" onChange={handelForm} />
                    <small>{errors.passwordError}</small>
                </div>
                
                <input type="submit" className=" col-11 col-md-9 col-lg-5 mt-3 btn btn-primary " style={{margin:"20px"}}/>
            </form>
        </>
    )  

}
            
