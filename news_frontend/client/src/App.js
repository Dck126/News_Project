import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import News from './pages/News';
import NewsId from './pages/NewsId';
import NewsChannelPendidikan from './pages/NewsChannelPendidikan';
import NewsChannelEkonomi from './pages/NewsChannelEkonomi';
import NewsChannelHukum from './pages/NewsChannelHukum';
import NewsChannelPemerintahan from './pages/NewsChannelPemerintahan';

// add News
import NewsEditor from './pages/NewsEditor';

//page 404
import PageNotFound from './pages/PageNotFound ';

// component
import Home from './component/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<News />} />
            <Route path="gaskan" element={<NewsId />} />
            <Route
              path="/channel/pendidikan"
              element={<NewsChannelPendidikan />}
            />
            <Route path="/channel/ekonomi" element={<NewsChannelEkonomi />} />
            <Route path="/channel/hukum" element={<NewsChannelHukum />} />
            <Route
              path="/channel/pemerintahan"
              element={<NewsChannelPemerintahan />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="/editor" element={<NewsEditor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
