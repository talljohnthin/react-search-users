import React from 'react'
import { Phone } from 'react-feather';


const User = ({ data }) => {
    const { name, website, email, phone, company, address } = data
    return (
        <div className="user-list__item">
            <div className="user-list__initials">{ name.split('')[0] }</div>
            <div className="user-list__content">
                <div className="user-list__content__name">{ name }</div>
                <div className="user-list__content__website">{ website }</div>
                <div className="user-list__content__label">Company:</div>
                <div className="user-list__content__value">{ company.name }</div>
                <div className="user-list__content__value">{ company.bs }</div>
                <div className="user-list__content__value">{ company.catchPhrase }</div>
                <div className="user-list__content__label">Email:</div>
                <div className="user-list__content__value">{ email }</div>
                <div className="user-list__content__label">Address:</div>
                <div className="user-list__content__value">{ `${address.suite} ${address.street}, ${address.city}` }</div>
                <a href={`tel:${phone.toString().split(' ')[0]}`} className="user-list__content__phone"><Phone size="18" /><span>Contact</span></a>
            </div>
            
        </div>
    )
}

export default User
