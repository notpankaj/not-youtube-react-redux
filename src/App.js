import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import HomeScreen from "./screens/homescreen/HomeScreen"
import LoginScreen from "./screens/loginScreen/LoginScreen"
import "./_app.scss"
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { useSelector } from "react-redux"


const Layout = ({ children }) => {
    const [sidebar, toggleSidebar] = useState(false);
    const handleToggleSidebar = () => toggleSidebar(!sidebar);
    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container" >
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
                <Container fluid className="app__main">
                    {children}
                </Container>
            </div>
        </>
    )
}

function App() {

    const { accessToken, loading } = useSelector(state => state.auth);
    const history = useHistory();

    useEffect(() => {
        if (!loading && !accessToken) {
            history.push('/auth');
        }
    }, [loading,accessToken,history])

    return (
        <>
            <Switch>
                <Route path='/' exact>
                    <Layout>
                        <HomeScreen />
                    </Layout>
                </Route>

                <Route path='/auth'>
                    <LoginScreen />
                </Route>

                <Route path='/search'>
                    <Layout>
                        hello
                    </Layout>
                </Route>

                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    )
}

export default App
