import React, { Fragment, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import JobDashboard from '../features/jobs/dashboard/JobDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../features/home/HomePage';
import JobForm from '../features/jobs/form/JobForm';
import JobDetails from '../features/jobs/details/JobDetails';
import LoginForm from '../features/users/LoginForm';
import { useStore } from '../stores/store';
import LoadingComponent from './LoadingComponent';
import ModalContainer from '../common/modals/ModalContainer';
import { ToastContainer } from 'react-toastify';
import ProfilePage from '../features/profiles/ProfilePage';
import Analysis from '../features/Analysis/Analysis';

function App() {

  const location = useLocation();
  const {commonStore, userStore} = useStore();

  useEffect(() => {
    if(commonStore.token){
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore])

  if(!commonStore.appLoaded) return <LoadingComponent content='Loading app...' />

  return (
    <>
    <ToastContainer position='bottom-right' hideProgressBar />
    <ModalContainer />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path={'/*'} element={
        <Fragment>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Routes>
              <Route path='jobs' element={<JobDashboard />} />
              <Route path='jobs/:id' element={<JobDetails />} />
              <Route key={location.key} path='createJob' element={<JobForm />} />
              <Route path='manage/:id' element={<JobForm />} />
              <Route path='analysis' element={<Analysis />} />
              <Route path='profiles/:username' element={<ProfilePage />} />
              <Route path='login' element={<LoginForm />} />
            </Routes>
          </Container>
        </Fragment>
      } />
    </Routes>
    </>
  );
}

export default observer(App);
