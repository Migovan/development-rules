import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";

const GlobalStyles = createGlobalStyle`
 ${normalize}
 
 .codex-editor {
   min-height: 300px;
 }

.codex-editor__redactor {
  
   padding-bottom: 0px !important;
}
.avatar {
   border-radius: 25%;
}

.ce-header[contentEditable=true][data-placeholder]::before  {
color: #70768485 !important;
}
`;

export default GlobalStyles;
