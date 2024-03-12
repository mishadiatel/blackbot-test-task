import styles from './Input.module.css';
import {ChangeEvent} from 'react';
interface ETHInputProps {
    amount: number | null;
    onAmountChange:  (event: ChangeEvent<HTMLInputElement>) => void
}

const ETHInput = ({amount, onAmountChange}: ETHInputProps) => {
    return (
        <label className={styles.box}>
            <span>ETH Amount</span>
            <input className={styles.input} type="number" value={amount || 0} onChange={onAmountChange} min={0} />
        </label>

    );
};

export default ETHInput;
