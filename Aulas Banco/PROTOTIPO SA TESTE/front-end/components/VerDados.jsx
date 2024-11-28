import React from 'react'

function VerDados(props) {
    let user = props.user
    return (
        <div>
            <p>{user.userid}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.senha}</p>

        </div>
    )
}

export default VerDados
