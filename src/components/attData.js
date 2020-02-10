import React from 'react';
import Icon from '@material-ui/core/Icon';
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Bton from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addList, addCard } from '../../actions/'

class Att extends React.Component{

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

    handleAttList = () => {
        const {dispatch} = this.props;
        const {text} = this.state;

        if(text ){
            this.setState({
                text: "",
            })
            dispatch(attList(text));
        }

        return;
    }

    renderH4 = () => {
        <h4 style={{cursor: "pointer"}}>{this.props.text}</h4>
        
    }

    renderForm = () => {

        return <div>
            <Card style={{
                minHeight: 30,
                minWidth: 272,
                padding: "6px 8px 2px"
            }}>
                <TextareaAutosize 
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
                    onMouseDown={this.handleAttList}
                    variant="contained"
                    style={{color:"white", 
                    backgroundColor: "#5aac44"}} 
                >
                    Salvar
                </Bton>
                
            </div>
        </div>
    };

    render(){
        return this.state.formOpen ? this.renderForm() : this.renderH4();
        
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

export default Att;