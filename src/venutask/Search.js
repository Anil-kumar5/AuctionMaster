import React, { Component } from 'react'
import axios from 'axios';
export class Search extends Component {
    state = {
        search: '',
        data: []
    }
    onSearchChange = e => {
        this.setState({
            search: e.target.value
        })
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(resp => {
                this.setState({
                    data: resp.data
                })
                console.log(this.state.data)
            })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.search}
                    onChange={this.onSearchChange}
                />
                {
                    this.state.data.filter(da =>
                        ((da.name)&&(da.username)).toLowerCase().includes(this.state.search.toLowerCase())
                    )
                        .map(data => {
                            return (
                                <div>
                                    {
                                        data.name
                                    }
                                    -----------------------
                                    {
                                        data.username
                                    }
                                </div>

                            )

                        })
                }
            </div>
        )
    }
}

export default Search
