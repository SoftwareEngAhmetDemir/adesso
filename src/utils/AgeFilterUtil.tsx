import { Fragment } from "react";
import { action, store } from "../redux/store";
import { SET_STATUS } from "../redux/actions";

function AgeFilterUtil() {
  let { dispatch } = store;
  let { status } = store.getState();

  return (
    <Fragment>
      <div>
        <h5>Ages</h5>
      </div>
      <div>
        <ul
          className="custom-nav nav nav-pills mb-3"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation" key={1}>
            <button
              className={`nav-link ${status === 'ALL' ? 'active' : ''} `}
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              onClick={() => action( SET_STATUS, 'ALL' )}
            >
              ALL
            </button>
          </li>
          <li className="nav-item" role="presentation" key={2}>
            <button
              className={`nav-link ${status === 'Dark' ? 'active' : ''} `}
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              onClick={() => action(SET_STATUS,  'Dark' )}
            >
              Dark
            </button>
          </li>
          <li className="nav-item" role="presentation" key={3}>
            <button
              className={`nav-link ${status === 'Feudal' ? 'active' : ''} `}
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
              onClick={() =>
               action(SET_STATUS, 'Feudal' )
              }
            >
              Feudal
            </button>
          </li>
          <li className="nav-item" role="presentation" key={4}>
            <button
              className={`nav-link ${status === 'Castle' ? 'active' : ''} `}
              id="pills-disabled-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-disabled"
              type="button"
              role="tab"
              aria-controls="pills-disabled"
              aria-selected="false"
              onClick={() =>
                action(SET_STATUS,'Castle' )
              }
            >
              Castle
            </button>
          </li>
          <li className="nav-item" role="presentation" key={5}>
            <button
              className={`nav-link ${status === 'Imperial' ? 'active' : ''} `}
              id="pills-disabled-tab2"
              data-bs-toggle="pill"
              data-bs-target="#pills-disabled2"
              type="button"
              role="tab"
              aria-controls="pills-disabled2"
              aria-selected="false"
              onClick={() =>
               action(SET_STATUS, 'Imperial' )
              }
            >
              Imperial
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default AgeFilterUtil;
