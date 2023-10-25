import './App.css';
import ArticleDetailPate from './pages/articleDetail/ArticleDetailPate';
import HomePage from './pages/home/HomePage';
import {Routes,Route}from 'react-router-dom'
import RegisterPage from './pages/register/RegisterPage';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/Login/LoginPage'
import ProfilePage from './pages/profile/ProfilePage';
import AdminLayout from './pages/admin/AdminLayout';
import Admin from './pages/admin/screens/Admin';
import NewPost from './pages/admin/screens/NewPost';
import ManagePosts from './pages/admin/screens/ManagePosts';
import EditPost from './pages/admin/screens/EditPost';

function App() {
  return (
    <div className=" font-opensans ">
      
      <Routes>
        <Route index path='/'  element={<HomePage/>}/>
        <Route  path='/block/:slug'  element={<ArticleDetailPate/>}/>
        <Route  path='/register'  element={<RegisterPage/>}/>
        <Route  path='/login'  element={<LoginPage/>}/>
        <Route  path='/profile'  element={<ProfilePage/>}/>
        <Route  path='/admin'  element={<AdminLayout/>}>
          <Route path='posts/new' element={<NewPost/>}/>
          <Route path='posts/manage' element={<ManagePosts/>}/>
          <Route path='posts/manage/edit/:slug' element={<EditPost/>}/>
        </Route>

      </Routes>
<Toaster/>
    </div>
  );
}

export default App;
