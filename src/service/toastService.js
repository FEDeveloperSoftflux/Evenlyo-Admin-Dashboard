import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const defaultOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

export function showSuccess(message, options = {}) {
  return toast.success(message, { ...defaultOptions, ...options })
}

export function showError(message, options = {}) {
  return toast.error(message, { ...defaultOptions, ...options })
}

export function showInfo(message, options = {}) {
  return toast.info(message, { ...defaultOptions, ...options })
}

export function showWarn(message, options = {}) {
  return toast.warn(message, { ...defaultOptions, ...options })
}

export default {
  showSuccess,
  showError,
  showInfo,
  showWarn,
}
