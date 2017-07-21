import { Link } from 'react-router-dom'
import './stylesheets/pages.scss'

export const Home = () =>
    <div className="home">
        <h1>[Company Website]</h1>
        <nav>
            <Link to="about">[About]</Link>
            <Link to="events">[Events]</Link>
            <Link to="products">[Products]</Link>
            <Link to="contact">[Contact Us]</Link>
        </nav>
    </div>

export const About = () =>
    <section className="events">
        <h1>[About the Company]</h1>
    </section>

export const Events = () =>
    <section className="events">
        <h1>[Events Calendar]</h1>
    </section>

export const Products = () =>
    <section className="products">
        <h1>[Products Catalog]</h1>
    </section>

export const Contact = () =>
    <section className="contact">
        <h1>[Contact Us]</h1>
    </section>

export const NotFound404 = ({ location }) =>
    <div className="notfound-404">
        <h1>Resource not found at '{location.pathname}'</h1>
    </div>
