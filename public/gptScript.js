async function analyzeText() {
  const text = document.getElementById('inputText').value;
  if (!text) {
    alert('Please paste some text to analyze.');
    return;
  }

  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error from backend:', errorData);
      alert('Failed to analyze text.');
      return;
    }

    const data = await response.json();
    console.log('Backend response:', data);  // Log backend response
    populateFields(data);

  } catch (error) {
    console.error('Error sending data to backend:', error);
    alert('Failed to communicate with the server.');
  }
}

function populateFields(data) {
  resetFields(); // Clear any existing fields
  console.log('Populating fields...');  // Debugging statement

  // Define a mapping from backend keys to DOM section IDs
  const keyMapping = {
    'Job Titles': 'jobTitles',
    'Mandatory Skills': 'mandatorySkills',
    "Nice to Have Skills": "niceSkills",
    'Locations': 'locations',
    'Exclude Job Titles': 'excludeJobTitles',
    'Exclude Locations': 'excludeLocations',
    'Industries': 'industries',
    'Exclude Industries': 'excludeindustries',
    'Current Companies': 'currentCompanies',
    'Past Companies': 'pastCompanies',
    'Exclude Companies': 'excludeCompanies',
    'Schools': 'schools',
    'Fields of Study': 'fieldsOfStudy',
    'Seniority Levels': 'seniorityLevels',
    'Exclude Seniority Levels': 'excludeseniorityLevels',
    'Keywords': 'keywords',
    'Exclude Keywords': 'excludes'
  };

  // Dynamically add fields based on backend response
  Object.keys(data).forEach(key => {
    const sectionId = keyMapping[key];  // Get the matching section ID
    if (sectionId && Array.isArray(data[key])) {
      data[key].forEach(value => {
        console.log(`Adding value "${value}" to section "${sectionId}"`);  // Debugging statement
        addFieldWithValue(sectionId, value); // Add value to the appropriate section
      });
    }
  });

  alert('AI analysis complete. Fields populated.');
}

function addFieldWithValue(sectionId, value) {
  const container = document.getElementById(sectionId);
  
  // If the container doesn't exist, create it
  if (!container) {
    console.error(`Section ${sectionId} not found!`);
    return;
  }

  // Log for debugging when adding fields
  console.log(`Adding field with value "${value}" to section "${sectionId}"`);

  // Create a new div to hold the input and remove button
  const div = document.createElement("div");
  div.className = "input-group";
  
  // Create the input field and set its value
  const input = document.createElement("input");
  input.type = "text";
  input.value = value;
  input.placeholder = "Enter value...";

  // Create the remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.onclick = () => div.remove(); // Remove the field

  // Append the input and button to the div
  div.appendChild(input);
  div.appendChild(removeBtn);
  
  // Append the div to the section
  container.appendChild(div);
}

function resetFields() {
  // Clear out all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const container = section.querySelector('div');
    if (container) container.innerHTML = ''; // Clear all fields in the section
  });
}
