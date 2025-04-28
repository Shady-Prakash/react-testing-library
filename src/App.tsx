import './App.css'
import Application from './components/Application/application'
import Counter from './components/Counter/counter'
import { MuiMode } from './components/mui/MuiMode'
import Skills from './components/Skills/skills'
import { AppProviders } from './providers/AppProviders'

function App() {

  return (
    <AppProviders>
      <div className="App">
        <Application/>
        <Skills skills={['HTML', 'CSS']} />
        <Counter/>
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
