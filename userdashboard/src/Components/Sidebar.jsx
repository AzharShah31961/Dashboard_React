import React from 'react'
import { Link } from 'react-router-dom';

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
          <Link className="navbar-brand" to="index-2.html">
            <div className="d-flex align-items-center py-3">
              <img
                className="me-2"
                src="./assets/img/icons/spot-illustrations/falcon.png"
                alt=""
                width={40}
              />
              <span className="font-sans-serif text-primary">falcon</span>
            </div>
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
          <div className="navbar-vertical-content scrollbar">
            <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
              <li className="nav-item">
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#dashboard"
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
                </Link>
                <ul className="nav collapse show" id="dashboard">
                  <li className="nav-item">
                    <Link className="nav-link active" to="index-2.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Default</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="dashboard/analytics.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Analytics</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="dashboard/crm.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">CRM</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="dashboard/e-commerce.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">E commerce</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="dashboard/lms.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">LMS</span>
                        <span className="badge rounded-pill ms-2 badge-subtle-success">
                          New
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="dashboard/project-management.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Management</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="dashboard/saas.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">SaaS</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="dashboard/support-desk.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Support desk</span>
                        <span className="badge rounded-pill ms-2 badge-subtle-success">
                          New
                        </span>
                      </div>
                    </Link>
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
                <Link className="nav-link" to="app/calendar.html" role="button">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-calendar-alt" />
                    </span>
                    <span className="nav-link-text ps-1">Calendar</span>
                  </div>
                </Link>
                {/* parent pages*/}
                <Link className="nav-link" to="app/chat.html" role="button">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-comments" />
                    </span>
                    <span className="nav-link-text ps-1">Chat</span>
                  </div>
                </Link>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#email"
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
                </Link>
                <ul className="nav collapse" id="email">
                  <li className="nav-item">
                    <Link className="nav-link" to="app/email/inbox.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Inbox</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="app/email/email-detail.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Email detail</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="app/email/compose.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Compose</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#events"
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
                </Link>
                <ul className="nav collapse" id="events">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="app/events/create-an-event.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Create an event
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="app/events/event-detail.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Event detail</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="app/events/event-list.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Event list</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#e-commerce"
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
                </Link>
                <ul className="nav collapse" id="e-commerce">
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#product"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="e-commerce"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Product</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="product">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="app/e-commerce/product/product-list.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Product list
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="app/e-commerce/product/product-grid.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Product grid
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="app/e-commerce/product/product-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Product details
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="app/e-commerce/product/add-product.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Add product
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#orders"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="e-commerce"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Orders</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="orders">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="app/e-commerce/orders/order-list.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Order list
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="app/e-commerce/orders/order-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Order details
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="app/e-commerce/customers.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Customers</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="app/e-commerce/customer-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Customer details
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="app/e-commerce/shopping-cart.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Shopping cart
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="app/e-commerce/checkout.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Checkout</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="app/e-commerce/billing.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Billing</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="app/e-commerce/invoice.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Invoice</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#e-learning"
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
                </Link>
                <ul className="nav collapse" id="e-learning">
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#course"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="e-learning"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Course</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="course">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="app/e-learning/course/course-list.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Course list
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="app/e-learning/course/course-grid.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Course grid
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="app/e-learning/course/course-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Course details
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="app/e-learning/course/create-a-course.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Create a course
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="app/e-learning/student-overview.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Student overview
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="app/e-learning/trainer-profile.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Trainer profile
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link className="nav-link" to="app/kanban.html" role="button">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fab fa-trello" />
                    </span>
                    <span className="nav-link-text ps-1">Kanban</span>
                  </div>
                </Link>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#social"
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
                </Link>
                <ul className="nav collapse" id="social">
                  <li className="nav-item">
                    <Link className="nav-link" to="app/social/feed.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Feed</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="app/social/activity-log.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Activity log</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="app/social/notifications.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Notifications
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="app/social/followers.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Followers</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#support-desk"
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
                </Link>
                <ul className="nav collapse" id="support-desk">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="app/support-desk/table-view.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Table view</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="app/support-desk/card-view.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Card view</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="app/support-desk/contacts.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Contacts</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="app/support-desk/contact-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Contact details
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="app/support-desk/tickets-preview.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Tickets preview
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="app/support-desk/quick-links.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Quick links</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="app/support-desk/reports.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Reports</span>
                      </div>
                    </Link>
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
                <Link className="nav-link" to="pages/starter.html" role="button">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-flag" />
                    </span>
                    <span className="nav-link-text ps-1">Starter</span>
                  </div>
                </Link>
                {/* parent pages*/}
                <Link className="nav-link" to="pages/landing.html" role="button">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-globe" />
                    </span>
                    <span className="nav-link-text ps-1">Landing</span>
                  </div>
                </Link>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#authentication"
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
                </Link>
                <ul className="nav collapse" id="authentication">
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#simple"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="authentication"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Simple</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="simple">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/simple/login.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Login</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/simple/logout.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Logout</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/simple/register.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Register</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/simple/forgot-password.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Forgot password
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/simple/confirm-mail.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Confirm mail
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/simple/reset-password.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Reset password
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/simple/lock-screen.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Lock screen
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#card"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="authentication"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Card</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="card">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/card/login.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Login</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/card/logout.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Logout</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/card/register.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Register</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/card/forgot-password.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Forgot password
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/card/confirm-mail.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Confirm mail
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/card/reset-password.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Reset password
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/card/lock-screen.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Lock screen
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#split"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="authentication"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Split</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="split">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/split/login.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Login</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/split/logout.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Logout</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/split/register.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Register</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/split/forgot-password.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Forgot password
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/split/confirm-mail.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Confirm mail
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/split/reset-password.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Reset password
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="pages/authentication/split/lock-screen.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Lock screen
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="pages/authentication/wizard.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Wizard</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="#authentication-modal"
                      data-bs-toggle="modal"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Modal</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#user"
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
                </Link>
                <ul className="nav collapse" id="user">
                  <li className="nav-item">
                    <Link className="nav-link" to="pages/user/profile.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Profile</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="pages/user/settings.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Settings</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#pricing"
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
                </Link>
                <ul className="nav collapse" id="pricing">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="pages/pricing/pricing-default.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Pricing default
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="pages/pricing/pricing-alt.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Pricing alt</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#faq"
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
                </Link>
                <ul className="nav collapse" id="faq">
                  <li className="nav-item">
                    <Link className="nav-link" to="pages/faq/faq-basic.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Faq basic</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="pages/faq/faq-alt.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Faq alt</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="pages/faq/faq-accordion.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Faq accordion
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#errors"
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
                </Link>
                <ul className="nav collapse" id="errors">
                  <li className="nav-item">
                    <Link className="nav-link" to="pages/errors/404.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">404</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="pages/errors/500.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">500</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#miscellaneous"
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
                </Link>
                <ul className="nav collapse" id="miscellaneous">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="pages/miscellaneous/associations.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Associations</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="pages/miscellaneous/invite-people.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Invite people
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="pages/miscellaneous/privacy-policy.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Privacy policy
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#Layouts"
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
                </Link>
                <ul className="nav collapse" id="Layouts">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="demo/navbar-vertical.html"
                      target="_blank"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Navbar vertical
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="demo/navbar-top.html"
                      target="_blank"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Top nav</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="demo/navbar-double-top.html"
                      target="_blank"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Double top</span>
                        <span className="badge rounded-pill ms-2 badge-subtle-success">
                          New
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="demo/combo-nav.html"
                      target="_blank"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Combo nav</span>
                      </div>
                    </Link>
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
                <Link
                  className="nav-link dropdown-indicator"
                  to="#forms"
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
                </Link>
                <ul className="nav collapse" id="forms">
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#basic"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="forms"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Basic</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="basic">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/forms/basic/form-control.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Form control
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/forms/basic/input-group.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Input group
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/forms/basic/select.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Select</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/forms/basic/checks.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Checks</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/forms/basic/range.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Range</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/forms/basic/layout.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Layout</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#advance"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="forms"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Advance</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="advance">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/forms/advance/advance-select.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Advance select
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/forms/advance/date-picker.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Date picker
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/forms/advance/editor.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Editor</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/forms/advance/emoji-button.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Emoji button
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/forms/advance/file-uploader.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              File uploader
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/forms/advance/input-mask.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Input mask
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/forms/advance/range-slider.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Range slider
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/forms/advance/rating.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Rating</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/forms/floating-labels.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Floating labels
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="modules/forms/wizard.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Wizard</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/forms/validation.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Validation</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#tables"
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
                </Link>
                <ul className="nav collapse" id="tables">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/tables/basic-tables.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Basic tables</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/tables/advance-tables.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Advance tables
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/tables/bulk-select.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Bulk select</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#charts"
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
                </Link>
                <ul className="nav collapse" id="charts">
                  <li className="nav-item">
                    <Link className="nav-link" to="modules/charts/chartjs.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Chartjs</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="modules/charts/d3js.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">D3js</span>
                        <span className="badge rounded-pill ms-2 badge-subtle-success">
                          New
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#eCharts"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="charts"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">ECharts</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="eCharts">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/charts/echarts/line-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Line charts
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/charts/echarts/bar-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Bar charts
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/charts/echarts/candlestick-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Candlestick charts
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/charts/echarts/geo-map.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Geo map</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/charts/echarts/scatter-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Scatter charts
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/charts/echarts/pie-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Pie charts
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/charts/echarts/gauge-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Gauge charts
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/charts/echarts/radar-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Radar charts
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/charts/echarts/heatmap-charts.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Heatmap charts
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/charts/echarts/how-to-use.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              How to use
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#icons"
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
                </Link>
                <ul className="nav collapse" id="icons">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/icons/font-awesome.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Font awesome</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/icons/bootstrap-icons.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Bootstrap icons
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="modules/icons/feather.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Feather</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/icons/material-icons.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Material icons
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#maps"
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
                </Link>
                <ul className="nav collapse" id="maps">
                  <li className="nav-item">
                    <Link className="nav-link" to="modules/maps/google-map.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Google map</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/maps/leaflet-map.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Leaflet map</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#components"
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
                </Link>
                <ul className="nav collapse" id="components">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/accordion.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Accordion</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/alerts.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Alerts</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/anchor.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Anchor</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/animated-icons.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Animated icons
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/background.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Background</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/badges.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Badges</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/bottom-bar.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Bottom bar</span>
                        <span className="badge rounded-pill ms-2 badge-subtle-success">
                          New
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/breadcrumbs.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Breadcrumbs</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/buttons.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Buttons</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/calendar.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Calendar</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/cards.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Cards</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#carousel"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="components"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Carousel</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="carousel">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/carousel/bootstrap.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Bootstrap
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/carousel/swiper.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Swiper</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/collapse.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Collapse</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/cookie-notice.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Cookie notice
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/countup.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Countup</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/dropdowns.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Dropdowns</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/jquery-components.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Jquery</span>
                        <span className="badge rounded-pill ms-2 badge-subtle-success">
                          New
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/list-group.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">List group</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/modals.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Modals</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#navs-_and_-Tabs"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="components"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Navs &amp; Tabs
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="navs-_and_-Tabs">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/navs-and-tabs/navs.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Navs</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/navs-and-tabs/navbar.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Navbar</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/navs-and-tabs/vertical-navbar.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Navbar vertical
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/navs-and-tabs/top-navbar.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Top nav</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/navs-and-tabs/double-top-navbar.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Double top
                            </span>
                            <span className="badge rounded-pill ms-2 badge-subtle-success">
                              New
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/navs-and-tabs/combo-navbar.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">
                              Combo nav
                            </span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/navs-and-tabs/tabs.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Tabs</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/offcanvas.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Offcanvas</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#pictures"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="components"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Pictures</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="pictures">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/pictures/avatar.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Avatar</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/pictures/images.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Images</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/pictures/figures.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Figures</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/pictures/hoverbox.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Hoverbox</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/pictures/lightbox.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Lightbox</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/progress-bar.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Progress bar</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/placeholder.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Placeholder</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/pagination.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Pagination</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/popovers.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Popovers</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/scrollspy.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Scrollspy</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/search.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Search</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/sortable.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Sortable</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/spinners.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Spinners</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/timeline.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Timeline</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/toasts.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Toasts</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/tooltips.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Tooltips</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/treeview.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Treeview</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/components/typed-text.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Typed text</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#videos"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="components"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Videos</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="videos">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/videos/embed.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Embed</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="modules/components/videos/plyr.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Plyr</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#utilities"
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
                </Link>
                <ul className="nav collapse" id="utilities">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/background.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Background</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/borders.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Borders</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/clearfix.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Clearfix</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/colors.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Colors</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/colored-links.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Colored links
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/display.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Display</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="modules/utilities/flex.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Flex</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="modules/utilities/float.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Float</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/focus-ring.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Focus ring</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="modules/utilities/grid.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Grid</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/icon-link.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Icon link</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/overlayscrollbar.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Overlay scrollbar
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/position.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Position</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="modules/utilities/ratio.html">
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Ratio</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/spacing.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Spacing</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/sizing.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Sizing</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/stretched-link.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Stretched link
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/text-truncation.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Text truncation
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/typography.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Typography</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/vertical-align.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Vertical align
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/vertical-rule.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Vertical rule
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/visibility.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Visibility</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="modules/utilities/visually-hidden.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Visually hidden
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link className="nav-link" to="widgets.html" role="button">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-poll" />
                    </span>
                    <span className="nav-link-text ps-1">Widgets</span>
                  </div>
                </Link>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#multi-level"
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
                </Link>
                <ul className="nav collapse" id="multi-level">
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#level-two"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="multi-level"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Level two</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="level-two">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Item 1</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#!.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Item 2</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#level-three"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="multi-level"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Level three</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="level-three">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Item 3</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link dropdown-indicator"
                          to="#item-4"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="level-three"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Item 4</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                        <ul className="nav collapse" id="item-4">
                          <li className="nav-item">
                            <Link className="nav-link" to="#!.html">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text ps-1">
                                  Item 5
                                </span>
                              </div>
                            </Link>
                            {/* more inner pages*/}
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="#!.html">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text ps-1">
                                  Item 6
                                </span>
                              </div>
                            </Link>
                            {/* more inner pages*/}
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-indicator"
                      to="#level-four"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="multi-level"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Level four</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                    <ul className="nav collapse" id="level-four">
                      <li className="nav-item">
                        <Link className="nav-link" to="#!.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Item 6</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link dropdown-indicator"
                          to="#item-7"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="level-four"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text ps-1">Item 7</span>
                          </div>
                        </Link>
                        {/* more inner pages*/}
                        <ul className="nav collapse" id="item-7">
                          <li className="nav-item">
                            <Link className="nav-link" to="#!.html">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text ps-1">
                                  Item 8
                                </span>
                              </div>
                            </Link>
                            {/* more inner pages*/}
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link dropdown-indicator"
                              to="#item-9"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                              aria-controls="item-7"
                            >
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text ps-1">
                                  Item 9
                                </span>
                              </div>
                            </Link>
                            {/* more inner pages*/}
                            <ul className="nav collapse" id="item-9">
                              <li className="nav-item">
                                <Link className="nav-link" to="#!.html">
                                  <div className="d-flex align-items-center">
                                    <span className="nav-link-text ps-1">
                                      Item 10
                                    </span>
                                  </div>
                                </Link>
                                {/* more inner pages*/}
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="#!.html">
                                  <div className="d-flex align-items-center">
                                    <span className="nav-link-text ps-1">
                                      Item 11
                                    </span>
                                  </div>
                                </Link>
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
                <Link
                  className="nav-link"
                  to="documentation/getting-started.html"
                  role="button"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-rocket" />
                    </span>
                    <span className="nav-link-text ps-1">Getting started</span>
                  </div>
                </Link>
                {/* parent pages*/}
                <Link
                  className="nav-link dropdown-indicator"
                  to="#customization"
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
                </Link>
                <ul className="nav collapse" id="customization">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="documentation/customization/configuration.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Configuration
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="documentation/customization/styling.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Styling</span>
                        <span className="badge rounded-pill ms-2 badge-subtle-success">
                          Updated
                        </span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="documentation/customization/dark-mode.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Dark mode</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="documentation/customization/plugin.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Plugin</span>
                      </div>
                    </Link>
                    {/* more inner pages*/}
                  </li>
                </ul>
                {/* parent pages*/}
                <Link
                  className="nav-link"
                  to="documentation/faq.html"
                  role="button"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-question-circle" />
                    </span>
                    <span className="nav-link-text ps-1">Faq</span>
                  </div>
                </Link>
                {/* parent pages*/}
                <Link
                  className="nav-link"
                  to="documentation/gulp.html"
                  role="button"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fab fa-gulp" />
                    </span>
                    <span className="nav-link-text ps-1">Gulp</span>
                  </div>
                </Link>
                {/* parent pages*/}
                <Link
                  className="nav-link"
                  to="documentation/design-file.html"
                  role="button"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-palette" />
                    </span>
                    <span className="nav-link-text ps-1">Design file</span>
                  </div>
                </Link>
                {/* parent pages*/}
                <Link className="nav-link" to="changelog.html" role="button">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fas fa-code-branch" />
                    </span>
                    <span className="nav-link-text ps-1">Changelog</span>
                  </div>
                </Link>
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
                      Get your copy of <Link to="#!">Falcon</Link>
                    </p>
                    <div className="d-grid">
                      <Link
                        className="btn btn-sm btn-primary"
                        to="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template/"
                        target="_blank"
                      >
                        Purchase
                      </Link>
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