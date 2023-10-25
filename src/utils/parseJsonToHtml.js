import { generateHTML } from '@tiptap/react'
import Bold from '@tiptap/extension-bold'
import Document from '@tiptap/extension-document'
import Paragrapth from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Italic from '@tiptap/extension-italic'
import parse from 'html-react-parser'



const parseJsonToHtml=(json)=>{


  parse(generateHTML(json,[
    Bold,Italic,Text,Paragrapth,Document
          ])) }


          export default parseJsonToHtml