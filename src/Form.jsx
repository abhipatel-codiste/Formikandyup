import "./form.css";
import { useFormik } from "formik";
import {Schemas} from "./schemas"

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

const Form = () => {
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema: Schemas,
        onSubmit:(values, action) =>{
            console.log(values);
            action.resetForm()
        }
    })
    console.log("errorrrr",errors)
    return (
        <>
            <body>
                <div className="wrapper">
                    <h2>Registration</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box" style={{display:'flex', flexDirection:'column'}}>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                required
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name && <p style={{color:'red'}}>{errors.name}</p>}
                        </div>
                        <div className="input-box" style={{display:'flex', flexDirection:'column'}}>
                            <input
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                required
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email && <p style={{color:'red'}}>{errors.email}</p>}
                        </div>
                        <div className="input-box" style={{display:'flex', flexDirection:'column'}}>
                            <input
                                name="password"
                                type="password"
                                placeholder="Create password"
                                required
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password && <p style={{color:'red'}}>{errors.password}</p>}
                        </div>
                        <div className="input-box" style={{display:'flex', flexDirection:'column'}}>
                            <input
                                name="confirm_password"
                                type="password"
                                placeholder="Confirm password"
                                required
                                value={values.confirm_password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.confirm_password && touched.confirm_password && <p style={{color:'red'}}>{errors.confirm_password}</p>}
                        </div>
                        <div className="input-box button">
                            <input type="Submit" value="Register Now" />
                        </div>
                        <div className="text">
                            <h3>
                                Already have an account?{" "}
                                <a href="#">Login now</a>
                            </h3>
                        </div>
                    </form>
                </div>
            </body>
        </>
    );
};

export default Form;
