import { Fragment, useEffect } from 'react';
import { Unit } from '../entities/data-reponose';
import { useNavigate } from 'react-router-dom';
import { action, store } from '../redux/store';
import { GET_DATA_REQUEST } from '../redux/actions';

function UnitsTablesUtil() {
  let state = store.getState();
  let data: Unit[] = state.data;

  const navigate = useNavigate();
  useEffect(() => {
    action(GET_DATA_REQUEST,null);
  }, []);
  const CostProto = (cost: string): string => {
    if (cost === 'null') return 'xxx';
    let costT = cost.replace(/{|}|"/gi, '');
    return costT;
  };
 
  const handleDetails = (id: number) => {
    navigate(`/units-details/${id}`);
  };
  return (
    <div className="custom-table">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Costs</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.map(({ id, name, age, cost }: Unit, index: number) => {
            return age === state.status || state.status === 'ALL' ? (
              <tr key={index} onClick={() => handleDetails(index)}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{age}</td>
                <td>{CostProto(JSON.stringify(cost))}</td>
              </tr>
            ) : (
              <Fragment></Fragment>
            );
        })}
        </tbody>
      </table>
        <div className='no-data'>no Data</div>
    </div>
  );
}

export default UnitsTablesUtil;
