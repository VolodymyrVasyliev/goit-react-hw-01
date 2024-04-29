import Transaction from "../Transaction/Transaction.jsx";
import css from "../TransactionHistory/TransactionHistory.module.css";
export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <tbody key={transactions.id}>
        {transactions.map((transaction) => (
          <>
            <Transaction transactions={transaction} />
          </>
        ))}
      </tbody>
    </table>
  );
}
