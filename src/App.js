import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Beranda from './pages/beranda';
import Perumahanpage from './pages/perumahan';
import Warisan from './pages/warisan';
import Rumah from './pages/rumah';
import Adminpages from './adminpages/adminpages';
import PerumahanAdmin from './adminpages/perumahanadmin';
import Warisanbudayaadmin from './adminpages/warisanbudayaadmin';
import Login from './adminpages/loginadmin';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path='/perumahan' element={<Perumahanpage />} />
          <Route path='/warisan' element={<Warisan />} />
          <Route path='/rumah' element={<Rumah />} />
          <Route path='/adminpages' element={<Adminpages />} />
          <Route path='/perumahanadmin' element={<PerumahanAdmin />} />
          <Route path='/warisanbudayaadmin' element={<Warisanbudayaadmin />} />
          <Route path='/loginadmin' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
