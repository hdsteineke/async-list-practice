const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkamZ3c3djcWxzZnVodGVtYnVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM1ODksImV4cCI6MTk2MzEyOTU4OX0.UL14baUjdJa7Tgx9CS1Ky_ZJ78nsDmyOwDEPePPJe10'
const SUPABASE_URL = "https://kdjfwswcqlsfuhtembua.supabase.co"

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBirds() {
    const response = await client
        .from('Birds')
        .select('*');

    return response.body;

}

export async function getPlants() {
    const response = await client
        .from('Plants')
        .select('*');

    return response.body;
}

export async function getSnacks() {
    const response = await client
        .from('Snacks')
        .select('*');

    return response.body;
}