import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function AppRouter() {
    return(
<Router>
    <Routes>
        <Route path="" element={</>} />
    </Routes>
</Router>
    );
}

export default AppRouter;