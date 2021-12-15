import { memo } from "react";
import './css/headerSearchArea.scss'
import { FaPhoneAlt, FaFileInvoice } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

const HeaderSearchArea = memo(({ filteredList }) => {
    if (!filteredList)
        return ""

    return (
        <ul className="headerSearchArea">
            {
                filteredList.map((item) =>
                    <li className="headerSearchArea-item" key={item.id}>
                        <article className="headerSearchArea-item-container">
                            <div className="headerSearchArea-item-container-name">
                                <h3 className="headerSearchArea-item-container-name__text">{item.name}</h3>
                            </div>
                            <div className="headerSearchArea-item-container-contact">
                                <div className="headerSearchArea-item-container-contact-number">
                                    <FaPhoneAlt />
                                    <span>{item.number}</span>
                                </div>
                                <div className="headerSearchArea-item-container-contact-email">
                                    <MdAlternateEmail />
                                    <span>{item.email}</span>
                                </div>
                                <div className="headerSearchArea-item-container-contact-policy">
                                    <FaFileInvoice />
                                    <span>{`Policy No. ${item.policyNumber1} | ${item.policyNumber2}`}</span>
                                </div>
                            </div>
                        </article>
                    </li>
                )
            }
        </ul>
    );
});

export default HeaderSearchArea;
