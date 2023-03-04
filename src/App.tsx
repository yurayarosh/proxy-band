import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostsPage from './pages/PostsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts/:id" element={<PostsPage />} />
      </Routes>
    </div>
  );
}

export default App;
