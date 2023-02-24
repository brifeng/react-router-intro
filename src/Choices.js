import { Link } from "react-router-dom";

const Choices = () => {
    return (
        <div>
            <h2>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h2>
            <Link to='/soda'>Soda</Link>
            <br />
            <Link to='/chips'>Chips</Link>
            <br />
            <Link to='/sardines'>Fresh Sardines</Link>
            <br />
        </div>
    )
}

export default Choices;