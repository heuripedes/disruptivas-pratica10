import Header from "./components/header";
import Footer from "./components/footer";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import {ThemeProvider,  createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (<>
	  <ThemeProvider theme={darkTheme}>
		  <CssBaseline />
		  <Header />
		  <ListarTarefa />
		  <Footer />
	  </ThemeProvider>
	  </>
  );
}

export default App;
