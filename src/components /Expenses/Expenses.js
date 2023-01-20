import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import '../UI/Expenses.css';
import '../UI/Card.css'
import Card from "../UI/Card";
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
        const [filteredYear, setFilteredYear] = useState('2020');

        const filterChangeHandler = (selectedYear) => {
            setFilteredYear(selectedYear);
        };

        const filteredExpenses = props.items.filter(expense => {
            return expense.date.getFullYear().toString() === filteredYear;
        })


        return (
            <li>
                <Card className='expenses'>
                    <ExpenseFilter
                        selected={filteredYear}
                        onChangeFilter={filterChangeHandler}
                    />
                    <ExpensesList item={filteredExpenses}/>
                </Card>
            </li>
        );
    }
;

export default Expenses;