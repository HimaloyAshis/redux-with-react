import React, { useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic';

const Editor = () => {
  const [editor, setEditor] = useState(null);

  const initEditor = () => {
    const config = {
      // You can read more about extending the build with additional plugins in the "Installing plugins" guide.
      // See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.
      builtinPlugins: [
        Alignment,
        Autoformat,
        Autosave,
        BlockQuote,
        Bold,
        CKBox,
        CloudServices,
        Essentials,
        FontBackgroundColor,
        FontColor,
        FontFamily,
        FontSize,
        GeneralHtmlSupport,
        Heading,
        HorizontalLine,
        Image,
        ImageCaption,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        Indent,
        Italic,
        Link,
        LinkImage,
        List,
        MediaEmbed,
        MediaEmbedToolbar,
        Paragraph,
        PasteFromOffice,
        PictureEditing,
        SpecialCharacters,
        SpecialCharactersMathematical,
        Style,
        Subscript,
        Superscript,
        Table,
        TableColumnResize,
        TableToolbar,
        TextTransformation,
        TodoList,
        Underline,
        WordCount
      ],
      defaultConfig: {
        toolbar: {
          items: [
            'heading',
            'undo',
            'redo',
            'ckbox',
            '|',
            'bold',
            'underline',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'alignment',
            'indent',
            'todoList',
            '|',
            'imageUpload',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            '|',
            'fontBackgroundColor',
            'fontColor',
            'fontFamily',
            'fontSize',
            'style',
            '|',
            'horizontalLine',
            'specialCharacters',
            'superscript',
            'subscript',
            '-',
            '|'
          ],
          shouldNotGroupWhenFull: true
        },
        language: 'en',
        image: {
          toolbar: [
            'imageTextAlternative',
            'toggleImageCaption',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            'linkImage'
          ]
        },
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
          ]
        }
      }
    };

    setEditor(new ClassicEditor(config, editorElement));
  };

  useEffect(() => {
    initEditor();
  }, []);

  return (
    <div>
      <textarea ref={ editor => (editorElement = editor)} />
    </div>
  );
};

export default Editor;
