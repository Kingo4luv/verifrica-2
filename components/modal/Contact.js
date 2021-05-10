import { useState } from "react";
import TextInput from "../input/TextInput";
import Listbox from "../listbox";
import ModalLayout from "./layout";
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

export default function ContactUsModal({toggle, isOpen, toggleEarlyAccess, toggleSuccess}){
    const [loading, setLoading] = useState(false);
    const [formData, setformData] = useState({
         firstName: "",
         lastName: "",
         email: "",
         company: "",
         phone: ""
     });
    const [errors, setErrors] = useState({
         firstName: "",
         lastName: "",
         email: "",
         company: "",
         phone:"",
         general: "",
     });
    const {firstName, lastName, email, company, phone} = formData;

    const handleChange = (e) => {
        clearErrors();
        setformData({...formData, [e.target.name]: e.target.value})
        
    }
    const clearErrors = () =>{
        console.log("hi");
        setErrors({...errors, firstName: "", lastName:"", company:"", email:"",phone:"", general:""});
    }

    const resetForm = () =>{
        setformData({...formData, firstName: "", lastName:"", company:"", email:"", phone:""});
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
        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_EMAIL_USER_ID)
            .then((result) => {
                // console.log(result.text);
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
        <ModalLayout toggle={toggle} isOpen={isOpen}>
            <div className="modal-body space-y-5 md:space-y-9">
                <div className="max-w-sm mx-auto">
                    <p className="text-center font-light text-subtitle-3 text-black ">Our Sales team can help you find the right solution. Fill out the form and we’ll get in touch shortly.</p>
                </div>
                <form className="space-y-6 w-full" onSubmit={sendEmail}>
                    <div className="rounded-md shadow-sm">
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
                        <Listbox last={false} items={products.items} title={products.title} name="product" />
                        <Listbox last={true} items={roles.items} title={roles.title} role="role" />
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
                    <p className="text-black mt-4 text-sm text-center">Looking to request access? <span onClick={toggleEarlyAccess} className="font-medium cursor-pointer">Request Access</span></p>
                </form>
            </div>
        </ModalLayout>
    )
}