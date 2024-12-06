import SignInForm from './components/Auth/SignInForm'
import SignUpForm from './components/Auth/SignUpForm'
import './index.css'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold underline'>ModeraSafe</h1>
      <SignUpForm />
      <SignInForm />
    </>
  )
}

export default App
