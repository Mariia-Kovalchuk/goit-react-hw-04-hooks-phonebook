import { Component } from "react";
import style from './ContactForm.module.css'

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = e => {
        const key = e.currentTarget.name;
        this.setState({ [key]: e.currentTarget.value });
    };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({
        name: '',
        number: ''
    });
  };

    
    render() {
        return (
            <form className={style.contactForm} onSubmit={this.handleSubmit}>
                <label > Name
                    <input className={style.input}
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>

                <label > Number
                    <input className={style.input}
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
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

    }


}

export default ContactForm;