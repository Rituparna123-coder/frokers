import React, {
    useEffect
} from 'react';
import './app.css';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import PrivacyPolicy from './screen/PrivacyPolicy';
import TermsandConditions from './screen/TermsandConditions';
import Froker from './screen/CHome';
import AboutUS from './screen/AboutUS';
import Blogs from './screen/Blogs';
import Blog from './screen/Blog';
import Froshare from './screen/FroshareScreen';
import NotFound from './screen/NotFound';
import ReactGA from 'react-ga4';

ReactGA.initialize("G-1N5R9B764V");

export default function App() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return ( <
        BrowserRouter >
        <
        NavBar / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Froshare / >
        }
        /> <
        Route path = "/about-us"
        element = { < AboutUS / >
        }
        /> <
        Route path = "/privacy-policy"
        element = { < PrivacyPolicy / >
        }
        /> <
        Route path = "/terms-and-conditions"
        element = { < TermsandConditions / >
        }
        /> <
        Route path = "/blogs"
        element = { < Blogs / >
        }
        /> <
        Route path = "/blog/:id"
        element = { < Blog / >
        }
        /> <
        Route path = "/froker"
        element = { < Froker / >
        }
        /> <
        Route path = "*"
        element = { < NotFound / >
        }
        /> {/ * Catch - all route
        for undefined paths * /} <
        /Routes> <
        Footer / >
        <
        /BrowserRouter>
    );
}