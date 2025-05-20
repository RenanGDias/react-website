import Student from "./Student.jsx"

function App() {
    return(
        <>
        <Student name="Bob Esponja" age={30} isStudent={true}/>
        <Student name="Patrick" age={42} isStudent={false}/>
        <Student name="Lula Molusco" age={50} isStudent={false}/>
        <Student name="Sandy Bochechas" age={27} isStudent={true}/>
        </>
    );
}

export default App
