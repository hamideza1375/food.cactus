import { axios, localhost} from '../utils/axios/axios'


export const registerUser = (data) => axios.post(`${localhost}/register`, data)
export const loginUser = (data) => axios.post(`${localhost}/login`, data)
export const forgetpassword = (data) => axios.post(`${localhost}/forgetpassword`, data)
export const resetpassword = (id, data) => axios.post(`${localhost}/resetpassword/${id}`, data)
export const sendcode = (data) => axios.post(`${localhost}/sendcode`, data)
export const verifycode = (data) => axios.post(`${localhost}/verifycode`, data)
export const verifycodeRegister = (data) => axios.post(`${localhost}/verifycodeRegister`,data)
export const sendProposal = (data) => axios.post(`${localhost}/sendproposal`,data)
export const getProposal = () => axios.get(`${localhost}/getproposal`)
export const getLastPayment = () => axios.get(`${localhost}/getlastPayment`)
export const deleteMultiProposal = (allId) => axios.delete(`${localhost}/deleteMultiProposal?allId=${allId}`)