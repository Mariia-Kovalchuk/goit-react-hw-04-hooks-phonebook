import style from './ContactList.module.css'
import PropTypes from "prop-types";


const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul  className={style.contactsList}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={style.contactItem}>
                    <span className={style.listItem}>
                        <p className={style.listItemText}>{name}</p>
                        <p className={style.listItemText}>{number}</p>
                    </span>
                    <button
                        type="button"
                        onClick={() => onDeleteContact(id)}
                        className={style.button}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;