import { ColorModeContext, useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom"

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
<<<<<<< HEAD
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import Geography from "./scenes/geography";
=======
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";
>>>>>>> c93b84f6c2b77b6fa7ce76ab209e6e17e1a8ec17

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Routes>
          <Route path = "/" element = {<Dashboard/>}/>
          <Route path = "/team" element = {<Team/>}/>
          <Route path = "/contacts" element = {<Contacts/>}/>
          <Route path = "/invoices" element = {<Invoices/>}/>
          <Route path = "/form" element = {<Form/>}/>
<<<<<<< HEAD
          <Route path = "/calendar" element = {<Calendar/>}/>
          <Route path = "/faq" element = {<FAQ/>}/>
          {/* <Route path = "/bar" element = {<Bar/>}/> */}
          {/* <Route path = "/pie" element = {<Pie/>}/> */}
          {/* <Route path = "/line" element = {<Line/>}/> */}
          {/* <Route path = "/geography" element = {<Geography/>}/> */}
=======
          <Route path = "/bar" element = {<Bar/>}/>
          <Route path = "/pie" element = {<Pie/>}/>
          <Route path = "/line" element = {<Line/>}/>
          {/* <Route path = "/faq" element = {<FAQ/>}/> */}
          <Route path = "/geography" element = {<Geography/>}/>
          {/* <Route path = "/calendar" element = {<Calendar/>}/> */}
>>>>>>> c93b84f6c2b77b6fa7ce76ab209e6e17e1a8ec17
        </Routes>

      </main>
    </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
