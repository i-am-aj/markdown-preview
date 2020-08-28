import React from 'react';

export const MarkDownInput = (props) => {
    const { markDownState, setMarkDownState } = props;

    const handleChange = (event) => {
        setMarkDownState(event.target.value);
    };

    return (
        <div className="md__input__container">
            <h3 className="input-header">Write Your Markdown</h3>
            <textarea 
                className="md__input fg-color"
                name="markdown" 
                id="editor" 
                value={markDownState}
                onChange={handleChange}
            ></textarea>
        </div>
    )
}