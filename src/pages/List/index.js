import React, { Component } from 'react'
import { withRouter} from  'react-dom'
import { Table } from './styles'
import axios from 'axios'
import { USUARIOS } from './mock'
import {MainHeader} from '../../Components/header/header'

export class FilterableUserTable extends Component{
    constructor(props){
        super(props)
        this.state ={
            filterText: ""
        }

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    }

    handleFilterTextChange(filterText){
        this.setState({
            filterText
        })
    }

    render(){
        return(            
            <div>
                <MainHeader />
                <SearchBar 
                filterText={this.state.filterText}
                onFilterTextChange={this.handleFilterTextChange}
                />
                <UserTable 
                    users={USUARIOS}
                    filterText={this.state.filterText}
                />
            </div>            
        )
    }
}

class SearchBar extends Component {
    constructor(props){
        super(props)

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    }

    handleFilterTextChange(event){
        this.props.onFilterTextChange(event.target.value)
    }

    render(){
        const filterText = this.props.filterText;

        return (
            <form>
                {/* <input 
                    type="text"
                    placeholder="Search"
                    value={filterText}
                    onChange={this.handleFilterTextChange}
                /> */}
            </form>
        )
    }
}

class UserRow extends Component{
    render(){
        const user = this.props.user

        return (
            <tr>
                <td>{user.nome}</td>
                <td>{user.cpf}</td>
                <td>{user.email}</td>
                <td>{user.logradouro}</td>
            </tr>
        )
    }
}

export class UserTable extends Component{
    render(){
        const filterText = this.props.filterText

        const rows =[]

        this.props.users.forEach(user => {
            if(user.name === -1){
                return
            }
            rows.push(<UserRow user={user} key={user.name}/>)
        })

        return (
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>CPF</th>
                        <th>Email</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        )
    }
}


export default (FilterableUserTable)