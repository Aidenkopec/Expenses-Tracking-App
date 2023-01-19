import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card.js"
//Props hold the values of our custom elements
function ExpenseItem(props) {
   const [title, setTitle] = useState(props.title);
    console.log('Expense Item Evaluated by React')
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">{props.amount}</div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;
