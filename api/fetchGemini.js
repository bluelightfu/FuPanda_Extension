const API_KEY = 'AIzaSyCmjHwO1bPqfFpJuyi5CQ3KsNvUYhAKQwU'; // Replace YOUR_API_KEY with your actual API key
const url = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

const headers = {
    'Content-Type': 'application/json'
};

const data = {
    "contents": [
        {
            "parts": [{"text": "你知道王建民嗎？"}]
        }
    ]
};

export default function fetchGemini() {
    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
