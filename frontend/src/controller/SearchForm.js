import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', search_all: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.find.bind(this);
      

    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }


    find(event) {
      //Request find() from API Gateway
      fetch('https://17xl0wn9ga.execute-api.us-east-2.amazonaws.com/default/search_all',
      { method: 'GET',
               headers: new Headers(),
               mode: 'cors',
               cache: 'default' })
	    .then((response) => {
        alert('hola mundo')
        return response.json()
      })
      .then((search_all) => {
    	  console.log('OK')
      })
      .catch((error) => {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
    }
  

    
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="BUSCAR" />
        </form>
        <ul>{this.state.search_all}</ul>
        </div>
      );
    }
  }


  export default SearchForm;