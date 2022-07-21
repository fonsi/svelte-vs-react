import React, { FormEventHandler, ReactElement, useState } from 'react';

const animals = ['dog', 'cat', 'cow', 'horse'];

export const App = (): ReactElement => {
    const [inputValue, setInputValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [color, setColor] = useState('red');
    const [animal, setAnimal] = useState('dog');

    const inputChangeHandler: FormEventHandler<HTMLInputElement> = (event) => {
        setInputValue((event.target as HTMLInputElement).value);
    }

    const checkboxClickHandler: FormEventHandler<HTMLInputElement> = () => {
        setIsChecked(!isChecked);
    }

    const colorChangeHandler: FormEventHandler<HTMLInputElement> = (event) => {
        setColor((event.target as HTMLInputElement).value);
    }

    const animalChangeHandler: FormEventHandler<HTMLSelectElement> = (event) => {
        setAnimal((event.target as HTMLSelectElement).value);
    }

    return <div>
        <p>The input value is: <strong>{inputValue}</strong></p>
        <input type="text" name="react-text" value={inputValue} onChange={inputChangeHandler}/>

        <br />
        <br />
        <p>The checkbox is: <strong>{isChecked ? 'checked' : 'unchecked'}</strong></p>
        <label>
            <input type="checkbox" name="react-checkbox" checked={isChecked} onChange={checkboxClickHandler}/>
            Checkbox
        </label>

        <br />
        <br />
        <p>The selected color is: <strong>{color}</strong></p>
        <label>
            <input type="radio" name="react-color" value="red" checked={color === 'red'} onChange={colorChangeHandler}/>
            Red
        </label>
        <label>
            <input type="radio" name="react-color" value="blue" checked={color === 'blue'} onChange={colorChangeHandler}/>
            Blue
        </label>
        <label>
            <input type="radio" name="react-color" value="green" checked={color === 'green'} onChange={colorChangeHandler}/>
            Green
        </label>

        <br />
        <br />
        <p>The selected animal is: <strong>{animal}</strong></p>
        <select name="react-animal" value={animal} onChange={animalChangeHandler}>
            {
                animals.map(animal => <option key={animal} value={animal}>{animal}</option>)
            }
        </select>
    </div>;
}
