import { useState } from "react";
import TextInput from "./input/TextInput";
import Listbox from "./listbox";
import emailjs from 'emailjs-com';

const products = 
{
    title: "What are you building?",
    items: [
        { name: "Personal Finances" },
        { name: "Consumer Payments" },
        { name: "Lending" },
        { name: "Banking" },
        { name: "Wealth" },
        { name: "Business Finances" },
        { name: "Others" },
    ]       
}
const roles = 
{
    title :"What role are you in?",
    items:[
        { name: "Developer" },
        { name: "Consumer Support" },
        { name: "Product Manager" },
        { name: "Others" },
    ]
}


const ContactForm = ({toggleEarlyAccess, toggleSuccess}) => {
    const [loading, setLoading] = useState(false);
    const [formData, setformData] = useState({
         firstName: "",
         lastName: "",
         email: "",
         company: "",
         phone: "",
         role:"",
         product: "",
         description:"",
     });
    const [errors, setErrors] = useState({
         firstName: "",
         lastName: "",
         email: "",
         company: "",
         phone:"",
         general: "",
     });
    const {firstName, lastName, email, company, phone, product, role, description} = formData;

    const handleChange = (e) => {
        clearErrors();
        setformData({...formData, [e.target.name]: e.target.value})
        
    }
    const clearErrors = () =>{
        setErrors({...errors, firstName: "", lastName:"", company:"", email:"",phone:"", general:""});
    }

    const resetForm = () =>{
        setformData({...formData, firstName: "", lastName:"", company:"", email:"", phone:""});
    }

    const listChanged = (data) => {
        // console.log(data)
        setformData({...formData, [data.input] : data.selected})
    }


    function sendEmail(e) {
        e.preventDefault();
        if (loading) return;
        if(firstName === ""){
            return setErrors({...errors, firstName: "First name is required"})
        }
        if(lastName === ""){
            return setErrors({...errors, lastName: "Last name is required"})
        }
        if(company !== "" && company.length < 5){
            return setErrors({...errors, company: "Company name is too short"})
        }
        if (email === "" || !email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return setErrors({...errors, email: "Email is required and must be valid"})
        }
        if(phone !== "" && phone.length < 11){
            return setErrors({...errors, phone: "Phone number is required with minimum of 11 characters"})
        }
        setLoading(true);
        emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, formData, process.env.NEXT_PUBLIC_EMAIL_USER_ID)
            .then((result) => {
                if(result.text === "OK"){
                    resetForm();
                    toggleSuccess("contact");
                }
            }, (error) => {
                // console.log(error.text);
                setErrors({...errors, general:"Something went wrong. Please try again"});
                setLoading(false)
            });
    }
    return(
        <div className="modal-body space-y-5 md:space-y-9">
        <div className="max-w-sm mx-auto">
            <p className="text-center font-light text-subtitle-3 text-black ">Our Sales team can help you find the right solution. Fill out the form and we’ll get in touch shortly.</p>
        </div>
        <form className="space-y-6 w-full" onSubmit={sendEmail}>
            <div className="rounded-md">
                {errors.general !== "" && <div className="bg-red-100 rounded w-full py-3 text-sm text-red-500 my-4 px-4">{errors.general}</div>}
                <div className="flex w-full">
                    <div className="w-1/2 relative">
                        <TextInput first={true} error={errors.firstName} second={false} onChange={handleChange} last={false} id="first-name" value={firstName} name="firstName" type="text" required={true} placeholder="First Name" />
                    </div>
                    <div className="w-1/2 relative">
                        <TextInput first={false} error={errors.lastName} second={true} last={false} onChange={handleChange} id="last-name" value={lastName} name="lastName" type="text" required={true} placeholder="Last Name" />
                    </div>
                </div>
                <div className="relative">
                    <TextInput first={false} second={false} error={errors.email} last={false} onChange={handleChange} value={email} id="email" name="email" type="email" required={true} placeholder="Email Address" />
                </div>
                <div className="relative">
                        <TextInput first={false} second={false}  error={errors.company} last={false} onChange={handleChange} value={company} id="company" name="company" type="text" required={true} placeholder="Company" />
                </div>
                <div className="relative">
                        <TextInput first={false} second={false}  error={errors.phone} last={false} onChange={handleChange} value={phone} id="phone" name="phone" type="text" required={true} placeholder="Phone Number" />
                </div>
                <Listbox last={false} items={products.items} title={products.title} input={"product"} listChanged={listChanged}/>
                <Listbox last={false} items={roles.items} title={roles.title} input={"role"} listChanged={listChanged}/>
                <div>
                    <textarea value={description} name="description" onChange={handleChange} 
                    placeholder="Anything else we need to know? type here" className="w-full border-t-0 placeholder-form-text-grey border-[#D1D1D1] h-24 rounded-b p-4 text-sm"/>
                </div>
            </div>
            <div>
                <button
                type="submit"
                onClick={sendEmail}
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded text-white bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                disabled={loading}
                >
                {loading ? "Please wait ...":"Contact us"}
                </button>
            </div>
            {/* <p className="text-black mt-4 text-sm text-center">Looking to request access? <span onClick={toggleEarlyAccess} className="font-medium cursor-pointer">Request Access</span></p> */}
        </form>
    </div>
    )
}

export default ContactForm;