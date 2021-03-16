import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";

const GlobalStyles = createGlobalStyle`
 ${normalize}
 .codex-editor {
    margin-top: 10px;
 }

 .avatar {
      border-radius: 50%;
    }
`;

export default GlobalStyles;
