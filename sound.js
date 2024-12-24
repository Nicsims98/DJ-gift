export async function generateSound() {
    const url = "https://elevenlabs-sound-effects.p.rapidapi.com/generate-sound";
    const payload = {
        "text": "Crickets making sounds in the wild",
        "prompt_influence": 0.3,
        "duration_seconds": null
    };
    const headers = {
        "x-rapidapi-key": "e698e5a1ccmsh1beed80dbb01f4cp10eaeejsnde2ee2833c47",
        "x-rapidapi-host": "elevenlabs-sound-effects.p.rapidapi.com",
        "Content-Type": "application/json"
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error generating sound:', error);
    }
}
