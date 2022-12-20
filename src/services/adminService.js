import {axios, localhost} from '../utils/axios/axios'
// food
export const createfood = async (data) => axios.post(`${localhost}/createfood`, data)
export const editfood = (id, data) => axios.put(`${localhost}/editfood/${id}`, data)
export const deletefood = (id) => axios.delete(`${localhost}/deletefood/${id}`)
export const createchildfood = async (id, data) => axios.post(`${localhost}/createchildfood/${id}`, data)
export const editchildfood = (id, queryId, data) => axios.put(`${localhost}/editchildfood/${id}?id=${queryId}`, data)
export const deletechildfood = (id, queryId) => axios.delete(`${localhost}/deletechildfood/${id}?id=${queryId}`)
// Notification
export const createNotification = async (data) => axios.post(`${localhost}/createnotification`, data)
export const unAvailable = async (data,id,_id) => axios.post(`${localhost}/unavailable/${id}?_id=${_id}`,data)
export const listAvailable = async () => axios.get(`${localhost}/listavailable`)
// alladdress
export const getAllAddress = async () => axios.get(`${localhost}/getAllAddress`)
export const deleteAddress = async (id) => axios.delete(`${localhost}/deleteaddress/${id}`)
export const deleteAllAddress = async () => axios.delete(`${localhost}/deleteAllAddress`)
// admin
export const useradmin = (data) => axios.post(`${localhost}/useradmin/`, data)
export const deleteAdmin = (data) => axios.post(`${localhost}/deleteadmin/`, data)
export const getAlluserAdmin = () => axios.get(`${localhost}/alluserAdmin/`)
export const changeAdmin = (data) => axios.post(`${localhost}/changeAdmin`,data)

