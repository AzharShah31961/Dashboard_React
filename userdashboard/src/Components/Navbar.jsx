import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand">
        <button
          className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarVerticalCollapse"
          aria-controls="navbarVerticalCollapse"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </button>
        <a className="navbar-brand me-1 me-sm-3" href="index-2.html">
          <div className="d-flex align-items-center">
            <img
              className="me-2"
              src="./assets/img/icons/spot-illustrations/falcon.png"
              alt=""
              width={40}
            />
            <span className="font-sans-serif text-primary">falcon</span>
          </div>
        </a>
        <ul className="navbar-nav align-items-center d-none d-lg-block">
          <li className="nav-item">
            <div className="search-box" data-list='{"valueNames":["title"]}'>
              <form
                className="position-relative"
                data-bs-toggle="search"
                data-bs-display="static"
              >
                <input
                  className="form-control search-input fuzzy-search"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <span className="fas fa-search search-box-icon" />
              </form>
              <div
                className="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none"
                data-bs-dismiss="search"
              >
                <button
                  className="btn btn-link btn-close-falcon p-0"
                  aria-label="Close"
                />
              </div>
              <div className="dropdown-menu border font-base start-0 mt-2 py-0 overflow-hidden w-100">
                <div
                  className="scrollbar list py-3"
                  style={{ maxHeight: "24rem" }}
                >
                  <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
                    Recently Browsed
                  </h6>
                  <a
                    className="dropdown-item fs-10 px-x1 py-1 hover-primary"
                    href="app/events/event-detail.html"
                  >
                    <div className="d-flex align-items-center">
                      <span className="fas fa-circle me-2 text-300 fs-11" />
                      <div className="fw-normal title">
                        Pages{" "}
                        <span
                          className="fas fa-chevron-right mx-1 text-500 fs-11"
                          data-fa-transform="shrink-2"
                        />{" "}
                        Events
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item fs-10 px-x1 py-1 hover-primary"
                    href="app/e-commerce/customers.html"
                  >
                    <div className="d-flex align-items-center">
                      <span className="fas fa-circle me-2 text-300 fs-11" />
                      <div className="fw-normal title">
                        E-commerce{" "}
                        <span
                          className="fas fa-chevron-right mx-1 text-500 fs-11"
                          data-fa-transform="shrink-2"
                        />{" "}
                        Customers
                      </div>
                    </div>
                  </a>
                  <hr className="text-200 dark__text-900" />
                  <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
                    Suggested Filter
                  </h6>
                  <a
                    className="dropdown-item px-x1 py-1 fs-9"
                    href="app/e-commerce/customers.html"
                  >
                    <div className="d-flex align-items-center">
                      <span className="badge fw-medium text-decoration-none me-2 badge-subtle-warning">
                        customers:
                      </span>
                      <div className="flex-1 fs-10 title">
                        All customers list
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item px-x1 py-1 fs-9"
                    href="app/events/event-detail.html"
                  >
                    <div className="d-flex align-items-center">
                      <span className="badge fw-medium text-decoration-none me-2 badge-subtle-success">
                        events:
                      </span>
                      <div className="flex-1 fs-10 title">
                        Latest events in current month
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item px-x1 py-1 fs-9"
                    href="app/e-commerce/product/product-grid.html"
                  >
                    <div className="d-flex align-items-center">
                      <span className="badge fw-medium text-decoration-none me-2 badge-subtle-info">
                        products:
                      </span>
                      <div className="flex-1 fs-10 title">
                        Most popular products
                      </div>
                    </div>
                  </a>
                  <hr className="text-200 dark__text-900" />
                  <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
                    Files
                  </h6>
                  <a className="dropdown-item px-x1 py-2" href="#!">
                    <div className="d-flex align-items-center">
                      <div className="file-thumbnail me-2">
                        <img
                          className="border h-100 w-100 object-fit-cover rounded-3"
                          src="./assets/img/products/3-thumb.png"
                          alt=""
                        />
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 title">iPhone</h6>
                        <p className="fs-11 mb-0 d-flex">
                          <span className="fw-semi-bold">Antony</span>
                          <span className="fw-medium text-600 ms-2">
                            27 Sep at 10:30 AM
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item px-x1 py-2" href="#!">
                    <div className="d-flex align-items-center">
                      <div className="file-thumbnail me-2">
                        <img
                          className="img-fluid"
                          src="./assets/img/icons/zip.png"
                          alt=""
                        />
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 title">Falcon v1.8.2</h6>
                        <p className="fs-11 mb-0 d-flex">
                          <span className="fw-semi-bold">John</span>
                          <span className="fw-medium text-600 ms-2">
                            30 Sep at 12:30 PM
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                  <hr className="text-200 dark__text-900" />
                  <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
                    Members
                  </h6>
                  <a
                    className="dropdown-item px-x1 py-2"
                    href="pages/user/profile.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-l status-online me-2">
                        <img
                          className="rounded-circle"
                          src="./assets/img/team/1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 title">Anna Karinina</h6>
                        <p className="fs-11 mb-0 d-flex">Technext Limited</p>
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item px-x1 py-2"
                    href="pages/user/profile.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-l me-2">
                        <img
                          className="rounded-circle"
                          src="./assets/img/team/2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 title">Antony Hopkins</h6>
                        <p className="fs-11 mb-0 d-flex">Brain Trust</p>
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item px-x1 py-2"
                    href="pages/user/profile.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-l me-2">
                        <img
                          className="rounded-circle"
                          src="./assets/img/team/3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 title">Emma Watson</h6>
                        <p className="fs-11 mb-0 d-flex">Google</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="text-center mt-n3">
                  <p className="fallback fw-bold fs-8 d-none">
                    No Result Found.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
          <li className="nav-item ps-2 pe-0">
            <div className="dropdown theme-control-dropdown">
              <a
                className="nav-link d-flex align-items-center dropdown-toggle fa-icon-wait fs-9 pe-1 py-0"
                href="#"
                role="button"
                id="themeSwitchDropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span
                  className="fas fa-sun fs-7"
                  data-fa-transform="shrink-2"
                  data-theme-dropdown-toggle-icon="light"
                />
                <span
                  className="fas fa-moon fs-7"
                  data-fa-transform="shrink-3"
                  data-theme-dropdown-toggle-icon="dark"
                />
                <span
                  className="fas fa-adjust fs-7"
                  data-fa-transform="shrink-2"
                  data-theme-dropdown-toggle-icon="auto"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end dropdown-caret border py-0 mt-3"
                aria-labelledby="themeSwitchDropdown"
              >
                <div className="bg-white dark__bg-1000 rounded-2 py-2">
                  <button
                    className="dropdown-item d-flex align-items-center gap-2"
                    type="button"
                    value="light"
                    data-theme-control="theme"
                  >
                    <span className="fas fa-sun" />
                    Light
                    <span className="fas fa-check dropdown-check-icon ms-auto text-600" />
                  </button>
                  <button
                    className="dropdown-item d-flex align-items-center gap-2"
                    type="button"
                    value="dark"
                    data-theme-control="theme"
                  >
                    <span className="fas fa-moon" data-fa-transform="" />
                    Dark
                    <span className="fas fa-check dropdown-check-icon ms-auto text-600" />
                  </button>
                  <button
                    className="dropdown-item d-flex align-items-center gap-2"
                    type="button"
                    value="auto"
                    data-theme-control="theme"
                  >
                    <span className="fas fa-adjust" data-fa-transform="" />
                    Auto
                    <span className="fas fa-check dropdown-check-icon ms-auto text-600" />
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item d-none d-sm-block">
            <a
              className="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait"
              href="app/e-commerce/shopping-cart.html"
            >
              <span
                className="fas fa-shopping-cart"
                data-fa-transform="shrink-7"
                style={{ fontSize: 33 }}
              />
              <span className="notification-indicator-number">1</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait"
              id="navbarDropdownNotification"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-hide-on-body-scroll="data-hide-on-body-scroll"
            >
              <span
                className="fas fa-bell"
                data-fa-transform="shrink-6"
                style={{ fontSize: 33 }}
              />
            </a>
            <div
              className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg"
              aria-labelledby="navbarDropdownNotification"
            >
              <div className="card card-notification shadow-none">
                <div className="card-header">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                      <h6 className="card-header-title mb-0">Notifications</h6>
                    </div>
                    <div className="col-auto ps-0 ps-sm-3">
                      <a className="card-link fw-normal" href="#">
                        Mark all as read
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="scrollbar-overlay"
                  style={{ maxHeight: "19rem" }}
                >
                  <div className="list-group list-group-flush fw-normal fs-10">
                    <div className="list-group-title border-bottom">NEW</div>
                    <div className="list-group-item">
                      <a
                        className="notification notification-flush notification-unread"
                        href="#!"
                      >
                        <div className="notification-avatar">
                          <div className="avatar avatar-2xl me-3">
                            <img
                              className="rounded-circle"
                              src="./assets/img/team/1-thumb.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="notification-body">
                          <p className="mb-1">
                            <strong>Emma Watson</strong> replied to your comment
                            : "Hello world 😍"
                          </p>
                          <span className="notification-time">
                            <span
                              className="me-2"
                              role="img"
                              aria-label="Emoji"
                            >
                              💬
                            </span>
                            Just now
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="list-group-item">
                      <a
                        className="notification notification-flush notification-unread"
                        href="#!"
                      >
                        <div className="notification-avatar">
                          <div className="avatar avatar-2xl me-3">
                            <div className="avatar-name rounded-circle">
                              <span>AB</span>
                            </div>
                          </div>
                        </div>
                        <div className="notification-body">
                          <p className="mb-1">
                            <strong>Albert Brooks</strong> reacted to{" "}
                            <strong>Mia Khalifa's</strong> status
                          </p>
                          <span className="notification-time">
                            <span className="me-2 fab fa-gratipay text-danger" />
                            9hr
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="list-group-title border-bottom">
                      EARLIER
                    </div>
                    <div className="list-group-item">
                      <a className="notification notification-flush" href="#!">
                        <div className="notification-avatar">
                          <div className="avatar avatar-2xl me-3">
                            <img
                              className="rounded-circle"
                              src="./assets/img/icons/weather-sm.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="notification-body">
                          <p className="mb-1">
                            The forecast today shows a low of 20℃ in California.
                            See today's weather.
                          </p>
                          <span className="notification-time">
                            <span
                              className="me-2"
                              role="img"
                              aria-label="Emoji"
                            >
                              🌤️
                            </span>
                            1d
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="list-group-item">
                      <a
                        className="border-bottom-0 notification-unread  notification notification-flush"
                        href="#!"
                      >
                        <div className="notification-avatar">
                          <div className="avatar avatar-xl me-3">
                            <img
                              className="rounded-circle"
                              src="./assets/img/logos/oxford.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="notification-body">
                          <p className="mb-1">
                            <strong>University of Oxford</strong> created an
                            event : "Causal Inference Hilary 2019"
                          </p>
                          <span className="notification-time">
                            <span
                              className="me-2"
                              role="img"
                              aria-label="Emoji"
                            >
                              ✌️
                            </span>
                            1w
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="list-group-item">
                      <a
                        className="border-bottom-0 notification notification-flush"
                        href="#!"
                      >
                        <div className="notification-avatar">
                          <div className="avatar avatar-xl me-3">
                            <img
                              className="rounded-circle"
                              src="./assets/img/team/10.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="notification-body">
                          <p className="mb-1">
                            <strong>James Cameron</strong> invited to join the
                            group: United Nations International Children's Fund
                          </p>
                          <span className="notification-time">
                            <span
                              className="me-2"
                              role="img"
                              aria-label="Emoji"
                            >
                              🙋‍
                            </span>
                            2d
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-center border-top">
                  <a
                    className="card-link d-block"
                    href="app/social/notifications.html"
                  >
                    View all
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown px-1">
            <a
              className="nav-link fa-icon-wait nine-dots p-1"
              id="navbarDropdownMenu"
              role="button"
              data-hide-on-body-scroll="data-hide-on-body-scroll"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={43}
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx={2} cy={2} r={2} fill="#6C6E71" />
                <circle cx={2} cy={8} r={2} fill="#6C6E71" />
                <circle cx={2} cy={14} r={2} fill="#6C6E71" />
                <circle cx={8} cy={8} r={2} fill="#6C6E71" />
                <circle cx={8} cy={14} r={2} fill="#6C6E71" />
                <circle cx={14} cy={8} r={2} fill="#6C6E71" />
                <circle cx={14} cy={14} r={2} fill="#6C6E71" />
                <circle cx={8} cy={2} r={2} fill="#6C6E71" />
                <circle cx={14} cy={2} r={2} fill="#6C6E71" />
              </svg>
            </a>
            <div
              className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-caret-bg"
              aria-labelledby="navbarDropdownMenu"
            >
              <div className="card shadow-none">
                <div className="scrollbar-overlay nine-dots-dropdown">
                  <div className="card-body px-3">
                    <div className="row text-center gx-0 gy-0">
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="pages/user/profile.html"
                          target="_blank"
                        >
                          <div className="avatar avatar-2xl">
                            {" "}
                            <img
                              className="rounded-circle"
                              src="./assets/img/team/3.jpg"
                              alt=""
                            />
                          </div>
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11">
                            Account
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="https://themewagon.com/"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/themewagon.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Themewagon
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="https://mailbluster.com/"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/mailbluster.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Mailbluster
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/google.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Google
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/spotify.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Spotify
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/steam.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Steam
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/github-light.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Github
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/discord.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Discord
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/xbox.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            xbox
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/trello.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Kanban
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/hp.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Hp
                          </p>
                        </a>
                      </div>
                      <div className="col-12">
                        <hr className="my-3 mx-n3 bg-200" />
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/linkedin.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Linkedin
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/twitter.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Twitter
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/facebook.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Facebook
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/instagram.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Instagram
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/pinterest.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Pinterest
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/slack.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Slack
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="#!"
                          target="_blank"
                        >
                          <img
                            className="rounded"
                            src="./assets/img/nav-icons/deviantart.png"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                            Deviantart
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                          href="app/events/event-detail.html"
                          target="_blank"
                        >
                          <div className="avatar avatar-2xl">
                            <div className="avatar-name rounded-circle bg-primary-subtle text-primary">
                              <span className="fs-7">E</span>
                            </div>
                          </div>
                          <p className="mb-0 fw-medium text-800 text-truncate fs-11">
                            Events
                          </p>
                        </a>
                      </div>
                      <div className="col-12">
                        <a
                          className="btn btn-outline-primary btn-sm mt-4"
                          href="#!"
                        >
                          Show more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link pe-0 ps-2"
              id="navbarDropdownUser"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="avatar avatar-xl">
                <img
                  className="rounded-circle"
                  src="./assets/img/team/3-thumb.png"
                  alt=""
                />
              </div>
            </a>
            <div
              className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0"
              aria-labelledby="navbarDropdownUser"
            >
              <div className="bg-white dark__bg-1000 rounded-2 py-2">
                <a className="dropdown-item fw-bold text-warning" href="#!">
                  <span className="fas fa-crown me-1" />
                  <span>Go Pro</span>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#!">
                  Set status
                </a>
                <a className="dropdown-item" href="pages/user/profile.html">
                  Profile &amp; account
                </a>
                <a className="dropdown-item" href="#!">
                  Feedback
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="pages/user/settings.html">
                  Settings
                </a>
                <a
                  className="dropdown-item"
                  href="pages/authentication/card/logout.html"
                >
                  Logout
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar