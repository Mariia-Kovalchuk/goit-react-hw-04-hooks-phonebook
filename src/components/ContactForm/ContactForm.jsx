import { useState } from "react";
import style from './ContactForm.module.css'



function ContactForm({ onSubmit }) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }

    };

    const handleSubmit = e => {
        e.preventDefault();

        const options = { name, number };
        onSubmit(options);

        setName('');
        setNumber('')
    };


    return (
        <form className={style.contactForm} onSubmit={handleSubmit}>
            <label > Name
                <input className={style.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>

            <label > Number
                <input className={style.input}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять из не менее 5 цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
            </label>


            <button type="submit" className={style.button}>
                Сохранить
            </button>

        </form>
    );

};


export default ContactForm;