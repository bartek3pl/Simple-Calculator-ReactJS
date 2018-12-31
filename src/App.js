import React from 'react';
import Buttons from './Buttons.js';
import Result from './Result.js';

function Percentage(props) {
    return (
        (props.number / 100)
    );
}

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {result: ''};
        this.onClick = this.onClick.bind(this);
    }
    
     onClick(button) {
        if(button === 'C')
            this.reset()
        
        else if(button === 'CE')
            this.backspace()
        
        else if(button === '=')
            this.result()
         
        else if(button === 'sqrt')
            this.sqrt()
         
        else if(button === '%')
            this.percentage()
         
        else if(this.state.result.length > 17)
            this.setState({   
                result: this.state.result
            }) 
         
        else
            this.setState({   
                result: this.state.result + button //concatenation
            })       
    };
    
    reset() {
        this.setState({
            result: ''
        })
    }
    
    backspace() {
        try {
          this.setState({
            result: this.state.result.slice(0,-1)
        })  
        }
        catch(error) {
            this.setState({
                result: ""
            })  
        }      
    }
    
    sqrt() {
        try {
            this.setState({
                result: Math.sqrt(this.state.result)
            })
        }
        catch(error) {
            this.setState({
                result: ""
            })
        }
    }
    
    percentage() {
       try {
            this.setState({
                result: <Percentage number={eval(this.state.result)}/>
            })
        }
        catch(error) {
            this.setState({
                result: ""
            })
        } 
    }

    result() {
        try {
            if(this.state.result.length <= 16)
                this.setState({
                    result: (eval(this.state.result))
                })
            else
               this.setState({
                    result: this.state.result
                }) 
        } 
        catch (error) {
           this.setState({
            result: "Incorrect input!"
            })  
        }
    }
   
    render() {
        return (
        <div className="wrapper">
            <div className="container">
                <div className="calculator">
                    <Result result={this.state.result}/>
                    <Buttons onClick={this.onClick}/>
                </div>
            <h1>Simple Calculator</h1>
            </div>
            <h2>Hover it</h2>
        </div>
       
        );
    }
}

export default App;