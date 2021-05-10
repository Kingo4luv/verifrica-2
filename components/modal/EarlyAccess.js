import { useState } from "react";
import TextInput from "../input/TextInput";
import ModalLayout from "./layout";
import { harperFetch } from '../../utils/harperdb';

export default function EarlyAccessModal({toggle, isOpen, toggleContact, toggleSuccess}){
    const [formData, setformData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
    });
    
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        general: "",
    });

    const {firstName, lastName, email, company} = formData;

    const handleChange = (e) => {
        clearErrors();
        setformData({...formData, [e.target.name]: e.target.value})
        
    }
    const clearErrors = () =>{
        setErrors({...errors, firstName: "", lastName:"", company:"", email:"", general:""});
    }

    const resetForm = () =>{
        setformData({...formData, firstName: "", lastName:"", company:"", email:""});
    }

    const onSubmit = async (e) => {
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
        setLoading(true);

        try {
        const response = await harperFetch({
            operation: 'insert',
            schema: 'verifrica',
            table: 'contacts',
            records: [formData],
        });
        if(response.error){
            setErrors({...errors, general:"Something went wrong. Please try again"});
        }
        else{
            resetForm();
            toggleSuccess("earlyAccess");
        }
        return setLoading(false)
        } catch (err) {
          setErrors({...errors, general:"Something went wrong. Please try again"});
          setLoading(false)
        }
  };

    return(
        <ModalLayout toggle={toggle} isOpen={isOpen}>
            <div className="modal-body space-y-9">
                <h3 className="text-[20px] leading-snug font-black text-center">Get early access</h3>
                <form className="space-y-12 w-full" onSubmit={onSubmit}>
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
                            <TextInput first={false} second={false}  error={errors.company} last={true} onChange={handleChange} value={company} id="company" name="company" type="text" required={true} placeholder="Company (Optional)" />
                        </div>
                    </div>
                    <div>
                        <button
                        onClick={onSubmit}
                        type="submit"
                        className = "group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded text-white bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                        disabled={loading}
                        >
                        {loading ? "Please wait ...":"Submit"}
                        </button>
                    </div>

                    <p className="text-black mt-4 text-sm text-center">Looking to contact sales? <span onClick={toggleContact} className="font-medium cursor-pointer">Contact Sales</span></p>
                </form>
            </div>
        </ModalLayout>
    )
}