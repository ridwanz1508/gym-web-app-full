import React from "react";

function Form() {;
    return (
        <div className="faq">
            <h1>FREQUENTLY ASKED QUESTION</h1>
            <ul className="accordian">
                <li>
                    <input type="radio" name="accordion" id="item1"/>
                    <label for="item1">Minimum age for GYM HUB members?</label>
                    <div className="content">
                        <p>
                        The minimum age for GYM HUB members is 12 years old. Please note, ages 12-14 must attach a Consent Letter and Family Card when registering, and can only purchase GYM Junior & GYM Junior Plus membership packages.
                        For ages 15 & 16, please also attach a Consent Letter and Family Card when registering, with the purchase of a normal membership package.
                        </p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="item2"/>
                    <label for="item2">Can I join online?</label>
                    <div className="content">
                        <p>
                        Of course you can. You can register as a member through the GYM HUB website and application and book a personal trainer through the GYM HUB application.
                        </p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="item3"/>
                    <label for="item3">What are the GYM HUB membership types?</label>
                    <div className="content">
                        <p>
                        GYM HUB membership only has 1 type and already gets access to all GYM HUB clubs and class variations without quotas and additional costs.
                        </p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="item4"/>
                    <label for="item4">How to book a class</label>
                    <div className="content">
                        <p>
                        Once you have become a GYM HUB member, you can access the GYM HUB application to book classes available at the club of your choice.
                        </p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="item5"/>
                    <label for="item5">What payment methods are available</label>
                    <div className="content">
                        <p>
                        GYM HUB accepts payments using Debit Cards, Credit Cards, BCA Virtual Accounts, Kredivo, ShopeePay, Indodana, Atome, Mobile Apps, Traveloka Paylater, and GoPay.
                        You can make transactions online through the GYM HUB application or directly at the GYM HUB club you visit.
                        </p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="accordion" id="item6"/>
                    <label for="item6">How to change data on the GYM HUB application?</label>
                    <div className="content">
                        <p>
                        You can contact Homeclub Customer Service to make changes to your personal data on the GYM HUB Application.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Form;