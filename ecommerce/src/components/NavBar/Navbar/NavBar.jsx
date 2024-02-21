import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Parlantes</button>
                <button>Auriculares</button>
                <button>Microfonos</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar