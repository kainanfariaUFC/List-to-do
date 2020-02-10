import React, { Component } from 'react';
import List from './list';
import {connect} from 'react-redux';
import Btn from './button'
import {DragDropContext} from 'react-beautiful-dnd';
import {sort} from '../actions';
import styled from 'styled-components';
import Header from './header';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`

class App extends Component{

  onDragEnd = (result) =>{
    const {destination, source, draggableId} = result;

    if(!destination){
      return;
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
    ))

  }

  render(){

    const {lists} = this.props;
    return (
      <div style={{padding: "0px"}}>
        <Header />
        <DragDropContext onDragEnd={this.onDragEnd}> 
            <div className="App">
                  <ListContainer >
                    {lists.map((list, index) => (
                      
                      <List listID={list.id} index={index} key={list.id} title={list.title} cards={list.cards } />
                      
                    ))}
                    <Btn list />
                  </ListContainer>


          </div>
        </DragDropContext>
      </div>
      
    );
  }
}


const mapStateToProps = state => ({
  lists: state.lists,
})

export default connect(mapStateToProps)(App);
