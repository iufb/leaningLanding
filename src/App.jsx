import { HomePage } from '@/pages/Home'
import { SelfGovernmentPage } from '@/pages/SelfGovernment'
import { ServicesPage } from '@/pages/Services'
import { Header } from '@/widgets/header'
import { Route, Switch } from 'wouter'

function App() {

    return (
        <>
            <Header />
            <main className='bg-slate-50 py-5 min-h-[calc(100svh-124px-64px)]'>
                <Switch>
                    <Route path='/' component={HomePage} />
                    <Route path='/services' component={ServicesPage} />
                    <Route path='/self-government' component={SelfGovernmentPage} />
                    <Route>404: Not Found</Route>
                </Switch>
            </main>
            <footer className='w-full bg-primary p-5 h-16 text-white'>2025</footer>
        </>
    )
}

export default App
