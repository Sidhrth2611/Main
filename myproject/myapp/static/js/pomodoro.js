const Pomodoro = () => {
    const [time, setTime] = React.useState(1500); // 25 minutes
    const [running, setRunning] = React.useState(false);

    React.useEffect(() => {
        let timer;
        if (running && time > 0) {
            timer = setInterval(() => setTime(time - 1), 1000);
        } else if (time === 0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [running, time]);

    const startTimer = () => setRunning(true);
    const stopTimer = () => setRunning(false);
    const resetTimer = () => {
        setRunning(false);
        setTime(1500);
    };

    return (
        <div>
            <h2>Pomodoro Timer</h2>
            <div>{Math.floor(time / 60)}:{('0' + time % 60).slice(-2)}</div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
}
