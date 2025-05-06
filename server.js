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
You are an expert in Boolean search optimization. 
Analyze the following user input and extract search parameters into a structured JSON object.

### Rules:
- Add job-related roles (e.g., "recruiter", "developer") to "Job Titles".
- Detect and extract all seniority levels like "senior", "junior", "intern" etc,.
  ➤ If the user input says someone *should be* or *must be* a certain level (e.g., "must be seniors"), add it to "Seniority Levels".
  ➤ If the input excludes a level (e.g., "no juniors", "not interns"), add it to "Exclude Seniority".
  ➤ A person can have both: e.g., "must be seniors, no juniors" means "Senior" in "Seniority Levels" and "Junior" in "Exclude Seniority".
- Add any programming languages, tools, or technologies to "Mandatory Skills" or "Nice to Have Skills".
- Locations (cities, countries, regions) go in "Locations" or "Exclude Locations". 
  ➤ When a location is mentioned (e.g., Serbia), include both its English and native/local name (e.g., "Serbia", "Srbija").
- Industries (e.g., Software, IT) go in "Industries".
- Generic terms that don’t fit should go in "Keywords".

### Output Format (JSON):
{
  "Job Titles": [],
  "Exclude Job Titles": [],
  "Mandatory Skills": [],
  "Nice to Have Skills": [],
  "Locations": [],
  "Exclude Locations": [],
  "Industries": [],
  "Exclude Industries": [],
  "Current Companies": [],
  "Past Companies": [],
  "Exclude Companies": [],
  "Schools / Universities": [],
  "Fields of Study": [],
  "Seniority Levels": [],
  "Exclude Seniority": [],
  "Keywords": [],
  "Exclude Keywords": []
}

### User Input:
${text}

Provide only the JSON output with no explanations.
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
