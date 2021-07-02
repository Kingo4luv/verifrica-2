import ModalLayout from "./layout";
import ContactForm from "../ContactForm";


export default function ContactUsModal({toggle, isOpen, toggleEarlyAccess, toggleSuccess}){
    

    return(
        <ModalLayout toggle={toggle} isOpen={isOpen}>
            < ContactForm toggleSuccess={toggleSuccess} toggleEarlyAccess={toggleEarlyAccess} />
        </ModalLayout>
    )
}