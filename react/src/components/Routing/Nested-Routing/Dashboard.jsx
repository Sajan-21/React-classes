import {Link, Routes, Route} from 'react-router-dom';
import Settings from './Settings';
import Profile from './Profile';

function Dashboard() {
    return (
        <>
        <nav className="bg-dark p-3">
            <ul className="d-flex justify-content-center align-items-center gap-5">
                <li><Link to={'/dashboard/profile'} className="text-light text-decoration-none">Profile</Link></li>
                <li><Link to={'/dashboard/settings'} className="text-light text-decoration-none">Settings</Link></li>
            </ul>
        </nav>
        <section>
            <Routes>
                <Route path={'/profile'} exact element={<Profile />} />
                <Route path={'/settings'} exact element={<Settings />} />
            </Routes>
        </section>
        </>
    )
}

export default Dashboard;