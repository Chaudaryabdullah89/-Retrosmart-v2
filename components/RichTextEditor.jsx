import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';

const RichTextEditor = ({ content, onChange, placeholder = "Start writing your blog post..." }) => {
  const [showLinkMenu, setShowLinkMenu] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [showImageMenu, setShowImageMenu] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline cursor-pointer',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
    ],
    content: content || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[400px] p-4',
      },
    },
  });

  if (!editor) {
    return null;
  }

  const addImage = () => {
    if (imageUrl) {
      editor.chain().focus().setImage({ src: imageUrl }).run();
      setImageUrl('');
      setShowImageMenu(false);
    }
  };

  const setLink = () => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
      setLinkUrl('');
      setShowLinkMenu(false);
    }
  };

  const MenuBar = () => (
    <div className="border-b border-gray-200 bg-white p-4">
      <div className="flex flex-wrap gap-2">
        {/* Text Formatting */}
        <div className="flex items-center gap-1 border-r pr-2">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('bold') ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Bold"
          >
            <strong>B</strong>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('italic') ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Italic"
          >
            <em>I</em>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('underline') ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Underline"
          >
            <u>U</u>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('strike') ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Strikethrough"
          >
            <s>S</s>
          </button>
        </div>

        {/* Headings */}
        <div className="flex items-center gap-1 border-r pr-2">
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Heading 1"
          >
            H1
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Heading 2"
          >
            H2
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 3 }) ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Heading 3"
          >
            H3
          </button>
        </div>

        {/* Text Alignment */}
        <div className="flex items-center gap-1 border-r pr-2">
          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive({ textAlign: 'left' }) ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Align Left"
          >
            ⬅️
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive({ textAlign: 'center' }) ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Align Center"
          >
            ↔️
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive({ textAlign: 'right' }) ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Align Right"
          >
            ➡️
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive({ textAlign: 'justify' }) ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Justify"
          >
            ↔️↔️
          </button>
        </div>

        {/* Lists */}
        <div className="flex items-center gap-1 border-r pr-2">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('bulletList') ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Bullet List"
          >
            •
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('orderedList') ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Numbered List"
          >
            1.
          </button>
        </div>

        {/* Block Elements */}
        <div className="flex items-center gap-1 border-r pr-2">
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('blockquote') ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Quote"
          >
            "
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('codeBlock') ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Code Block"
          >
            {'</>'}
          </button>
        </div>

        {/* Links and Images */}
        <div className="flex items-center gap-1 border-r pr-2">
          <button
            onClick={() => setShowLinkMenu(!showLinkMenu)}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('link') ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Insert Link"
          >
            🔗
          </button>
          <button
            onClick={() => setShowImageMenu(!showImageMenu)}
            className="p-2 rounded hover:bg-gray-100"
            title="Insert Image"
          >
            🖼️
          </button>
        </div>

        {/* Text Colors */}
        <div className="flex items-center gap-1 border-r pr-2">
          <button
            onClick={() => editor.chain().focus().setColor('#958DF1').run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('textStyle') ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Purple"
            style={{ color: '#958DF1' }}
          >
            A
          </button>
          <button
            onClick={() => editor.chain().focus().setColor('#F98181').run()}
            className="p-2 rounded hover:bg-gray-100"
            title="Red"
            style={{ color: '#F98181' }}
          >
            A
          </button>
          <button
            onClick={() => editor.chain().focus().setColor('#FBBC88').run()}
            className="p-2 rounded hover:bg-gray-100"
            title="Orange"
            style={{ color: '#FBBC88' }}
          >
            A
          </button>
          <button
            onClick={() => editor.chain().focus().setColor('#FAF594').run()}
            className="p-2 rounded hover:bg-gray-100"
            title="Yellow"
            style={{ color: '#FAF594' }}
          >
            A
          </button>
          <button
            onClick={() => editor.chain().focus().setColor('#70CFF8').run()}
            className="p-2 rounded hover:bg-gray-100"
            title="Blue"
            style={{ color: '#70CFF8' }}
          >
            A
          </button>
          <button
            onClick={() => editor.chain().focus().setColor('#94FADB').run()}
            className="p-2 rounded hover:bg-gray-100"
            title="Teal"
            style={{ color: '#94FADB' }}
          >
            A
          </button>
          <button
            onClick={() => editor.chain().focus().setColor('#B9F18D').run()}
            className="p-2 rounded hover:bg-gray-100"
            title="Green"
            style={{ color: '#B9F18D' }}
          >
            A
          </button>
        </div>

        {/* Highlight Colors */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => editor.chain().focus().toggleHighlight({ color: '#fef3c7' }).run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('highlight', { color: '#fef3c7' }) ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Yellow Highlight"
            style={{ backgroundColor: '#fef3c7' }}
          >
            H
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight({ color: '#fecaca' }).run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('highlight', { color: '#fecaca' }) ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Red Highlight"
            style={{ backgroundColor: '#fecaca' }}
          >
            H
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight({ color: '#bbf7d0' }).run()}
            className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('highlight', { color: '#bbf7d0' }) ? 'bg-blue-100 text-blue-600' : ''}`}
            title="Green Highlight"
            style={{ backgroundColor: '#bbf7d0' }}
          >
            H
          </button>
        </div>
      </div>

      {/* Link Menu */}
      {showLinkMenu && (
        <div className="mt-2 p-2 bg-gray-50 rounded border">
          <div className="flex gap-2">
            <input
              type="url"
              placeholder="Enter URL..."
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              className="flex-1 px-3 py-1 border rounded"
            />
            <button
              onClick={setLink}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add
            </button>
            <button
              onClick={() => setShowLinkMenu(false)}
              className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Image Menu */}
      {showImageMenu && (
        <div className="mt-2 p-2 bg-gray-50 rounded border">
          <div className="flex gap-2">
            <input
              type="url"
              placeholder="Enter image URL..."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="flex-1 px-3 py-1 border rounded"
            />
            <button
              onClick={addImage}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add
            </button>
            <button
              onClick={() => setShowImageMenu(false)}
              className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <MenuBar />
      <EditorContent 
        editor={editor} 
        className="min-h-[400px] p-4 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default RichTextEditor; 