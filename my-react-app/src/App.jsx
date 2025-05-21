// Renderização condicional: permite controlar o que é renderizado 
// baseado em certas condições

import UserGreeting from "./UserGreeting.jsx";

function App() {
    return(
        <>
            <UserGreeting isLoggedIn={true} username="Renan Dias"></UserGreeting>
        </>
    );
}

export default App
