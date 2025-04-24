import { Button } from '@/shared/ui/button'
import { FormattedMessage } from 'react-intl'
import './App.css'

function App() {

    return (
        <>
            <h1 className='text-4xl text-red-400'> <FormattedMessage id='test' /></h1>
            <Button> helolo</Button>
        </>
    )
}

export default App
