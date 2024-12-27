export const buildGrammar = async (regex) => {
    const response = await fetch('/buildGrammar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ regex }),
    });
    return response.json();
};