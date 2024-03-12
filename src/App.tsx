import {ChangeEvent, useEffect, useState} from 'react';
import ETHInput from './components/ETHInput.tsx';
import ActionInput from './components/ActionInut.tsx';
import Result from './components/Result.tsx';
import styles from './App.module.css';
import IPrice from './interface/IPrice.ts';
import {ActionType} from './interface/ActionType.ts';


function App() {
    const [price, setPrice] = useState<IPrice>({
        sellPrice: null,
        buyPrice: null
    })
    const [amount, setAmount] = useState<number>(0);
    const [action, setAction] = useState<ActionType>('SELL');

    useEffect(() => {
        const ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@depth');
        ws.onmessage = (event: MessageEvent) => {
            const data = JSON.parse(event.data);
            const { b, a } = data
            setPrice({buyPrice: parseFloat(b[0][0]), sellPrice: parseFloat(a[0][0])});
        };

        return () => {
            ws.close();
        };
    }, []);

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(+e.target.value);
    };

    const handleActionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setAction(event.target.value as ActionType);
    };

    const calculateResult = (): number => {
        if (price === null) return 0;
        switch (action) {
            case 'BUY':
                return amount * +price.buyPrice!;
            case 'SELL':
                return amount * +price.sellPrice!;
            default:
                return 0;
        }
    };

    return (
        <>
            <div className={styles.app}>
                <ETHInput amount={amount} onAmountChange={handleAmountChange}/>
                <ActionInput value={action} onChange={handleActionChange}/>
                <Result result={calculateResult()}/>
            </div>
        </>
    );
}

export default App;
