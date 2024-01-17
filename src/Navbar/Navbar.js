import React from 'react'

const Navbar = () => {
  return (
    <>
<div id="wrapper">
  <div className="d-flex flex-column" id="content-wrapper">
    <div id="content">
      <nav className="navbar navbar-expand bg-white shadow mb-4 topbar static-top navbar-light">
        <div className="container-fluid">
          <button
            className="btn btn-link d-md-none rounded-circle me-3"
            id="sidebarToggleTop"
            type="button"
          >
            <i className="fas fa-bars" />
          </button>
          <h1>
            <strong>
              <span style={{ color: "rgb(0, 30, 255)" }}>DIGITAL DOOR</span>
            </strong>
          </h1>
          <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group" />
          </form>
          <label>
            <input
              className="bg-light border-0 small"
              type="text"
              placeholder="Search for ..."
            />
          </label>
          <button className="btn btn-primary py-0" type="button">
            <i className="fas fa-search" />
          </button>
          <ul className="navbar-nav flex-nowrap ms-auto">
            <li className="nav-item dropdown d-sm-none no-arrow">
              <a
                className="dropdown-toggle nav-link"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                href="#"
              >
                <i className="fas fa-search" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end p-3 animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form className="me-auto navbar-search w-100">
                  <div className="input-group">
                    <label>
                      <input
                        className="bg-light form-control border-0 small"
                        type="text"
                        placeholder="Search for ..."
                      />
                    </label>
                    <div className="input-group-append">
                      <button className="btn btn-primary py-0" type="button">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <div className="nav-item dropdown no-arrow">
                <a
                  className="dropdown-toggle nav-link"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  <button className="btn btn-primary" type="button">
                    Button
                  </button>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                  <h6 className="dropdown-header">alerts center</h6>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="me-3">
                      <div className="bg-primary icon-circle">
                        <i className="fas fa-file-alt text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="small text-gray-500">
                        December 12, 2019
                      </span>
                      <p>A new monthly report is ready to download!</p>
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="me-3">
                      <div className="bg-success icon-circle">
                        <i className="fas fa-donate text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="small text-gray-500">
                        December 7, 2019
                      </span>
                      <p>$290.29 has been deposited into your account!</p>
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="me-3">
                      <div className="bg-warning icon-circle">
                        <i className="fas fa-exclamation-triangle text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="small text-gray-500">
                        December 2, 2019
                      </span>
                      <p>
                        Spending Alert: We've noticed unusually high spending
                        for your account.
                      </p>
                    </div>
                  </a>
                  <a
                    className="dropdown-item text-center small text-gray-500"
                    href="#"
                  >
                    Show All Alerts
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <div
                className="shadow dropdown-list dropdown-menu dropdown-menu-end"
                aria-labelledby="alertsDropdown"
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</div>

    </>
  )
}

export default Navbar