import { useEffect, useRef, useState } from "react";

const ExpenseTracker = () => {
    const initialTransactionDetail = {
        title: "",
        amount: "",
        type: "",
        date: ""
    }
    const [transactionDetail, setTransactionDetail] = useState(initialTransactionDetail);
    const [transactions, setTransactions] = useState(() => {
        const storedTransactions = localStorage.getItem("transactions");

        if (storedTransactions) {
            return JSON.parse(storedTransactions);
        }
    });

    const [error, setError] = useState({});

    const inputFocus = useRef();

    const handleReset = () => {
        setTransactionDetail(initialTransactionDetail);
    }

    const { totalIncome, totalExpense } = transactions.reduce(
        (acc, transaction) => {
            const amount = Number(transaction.amount);

            if (transaction.type === "income") {
                acc.totalIncome += amount;
            } else {
                acc.totalExpense += amount;
            }

            return acc;
        },
        {
            totalIncome: 0,
            totalExpense: 0,
        }
    );
    const handleAddTransaction = () => {
        const newErrors = {};
        if (!transactionDetail.title) {
            newErrors.title = "Transaction title is mandatory.";
        }
        if (!transactionDetail.amount || transactionDetail.amount <= 0) {
            newErrors.amount = "Transaction amount should be a positive number.";
        }
        if (!transactionDetail.type) {
            newErrors.type = "Transaction type must be selected.";
        }
        setError(newErrors);
        if (Object.keys(newErrors).length > 0) {
            return
        }

        setTransactions(prev => [...prev, transactionDetail]);
        handleReset();
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransactionDetail(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleDelete = (transaction) => {
        const filtertedTransaction = transactions.filter((data) => data !== transaction);
        setTransactions(filtertedTransaction);
    }
    useEffect(() => {
        inputFocus.current.focus();
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);
    return (
        <div>
            <h1>Welcome to expense tracker.</h1>
            <form action="">
                <label htmlFor="title">Title : </label>
                <input type="text" name="title" value={transactionDetail.title} onChange={handleChange} ref={inputFocus} />
                {error.title && (
                    <p style={{ color: "red" }}>{error.title}</p>
                )}
                <br />
                <label htmlFor="amount">Amount : </label>
                <input type="number" name="amount" value={transactionDetail.amount} onChange={handleChange} />
                {error.amount && (
                    <p style={{ color: "red" }}>{error.amount}</p>
                )}
                <br />
                <label htmlFor="type">Type : </label>
                <select name="type" value={transactionDetail.type} onChange={handleChange}>
                    <option value="">--select--</option>
                    <option value="income">income</option>
                    <option value="expense">expense</option>
                </select>
                {error.type && (
                    <p style={{ color: "red" }}>{error.type}</p>
                )}<br />
                <label htmlFor="date">Date : </label>
                <input type="date" name="date" value={transactionDetail.date} onChange={handleChange} /> <br />

                <button type="button" onClick={handleAddTransaction}>Add Transactions</button>
            </form> <br />

            <form action="">
                <h2>Total Income - {totalIncome}</h2>
                <h2>Total Expense - {totalExpense}</h2>
                <h2>Current Balance - {totalIncome - totalExpense}</h2>
            </form> <br />

            <table border={2}>
                <thead>
                    <tr>
                        <th>Transaction Title</th>
                        <th>Transaction Amount</th>
                        <th>Transaction Type</th>
                        <th>Transaction Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.title}</td>
                                    <td>{data.amount}</td>
                                    <td>{data.type}</td>
                                    <td>{data.date}</td>
                                    <td>
                                        <button type="button" onClick={() => handleDelete(data)}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseTracker;