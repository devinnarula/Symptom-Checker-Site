import React, {useState} from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    let [subject, setSubject] = useState("")
    let [message, setMessage] = useState("")

    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }
    return (
        <div className="ContactContainer">
            <div>
                <h1 className="Title1">Having Trouble? Contact Tech Support!</h1>
                <h2 className="Title2">A representative will get back to you shortly.</h2>
            </div>
            <div title='Contact'/>
            <form className="Contact-Form">
                <caption className="Contact-Caption">Subject:</caption>
                <textarea className="Contact-Subject" value={subject} onChange={handleSubjectChange}></textarea>
                <caption className="Contact-Caption">Message:</caption>
                <textarea className="Contact-Message" value={message} onChange={handleMessageChange}></textarea>
                <a className="Contact-Button" href={`mailto:techguy@gmail.com?&subject=${subject}&body=${message}`}>Send Email</a>
            </form>
            <div className = "Button4">
                <h1><Link className='App-link' to='/'>Go Home</Link></h1>
            </div>
        </div> 
    )
}

export default Contact