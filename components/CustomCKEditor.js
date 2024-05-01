import React, { Component, useEffect, useRef } from "react";
import Editor from "../ckeditor5-custom/build/ckeditor";
// import Editor from "../ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const editorConfiguration = {
  toolbar: [
    "insertImage",
    "paragraph",
    "heading1",
    "heading2",
    "|",
    "bold",
    "italic",
    "fontColor",
    "fontBackgroundColor",
    "fontFamily",
    "underline",
    "fontSize",
    "removeFormat",
    "|",
    "bulletedList",
    "todoList",
    "numberedList",
    "|",
    "alignment",
    "outdent",
    "indent",
    "horizontalLine",
    "|",
    "StrapiMediaLib",
    "insertTable",
    "blockQuote",
    "mediaEmbed",
    "link",
    "highlight",
    "|",
    "htmlEmbed",
    "sourceEditing",
    "code",
    "codeBlock",
    "|",
    "subscript",
    "superscript",
    "strikethrough",
    "specialCharacters",
    "|",
    "heading",
    "fullScreen",
    "undo",
    "redo",
  ],
  editor: {
    // editor default config

    // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
    // if you need markdown support and output set: removePlugins: [''],
    // default is
    removePlugins: [""],

    fontSize: {
      options: [9, 11, 13, "default", 17, 19, 21, 27, 35],
      supportAllValues: false,
    },
    codeBlock: {
      languages: [
        // Do not render the CSS class for the plain text code blocks.
        { language: "plaintext", label: "Plain text" }, // The default language.
        { language: "c", label: "C" },
        { language: "cs", label: "C#" },
        { language: "cpp", label: "C++" },
        { language: "css", label: "CSS" },
        { language: "diff", label: "Diff" },
        { language: "html", label: "HTML" },
        { language: "java", label: "Java" },
        { language: "javascript", label: "JavaScript" },
        { language: "php", label: "PHP" },
        { language: "python", label: "Python" },
        { language: "ruby", label: "Ruby" },
        { language: "typescript", label: "TypeScript" },
        { language: "xml", label: "XML" },
        { language: "shell", label: "SHELL" },
        { language: "bash", label: "BASH" },
        { language: "json", label: "JSON" },
        { language: "git", label: "Git" },
        { language: "sql", label: "SQL" },
      ],
    },
    fontFamily: {
      options: [
        "default",
        "Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif",
        "Courier New, Courier, monospace",
        "Georgia, serif",
        "Lucida Sans Unicode, Lucida Grande, sans-serif",
        "Tahoma, Geneva, sans-serif",
        "Times New Roman, Times, serif",
        "Trebuchet MS, Helvetica, sans-serif",
        "Verdana, Geneva, sans-serif",
        "Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif",
      ],
      supportAllValues: true,
    },
    fontColor: {
      columns: 5,
      documentColors: 10,
    },
    fontBackgroundColor: {
      columns: 5,
      documentColors: 10,
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
    // default language: 'en',
    // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
    image: {
      resizeUnit: "%",
      resizeOptions: [
        {
          name: "resizeImage:original",
          value: null,
          icon: "original",
        },
        {
          name: "resizeImage:25",
          value: "25",
          icon: "small",
        },
        {
          name: "resizeImage:50",
          value: "50",
          icon: "medium",
        },
        {
          name: "resizeImage:75",
          value: "75",
          icon: "large",
        },
      ],
      toolbar: [
        "toggleImageCaption",
        "imageTextAlternative",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
        "linkImage",
        "resizeImage:25",
        "resizeImage:50",
        "resizeImage:75",
        "resizeImage:original",
      ],
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableCellProperties",
        "tableProperties",
        "toggleTableCaption",
      ],
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
      ],
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
    // Regular expressions (/.*/  /^(p|h[2-4])$/' etc) for htmlSupport does not allowed in this config
    htmlSupport: {
      allow: [
        {
          name: "img",
          attributes: {
            sizes: true,
            loading: true,
          },
        },
      ],
    },
  },
  image: {
    toolbar: [
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
      "|",
      "toggleImageCaption",
      "imageTextAlternative",
    ],
  },
  language: "en",
  language: "mn",
};
function CustomCKEditor({ onChange, editorLoaded, name, value }) {
  return (
    <div className="max-w-3xl dark:text-dark min-h-350px max-h-500px">
      {editorLoaded ? (
        <CKEditor
          name={name}
          editor={Editor}
          config={editorConfiguration}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}

export default CustomCKEditor;
