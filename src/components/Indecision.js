import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
     
      state = {
        options: []
      };

    // Lifecycle method
    componentDidMount()  {
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
    handleDeleteOptions = () => {
      this.setState(
        () => ({ options: [] })
      );
    }
    // handle delete one option
    handleDeleteOption = (optionToRemove) => {
      this.setState(
        (prevState) => ({
          options: prevState.options.filter(
            (option) => { return optionToRemove !== option; }
          )
        })
      );
    }
    // handle pick
    handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
  
    // handle Add Option
    handleAddOption = (option) => {
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
