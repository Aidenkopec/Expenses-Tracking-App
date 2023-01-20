import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [useEnteredTitle, setTEnteredTitle] = useState('');
    const [useEnteredAmount, setEnteredAmount] = useState('');
    const [useEnteredDate, setEnteredDate] = useState('');
    // const [useUserInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    const titleChangeHandler = (event) => {
        setTEnteredTitle(event.target.value);
        // setUserInput({
        //     ...useUserInput,
        //     enteredTitle: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // })

    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...useUserInput,
        //     enteredAmount: event.target.value
        // });
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...useUserInput,
        //     enteredDate: event.target.value
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: useEnteredTitle,
            amount: useEnteredAmount,
            date: new Date(useEnteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setTEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    //Show form when user only clicks on the button
    const [showForm, setShowForm] = useState(false);
    const showFormHandler = () => {
        setShowForm(true);
    }

    return (
        <div>
            {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
            <form onSubmit={submitHandler} style={{display: showForm ? 'block' : 'none'}}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={useEnteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={useEnteredAmount}
                               onChange={amountChangeHandler}/>
                    </div>

                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2022-01-01" max="2024-01-01" value={useEnteredDate}
                               onChange={dateChangeHandler}/>
                    </div>
                    <div className="new-expense__actions">
                        <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                        <button type="submit">Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;