import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
	${reset}

	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

	body{
		font-family: 'Poppins', sans-serif;
	}

	*{
		font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
