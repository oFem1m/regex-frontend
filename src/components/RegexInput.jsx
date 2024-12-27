import { useState } from 'react';

function RegexInput({ onSubmit }) {
    const [regex, setRegex] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(regex);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter regex here"
                value={regex}
                onChange={(e) => setRegex(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default RegexInput;