import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";

const GlobalStyles = createGlobalStyle`
 ${normalize}
 
 .codex-editor {
   min-height: 300px;
    /* border: 1px solid #e4d8d8;
    border-radius: 5px; */
    /* padding: 0 20px; */
    /* margin: 30px 0 50px; */
 }

.codex-editor__redactor {
  
   padding-bottom: 0px !important;
}
.avatar {
   border-radius: 50%;
}

.ce-header[contentEditable=true][data-placeholder]::before  {
color: #70768485 !important;
}

/* textarea::placeholder {
    color: #70768485;
  } */
`;

export default GlobalStyles;
