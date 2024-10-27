import { useDispatch, useSelector } from "react-redux";
import { deleteContact, editContactId } from "../../slice/ContactSlice";
import profil from "./user.png";
const ContactCard = (props) => {
  // console.log(props)
  const dispatch = useDispatch();

  const onClickDelete = () => {
    dispatch(deleteContact(props.mobile));
  };

  const OnClickEdit = () => {
    dispatch(editContactId(props.mobile))
  }

  return (
    <>
      <tr>
        <td>
          <img style={{ height: "60px", width: "60px" }} src={profil} />
        </td>
        <td>{props.name}</td>
        <td>{props.surname}</td>
        <td>{props.mobile}</td>
        <td>
          <div>
            <button onClick={OnClickEdit}>edit</button>
            <button onClick={onClickDelete}>delete</button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ContactCard;
