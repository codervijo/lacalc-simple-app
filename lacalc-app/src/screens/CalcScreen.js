import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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
            console.log(ouput.toString(10))
            this.setState({statement:ouput.toString(10)});
        }
    }

    handleInputFields = (text) => {
        //event.preventDefault();
        console.log(text)
        //console.log(event.target.name);
        //console.log(event.target.value);
        this.setState({statement: text});
    }

    handleSubmit = (event) => {
        console.log(event)
        if (event.key === "Enter") {
            console.log("Cleaning up");
            let ouput=eval(this.state.statement)
            console.log(ouput.toString(10))
            this.setState({statement:ouput.toString(10)});
        }   
    }

    handleClick = (event) => {
        event.preventDefault();
        //debugger;
        console.log(event.target);
        //let button=event.target.innerText;
        let button=event.target.innerText;
        //console.log(button);
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

    handlePress = (key) => {
        //event.preventDefault();
        //debugger;
        console.log(key);
        //let button=event.target.innerText;
        let button=key;
        //console.log(button);
        console.log(this.state.statement+button);
        //console.log("Clicked" + event.target.name);
        ///console.log("Clicked" + event.target.value);
        if (button === '=') {
            let ouput=eval(this.state.statement)
            console.log(ouput)
            this.setState({statement:ouput.toString(10)});
        } else if (button === 'CLEAR') {
            this.setState({statement: ''});
        } else {
            this.setState({statement: this.state.statement+button});
        }
    }

    handleClear = () => {
        event.preventDefault();
        this.setState({statement: ''});
    }

    render() {
        const numbers = [
            {op: 0, key: '1'},
            {op: 1, key: '2'},
            {op: 2, key: '3'},
            {op: 3, key: '4'},
            {op: 4, key: '5'},
            {op: 5, key: '6'},
            {op: 6, key: '7'},
            {op: 7, key: '8'},
            {op: 8, key: '9'},
            {op: 9, key: 'A'}
        ];

        const ops = [
            {op:'+', key: 'B'},
            {op:'-', key: 'C'},
            {op:'*', key: 'D'},
            {op:'/', key: 'E'},
            {op:'%', key: 'F'},
            {op:'(', key: 'G'},
            {op:')', key: 'H'},
            {op:'=', key: 'I'}
        ];

        let calcButtons = numbers.concat(ops);

        //console.log(convert().possibilities())
        return (
            <View style={styles.container}>

                    <InputField data={{
                                currentValue: this.state.statement,
                                input: this.state.statement, 
                                label: "Input",
                                name: 'dist' }} 
                        handleInput={this.handleInputFields}
                        handleKeys={this.handleKeyPress}
                        handleSubmit={this.handleSubmit} />

                    <FlatList
                        data={calcButtons}
                        numColumns={3}
                        renderItem={(e) => {
                            return <NumberButton
                                        no={e.item.op}
                                        handleClick={this.handleClick}
                                        handlePress={this.handlePress} />
                        }}
                    />
                  
                    <NumberButton
                        no="CLEAR"
                        handleClick={this.handleClear}
                        handlePress={this.handlePress}
                    />

            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CalcScreen;
