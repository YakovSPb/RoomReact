import "./App.css"
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import Error from "./pages/Error"
import { Route, Switch } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";

function App() {
    return (
        <>
            <MyNavbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/rooms/" component={Rooms}/>
                <Route exact path="/rooms/:slug" component={SingleRoom}/>
                <Route component={Error}/>
            </Switch>
        </>
    );
}

export default App;
