import { Routes, Route, Navigate } from "react-router-dom"
import ServiceOrderPage from "./pages/ServiceOrderPage/ServiceOrderPage"
import ServiceDetailsPage from "./pages/ServiceDetailsPage/ServiceDetailsPage"
import HomePage from "./pages/HomePage/HomePage"
import DataProvider from "./components/DataProvider"

const App = () => (
  <DataProvider>
    <Routes>
      <Route path="/service/:id/order" Component={ServiceOrderPage} />
      <Route path="/service/:id" Component={ServiceDetailsPage} />
      <Route path="/" Component={HomePage} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </DataProvider>
)
export default App
