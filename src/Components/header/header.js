import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Logo.png'
import styled from 'styled-components'
import { Header } from './styles'

export const MainHeader = () => {
    return (
        <Header>
            <img src={Logo} alt='logo'/>

            <div>
                <Link to={'/register'}>Registrar</Link>
                <Link to={'/list'}>Lista</Link>
                <Link to={'/'}>Logout</Link>
            </div>
        </Header>
    )
}

export default (MainHeader)