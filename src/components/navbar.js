// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Header = () => {
    return (
        <header class="header">
            <a href="#home" class="header__logo">
                <img src="app/img/JFLogo.svg" alt="" />
            </a>
            <nav class="header__navbar in-active">

                <a class="nav-link activee" href="#home">Home</a>
                <a class="nav-link" href="#about">About</a>
                <a class="nav-link " href="#services">Services</a>
                <a class="nav-link" href="#projects">Projects</a>
                <a class="nav-link" href="#reviews">Reviews</a>
                <a class="nav-link" href="#pricing">Pricing</a>
                <a class="nav-link" href="#contact">Contact</a>
            </nav>
            <div class="header__icons">
                <div id="info-btn" class="fa-solid fa-circle-info"></div>
                <div id="menu-btn" class="fa-solid fa-bars"></div>
            </div>
        </header>
    )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export const Head = () => <title>Navbar</title>
export default Header