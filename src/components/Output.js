import React from 'react';
import marked from 'marked';

export const MarkDownOutput = (props) => {
    const { markDownState } = props;


    const createMarkDown = () => {
        marked.setOptions({
            breaks: true,
        });
        return {
            __html: marked(markDownState)
        }
    }

    return (
        <div className="md__output__container">
            <h3 className="preview-header">Preview Your Markdown</h3>
            <div id='preview' className="md__output fg-color" dangerouslySetInnerHTML={createMarkDown()} >
            </div>
        </div>
    )
}