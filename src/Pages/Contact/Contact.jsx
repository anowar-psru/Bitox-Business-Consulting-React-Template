import React from 'react'
import Breadcumb from '../../Components/Breadcumb/Breadcumb'
import ContactInfo from './ContactInfo'

const Contact = () => {
    return (
        <>
            <Breadcumb titleText={"Partner Ours Contact Today"} subText={"contact us"}/>
            <ContactInfo />
        </>
    )
}

export default Contact