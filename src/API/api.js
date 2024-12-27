export const buildGrammar = async (regex) => {
    const response = await fetch('http://66.151.42.116:8010/buildGrammar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ regex }),
    });
    return response.json();
};