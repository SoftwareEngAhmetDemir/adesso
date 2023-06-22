import { useParams } from 'react-router-dom';
import Header from './Header';
import { Fragment, useEffect } from 'react';
import { Unit } from '../entities/data-reponose';
import { action, store } from '../redux/store';
import { GET_DATA_REQUEST } from '../redux/actions';

function UnitsDetails() {
  let { id }: any = useParams();
  let state = store.getState();
  let data: Unit[] = state.data;

  useEffect(() => {
    if (data[id] === undefined) action(GET_DATA_REQUEST,null);
  }, [data, id]);

  if (data[id] === undefined) {
    return <div>loading</div>;
  } else
    return (
      <Fragment>
        <Header title="Units Details" />
        <div className="container">
          <div className="d-lg-block d-flex justify-content-center mt-3">
            <div className="row justify-content-center col-xl-4 col-lg-9 col-12">
              <div className="d-flex align-items-center col-5 border">
                <h6 className="h-50">ID</h6>
              </div>
              <div className="d-flex align-items-center col-7 border">
                {data[id].id}
              </div>
              <div className="d-flex align-items-center col-5 border">
                <h6 className="h-50">Name</h6>
              </div>
              <div className="d-flex align-items-center col-7 border">
                {data[id].name}
              </div>
              <div className="d-flex align-items-center col-5 border">
                <h6 className="h-auto">Description</h6>
              </div>
              <div className="d-flex align-items-center col-7 border">
                {data[id].description}
              </div>
              <div className="d-flex align-items-center col-5 border">
                <h6 className="h-50">Min.Required Age</h6>
              </div>
              <div className="d-flex align-items-center col-7 border">
                {data[id].age}
              </div>
              <div className="d-flex align-items-center col-5 border">
                <h6 className="h-50">Wood Cost</h6>
              </div>
              <div className="d-flex align-items-center col-7 border">
                {data[id]?.cost?.Wood}
              </div>
              <div className="d-flex align-items-center col-5 border">
                <h6 className="h-50">Food Cost</h6>
              </div>
              <div className="d-flex align-items-center col-7 border">
                {data[id]?.cost?.Food}
              </div>
              <div className="d-flex align-items-center col-5 border">
                <h6 className="h-50">Gold Cost</h6>
              </div>
              <div className="d-flex align-items-center col-7 border">
                {data[id]?.cost?.Gold}
              </div>
              <div className="d-flex align-items-center col-5 border">
                <h6 className="h-50">Build Time</h6>
              </div>
              <div className="d-flex align-items-center col-7 border">
                {data[id].build_time}
              </div>
              <div className="d-flex align-items-center col-5 border">
                <h6 className="h-50">Reload Time</h6>
              </div>
              <div className="d-flex align-items-center col-7 border">
                {data[id].reload_time}
              </div>
              <div className="d-flex align-items-center col-5 border">
                <h6 className="h-50">Hit Points</h6>
              </div>
              <div className="d-flex align-items-center col-7 border">
                {data[id].hit_points}
              </div>
              <div className="d-flex align-items-center col-5 border">
                <h6 className="h-50">Attack</h6>
              </div>
              <div className="d-flex align-items-center col-7 border">
                {data[id].attack}
              </div>
              <div className="d-flex align-items-center col-5 border">
                <h6 className="h-50">Accurancy</h6>
              </div>
              <div className="d-flex align-items-center col-7 border">
                {data[id].accuracy}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default UnitsDetails;
