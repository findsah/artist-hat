import React, { useState } from 'react'
import './account.css'
import AccountProfile from './accountProfile/accountProfile';
import AccountPassword from './accountPassword/accountPassword'
import AccountSecurity from './accountSecurity/accountSecurity';
import AccountNotifications from './accountNotifications/accountNotifications';
import ArtistInfo from './artistInfo/artistInfo';
import BillingInfo from './billingInfo/billingInfo';
import BankAccount from './bankAccount/bankAccount';
import CancelTask from './cancelTask/cancelTask';
import TaxInfo from './taxInfo/taxInfo';
import AccountBalance from './accountBalance/accountBalance';
import Transactions from './transactions/transactions';
import AccountDeactivation from './accountDeactivation/accountDeactivation';

const Account = () => {
   
    const [tabActive, setTabActive] = useState(1);

    const toggleTab = (index) => {
        setTabActive(index);
    }
    return (
        <div className='row justify-content-between userview-account'>
            <div className='account_leftBar px-0'>
                <h2 className='your-account-md text-center py-3 d-none'>YOUR ACCOUNT</h2>
                <div className='account-navbar'>
                    <h2 className='your-account text-center py-3'>YOUR ACCOUNT</h2>
                    <div className='skills-inner-sec py-2 my-2'>
                        <div className='text-end account_nav_item'><button className={`account-tabs ${tabActive === 1 ? "backgrond-active" : ""}`} onClick={() => toggleTab(1)}><h3 className='skills'>PROFILE</h3></button></div>
                        <div className='text-end account_nav_item'><button className={`account-tabs ${tabActive === 2 ? "backgrond-active" : ""}`} onClick={() => toggleTab(2)}><h3 className='skills'>PASSWORD</h3></button></div>
                        <div className='text-end account_nav_item'><button className={`account-tabs ${tabActive === 3 ? "backgrond-active" : ""}`} onClick={() => toggleTab(3)}><h3 className='skills'>ACCOUNT SECURITY</h3></button></div>
                        <div className='text-end account_nav_item'><button className={`account-tabs ${tabActive === 4 ? "backgrond-active" : ""}`} onClick={() => toggleTab(4)}><h3 className='skills'>NOTIFICATIONS</h3></button></div>
                        <div className='text-end account_nav_item'><button className={`account-tabs ${tabActive === 5 ? "backgrond-active" : ""}`} onClick={() => toggleTab(5)}><h3 className='skills'>ARTIST INFO</h3></button></div>
                        <div className='text-end account_nav_item'><button className={`account-tabs ${tabActive === 6 ? "backgrond-active" : ""}`} onClick={() => toggleTab(6)}><h3 className='skills'>BILLING INFO</h3></button></div>
                        <div className='text-end account_nav_item'><button className={`account-tabs ${tabActive === 7 ? "backgrond-active" : ""}`} onClick={() => toggleTab(7)}><h3 className='skills'>BANK ACCOUNT</h3></button></div>
                        <div className='text-end account_nav_item'><button className={`account-tabs ${tabActive === 8 ? "backgrond-active" : ""}`} onClick={() => toggleTab(8)}><h3 className='skills'>CANCEL A TASK</h3></button></div>
                        <div className='text-end account_nav_item'><button className={`account-tabs ${tabActive === 9 ? "backgrond-active" : ""}`} onClick={() => toggleTab(9)}><h3 className='skills'>TAX INFO</h3></button></div>
                        <div className='text-end account_nav_item'><button className={`account-tabs ${tabActive === 10 ? "backgrond-active" : ""}`} onClick={() => toggleTab(10)}><h3 className='skills'>ACCOUNT BALANCE</h3></button></div>
                        <div className='text-end account_nav_item'><button className={`account-tabs ${tabActive === 11 ? "backgrond-active" : ""}`} onClick={() => toggleTab(11)}><h3 className='skills'>TRANSACTIONS</h3></button></div>
                        <div className='text-end account_nav_item'><button className={`account-tabs ${tabActive === 12 ? "backgrond-active" : ""}`} onClick={() => toggleTab(12)}><h3 className='skills'>DEACTIVATE</h3></button></div>
                    </div>
                </div>
            </div>
            <div className='account_content container py-2'>
                {tabActive === 1 ? (
                    <AccountProfile />
                ) : ''}
                {tabActive === 2 ? (
                    <AccountPassword />
                ) : ''}
                {tabActive === 3 ? (
                    <AccountSecurity />
                ) : ''}
                {tabActive === 4 ? (
                    <AccountNotifications />
                ) : ''}
                {tabActive === 5 ? (
                    <ArtistInfo />
                ) : ''}
                {tabActive === 6 ? (
                    <BillingInfo />
                ) : ''}
                {tabActive === 7 ? (
                    <BankAccount />
                ) : ''}
                {tabActive === 8 ? (
                    <CancelTask />
                ) : ''}
                {tabActive === 9 ? (
                    <TaxInfo />
                ) : ''}
                {tabActive === 10 ? (
                    <AccountBalance />
                ) : ''}
                {tabActive === 11 ? (
                    <Transactions />
                ) : ''}
                {tabActive === 12 ? (
                    <AccountDeactivation />
                ) : ''}
            </div>
        </div>
    )
}

export default Account
