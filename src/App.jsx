import { useState } from 'react';
import RegexInput from './components/RegexInput';
import RegexResult from './components/RegexResult';
import './App.css';
import {buildGrammar} from "./API/api.js";

function App() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleRegexSubmit = async (regex) => {
        setLoading(true);
        try {
            const response = buildGrammar(regex)
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Error submitting regex:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>Regex Grammar Analyzer</h1>
            <RegexInput onSubmit={handleRegexSubmit} />
            {loading && <p>Loading...</p>}
            {result && <RegexResult result={result} />}
        </div>
    );
}

export default App;