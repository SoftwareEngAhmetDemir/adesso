import { store } from '../redux/store';
import UnitsTables from './UnitsTables';

function FiteredTable() {
  let { status } = store.getState();
  return (
    <div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className={`tab-pane fade ${status === 'ALL' ? 'show active' : ''} `}
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabIndex={0}
        >
          <UnitsTables />
        </div>
        <div
          className={`tab-pane fade ${status === 'Dark' ? 'show active' : ''} `}
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabIndex={0}
        >
          <UnitsTables />
        </div>
        <div
          className={`tab-pane fade ${
            status === 'Feudal' ? 'show active' : ''
          } `}
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabIndex={0}
        >
          <UnitsTables />
        </div>
        <div
          className={`tab-pane fade ${
            status === 'Castle' ? 'show active' : ''
          } `}
          id="pills-disabled"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab"
          tabIndex={0}
        >
          <UnitsTables />
        </div>
        <div
          className={`tab-pane fade ${
            status === 'Imperial' ? 'show active' : ''
          } `}
          id="pills-disabled2"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab2"
          tabIndex={0}
        >
          <UnitsTables />
        </div>
      </div>
    </div>
  );
}

export default FiteredTable;
