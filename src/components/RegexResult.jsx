import Graphviz from 'graphviz-react';

function RegexResult({ result }) {
    if (!result.is_correct) {
        return (
            <div>
                <h2 style={{ color: 'red' }}>Errors:</h2>
                <ul>
                    {result.Errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div>
            <h2 style={{ color: 'green' }}>Regex is correct!</h2>
            <div>
                <h3>AST:</h3>
                <Graphviz dot={result.AST} />
            </div>
            <div>
                <h3>Grammar:</h3>
                <ul>
                    {result.Grammar.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RegexResult;