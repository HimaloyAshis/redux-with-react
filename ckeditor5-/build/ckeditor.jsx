import React from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic';
import Alignment from '@ckeditor/ckeditor5-alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat';
import Autosave from '@ckeditor/ckeditor5-autosave';
import Bold from '@ckeditor/ckeditor5-basic-styles';
import BlockQuote from '@ckeditor/ckeditor5-block-quote';
import CKBox from '@ckeditor/ckeditor5-ckbox';
import CloudServices from '@ckeditor/ckeditor5-cloud-services';
import Essentials from '@ckeditor/ckeditor5-essentials';
import FontBackgroundColor from '@ckeditor/ckeditor5-font';
import FontColor from '@ckeditor/ckeditor5-font';
import FontFamily from '@ckeditor/ckeditor5-font';
import FontSize from '@ckeditor/ckeditor5-font';
import Heading from '@ckeditor/ckeditor5-heading';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support';
import Image from '@ckeditor/ckeditor5-image';
import ImageCaption from '@ckeditor/ckeditor5-image';
import ImageStyle from '@ckeditor/ckeditor5-image';
import ImageToolbar from '@ckeditor/ckeditor5-image';
import ImageUpload from '@ckeditor/ckeditor5-image';
import PictureEditing from '@ckeditor/ckeditor5-image';
import Indent from '@ckeditor/ckeditor5-indent';
import Link from '@ckeditor/ckeditor5-link';
import LinkImage from '@ckeditor/ckeditor5-link';
import List from '@ckeditor/ckeditor5-list';
import TodoList from '@ckeditor/ckeditor5-list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed';
import Paragraph from '@ckeditor/ckeditor5-paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters';
import Style from '@ckeditor/ckeditor5-style';
import Table from '@ckeditor/ckeditor5-table';
import TableColumnResize from '@ckeditor/ckeditor5-table';
import TableToolbar from '@ckeditor/ckeditor5-table';
import TextTransformation from '@ckeditor/ckeditor5-typing';
import WordCount from '@ckeditor/ckeditor5-word-count';

const Editor = () => {
    const editor = ClassicEditor({
        language: 'en',
        toolbar: ['bold', 'italic', 'link'],
    });

    return (
        <div>
           {editor}
        </div>
    );
};

export default Editor;
