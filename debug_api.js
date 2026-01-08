
const BASE_URL = 'https://jdwhmvruzbvkzgfdousz.supabase.co/functions/v1';
const PUBLIC_API_KEY = 'BF5V7BXyXgVnBcHvFsTjPetYBqwuoFHDjFWzwZXypWvTeQ31';

async function fetchAvailability() {
    try {
        const response = await fetch(`${BASE_URL}/get-availability`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${PUBLIC_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}

fetchAvailability();
