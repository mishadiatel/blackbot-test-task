import {ChangeEvent} from 'react';
import styles from './Input.module.css';
import {ActionType} from '../interface/ActionType.ts';

interface ActionInputProps {
    value: ActionType;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const ActionInput = ({value,onChange}: ActionInputProps) => {
    return (
        <label className={styles.box}>
            <span>Select action</span>
            <select onChange={onChange} className={styles.input} value={value}>
                <option value={'BUY'}>Buy</option>
                <option value={'SELL'}>Sell</option>
            </select>
        </label>
    );
};

export default ActionInput;
