const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/analyze', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'No text provided' });
    }

    const prompt = `
        Analyze the following text and extract relevant keywords for a Boolean search.
        Categorize the keywords into the following fields:
        - Job Titles (OR logic)
        - Exclude Job Titles (NOT logic)
        - Mandatory Skills (AND logic)
        - Nice to Have Skills (OR logic)
        - Locations (AND logic)
        - Exclude Locations (NOT logic)
        - Industries (OR logic)
        - Exclude Industries (NOT logic)
        - Current Companies (OR logic)
        - Past Companies (OR logic)
        - Exclude Companies (NOT logic)
        - Schools / Universities (OR logic)
        - Fields of Study (OR logic)
        - Seniority Levels (OR logic)
        - Exclude Seniority (NOT logic)
        - Keywords (OR logic)
        - Exclude Keywords (NOT logic)

        Text:
        ${text}

        Provide the output as a JSON object where each field name is a key and the value is a list of extracted keywords.
    `;

    try {
        // Get completion from OpenAI API
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        });

        console.log('Raw OpenAI Response:', completion); // Log the raw response for debugging

        // Check if content is directly available or if it's nested
        const responseContent = completion.choices[0].message.content;
        console.log('Parsed Content:', responseContent); // Log the parsed content

        // Try to parse the content if it looks like valid JSON
        const responseJSON = JSON.parse(responseContent); // Make sure the content is a valid JSON
        res.json(responseJSON);

    } catch (error) {
        console.error('Error calling OpenAI:', error); // Log full error details
        res.status(500).json({ error: 'Failed to analyze text with AI', details: error.message });
    }
});


app.post('/generate-string', async (req, res) => {
    try {
        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo",
            prompt: req.body.prompt,
            max_tokens: 100,
        });

        console.log("OpenAI Response:", response.data); // Log to verify

        res.json({
            success: true,
            message: "AI analysis complete. Fields populated.",
            data: response.data.choices[0].message.content, // Assuming this is where your data is.
        });
    } catch (error) {
        console.error("Error:", error);
        res.json({
            success: false,
            message: "Error processing the request",
        });
    }
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
