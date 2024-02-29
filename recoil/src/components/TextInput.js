import React from 'react'
import {textState} from '../App'
import { useRecoilState } from 'recoil'

const TextInput = () => {
    const [text, setText] = useRecoilState(textState)

    const handleChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            <input value={text} onChange={handleChange} />
            Echo: {text}
        </div>
    )
}

export default TextInput