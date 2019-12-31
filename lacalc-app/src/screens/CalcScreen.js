import React from 'react';

//import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
//import Fab from '@material-ui/core/Fab';
import InputField from '../components/InputField';
import NumberButton from '../components/NumberButton';

class CalcScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            statement: ""
        }
    }

    handleKeyPress = (event) => {
        //event.preventDefault();
        console.log(event)
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({statement: event.target.value});

        if (event.keyCode === 13) {
            console.log("Cleaning up");
            let ouput=eval(this.state.statement)
            console.log(ouput)
            this.setState({statement:ouput});
        }
    }

    handleInputFields = (event) => {
        //event.preventDefault();
        console.log(event)
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({statement: event.target.value});
    }

    handleClick = (event) => {
        //event.preventDefault();
        //console.log(event);
        let button=event.currentTarget.value;
        console.log(button);
        console.log(this.state.statement+button);
        //console.log("Clicked" + event.target.name);
        ///console.log("Clicked" + event.target.value);
        if (button === '=') {
            let ouput=eval(this.state.statement)
            console.log(ouput)
            this.setState({statement:ouput});
        } else {
            this.setState({statement: this.state.statement+button});
        }
    }

    render() {
        //console.log(convert().possibilities())
        return (
                <Grid container justify='center' align='center' direction={'row'} spacing={300}>
                    <InputField data={{
                                            currentValue: this.state.statement,
                                            input: this.state.statement, 
                                            label: "Input",
                                            name: 'dist' }} 
                                    handleInput={this.handleInputFields}
                                    handleKeys={this.handleKeyPress} />

                    <Grid container xs={8} style={{marginTop: '20px'}}>
                            <NumberButton 
                                no={0} 
                                handleClick={this.handleClick} />
                            <NumberButton 
                                no={1} 
                                handleClick={this.handleClick} />
                            <NumberButton 
                                no={2} 
                                handleClick={this.handleClick} />
                            <NumberButton 
                                no={3} 
                                handleClick={this.handleClick} />
                            <NumberButton 
                                no={4} 
                                handleClick={this.handleClick} />
                            <NumberButton 
                                no={5} 
                                handleClick={this.handleClick} />
                            <NumberButton 
                                no={6}
                                handleClick={this.handleClick} />
                            <NumberButton 
                                no={7}
                                handleClick={this.handleClick} />
                            <NumberButton 
                                no={8}
                                handleClick={this.handleClick} />
                            <NumberButton 
                                no={9}
                                handleClick={this.handleClick} />
                            <NumberButton 
                                no={"+"}
                                handleClick={this.handleClick}  />
                            <NumberButton 
                                no={"-"}
                                handleClick={this.handleClick}  />
                            <NumberButton 
                                no={"*"}
                                handleClick={this.handleClick}  />
                            <NumberButton 
                                no={"/"}
                                handleClick={this.handleClick}  />
                            <NumberButton 
                                no={"%"}
                                handleClick={this.handleClick}  />
                            <NumberButton 
                                no={"("}
                                handleClick={this.handleClick}  />
                            <NumberButton 
                                no={")"}
                                handleClick={this.handleClick}  />
                            <NumberButton 
                                no={"="}
                                handleClick={this.handleClick}  />
                    </Grid>


                </Grid>
        )
    }
}

export default CalcScreen;
