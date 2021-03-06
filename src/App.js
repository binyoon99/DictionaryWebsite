import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CheckDone from "./component/CheckDone";  
import CreateDay from "./component/CreateDay";
// Used react-router-dom@5.2.0 but V6 came out
// Future me please learn from www.youtube.com/watch?v=CHHXeHVK-8U and change my code

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Switch>
          
          <Route exact path="/">
           <DayList></DayList>
          </Route>

          <Route path ="/day/:day">
            <Day></Day>
          </Route>

          <Route path = "/create_word"> 
            <CreateWord></CreateWord>
          </Route>

          <Route path = "/check_done"> 
            <CheckDone></CheckDone>
          </Route>

          <Route path = "/create_day"> 
            <CreateDay></CreateDay>
          </Route>

          <Route>
            <EmptyPage></EmptyPage>
          </Route>

        </Switch>
        {/* add footer here */}
      </div>
      </BrowserRouter>
  );
}

export default App;
