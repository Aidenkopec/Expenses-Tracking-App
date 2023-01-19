import React from 'react';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>January, 18, 2023</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
            </div>
            <div className="expense-item__price">249.67</div>
        </div>
    )
}

export default ExpenseItem;
