import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import JobDashboard from '../features/jobs/dashboard/JobDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../features/home/HomePage';
import JobForm from '../features/jobs/form/JobForm';
import JobDetails from '../features/jobs/details/JobDetails';

function App() {

  const location = useLocation();

  return (
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
            </Routes>
          </Container>
        </Fragment>
      } />
    </Routes>
  );
}

export default observer(App);
