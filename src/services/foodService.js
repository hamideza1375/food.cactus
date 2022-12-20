import { axios, localhost} from '../utils/axios/axios'


// comment
export const createcommentchildfood = (id, queryId, data) => axios.post(`${localhost}/createcommentchildfood/${id}?id=${queryId}`, data)
export const getcommentchildfood = async (id, queryId) => axios.get(`${localhost}/getcommentchildfood/${id}?id=${queryId}`)
export const getcommentsinglefood = async (id, queryId,singleId) => axios.get(`${localhost}/getcommentsinglefood/${id}?id=${queryId}&&single_id=${singleId}`)
export const editcomment = async (courseId, queryId, commentid, data) => axios.put(`${localhost}/editcomment/${courseId}?id=${queryId}&&commentid=${commentid}`, data)
export const deletecomment = (courseId, queryId, commentid, userId) => axios.delete(`${localhost}/deletecomment/${courseId}?id=${queryId}&&commentid=${commentid}&&userId=${userId}`,)
// Food
export const getfoods = async () =>  axios.get(`${localhost}/getfoods`)
export const getSingleTitleFoods = async (id) => await axios.get(`${localhost}/getsingletitlefoods/${id}`)
export const getallchildfood = async (id) => axios.get(`${localhost}/getallchildfood/${id}`)
export const getsinglechildfood = async (id, queryId) => axios.get(`${localhost}/getsinglechildfood/${id}?id=${queryId}`)
// Payment  
export const payment = (allprice, data) => axios.post(`${localhost}/confirmpayment?allprice=${allprice}`, data)
export const verifypayment = () => axios.get(`${localhost}/verifypayment`)
// GeoCode
export const reverse = async (data) => axios.post(`${localhost}/reverse`, data)
export const geocode = async (data) => axios.post(`${localhost}/geocode`, data)
// Notification
export const notification = async () => axios.get(`${localhost}/notification`)
export const imagechat = async (data) => axios.post(`${localhost}/imagechat`, data)
// imageProfile
export const sendProfile = async (data) => axios.post(`${localhost}/sendprofile`,data)
export const getProfile = async (data) => axios.get(`${localhost}/getprofile`, data)