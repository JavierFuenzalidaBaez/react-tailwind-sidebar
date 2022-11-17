// @lib
import { Routes, Route } from 'react-router-dom'
import { SideBar } from '@components'

// @context
import AppProvider from '@context/AppContext'

// @routes modules
import routesModules from '@routes'

const App = () => {
  return (
    <AppProvider>
      <div className="h-screen bg-slate-300 dark:bg-slate-900">
        <SideBar>
          <Routes>
            {routesModules?.map((route) => (
              <Route
                key={`KEY-${route?.path}`}
                path={route?.path}
                element={route?.element}
              />
            ))}
          </Routes>
        </SideBar>
      </div>
    </AppProvider>
  )
}

export default App
