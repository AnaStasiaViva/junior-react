import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&family=Source+Sans+Pro:wght@600&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;500&family=Roboto:wght@300;500;700&family=Source+Sans+Pro:wght@600&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@300;500;700&family=Source+Sans+Pro:wght@600&display=swap');


*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
:root {



}
body {
  font-family: "Raleway", "Roboto" , 'Source Sans Pro', "Roboto Condensed",
    sans-serif;
    background: #FFFFFF;
    max-width: 1440px;
    &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}



li {
  list-style: none;
  
}
a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
`;
