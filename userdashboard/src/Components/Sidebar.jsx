import React from 'react'

const Sidebar = () => {
  return (
    <>
      <nav className="navbar navbar-light navbar-vertical navbar-expand-xl">
        <div className="d-flex align-items-center">
          <div className="toggle-icon-wrapper">
            <button
              className="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Toggle Navigation"
            >
              <span className="navbar-toggle-icon">
                <span className="toggle-line" />
              </span>
            </button>
          </div>
          <a className="navbar-brand" href="index-2.html">
            <div className="d-flex align-items-center py-3">
              <img
                className="me-2"
                src="./assets/img/icons/spot-illustrations/falcon.png"
                alt=""
                width={40}
              />
              <span className="font-sans-serif text-primary">falcon</span>
            </div>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
          <div className="navbar-vertical-content scrollbar">
            <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
              <li className="nav-item">
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#dashboard"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dashboard"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-chart-pie" />
                    </span>
                    <span className="nav-link-text ps-1">Dashboard</span>
                  </div>
                </a>
                <ul className="nav collapse show" id="dashboard">
                  <li className="nav-item">
                    <a className="nav-link active" href="index-2.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Default</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="dashboard/analytics.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Analytics</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="dashboard/crm.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">CRM</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="dashboard/e-commerce.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">E commerce</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="dashboard/lms.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">LMS</span>
                        <span className="badge rounded-pill ms-2 badge-subtle-success">
                          New
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="dashboard/project-management.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Management</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="dashboard/saas.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">SaaS</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="dashboard/support-desk.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Support desk</span>
                        <span className="badge rounded-pill ms-2 badge-subtle-success">
                          New
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {/* label*/}
                <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                  <div className="col-auto navbar-vertical-label">App</div>
                  <div className="col ps-0">
                    <hr className="mb-0 navbar-vertical-divider" />
                  </div>
                </div>
                {/* parent pages*/}
                <a className="nav-link" href="app/calendar.html" role="button">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-calendar-alt" />
                    </span>
                    <span className="nav-link-text ps-1">Calendar</span>
                  </div>
                </a>
                {/* parent pages*/}
                <a className="nav-link" href="app/chat.html" role="button">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-comments" />
                    </span>
                    <span className="nav-link-text ps-1">Chat</span>
                  </div>
                </a>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#email"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="email"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-envelope-open" />
                    </span>
                    <span className="nav-link-text ps-1">Email</span>
                  </div>
                </a>
                <ul className="nav collapse" id="email">
                  <li className="nav-item">
                    <a className="nav-link" href="app/email/inbox.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Inbox</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app/email/email-detail.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Email detail</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app/email/compose.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Compose</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#events"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="events"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-calendar-day" />
                    </span>
                    <span className="nav-link-text ps-1">Events</span>
                  </div>
                </a>
                <ul className="nav collapse" id="events">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/events/create-an-event.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Create an event
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app/events/event-detail.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Event detail</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app/events/event-list.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Event list</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#e-commerce"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="e-commerce"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-shopping-cart" />
                    </span>
                    <span className="nav-link-text ps-1">E commerce</span>
                  </div>
                </a>
                <ul className="nav collapse" id="e-commerce">
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#product"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="e-commerce"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Product</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="product">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="app/e-commerce/product/product-list.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Product list
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="app/e-commerce/product/product-grid.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Product grid
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="app/e-commerce/product/product-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Product details
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="app/e-commerce/product/add-product.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Add product
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#orders"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="e-commerce"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Orders</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="orders">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="app/e-commerce/orders/order-list.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Order list
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="app/e-commerce/orders/order-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Order details
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/e-commerce/customers.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Customers</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/e-commerce/customer-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Customer details
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/e-commerce/shopping-cart.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Shopping cart
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app/e-commerce/checkout.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Checkout</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app/e-commerce/billing.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Billing</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app/e-commerce/invoice.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Invoice</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#e-learning"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="e-learning"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-graduation-cap" />
                    </span>
                    <span className="nav-link-text ps-1">E learning</span>
                    <span className="badge rounded-pill ms-2 badge-subtle-success">
                      New
                    </span>
                  </div>
                </a>
                <ul className="nav collapse" id="e-learning">
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#course"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="e-learning"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Course</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="course">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="app/e-learning/course/course-list.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Course list
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="app/e-learning/course/course-grid.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Course grid
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="app/e-learning/course/course-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Course details
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="app/e-learning/course/create-a-course.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Create a course
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/e-learning/student-overview.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Student overview
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/e-learning/trainer-profile.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Trainer profile
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a className="nav-link" href="app/kanban.html" role="button">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fab fa-trello" />
                    </span>
                    <span className="nav-link-text ps-1">Kanban</span>
                  </div>
                </a>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#social"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="social"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-share-alt" />
                    </span>
                    <span className="nav-link-text ps-1">Social</span>
                  </div>
                </a>
                <ul className="nav collapse" id="social">
                  <li className="nav-item">
                    <a className="nav-link" href="app/social/feed.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Feed</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app/social/activity-log.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Activity log</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/social/notifications.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Notifications
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app/social/followers.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Followers</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#support-desk"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="support-desk"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-ticket-alt" />
                    </span>
                    <span className="nav-link-text ps-1">Support desk</span>
                  </div>
                </a>
                <ul className="nav collapse" id="support-desk">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/support-desk/table-view.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Table view</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/support-desk/card-view.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Card view</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/support-desk/contacts.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Contacts</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/support-desk/contact-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Contact details
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/support-desk/tickets-preview.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Tickets preview
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/support-desk/quick-links.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Quick links</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/support-desk/reports.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Reports</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {/* label*/}
                <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                  <div className="col-auto navbar-vertical-label">Pages</div>
                  <div className="col ps-0">
                    <hr className="mb-0 navbar-vertical-divider" />
                  </div>
                </div>
                {/* parent pages*/}
                <a className="nav-link" href="pages/starter.html" role="button">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-flag" />
                    </span>
                    <span className="nav-link-text ps-1">Starter</span>
                  </div>
                </a>
                {/* parent pages*/}
                <a className="nav-link" href="pages/landing.html" role="button">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-globe" />
                    </span>
                    <span className="nav-link-text ps-1">Landing</span>
                  </div>
                </a>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#authentication"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="authentication"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-lock" />
                    </span>
                    <span className="nav-link-text ps-1">Authentication</span>
                  </div>
                </a>
                <ul className="nav collapse" id="authentication">
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#simple"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="authentication"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Simple</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="simple">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/simple/login.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Login</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/simple/logout.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Logout</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/simple/register.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Register</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/simple/forgot-password.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Forgot password
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/simple/confirm-mail.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Confirm mail
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/simple/reset-password.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Reset password
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/simple/lock-screen.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Lock screen
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#card"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="authentication"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Card</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="card">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/card/login.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Login</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/card/logout.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Logout</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/card/register.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Register</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/card/forgot-password.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Forgot password
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/card/confirm-mail.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Confirm mail
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/card/reset-password.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Reset password
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/card/lock-screen.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Lock screen
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#split"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="authentication"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Split</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="split">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/split/login.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Login</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/split/logout.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Logout</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/split/register.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Register</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/split/forgot-password.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Forgot password
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/split/confirm-mail.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Confirm mail
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/split/reset-password.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Reset password
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="pages/authentication/split/lock-screen.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Lock screen
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/authentication/wizard.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Wizard</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#authentication-modal"
                      data-bs-toggle="modal"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Modal</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#user"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="user"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-user" />
                    </span>
                    <span className="nav-link-text ps-1">User</span>
                  </div>
                </a>
                <ul className="nav collapse" id="user">
                  <li className="nav-item">
                    <a className="nav-link" href="pages/user/profile.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Profile</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/user/settings.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Settings</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#pricing"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="pricing"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-tags" />
                    </span>
                    <span className="nav-link-text ps-1">Pricing</span>
                  </div>
                </a>
                <ul className="nav collapse" id="pricing">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/pricing/pricing-default.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Pricing default
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/pricing/pricing-alt.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Pricing alt</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#faq"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="faq"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-question-circle" />
                    </span>
                    <span className="nav-link-text ps-1">Faq</span>
                  </div>
                </a>
                <ul className="nav collapse" id="faq">
                  <li className="nav-item">
                    <a className="nav-link" href="pages/faq/faq-basic.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Faq basic</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/faq/faq-alt.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Faq alt</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/faq/faq-accordion.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Faq accordion
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#errors"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="errors"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-exclamation-triangle" />
                    </span>
                    <span className="nav-link-text ps-1">Errors</span>
                  </div>
                </a>
                <ul className="nav collapse" id="errors">
                  <li className="nav-item">
                    <a className="nav-link" href="pages/errors/404.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">404</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pages/errors/500.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">500</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#miscellaneous"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="miscellaneous"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-thumbtack" />
                    </span>
                    <span className="nav-link-text ps-1">Miscellaneous</span>
                  </div>
                </a>
                <ul className="nav collapse" id="miscellaneous">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/miscellaneous/associations.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Associations</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/miscellaneous/invite-people.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Invite people
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages/miscellaneous/privacy-policy.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Privacy policy
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#Layouts"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="Layouts"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="far fa-window-restore" />
                    </span>
                    <span className="nav-link-text ps-1">Layouts</span>
                  </div>
                </a>
                <ul className="nav collapse" id="Layouts">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="demo/navbar-vertical.html"
                      target="_blank"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Navbar vertical
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="demo/navbar-top.html"
                      target="_blank"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Top nav</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="demo/navbar-double-top.html"
                      target="_blank"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Double top</span>
                        <span className="badge rounded-pill ms-2 badge-subtle-success">
                          New
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="demo/combo-nav.html"
                      target="_blank"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Combo nav</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {/* label*/}
                <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                  <div className="col-auto navbar-vertical-label">Modules</div>
                  <div className="col ps-0">
                    <hr className="mb-0 navbar-vertical-divider" />
                  </div>
                </div>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#forms"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="forms"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-file-alt" />
                    </span>
                    <span className="nav-link-text ps-1">Forms</span>
                  </div>
                </a>
                <ul className="nav collapse" id="forms">
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#basic"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="forms"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Basic</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="basic">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/forms/basic/form-control.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Form control
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/forms/basic/input-group.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Input group
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/forms/basic/select.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Select</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/forms/basic/checks.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Checks</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/forms/basic/range.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Range</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/forms/basic/layout.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Layout</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#advance"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="forms"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Advance</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="advance">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/forms/advance/advance-select.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Advance select
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/forms/advance/date-picker.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Date picker
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/forms/advance/editor.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Editor</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/forms/advance/emoji-button.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Emoji button
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/forms/advance/file-uploader.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              File uploader
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/forms/advance/input-mask.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Input mask
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/forms/advance/range-slider.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Range slider
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/forms/advance/rating.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Rating</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/forms/floating-labels.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Floating labels
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="modules/forms/wizard.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Wizard</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/forms/validation.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Validation</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#tables"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="tables"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-table" />
                    </span>
                    <span className="nav-link-text ps-1">Tables</span>
                  </div>
                </a>
                <ul className="nav collapse" id="tables">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/tables/basic-tables.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Basic tables</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/tables/advance-tables.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Advance tables
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/tables/bulk-select.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Bulk select</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#charts"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="charts"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-chart-line" />
                    </span>
                    <span className="nav-link-text ps-1">Charts</span>
                  </div>
                </a>
                <ul className="nav collapse" id="charts">
                  <li className="nav-item">
                    <a className="nav-link" href="modules/charts/chartjs.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Chartjs</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="modules/charts/d3js.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">D3js</span>
                        <span className="badge rounded-pill ms-2 badge-subtle-success">
                          New
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#eCharts"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="charts"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">ECharts</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="eCharts">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/charts/echarts/line-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Line charts
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/charts/echarts/bar-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Bar charts
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/charts/echarts/candlestick-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Candlestick charts
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/charts/echarts/geo-map.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Geo map</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/charts/echarts/scatter-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Scatter charts
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/charts/echarts/pie-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Pie charts
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/charts/echarts/gauge-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Gauge charts
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/charts/echarts/radar-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Radar charts
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/charts/echarts/heatmap-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Heatmap charts
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/charts/echarts/how-to-use.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              How to use
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#icons"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="icons"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-shapes" />
                    </span>
                    <span className="nav-link-text ps-1">Icons</span>
                  </div>
                </a>
                <ul className="nav collapse" id="icons">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/icons/font-awesome.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Font awesome</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/icons/bootstrap-icons.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Bootstrap icons
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="modules/icons/feather.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Feather</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/icons/material-icons.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Material icons
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#maps"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="maps"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-map" />
                    </span>
                    <span className="nav-link-text ps-1">Maps</span>
                  </div>
                </a>
                <ul className="nav collapse" id="maps">
                  <li className="nav-item">
                    <a className="nav-link" href="modules/maps/google-map.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Google map</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/maps/leaflet-map.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Leaflet map</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#components"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="components"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-puzzle-piece" />
                    </span>
                    <span className="nav-link-text ps-1">Components</span>
                  </div>
                </a>
                <ul className="nav collapse" id="components">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/accordion.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Accordion</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/alerts.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Alerts</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/anchor.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Anchor</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/animated-icons.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Animated icons
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/background.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Background</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/badges.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Badges</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/bottom-bar.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Bottom bar</span>
                        <span className="badge rounded-pill ms-2 badge-subtle-success">
                          New
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/breadcrumbs.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Breadcrumbs</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/buttons.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Buttons</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/calendar.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Calendar</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/cards.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Cards</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#carousel"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="components"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Carousel</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="carousel">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/carousel/bootstrap.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Bootstrap
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/carousel/swiper.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Swiper</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/collapse.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Collapse</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/cookie-notice.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Cookie notice
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/countup.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Countup</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/dropdowns.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Dropdowns</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/jquery-components.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Jquery</span>
                        <span className="badge rounded-pill ms-2 badge-subtle-success">
                          New
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/list-group.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">List group</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/modals.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Modals</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#navs-_and_-Tabs"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="components"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Navs &amp; Tabs
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="navs-_and_-Tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/navs-and-tabs/navs.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Navs</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/navs-and-tabs/navbar.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Navbar</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/navs-and-tabs/vertical-navbar.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Navbar vertical
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/navs-and-tabs/top-navbar.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Top nav</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/navs-and-tabs/double-top-navbar.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Double top
                            </span>
                            <span className="badge rounded-pill ms-2 badge-subtle-success">
                              New
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/navs-and-tabs/combo-navbar.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Combo nav
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/navs-and-tabs/tabs.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Tabs</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/offcanvas.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Offcanvas</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#pictures"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="components"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Pictures</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="pictures">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/pictures/avatar.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Avatar</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/pictures/images.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Images</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/pictures/figures.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Figures</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/pictures/hoverbox.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Hoverbox</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/pictures/lightbox.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Lightbox</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/progress-bar.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Progress bar</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/placeholder.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Placeholder</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/pagination.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Pagination</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/popovers.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Popovers</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/scrollspy.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Scrollspy</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/search.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Search</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/sortable.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Sortable</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/spinners.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Spinners</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/timeline.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Timeline</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/toasts.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Toasts</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/tooltips.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Tooltips</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/treeview.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Treeview</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/components/typed-text.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Typed text</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#videos"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="components"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Videos</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="videos">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/videos/embed.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Embed</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="modules/components/videos/plyr.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Plyr</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#utilities"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="utilities"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-fire" />
                    </span>
                    <span className="nav-link-text ps-1">Utilities</span>
                  </div>
                </a>
                <ul className="nav collapse" id="utilities">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/background.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Background</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/borders.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Borders</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/clearfix.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Clearfix</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/colors.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Colors</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/colored-links.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Colored links
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/display.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Display</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="modules/utilities/flex.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Flex</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="modules/utilities/float.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Float</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/focus-ring.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Focus ring</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="modules/utilities/grid.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Grid</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/icon-link.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Icon link</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/overlayscrollbar.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Overlay scrollbar
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/position.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Position</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="modules/utilities/ratio.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Ratio</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/spacing.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Spacing</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/sizing.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Sizing</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/stretched-link.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Stretched link
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/text-truncation.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Text truncation
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/typography.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Typography</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/vertical-align.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Vertical align
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/vertical-rule.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Vertical rule
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/visibility.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Visibility</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="modules/utilities/visually-hidden.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Visually hidden
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a className="nav-link" href="widgets.html" role="button">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-poll" />
                    </span>
                    <span className="nav-link-text ps-1">Widgets</span>
                  </div>
                </a>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#multi-level"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="multi-level"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-layer-group" />
                    </span>
                    <span className="nav-link-text ps-1">Multi level</span>
                  </div>
                </a>
                <ul className="nav collapse" id="multi-level">
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#level-two"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="multi-level"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Level two</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="level-two">
                      <li className="nav-item">
                        <a className="nav-link" href="#!.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Item 1</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#!.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Item 2</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#level-three"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="multi-level"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Level three</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="level-three">
                      <li className="nav-item">
                        <a className="nav-link" href="#!.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Item 3</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link dropdown-indicator"
                          href="#item-4"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="level-three"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Item 4</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                        <ul className="nav collapse" id="item-4">
                          <li className="nav-item">
                            <a className="nav-link" href="#!.html">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text ps-1">
                                  Item 5
                                </span>
                              </div>
                            </a>
                            {/* more inner pages*/}
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!.html">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text ps-1">
                                  Item 6
                                </span>
                              </div>
                            </a>
                            {/* more inner pages*/}
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-indicator"
                      href="#level-four"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="multi-level"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Level four</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="level-four">
                      <li className="nav-item">
                        <a className="nav-link" href="#!.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Item 6</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link dropdown-indicator"
                          href="#item-7"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="level-four"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Item 7</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                        <ul className="nav collapse" id="item-7">
                          <li className="nav-item">
                            <a className="nav-link" href="#!.html">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text ps-1">
                                  Item 8
                                </span>
                              </div>
                            </a>
                            {/* more inner pages*/}
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link dropdown-indicator"
                              href="#item-9"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                              aria-controls="item-7"
                            >
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text ps-1">
                                  Item 9
                                </span>
                              </div>
                            </a>
                            {/* more inner pages*/}
                            <ul className="nav collapse" id="item-9">
                              <li className="nav-item">
                                <a className="nav-link" href="#!.html">
                                  <div className="d-flex align-items-center">
                                    <span className="nav-link-text ps-1">
                                      Item 10
                                    </span>
                                  </div>
                                </a>
                                {/* more inner pages*/}
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#!.html">
                                  <div className="d-flex align-items-center">
                                    <span className="nav-link-text ps-1">
                                      Item 11
                                    </span>
                                  </div>
                                </a>
                                {/* more inner pages*/}
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {/* label*/}
                <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                  <div className="col-auto navbar-vertical-label">
                    Documentation
                  </div>
                  <div className="col ps-0">
                    <hr className="mb-0 navbar-vertical-divider" />
                  </div>
                </div>
                {/* parent pages*/}
                <a
                  className="nav-link"
                  href="documentation/getting-started.html"
                  role="button"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-rocket" />
                    </span>
                    <span className="nav-link-text ps-1">Getting started</span>
                  </div>
                </a>
                {/* parent pages*/}
                <a
                  className="nav-link dropdown-indicator"
                  href="#customization"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="customization"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-wrench" />
                    </span>
                    <span className="nav-link-text ps-1">Customization</span>
                  </div>
                </a>
                <ul className="nav collapse" id="customization">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="documentation/customization/configuration.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Configuration
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="documentation/customization/styling.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Styling</span>
                        <span className="badge rounded-pill ms-2 badge-subtle-success">
                          Updated
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="documentation/customization/dark-mode.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Dark mode</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="documentation/customization/plugin.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Plugin</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <a
                  className="nav-link"
                  href="documentation/faq.html"
                  role="button"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-question-circle" />
                    </span>
                    <span className="nav-link-text ps-1">Faq</span>
                  </div>
                </a>
                {/* parent pages*/}
                <a
                  className="nav-link"
                  href="documentation/gulp.html"
                  role="button"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fab fa-gulp" />
                    </span>
                    <span className="nav-link-text ps-1">Gulp</span>
                  </div>
                </a>
                {/* parent pages*/}
                <a
                  className="nav-link"
                  href="documentation/design-file.html"
                  role="button"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-palette" />
                    </span>
                    <span className="nav-link-text ps-1">Design file</span>
                  </div>
                </a>
                {/* parent pages*/}
                <a className="nav-link" href="changelog.html" role="button">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-code-branch" />
                    </span>
                    <span className="nav-link-text ps-1">Changelog</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="settings my-3">
              <div className="card shadow-none">
                <div className="card-body alert mb-0" role="alert">
                  <div className="btn-close-falcon-container">
                    <button
                      className="btn btn-link btn-close-falcon p-0"
                      aria-label="Close"
                      data-bs-dismiss="alert"
                    />
                  </div>
                  <div className="text-center">
                    <img
                      src="./assets/img/icons/spot-illustrations/navbar-vertical.png"
                      alt=""
                      width={80}
                    />
                    <p className="fs-11 mt-2">
                      Loving what you see? <br />
                      Get your copy of <a href="#!">Falcon</a>
                    </p>
                    <div className="d-grid">
                      <a
                        className="btn btn-sm btn-primary"
                        href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template/"
                        target="_blank"
                      >
                        Purchase
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar