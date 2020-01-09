// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Option from './components/Option';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: props.options
      };
    }
    // Lifecycle method
    componentDidMount() {
      try {
        console.log('Fetching Data!');
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        
        if (options) {
          this.setState(
            () => ({options: options})
          );
        }
      } catch(e) {
        // Do nothing
        
      }
     
   }
    componentDidUpdate(prevProps, prevState) {
      
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('Saving data');
      }
    }
    componentWillUnmount() {
      console.log('component will unmount!');
    }
    // handleDeleteOption
    handleDeleteOptions() {
      this.setState(
        () => ({ options: [] })
      );
    }
    // handle delete one option
    handleDeleteOption(optionToRemove) {
      this.setState(
        (prevState) => ({
          options: prevState.options.filter(
            (option) => { return optionToRemove !== option; }
          )
        })
      );
    }
    // handle pick
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
  
    // handle Add Option
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add Item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already existed';
      }
  
      this.setState(
        (prevState) => ({ options: prevState.options.concat(option) })
      );
    }
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  }
  
  IndecisionApp.defaultProps = {
    options: []
  };
  
  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
  