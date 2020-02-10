import React from 'react';
import Card from '../card';
import Button from '../button/index';
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';


const Container = styled.div`
    background-color: #dfe3e6;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
    
    h4{
        background-image: linear-gradient(to right, #5F9EA0, #66CDAA);
        font-size: 18px;
        width: 100%;
        height: 50px;
        color: #fff;
        display:flex;
        justify-content: space-between;
        Align-items: center;
        padding: 0px;
    }

`

const List = ({title, cards, listID, index}) => {
    return (
        
                <Droppable droppableId={String(listID)}>
                {provided => (
                    <Container {...provided.droppableProps} ref={provided.innerRef}>
                        <h4> {title} </h4>
                        {cards.map((card, index) => (
                            <Card key={card.id} index={index} text={card.text} id={card.id} />
                        ))}
                        <Button listID={listID}/>
                        {provided.placeholder}
                    </Container>
                )}
                
                </Droppable>
    )
};


export default List;