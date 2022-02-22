import React, {useState} from 'react';
import Cards from "react-credit-cards";
import 'react-credit-cards/es/styles-compiled.css'
import Button from "../ui/Button";

function CreditCard(props) {

    const [cvc, setCvc] = useState('')
    const [expiry, setExpiry] = useState('')
    const [focus, setFocus] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleInputFocus = (e) => {
        setFocus(e.target.name);
    }

    const handleInputName = (e) => {
        setName(e.target.value);
    }

    const handleInputNumber = (e) => {
        setNumber(e.target.value);
    }

    const handleInputExpiry = (e) => {
        setExpiry(e.target.value);
    }

    const handleInputCvc = (e) => {
        setCvc(e.target.value);
    }


    return (props.trigger) ? (
        <section className='credit_card_container'>
            <div className='credit_card'>
                <div className='card_container'>
                    <Cards
                        number={number}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focus}
                    />
                    <form>
                        <h3>Please input your data</h3>
                        <input type="tel"
                               name='number'
                               placeholder='Card Number'
                               value={number}
                               onChange={handleInputNumber}
                               onFocus={handleInputFocus}
                        />
                        <input type="text"
                               name='name'
                               placeholder='Name'
                               value={name}
                               onChange={handleInputName}
                               onFocus={handleInputFocus}
                        />
                        <input type="text"
                               name='expiry'
                               placeholder='MM/YY Expiry'
                               value={expiry}
                               onChange={handleInputExpiry}
                               onFocus={handleInputFocus}
                        />
                        <input type="tel"
                               name='cvc'
                               placeholder='CVC'
                               value={cvc}
                               onChange={handleInputCvc}
                               onFocus={handleInputFocus}
                        />
                    </form>
                </div>
                <div className='add_card_section'>
                    <Button type='submit' buttonSize='btn-small'>Add Card</Button>
                    <Button onClick={() => props.setTrigger(false)} type='button' buttonSize='btn-small'>Close</Button>
                </div>
            </div>
        </section>
    ) : '';
}

export default CreditCard;