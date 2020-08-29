import React, { useState } from 'react';
import { MarkDownInput } from './components/Input';
import { MarkDownOutput } from './components/Output';

function App() {

	const placeholder = 
`# Heading
## Sub-Heading

[link](https://www.freecodecamp.com)

inline code: \`<div></div>\`

\`\`\`
// this is multi-line code-block
function add(num1, num2) {
	return num1+num2;
}
\`\`\`

- List Item 1
- List Item 2
- List Item 3

> Block Quotes!

**bold text**

![React Logo w/ Text](https://goo.gl/Umyytc)
`
    const [markDownState, setMarkDownState] = useState(placeholder);

	return (
		<div className="container">
			<h2>MDPreview</h2>
			<div className="md__container">
				<MarkDownInput markDownState={markDownState} setMarkDownState={setMarkDownState}/>
				<MarkDownOutput markDownState={markDownState} />
			</div>
		</div>
	);
}

export default App;
