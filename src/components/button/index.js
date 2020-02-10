import React from 'react';
import Icon from '@material-ui/core/Icon';
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Bton from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addList, addCard } from '../../actions/'

class Button extends React.Component{

    state = {
        formOpen: false,
        text: ""
    };

    openForm = () =>{
        this.setState({
            formOpen: true
        });
    }

    closeForm = () =>{
        this.setState({
            formOpen: false
        });
    }

    handleInputChange = e =>{
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {
        const {dispatch} = this.props;
        const {text} = this.state;

        if(text ){
            this.setState({
                text: "",
            })
            dispatch(addList(text));
        }

        return;
    }

    handleAddCArd = () =>{
        const {dispatch, listID} = this.props;
        const {text} = this.state;

        if(text ){
            this.setState({
                text: "",
            })
            dispatch(addCard(listID, text));
        }

        return;
    }

    renderAddButton = () => {
        const {list} = this.props;
        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";


        return(
            <div 
            onClick={this.openForm}
            style={{
                ...styles.buttonContainer,
                opacity: buttonTextOpacity, 
                color: buttonTextColor, 
                background: buttonTextBackground}}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
        
    }

    renderForm = () => {
        const {list} = this.props;
        const listPlaceHolder = list ? "Enter list title" : "Enter card text";
        const buttonTitle = list ? "Add list" : "Add card";


        return <div>
            <Card style={{
                minHeight: 80,
                minWidth: 272,
                padding: "6px 8px 2px"
            }}>
                <TextareaAutosize 
                    placeholder={listPlaceHolder} 
                    autoFocus
                    onBlur={this.closeForm} 
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={{
                        overflow: "hidden",
                        resize: "none",
                        width: "100%",
                        outline: "none",
                        border: "none"
                    }}
                />
            </Card>
            <div style={styles.formButtonGroup}>
                <Bton 
                    onMouseDown={list ? this.handleAddList : this.handleAddCArd}
                    variant="contained" 
                    style={{color:"white", 
                    backgroundColor: "#5aac44"}} 
                >
                    {buttonTitle}
                </Bton>
                <Icon style={{marginLeft: 8, cursor: "pointer"}}> close </Icon>
            </div>
        </div>
    };

    render(){
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles={
    buttonContainer:{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft:10
    },
    formButtonGroup:{
        marginTop: 8,
        display: "flex",
        alignItems: "center",

    }
}

export default connect()(Button);