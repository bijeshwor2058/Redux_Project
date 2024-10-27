import { CgProfile } from "react-icons/cg";
import styles from "./layout.module.css";
import ContactCard from "../Component/ContactCard/ContactCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../slice/ContactSlice";
// import profil from './user.png'
// import LeftContainer from "./leftcontainer/LeftContainer";
// import RightContainer from "./RightContainer/RightContainer";

const Layout = () => {
  const contacts = useSelector((state) => state.contacts);

  // console.log(contacts.ContactList)
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: "",
    surname: "",
    mobile: "",
    isfav: false,
  });

  useEffect(()=> {
    if(contact.editContactId){
      const contactToEdit = contacts.contactList.find( data => data.mobile == contacts.editContactId)

      if(contactToEdit){
        setContact(contactToEdit)
      }
    }
  }, [contact.editContactId] )


  const onFormSubmit = (e) => {
    e.preventDefault();
    const contactPayload = {
      name: contact.name,
      surname: contact.surname,
      mobile: contact.mobile,
      isfav: false,
    };

    dispatch(addContact(contactPayload));

    setContact({
      name: "",
      surname: "",
      mobile: "",
      isfav: false,
    });
  };

  const OnInputUser = (e) => {
    setContact({
      ...contact,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <div className={styles.header}>
        <div>
          <CgProfile /> &nbsp; Jhon Wan
        </div>

        <div className={styles.header_search}>
          <input type="text" />
          <button>Search</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          margin: "30px",
          gap: "30px",
          height: "100%",
        }}
      >
        <div
          style={{ width: "33%", border: "1px solid black", padding: "20px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {/* <TiContacts /> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "0rem",
              }}
            >
              <p>All Contacts</p>
              <p> 1 contacts</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {/* <MdOutlineFavoriteBorder /> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "0rem",
              }}
            >
              <p>Favourites</p>
              <p> 1 contacts</p>
            </div>
          </div>

          <form onSubmit={onFormSubmit}>
            <input
              value={contact.name}
              onChange={OnInputUser}
              id="name"
              type="text"
              placeholder="Name"
            />
            <input
              value={contact.surname}
              onChange={OnInputUser}
              id="surname"
              type="text"
              placeholder="Surname"
            />
            <input
              value={contact.mobile}
              onChange={OnInputUser}
              id="mobile"
              type="number"
              placeholder="8985944343"
            />
            <button type="submit">Add</button>
          </form>
        </div>

        <div>
          <table
            border={1}
            style={{
              width: "50rem",
            }}
          >
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Mobile</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {contacts.ContactList.map((data) => (
                <ContactCard key={data.mobile} {...data} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Layout;
