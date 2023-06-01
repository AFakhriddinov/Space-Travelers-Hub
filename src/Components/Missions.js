import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/mission/missionSlice';
import './styles/Missions.css';
import Mission from './mission';
import Loader from './Loader';
import 'bootstrap/dist/css/bootstrap.css';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, isLoading } = useSelector((store) => store.missions);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container-fluid px-5">
      <table className="table table-hover table-striped table-responsive">
        <thead>
          <tr>
            <th className="heading" scope="col">Missions</th>
            <th className="heading" scope="col">Description</th>
            <th className="heading" scope="col">Status</th>
            <th className="heading" scope="col">{' '}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              name={mission.name}
              key={mission.id}
              id={mission.id}
              description={mission.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
