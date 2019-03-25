import reset from 'styled-reset';
import {createGlobalStyle} from 'styled-components';

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
        background-color: var(--light);
    }
    body{
    }

`;

export default globalStyles;
