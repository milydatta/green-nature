import React, { useState } from 'react';
import Contact from './Contact';
import './Contact.css';

interface IContact{
    name: string;
    email: string;
}

const Contacts = () => {
    //  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [contact, setContact] = useState<IContact>({} as IContact);
    const [contactList, setContactList] = useState<IContact[]>([])

    const onClick = () => {
        setContactList([...contactList, contact])
        setContact({
            name:"",
            email:""
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { setContact({ ...contact, [e.target.name]
         : e.target.value})}

    const handleRemove = (email: string) => {
        const newContactList = contactList.filter(c => c.email !== email)
        setContactList(newContactList)
    }

    return (
        <div>
           {/* <h1>USER:{loggedInUser.name}</h1> */}
            <h1>Contact List</h1>
            <div className="form">
                <input
                value = {contact.name}
                onChange={onChange}
                type="text"name="name"placeholder="Contact Name"/>
                <input
                 value = {contact.email}
                onChange={onChange}
                type="email"name="email"placeholder="Contact Email"/>
                <button onClick={onClick}>Add</button>
            </div>
            {
                contactList.map((con) => <Contact key={con.name}
                 name = {con.name} email = {con.email} handleRemove={handleRemove}/>)
            }
        </div>
    );
};

export default Contacts;