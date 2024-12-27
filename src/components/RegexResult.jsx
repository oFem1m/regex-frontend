import Graphviz from 'graphviz-react';

function RegexResult({ result }) {
    if (!result) {
        return null;
    }

    const { is_correct, AST_dot, grammar } = result;

    if (!is_correct) {
        return (
            <div>
                <h2 style={{ color: 'red' }}>Errors:</h2>
                <div>
                    {result.errors.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2 style={{ color: 'green' }}>Regex is correct!</h2>
            <div>
                <h3>AST:</h3>
                {AST_dot && AST_dot.length > 0 ? (
                    <Graphviz dot={AST_dot.join('\n')} />
                ) : (
                    <p>No AST provided.</p>
                )}
            </div>
            <div>
                <h3>Grammar:</h3>
                {grammar && grammar.length > 0 ? (
                    <div>
                        {grammar.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                ) : (
                    <p>No grammar provided.</p>
                )}
            </div>
        </div>
    );
}

export default RegexResult;