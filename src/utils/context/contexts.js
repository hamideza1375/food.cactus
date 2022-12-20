import { createContext, useContext, useRef, useState } from 'react';
import { localhost } from '../../utils/axios/axios'
import jwt_decode from "jwt-decode";
import localStorage from '@react-native-async-storage/async-storage'
import Alert from "../alert"
import { create, close } from '../notification'
import moment from "moment-jalaali";
import { useCallback, useMemo } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { Keyboard, BackHandler, ToastAndroid, Platform, Dimensions, Animated, Text } from "react-native";
import { verifycodeRegister, sendcode, verifycode, loginUser, registerUser, forgetpassword, resetpassword, sendProposal, getProposal, getLastPayment, deleteMultiProposal } from "../../services/userService"
import { geocode, reverse, sendProfile, getSingleTitleFoods, editcomment, deletecomment, getallchildfood, getfoods, getcommentchildfood, createcommentchildfood, getsinglechildfood, getcommentsinglefood, payment, getProfile, notification } from '../../services/foodService'
import { getAllAddress, deleteAddress, deleteAllAddress, useradmin, deleteAdmin, getAlluserAdmin, changeAdmin, createfood, editfood, deletefood, createchildfood, editchildfood, deletechildfood, createNotification, unAvailable, listAvailable } from "../../services/adminService";
import spacePrice from '../../utils/spacePrice';
import { courseIdValidator } from '../../utils/IdValidator';
import { truncate } from '../../utils/helpers';
import PropTypes from 'prop-types';


function State() {
  const _width = Dimensions.get('window').width;
  const _height = Dimensions.get('window').height;
  const [allfood, setallfood] = useState([])
  const [food2, setfood2] = useState([])
  const [show1, setshow1] = useState(true)
  const [foods, setfoods] = useState([])
  const [token, settoken] = useState('')
  const [tokenValue, settokenValue] = useState({})
  const [allprice, setallprice] = useState('')
  const [myPhone, setmyPhone] = useState('')
  const [myCode, setmyCode] = useState('')
  const [captcha, setcaptcha] = useState('')
  const [fullname, setfullname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [message, setmessage] = useState('')
  const [showForm, setshowForm] = useState(false)
  const [comment, setcomment] = useState('')
  const [allcomment, setallcomment] = useState([])
  const [show, setshow] = useState(false)
  const [search1, setsearch1] = useState('')
  const [search, setsearch] = useState([])
  const [search3, setsearch3] = useState('')
  const [markers, setmarkers] = useState({ latitude: 36.224174234928924, longitude: 57.69491965736432, latitudeDelta: 0.01, longitudeDelta: 0.01 })
  const [revers, setrevers] = useState({})
  const [allItemLocation, setallItemLocation] = useState({})
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [remember, setremember] = useState(60000 * 60 * 24 * 365)
  const [checkbox, setcheckbox] = useState()
  const [title, settitle] = useState('')
  const [price, setprice] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [info, setInfo] = useState('')
  const [singlefood, setsinglefood] = useState({})
  const [num, setnum] = useState([])
  const [textSearch, settextSearch] = useState('')
  const [navigate, setnavigate] = useState(false)
  const [ass, setass] = useState(true)
  const [showModal, setshowModal] = useState(false)
  const [current, setcurrent] = useState([])
  const [currentComment, setcurrentComment] = useState([])
  const [sercher, setsercher] = useState([])
  const [srch, setsrch] = useState([])
  const [page, setpage] = useState(1)
  const [currentPage, setcurrentPage] = useState(1)
  const [pageLimit] = useState(16)
  const [piza, setpiza] = useState([])
  const [sandwich, setsandwich] = useState([])
  const [drink, setdrink] = useState([])
  const [star, setstar] = useState()
  const [orientation, setorientation] = useState("PORTRAIT")
  const [height, setheight] = useState(_height)
  const [width, setwidth] = useState(_width)
  const [allstar, setallstar] = useState()
  const [navigateProfile, setnavigateProfile] = useState(false)
  const [navigateUser, setnavigateUser] = useState(false)
  const [user, setUser] = useState(false)
  const [ChangeView, setChangeView] = useState(false)
  const [star1, setstar1] = useState(true)
  const [star2, setstar2] = useState(true)
  const [star3, setstar3] = useState(true)
  const [star4, setstar4] = useState(true)
  const [star5, setstar5] = useState(true)
  const [id3, setid3] = useState()
  const [showForm2, setshowForm2] = useState(false)
  const [aa, setaa] = useState(false)
  const [room, setroom] = useState('')
  const [admin, setadmin] = useState([])
  const [replaceInput, setreplaceInput] = useState(false)
  const [several, setseveral] = useState(0)
  const [severalTime, setseveralTime] = useState(5)
  const [severalShow, setseveralShow] = useState(true)
  const [totalTitle, settotalTitle] = useState([])
  const [userI, setUserI] = useState([])
  const [map, setmap] = useState(new Map)
  const [allRoom] = useState(new Map())
  const [msgLength] = useState(new Map())
  const [foodMap, setfoodMap] = useState(new Map())
  const [currentMap] = useState(new Map())
  const [localMessage, setlocalMessage] = useState([])
  const [messages, setmessages] = useState([]);
  const [room5, setroom5] = useState([])
  const [room6, setroom6] = useState([])
  const [routeName, setrouteName] = useState('')
  const [permission, setpermission] = useState(false)
  const [changeFood, setchangeFood] = useState(false)
  const [timeChange, settimeChange] = useState(5)
  const [all, setall] = useState([])
  const [allTotalFood, setallTotalFood] = useState([])
  const [imageProfile, setimageProfile] = useState()
  const [plaque, setplaque] = useState('')
  const [floor, setfloor] = useState('')
  const [allAddress, setallAddress] = useState([])
  const [changeComment, setchangeComment] = useState(false)
  const [$food, set$food] = useState([])
  const [id2, setid2] = useState()
  const [id, setid] = useState()
  const [list, setlist] = useState([])
  const [_id, _setid] = useState()
  const [change, setchange] = useState(false)
  const [_address, set_address] = useState([])
  const [addressMap] = useState(new Map())
  const [totalPrices, settotalPrices] = useState([])
  const [oldPrice, setoldPrice] = useState('')
  const [_moment, set_moment] = useState()
  const [splash, setSplash] = useState(true)
  const [region, setregion] = useState({ lat: 36.224174234928924, lng: 57.69491965736432, latitudeDelta: 0.01, longitudeDelta: 0.01 })
  const [host] = useState(localhost)
  const [input, setinput] = useState('')
  const [showModalAvailabe, setshowModalAvailabe] = useState(false)
  const [coordinate, setcoordinate] = useState({ latitude: 36.224174234928924, longitude: 57.69491965736432, latitudeDelta: 0.01, longitudeDelta: 0.01 })
  const [code, setcode] = useState('')
  const [changeRegister, setchangeRegister] = useState(false)
  const [fromMomemt, setfromMomemt] = useState()
  const [ass2, setass2] = useState(false)
  const [page2, setpage2] = useState(1)
  const [currentPage2, setcurrentPage2] = useState(1)
  const [sendMessage, setsendMessage] = useState(true)
  const [changeChildfood, setchangeChildfood] = useState(true)
  const [showBtn, setshowBtn] = useState(false)
  const [qualification, setqualification] = useState('')
  const [changeLoginUser, setchangeLoginUser] = useState(false)
  const [anim] = useState(new Animated.Value(0))
  const [anim2] = useState(new Animated.Value(0))
  const [animScale] = useState(new Animated.Value(1))
  const [_list, set_list] = useState([])
  const [changeTitle, setchangeTitle] = useState(false)
  const [$, set$] = useState()
  const [locationtoken, setlocationtoken] = useState({})
  const [proposal, setproposal] = useState([])
  const [lastPayment, setlastPayment] = useState({})
  const [proposalId, setproposalId] = useState([])
  const [changeProposal, setchangeProposal] = useState(false)
  const [locationPermission, setlocationPermission] = useState(false)
  const [rand, setRand] = useState(parseInt(Math.random() * 9000 + 1000));
  const [showActivity, setshowActivity] = useState(false);
  const refInput = useRef()
  const useEffect = (call, state) => { useFocusEffect(useCallback(() => call(), state)) }

  return {
    rand, setRand, refInput,
    useEffect,
    changeTitle, setchangeTitle, proposalId, setproposalId,
    verifycodeRegister, sendcode, verifycode, loginUser, registerUser, forgetpassword, resetpassword, sendProposal, getProposal, getLastPayment, deleteMultiProposal,
    geocode, reverse, sendProfile, getSingleTitleFoods, editcomment, deletecomment, getallchildfood, getfoods, getcommentchildfood, createcommentchildfood, getsinglechildfood, getcommentsinglefood, payment, getProfile, notification,
    getAllAddress, deleteAddress, deleteAllAddress, useradmin, deleteAdmin, getAlluserAdmin, changeAdmin, createfood, editfood, deletefood, createchildfood, editchildfood, deletechildfood, createNotification, unAvailable, listAvailable,
    Keyboard, BackHandler, ToastAndroid, Platform, Dimensions,
    useMemo,
    moment, jwt_decode, localStorage, Alert, create, close, spacePrice, courseIdValidator, truncate,
    $, set$, locationPermission, setlocationPermission,
    showActivity, setshowActivity,
    anim, animScale,
    anim2,
    _list, set_list,
    locationtoken, setlocationtoken,
    proposal, setproposal,
    lastPayment, setlastPayment,
    changeProposal, setchangeProposal,
    changeLoginUser, setchangeLoginUser,
    qualification, setqualification,
    showBtn, setshowBtn,
    changeChildfood, setchangeChildfood,
    sendMessage, setsendMessage,
    currentPage2, setcurrentPage2,
    page2, setpage2,
    ass2, setass2,
    currentComment, setcurrentComment,
    fromMomemt, setfromMomemt,
    host,
    localhost,
    changeRegister, setchangeRegister,
    code, setcode,
    input, setinput,
    showModalAvailabe, setshowModalAvailabe,
    coordinate, setcoordinate,
    currentMap,
    splash, setSplash,
    region, setregion,
    _moment, set_moment,
    oldPrice, setoldPrice,
    totalPrices, settotalPrices,
    addressMap,
    _address, set_address,
    change, setchange,
    list, setlist,
    $food, set$food,
    _id, _setid,
    id2, setid2,
    id, setid,
    changeComment, setchangeComment,
    allAddress, setallAddress,
    plaque, setplaque,
    floor, setfloor,
    imageProfile, setimageProfile,
    allTotalFood, setallTotalFood,
    all, setall,
    timeChange, settimeChange,
    changeFood, setchangeFood,
    permission, setpermission,
    routeName, setrouteName,
    room5, setroom5,
    room6, setroom6,
    map, setmap, allRoom, msgLength, foodMap, setfoodMap,
    localMessage, setlocalMessage,
    messages, setmessages,
    userI, setUserI,
    totalTitle, settotalTitle,
    admin, setadmin,
    room, setroom,
    aa, setaa,
    id3, setid3,
    showForm2, setshowForm2,
    star1, setstar1,
    star2, setstar2,
    star3, setstar3,
    star4, setstar4,
    star5, setstar5,
    navigateProfile, setnavigateProfile,
    ChangeView, setChangeView,
    navigateUser, setnavigateUser,
    user, setUser,
    height, setheight,
    allstar, setallstar,
    width, setwidth,
    orientation, setorientation,
    star, setstar,
    piza, setpiza,
    sandwich, setsandwich,
    drink, setdrink,
    allfood, setallfood,
    pageLimit,
    currentPage, setcurrentPage,
    page, setpage,
    sercher, setsercher,
    srch, setsrch,
    showModal, setshowModal,
    current, setcurrent,
    ass, setass,
    search, setsearch,
    navigate, setnavigate,
    textSearch, settextSearch,
    search3, setsearch3,
    num, setnum,
    show1, setshow1,
    foods, setfoods,
    food2, setfood2,
    token, settoken,
    tokenValue, settokenValue,
    allprice, setallprice,
    myPhone, setmyPhone,
    myCode, setmyCode,
    captcha, setcaptcha,
    fullname, setfullname,
    email, setemail,
    phone, setphone,
    message, setmessage,
    showForm, setshowForm,
    comment, setcomment,
    allcomment, setallcomment,
    show, setshow,
    search1, setsearch1,
    markers, setmarkers,
    revers, setrevers,
    allItemLocation, setallItemLocation,
    password, setPassword,
    confirmPassword, setconfirmPassword,
    remember, setremember,
    checkbox, setcheckbox,
    title, settitle,
    price, setprice,
    imageUrl, setImageUrl,
    info, setInfo,
    singlefood, setsinglefood,
    replaceInput, setreplaceInput,
    several, setseveral,
    severalTime, setseveralTime,
    severalShow, setseveralShow,
  }
}
export const states = () => State()
export const contextStates = createContext(states);
export const context = () => useContext(contextStates)
export const propTypes = (component) => {
  component.propTypes = {
    width: PropTypes.number,
    locationPermission: PropTypes.bool,
    _list: PropTypes.array,
    proposal: PropTypes.array,
    lastPayment: PropTypes.object,
    changeProposal: PropTypes.bool,
    changeLoginUser: PropTypes.bool,
    qualification: PropTypes.string,
    showBtn: PropTypes.bool,
    changeChildfood: PropTypes.bool,
    sendMessage: PropTypes.bool,
    currentPage2: PropTypes.number,
    page2: PropTypes.number,
    ass2: PropTypes.bool,
    currentComment: PropTypes.array,
    host: PropTypes.string,
    localhost: PropTypes.string,
    changeRegister: PropTypes.bool,
    input: PropTypes.string,
    showModalAvailabe: PropTypes.bool,
    coordinate: PropTypes.object,
    splash: PropTypes.bool,
    region: PropTypes.object,
    _address: PropTypes.array,
    change: PropTypes.bool,
    list: PropTypes.array,
    $food: PropTypes.array,
    changeComment: PropTypes.bool,
    allAddress: PropTypes.array,
    allTotalFood: PropTypes.array,
    all: PropTypes.array,
    timeChange: PropTypes.number,
    changeFood: PropTypes.bool,
    routeName: PropTypes.string,
    localMessage: PropTypes.array,
    messages: PropTypes.array,
    userI: PropTypes.array,
    totalTitle: PropTypes.array,
    admin: PropTypes.array,
    showForm2: PropTypes.bool,
    star1: PropTypes.bool,
    star2: PropTypes.bool,
    star3: PropTypes.bool,
    star4: PropTypes.bool,
    star5: PropTypes.bool,
    ChangeView: PropTypes.bool,
    user: PropTypes.bool,
    height: PropTypes.number,
    width: PropTypes.number,
    allstar: PropTypes.number,
    orientation: PropTypes.string,
    allfood: PropTypes.array,
    pageLimit: PropTypes.number,
    currentPage: PropTypes.number,
    page: PropTypes.number,
    sercher: PropTypes.array,
    srch: PropTypes.array,
    showModal: PropTypes.bool,
    current: PropTypes.array,
    ass: PropTypes.bool,
    search: PropTypes.array,
    navigate: PropTypes.bool,
    textSearch: PropTypes.string,
    search3: PropTypes.string,
    num: PropTypes.array,
    show1: PropTypes.bool,
    foods: PropTypes.array,
    food2: PropTypes.array,
    tokenValue: PropTypes.object,
    myPhone: PropTypes.string,
    fullname: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
    showForm: PropTypes.bool,
    comment: PropTypes.string,
    allcomment: PropTypes.array,
    show: PropTypes.bool,
    markers: PropTypes.object,
    revers: PropTypes.object,
    allItemLocation: PropTypes.object,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    remember: PropTypes.number,
    title: PropTypes.string,
    info: PropTypes.string,
    singlefood: PropTypes.object,
    replaceInput: PropTypes.bool,
    several: PropTypes.number,
    severalTime: PropTypes.number,
    severalShow: PropTypes.bool,
    // locationtoken: PropTypes.object,
    // imageUrl: PropTypes.string,
    // permission:PropTypes.bool,
    // navigateProfile:PropTypes.string,
    // navigateUser:PropTypes.string,
    // $:PropTypes.number,
    // anim:PropTypes.number,
    // fromMomemt:PropTypes.number,
    // code:PropTypes.number,
    // currentMap:PropTypes.number,
    // _moment:PropTypes.number,
    // oldPrice:PropTypes.number,
    // totalPrices:PropTypes.number,
    // addressMap:PropTypes.number,
    // _id:PropTypes.number,
    // id2:PropTypes.number,
    // id:PropTypes.number,
    // plaque:PropTypes.number,
    // floor:PropTypes.number,
    // imageProfile:PropTypes.number,
    // map:PropTypes.number,
    // allRoom:PropTypes.number,
    // msgLength:PropTypes.number,
    // foodMap:PropTypes.number,
    // id3:PropTypes.number,
    // star:PropTypes.number,
    // token:PropTypes.string,
    // allprice:PropTypes.number,
    // myCode:PropTypes.number,
    // captcha:PropTypes.string,
    // phone:PropTypes.number,
    // search1:PropTypes.number,
    // checkbox:PropTypes.number,
    // price:PropTypes.number,
  }
}
