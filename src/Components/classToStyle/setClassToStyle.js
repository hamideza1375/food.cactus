import { Dimensions, Platform } from "react-native";

let setStyleRef

let _ = new Map();
if(Platform.OS !== 'web'){
   setStyleRef = (props, e, ref, setinnerHTML,flatlist, seturi) => {
  if (e) {
    const styles = (style) => {
      if (style?.textDecorationLine) e.setNativeProps({ style: { textDecorationLine: style.textDecorationLine } });
      if (style?.textDecorationColor) e.setNativeProps({ style: { textDecorationColor: style.textDecorationColor } });
      if (style?.textDecorationStyle) e.setNativeProps({ style: { textDecorationStyle: style.textDecorationStyle } });
      if (style?.position) e.setNativeProps({ style: { position: style.position } });
      if (style?.zIndex) e.setNativeProps({ style: { zIndex: style.zIndex } });
      if (style?.top) e.setNativeProps({ style: { top: style.top } });
      if (style?.bottom) e.setNativeProps({ style: { bottom: style.bottom } });
      if (style?.right) e.setNativeProps({ style: { right: style.right } });
      if (style?.left) e.setNativeProps({ style: { left: style.left } });
      if (style?.fontSize) e.setNativeProps({ style: { fontSize: style.fontSize } });
      if (style?.fontWeight) e.setNativeProps({ style: { fontWeight: style.fontWeight } });
      if (style?.fontFamily) e.setNativeProps({ style: { fontFamily: style.fontFamily } });
      if (style?.fontStyle) e.setNativeProps({ style: { fontStyle: style.fontStyle } });
      if (style?.color) e.setNativeProps({ style: { color: style.color } });
      if (style?.backgroundColor) e.setNativeProps({ style: { backgroundColor: style.backgroundColor } });
      if (style?.width) e.setNativeProps({ style: { width: style.width } });
      if (style?.minWidth) e.setNativeProps({ style: { minWidth: style.minWidth } });
      if (style?.maxWidth) e.setNativeProps({ style: { maxWidth: style.maxWidth } });
      if (style?.height) e.setNativeProps({ style: { height: style.height } });
      if (style?.minHeight) e.setNativeProps({ style: { minHeight: style.minHeight } });
      if (style?.maxHeight) e.setNativeProps({ style: { maxHeight: style.maxHeight } });
      if (style?.padding) e.setNativeProps({ style: { padding: style.padding } });
      if (style?.paddingTop) e.setNativeProps({ style: { paddingTop: style.paddingTop } });
      if (style?.paddingBottom) e.setNativeProps({ style: { paddingBottom: style.paddingBottom } });
      if (style?.paddingLeft) e.setNativeProps({ style: { paddingLeft: style.paddingLeft } });
      if (style?.paddingRight) e.setNativeProps({ style: { paddingRight: style.paddingRight } });
      if (style?.paddingHorizontal) e.setNativeProps({ style: { paddingHorizontal: style.paddingHorizontal } });
      if (style?.paddingVertival) e.setNativeProps({ style: { paddingVertival: style.paddingVertival } });
      if (style?.margin) e.setNativeProps({ style: { margin: style.margin } });
      if (style?.marginTop) e.setNativeProps({ style: { marginTop: style.marginTop } });
      if (style?.marginBottom) e.setNativeProps({ style: { marginBottom: style.marginBottom } });
      if (style?.marginLeft) e.setNativeProps({ style: { marginLeft: style.marginLeft } });
      if (style?.marginRight) e.setNativeProps({ style: { marginRight: style.marginRight } });
      if (style?.marginHorizontal) e.setNativeProps({ style: { marginHorizontal: style.marginHorizontal } });
      if (style?.marginVertival) e.setNativeProps({ style: { marginVertival: style.marginVertival } });
      if (style?.borderWidth) e.setNativeProps({ style: { borderWidth: style.borderWidth } });
      if (style?.borderColor) e.setNativeProps({ style: { borderColor: style.borderColor } });
      if (style?.borderTopColor) e.setNativeProps({ style: { borderTopColor: style.borderTopColor } });
      if (style?.borderBottomColor) e.setNativeProps({ style: { borderBottomColor: style.borderBottomColor } });
      if (style?.borderLeftColor) e.setNativeProps({ style: { borderLeftColor: style.borderLeftColor } });
      if (style?.borderRightColor) e.setNativeProps({ style: { borderRightColor: style.borderRightColor } });
      if (style?.borderTopWidth) e.setNativeProps({ style: { borderTopWidth: style.borderTopWidth } });
      if (style?.borderBottomWidth) e.setNativeProps({ style: { borderBottomWidth: style.borderBottomWidth } });
      if (style?.borderLeftWidth) e.setNativeProps({ style: { borderLeftWidth: style.borderLeftWidth } });
      if (style?.borderRightWidth) e.setNativeProps({ style: { borderRightWidth: style.borderRightWidth } });
      if (style?.flex) e.setNativeProps({ style: { flex: style.flex } });
      if (style?.flexGrow) e.setNativeProps({ style: { flexGrow: style.flexGrow } });
      if (style?.flexDirection) e.setNativeProps({ style: { flexDirection: style.flexDirection } });
      if (style?.flexWrap) e.setNativeProps({ style: { flexWrap: style.flexWrap } });
      if (style?.textAlign) e.setNativeProps({ style: { textAlign: style.textAlign } });
      if (style?.opacity) e.setNativeProps({ style: { opacity: style.opacity } });
      if (style?.rotate) e.setNativeProps({ style: { transform: [{ rotate: style.rotate + 'deg' }] } });
      if (style?.rotateY) e.setNativeProps({ style: { transform: [{ rotateY: style.rotateY + 'deg' }] } });
      if (style?.rotateX) e.setNativeProps({ style: { transform: [{ rotateX: style.rotateX + 'deg' }] } });
      if (style?.scale) e.setNativeProps({ style: { transform: [{ scale: style.scale }] } });
      if (style?.scaleX) e.setNativeProps({ style: { transform: [{ scaleX: style.scaleX }] } });
      if (style?.scaleY) e.setNativeProps({ style: { transform: [{ scaleY: style.scaleY }] } });
      if (style?.lineHeight) e.setNativeProps({ style: { lineHeight: style.lineHeight } });
      if (style?.display) e.setNativeProps({ style: { display: style.display } });
      if (style?.innerHTML) setinnerHTML(style.innerHTML);
      if (style?.src) seturi(style.src);
    };
    e.$ = styles;
    props.id && _.set(props.id, e);
    const getId = (id) => { return _.get(id); };
    _.id = getId;

    return ref && ref(_);
  }
};

}


else {

  setStyleRef = (props, e, ref, setinnerHTML, flatlist, seturi) => {
    if (e) {
      const styles = (style) => {
        if (style?.textDecorationLine) e.style.textDecorationLine = style.textDecorationLine
        if (style?.textDecorationColor) e.style.textDecorationColor = style.textDecorationColor
        if (style?.textDecorationStyle) e.style.textDecorationStyle = style.textDecorationStyle
        if (style?.position) e.style.position = style.position
        if (style?.zIndex) e.style.zIndex = style.zIndex
        if (style?.top) e.style.top = style.top
        if (style?.bottom) e.style.bottom = style.bottom
        if (style?.right) e.style.right = style.right
        if (style?.left) e.style.left = style.left
        if (style?.fontSize) e.style.fontSize = style.fontSize
        if (style?.fontWeight) e.style.fontWeight = style.fontWeight
        if (style?.fontFamily) e.style.fontFamily = style.fontFamily
        if (style?.fontStyle) e.style.fontStyle = style.fontStyle
        if (style?.color) e.style.color = style.color
        if (style?.backgroundColor) e.style.backgroundColor = style.backgroundColor;
        if (style?.width) e.style.width = style.width;
        if (style?.minWidth) e.style.minWidth = style.minWidth;
        if (style?.maxWidth) e.style.maxWidth = style.maxWidth;
        if (style?.height) e.style.height = style.height;
        if (style?.minHeight) e.style.minHeight = style.minHeight;
        if (style?.maxHeight) e.style.maxHeight = style.maxHeight;
        if (style?.padding) e.style.padding = style.padding;
        if (style?.paddingTop) e.style.paddingTop = style.paddingTop;
        if (style?.paddingBottom) e.style.paddingBottom = style.paddingBottom;
        if (style?.paddingLeft) e.style.paddingLeft = style.paddingLeft;
        if (style?.paddingRight) e.style.paddingRight = style.paddingRight;
        if (style?.paddingHorizontal) e.style.paddingHorizontal = style.paddingHorizontal;
        if (style?.paddingVertival) e.style.paddingVertival = style.paddingVertival;
        if (style?.margin) e.style.margin = style.margin;
        if (style?.marginTop) e.style.marginTop = style.marginTop;
        if (style?.marginBottom) e.style.marginBottom = style.marginBottom;
        if (style?.marginLeft) e.style.marginLeft = style.marginLeft;
        if (style?.marginRight) e.style.marginRight = style.marginRight;
        if (style?.marginHorizontal) e.style.marginHorizontal = style.marginHorizontal;
        if (style?.marginVertival) e.style.marginVertival = style.marginVertival;
        if (style?.borderWidth) e.style.borderWidth = style.borderWidth;
        if (style?.borderColor) e.style.borderColor = style.borderColor;
        if (style?.borderTopColor) e.style.borderTopColor = style.borderTopColor;
        if (style?.borderBottomColor) e.style.borderBottomColor = style.borderBottomColor;
        if (style?.borderLeftColor) e.style.borderLeftColor = style.borderLeftColor;
        if (style?.borderRightColor) e.style.borderRightColor = style.borderRightColor;
        if (style?.borderTopWidth) e.style.borderTopWidth = style.borderTopWidth;
        if (style?.borderBottomWidth) e.style.borderBottomWidth = style.borderBottomWidth;
        if (style?.borderLeftWidth) e.style.borderLeftWidth = style.borderLeftWidth;
        if (style?.borderRightWidth) e.style.borderRightWidth = style.borderRightWidth;
        if (style?.flex) e.style.flex = style.flex;
        if (style?.flexGrow) e.style.flexGrow = style.flexGrow;
        if (style?.flexDirection) e.style.flexDirection = style.flexDirection;
        if (style?.flexWrap) e.style.flexWrap = style.flexWrap;
        if (style?.textAlign) e.style.textAlign = style.textAlign;
        if (style?.opacity) e.style.opacity = style.opacity;
        if (style?.rotate) e.style.transform = `rotate(${style.rotate + 'deg'})`
        if (style?.rotateY) e.style.transform = `rotateY(${style.rotateY + 'deg'})`
        if (style?.rotateX) e.style.transform = `rotateX(${style.rotateX + 'deg'})`
        if (style?.scale) e.style.transform = `scale(${style.scale})`
        if (style?.scaleX) e.style.transform = `scaleX(${style.scaleX})`
        if (style?.scaleY) e.style.transform = `scaleY(${style.scaleY})`
        if (style?.lineHeight) e.style.lineHeight = style.lineHeight
        if (style?.display) e.style.display = style.display
        if (setinnerHTML && style?.innerHTML) setinnerHTML(style.innerHTML);
        if (seturi && style?.src) seturi(style.src);
      }
      let col ={}
      let orientation ={}
      const width = Dimensions.get('window').width
      const height = Dimensions.get('window').height

      if (width <= 580) col = props._col1
      if (width > 580 && width <= 870) col = props._col2
      if (width > 870 && width <= 1100) col = props._col3
      if (width > 1100) col = props._col4
      orientation = width > height ? props._land : props._port

      e.$ = styles
      props.id && _.set(props.id, e)
      const getId = (id) => { return _.get(id) }
      _.id = getId
  
      if (!flatlist) {
        e.className = (e.className + ' ' + props.initalClass + ' ' + col + ' ' + orientation)
        e.className = (e.className + ' ' + props.webClass)
        e.className = Array.isArray(props.class) ? (e.className + ' ' + props.class[0] + ' ' + props.class[1]) : (e.className + ' ' + props.class)
        if (e.children[0]?.className) e.children[0].className = Array.isArray(props.containClass) ? (e.children[0].className + ' ' + props.containClass[0] + ' ' + props.containClass[1]) : (e.children[0].className + ' ' + props.containClass)
      }
  
      return ref && ref(_)
    }
  }

}


export default setStyleRef





























// import { Platform } from "react-native";

// let setStyleRef

// let _ = new Map();
// if(Platform.OS !== 'web'){
//    setStyleRef = (props, e, ref, setinnerHTML,flatlist, seturi) => {
//   if (e) {
//     const styles = (style) => {
//       if (style?.textDecorationLine) e.setNativeProps({ style: { textDecorationLine: style.textDecorationLine } });
//       if (style?.textDecorationColor) e.setNativeProps({ style: { textDecorationColor: style.textDecorationColor } });
//       if (style?.textDecorationStyle) e.setNativeProps({ style: { textDecorationStyle: style.textDecorationStyle } });
//       if (style?.position) e.setNativeProps({ style: { position: style.position } });
//       if (style?.zIndex) e.setNativeProps({ style: { zIndex: style.zIndex } });
//       if (style?.top) e.setNativeProps({ style: { top: style.top } });
//       if (style?.bottom) e.setNativeProps({ style: { bottom: style.bottom } });
//       if (style?.right) e.setNativeProps({ style: { right: style.right } });
//       if (style?.left) e.setNativeProps({ style: { left: style.left } });
//       if (style?.fontSize) e.setNativeProps({ style: { fontSize: style.fontSize } });
//       if (style?.fontWeight) e.setNativeProps({ style: { fontWeight: style.fontWeight } });
//       if (style?.fontFamily) e.setNativeProps({ style: { fontFamily: style.fontFamily } });
//       if (style?.fontStyle) e.setNativeProps({ style: { fontStyle: style.fontStyle } });
//       if (style?.color) e.setNativeProps({ style: { color: style.color } });
//       if (style?.backgroundColor) e.setNativeProps({ style: { backgroundColor: style.backgroundColor } });
//       if (style?.width) e.setNativeProps({ style: { width: style.width } });
//       if (style?.minWidth) e.setNativeProps({ style: { minWidth: style.minWidth } });
//       if (style?.maxWidth) e.setNativeProps({ style: { maxWidth: style.maxWidth } });
//       if (style?.height) e.setNativeProps({ style: { height: style.height } });
//       if (style?.minHeight) e.setNativeProps({ style: { minHeight: style.minHeight } });
//       if (style?.maxHeight) e.setNativeProps({ style: { maxHeight: style.maxHeight } });
//       if (style?.padding) e.setNativeProps({ style: { padding: style.padding } });
//       if (style?.paddingTop) e.setNativeProps({ style: { paddingTop: style.paddingTop } });
//       if (style?.paddingBottom) e.setNativeProps({ style: { paddingBottom: style.paddingBottom } });
//       if (style?.paddingLeft) e.setNativeProps({ style: { paddingLeft: style.paddingLeft } });
//       if (style?.paddingRight) e.setNativeProps({ style: { paddingRight: style.paddingRight } });
//       if (style?.paddingHorizontal) e.setNativeProps({ style: { paddingHorizontal: style.paddingHorizontal } });
//       if (style?.paddingVertival) e.setNativeProps({ style: { paddingVertival: style.paddingVertival } });
//       if (style?.margin) e.setNativeProps({ style: { margin: style.margin } });
//       if (style?.marginTop) e.setNativeProps({ style: { marginTop: style.marginTop } });
//       if (style?.marginBottom) e.setNativeProps({ style: { marginBottom: style.marginBottom } });
//       if (style?.marginLeft) e.setNativeProps({ style: { marginLeft: style.marginLeft } });
//       if (style?.marginRight) e.setNativeProps({ style: { marginRight: style.marginRight } });
//       if (style?.marginHorizontal) e.setNativeProps({ style: { marginHorizontal: style.marginHorizontal } });
//       if (style?.marginVertival) e.setNativeProps({ style: { marginVertival: style.marginVertival } });
//       if (style?.borderWidth) e.setNativeProps({ style: { borderWidth: style.borderWidth } });
//       if (style?.borderColor) e.setNativeProps({ style: { borderColor: style.borderColor } });
//       if (style?.borderTopColor) e.setNativeProps({ style: { borderTopColor: style.borderTopColor } });
//       if (style?.borderBottomColor) e.setNativeProps({ style: { borderBottomColor: style.borderBottomColor } });
//       if (style?.borderLeftColor) e.setNativeProps({ style: { borderLeftColor: style.borderLeftColor } });
//       if (style?.borderRightColor) e.setNativeProps({ style: { borderRightColor: style.borderRightColor } });
//       if (style?.borderTopWidth) e.setNativeProps({ style: { borderTopWidth: style.borderTopWidth } });
//       if (style?.borderBottomWidth) e.setNativeProps({ style: { borderBottomWidth: style.borderBottomWidth } });
//       if (style?.borderLeftWidth) e.setNativeProps({ style: { borderLeftWidth: style.borderLeftWidth } });
//       if (style?.borderRightWidth) e.setNativeProps({ style: { borderRightWidth: style.borderRightWidth } });
//       if (style?.flex) e.setNativeProps({ style: { flex: style.flex } });
//       if (style?.flexGrow) e.setNativeProps({ style: { flexGrow: style.flexGrow } });
//       if (style?.flexDirection) e.setNativeProps({ style: { flexDirection: style.flexDirection } });
//       if (style?.flexWrap) e.setNativeProps({ style: { flexWrap: style.flexWrap } });
//       if (style?.textAlign) e.setNativeProps({ style: { textAlign: style.textAlign } });
//       if (style?.opacity) e.setNativeProps({ style: { opacity: style.opacity } });
//       if (style?.rotate) e.setNativeProps({ style: { transform: [{ rotate: style.rotate + 'deg' }] } });
//       if (style?.rotateY) e.setNativeProps({ style: { transform: [{ rotateY: style.rotateY + 'deg' }] } });
//       if (style?.rotateX) e.setNativeProps({ style: { transform: [{ rotateX: style.rotateX + 'deg' }] } });
//       if (style?.scale) e.setNativeProps({ style: { transform: [{ scale: style.scale }] } });
//       if (style?.scaleX) e.setNativeProps({ style: { transform: [{ scaleX: style.scaleX }] } });
//       if (style?.scaleY) e.setNativeProps({ style: { transform: [{ scaleY: style.scaleY }] } });
//       if (style?.lineHeight) e.setNativeProps({ style: { lineHeight: style.lineHeight } });
//       if (style?.display) e.setNativeProps({ style: { display: style.display } });
//       if (style?.innerHTML) setinnerHTML(style.innerHTML);
//       if (style?.src) seturi(style.src);
//     };
//     e.$ = styles;
//     props.id && _.set(props.id, e);
//     const getId = (id) => { return _.get(id); };
//     _.id = getId;

//     return ref && ref(_);
//   }
// };

// }


// else {

//   setStyleRef = (props, e, ref, setinnerHTML, flatlist, seturi) => {
//     if (e) {
//       const styles = (style) => {
//         if (style?.textDecorationLine) e.style.textDecorationLine = style.textDecorationLine
//         if (style?.textDecorationColor) e.style.textDecorationColor = style.textDecorationColor
//         if (style?.textDecorationStyle) e.style.textDecorationStyle = style.textDecorationStyle
//         if (style?.position) e.style.position = style.position
//         if (style?.zIndex) e.style.zIndex = style.zIndex
//         if (style?.top) e.style.top = style.top
//         if (style?.bottom) e.style.bottom = style.bottom
//         if (style?.right) e.style.right = style.right
//         if (style?.left) e.style.left = style.left
//         if (style?.fontSize) e.style.fontSize = style.fontSize
//         if (style?.fontWeight) e.style.fontWeight = style.fontWeight
//         if (style?.fontFamily) e.style.fontFamily = style.fontFamily
//         if (style?.fontStyle) e.style.fontStyle = style.fontStyle
//         if (style?.color) e.style.color = style.color
//         if (style?.backgroundColor) e.style.backgroundColor = style.backgroundColor;
//         if (style?.width) e.style.width = style.width;
//         if (style?.minWidth) e.style.minWidth = style.minWidth;
//         if (style?.maxWidth) e.style.maxWidth = style.maxWidth;
//         if (style?.height) e.style.height = style.height;
//         if (style?.minHeight) e.style.minHeight = style.minHeight;
//         if (style?.maxHeight) e.style.maxHeight = style.maxHeight;
//         if (style?.padding) e.style.padding = style.padding;
//         if (style?.paddingTop) e.style.paddingTop = style.paddingTop;
//         if (style?.paddingBottom) e.style.paddingBottom = style.paddingBottom;
//         if (style?.paddingLeft) e.style.paddingLeft = style.paddingLeft;
//         if (style?.paddingRight) e.style.paddingRight = style.paddingRight;
//         if (style?.paddingHorizontal) e.style.paddingHorizontal = style.paddingHorizontal;
//         if (style?.paddingVertival) e.style.paddingVertival = style.paddingVertival;
//         if (style?.margin) e.style.margin = style.margin;
//         if (style?.marginTop) e.style.marginTop = style.marginTop;
//         if (style?.marginBottom) e.style.marginBottom = style.marginBottom;
//         if (style?.marginLeft) e.style.marginLeft = style.marginLeft;
//         if (style?.marginRight) e.style.marginRight = style.marginRight;
//         if (style?.marginHorizontal) e.style.marginHorizontal = style.marginHorizontal;
//         if (style?.marginVertival) e.style.marginVertival = style.marginVertival;
//         if (style?.borderWidth) e.style.borderWidth = style.borderWidth;
//         if (style?.borderColor) e.style.borderColor = style.borderColor;
//         if (style?.borderTopColor) e.style.borderTopColor = style.borderTopColor;
//         if (style?.borderBottomColor) e.style.borderBottomColor = style.borderBottomColor;
//         if (style?.borderLeftColor) e.style.borderLeftColor = style.borderLeftColor;
//         if (style?.borderRightColor) e.style.borderRightColor = style.borderRightColor;
//         if (style?.borderTopWidth) e.style.borderTopWidth = style.borderTopWidth;
//         if (style?.borderBottomWidth) e.style.borderBottomWidth = style.borderBottomWidth;
//         if (style?.borderLeftWidth) e.style.borderLeftWidth = style.borderLeftWidth;
//         if (style?.borderRightWidth) e.style.borderRightWidth = style.borderRightWidth;
//         if (style?.flex) e.style.flex = style.flex;
//         if (style?.flexGrow) e.style.flexGrow = style.flexGrow;
//         if (style?.flexDirection) e.style.flexDirection = style.flexDirection;
//         if (style?.flexWrap) e.style.flexWrap = style.flexWrap;
//         if (style?.textAlign) e.style.textAlign = style.textAlign;
//         if (style?.opacity) e.style.opacity = style.opacity;
//         if (style?.rotate) e.style.transform = `rotate(${style.rotate + 'deg'})`
//         if (style?.rotateY) e.style.transform = `rotateY(${style.rotateY + 'deg'})`
//         if (style?.rotateX) e.style.transform = `rotateX(${style.rotateX + 'deg'})`
//         if (style?.scale) e.style.transform = `scale(${style.scale})`
//         if (style?.scaleX) e.style.transform = `scaleX(${style.scaleX})`
//         if (style?.scaleY) e.style.transform = `scaleY(${style.scaleY})`
//         if (style?.lineHeight) e.style.lineHeight = style.lineHeight
//         if (style?.display) e.style.display = style.display
//         if (setinnerHTML && style?.innerHTML) setinnerHTML(style.innerHTML);
//         if (seturi && style?.src) seturi(style.src);
  
//       }
//       e.$ = styles
//       props.id && _.set(props.id, e)
//       const getId = (id) => { return _.get(id) }
//       _.id = getId

//       let _class = e.className
//       let _childClass = e.children && e.children[0]?.className ? e.children[0].className : null
  
//       if (!flatlist) {
//         let cls = Array.isArray(props.class) ? (_class + ' ' + props.class[0] + ' ' + props.class[1]) : (_class + ' ' + props.class)
//         e.className = (_class + ' ' + props.initalClass + ' ' + props.webClass + ' ' + cls + ' ' + props.responsiveClass)
//         if (_childClass) e.children[0].className = Array.isArray(props.containClass) ? (_childClass + ' ' + props.containClass[0] + ' ' + props.containClass[1]) : (_childClass + ' ' + props.containClass)
//       }
  
//       return ref && ref(_)
//     }
//   }

// }


// export default setStyleRef