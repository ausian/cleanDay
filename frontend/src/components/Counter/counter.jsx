import { useMemo } from 'react';
import style from './counter.module.css';

const Counter = ({ count }) => {
  // Вычисляем разницу в днях между текущей датой и датой count
  const { daysDifference, label } = useMemo(() => {
    if (!count) return { daysDifference: 0, label: 'дней' };

    const currentDate = new Date();
    const eventDate = new Date(count + "T00:00:00"); // Устанавливаем время в 00:00:00

    // Вычисляем разницу в миллисекундах и преобразуем в дни
    const differenceInTime = currentDate - eventDate;
    const differenceInDays = Math.max(Math.ceil(differenceInTime / (1000 * 3600 * 24)), 0);

    // Определяем правильную форму слова "день"
    const lastDigit = differenceInDays % 10;
    const lastTwoDigits = differenceInDays % 100;

    let label;
    // Условия для чисел 11-14
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      label = 'дней';
    } 
    // Условие для чисел, оканчивающихся на 1, но не 11
    else if (lastDigit === 1) {
      label = 'день';
    } 
    // Условие для чисел, оканчивающихся на 2, 3, 4, но не 12, 13, 14
    else if (lastDigit >= 2 && lastDigit <= 4) {
      label = 'дня';
    } 
    // Для всех остальных случаев
    else {
      label = 'дней';
    }

    return { daysDifference: differenceInDays, label };
  }, [count]);

  return (
    <div className={style.box}>
      <span className={style.numbers}>{daysDifference}</span>
      <span className={style.label}>{label}</span>
    </div>
  );
};

export default Counter;
