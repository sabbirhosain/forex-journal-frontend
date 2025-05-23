import React from 'react'

const ErrorMessage = ({ message }) => {
  return (
    <div className="toast-container position-static">
      <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <img src="..." className="rounded me-2" alt="..." />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-body-secondary">just now</small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
        </div>
        <div className="toast-body">
          {message}
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage