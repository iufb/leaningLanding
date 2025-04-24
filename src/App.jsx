import { HomePage } from '@/pages/Home'
import { ServicesPage } from '@/pages/Services'
import { Header } from '@/widgets/header'
import { Route, Switch } from 'wouter'

function App() {

    return (
        <>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} />
                <Route path='/services' component={ServicesPage} />
                <Route>404: Not Found</Route>
            </Switch>
        </>
    )
}

export default App
