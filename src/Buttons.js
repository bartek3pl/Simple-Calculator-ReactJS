import React from 'react';

class Buttons extends React.Component {
    render() {       
        return (
            <div className="buttons">
                <button className="button" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button className="button" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button className="button" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button> 
                <button className="button" style={ {float: 'none'} } name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <br/>
                <button className="button number" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button className="button number" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button className="button number" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className="button" style={ {float: 'none'} } name="*" onClick={e => this.props.onClick(e.target.name)}>*</button>
                <br/>
                <button className="button number" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button className="button number" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button className="button number" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button className="button" style={ {float: 'none'} } name="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
                <br/>
                <button className="button number" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className="button number" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className="button number" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="button" style={ {float: 'none'} } name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                <br/>
                <button className="button number" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button className="button number" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button className="button number" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button className="button" style={ {float: 'none'} } name="+" onClick={e => this.props.onClick(e.target.name)}>+</button> 
                <br/>
                <button className="button wide" name="%" onClick={e => this.props.onClick(e.target.name)}>%</button>
                <button className="button wide" name="sqrt" onClick={e => this.props.onClick(e.target.name)}>&#x221a;</button>
            </div>
        );
    }
}

export default Buttons;