import React from 'react'

const ErrorValidation = ({ text }) => {
    if (text) {
        return <Error text={text} />
    } else {
        return <EmptyError />
    }
}

const Error = ({ text }) => {
    return (
        <p style={{ color: "red", marginTop: "-10px" }}>{text}</p>
    )
}

const EmptyError = () => {
    return (
        <></>
    );
}

export default ErrorValidation