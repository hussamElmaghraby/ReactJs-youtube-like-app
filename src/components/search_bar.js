import React , {Component} from 'react';

export  default class SearchBar extends Component{
    constructor(props){
        // will call the parent mehtod of the parent class (Component)
        super(props);
        this.state ={
            terms : "Starting  a value here "
        }
    }
    // to return the jsx
    render(){
        return (
            <div className="search-bar">
            <input 
            onChange={ event => this.onInputChange(event.target.value)} />
            <p> the new value : {this.state.terms}</p>
            </div>
            );
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
}

