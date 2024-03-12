import styles from './Input.module.css';

interface ResultProps {
    result: number;
}

const Result = ({result}: ResultProps) => {
    return (
        <div className={styles.box}>
            <span>You will receive</span>
            <span>{result.toFixed(3)}</span>
        </div>
    );
};

export default Result;
