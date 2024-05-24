// import React, { Component } from 'react';
// import { EditorState, DefaultDraftBlockRenderMap } from 'draft-js';
// import Immutable from 'immutable';
// import { Editor } from 'react-draft-wysiwyg';

// import '../assets/tinyc_css/tiny.css';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// class NewsEditor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editorState: EditorState.createEmpty(),
//     };
//   }

//   onEditorStateChange = (editorState) => {
//     this.setState({
//       editorState,
//     });
//   };

//   blockRenderMap = Immutable.Map({
//     section: {
//       element: 'section',
//     },
//     table: {
//       element: 'table',
//     },
//     tr: {
//       element: 'tr',
//     },
//     td: {
//       element: 'td',
//     },
//     th: {
//       element: 'th',
//     },
//   });
//   extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(
//     this.blockRenderMap
//   );

//   render() {
//     const { editorState } = this.state;
//     return (
//       <div className="container">
//         <Editor
//           editorState={editorState}
//           wrapperClassName="demo-wrapper"
//           editorClassName="demo-editor"
//           onEditorStateChange={this.onEditorStateChange}
//           toolbarCustomButtons={[]}
//           blockRenderMap={this.extendedBlockRenderMap}
//           toolbar={{}}
//         />
//       </div>
//     );
//   }
// }

// export default NewsEditor;

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../assets/tinyc_css/tiny.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
  ],
};
function NewsEditor() {
  const [value, setValue] = useState('');

  return (
    <div className="container">
      <div className="editor-panel">
        <div className="editor">
          <ReactQuill
            theme="snow"
            value={value}
            //   onChange={(content) => setValue(content)}
            onChange={(content, delta, source, editor) => setValue(content)}
            className="editor-input"
            modules={modules}
          />
        </div>
      </div>
    </div>
  );
}

export default NewsEditor;
