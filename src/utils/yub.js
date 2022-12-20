 const yub = {
  get: (target, propName) => {
    if (propName === 'fullname') {
      if (typeof target[propName] === 'string') {
        if (target[propName].length < 3) {
          return ('نام نباید کوچک تر از ۳ کلمه باشد')
        }
        if (target[propName].length > 15) {
          return ('نام نباید بزرگ تر از ۱۵ کلمه باشد')
        }
        else {
          return target[propName]
        }
      }
      else {
        return "نام نباید خالی باشد"
      }
    }
    if (propName === 'email') {
      if (typeof target[propName] === 'string') {
        if (!target[propName].length) {
          return ('ایمیل نباید خالی باشد')
        }
        else if (target[propName].length < 5) {
          return ('ایمیل وارد شده صحیح نمیباشد')
        }
        else if (target[propName].length > 50) {
          return ('ایمیل وارد شده صحیح نمیباشد')
        }
        else if (!target[propName].includes("@") || !target[propName].includes(".")) {
          return ('ایمیل وارد شده صحیح نمیباشد. از کارکتر @ استفاده کنید')
        }
        else {
          return target[propName]
        }
      }
      else {
        return "ایمیل نباید خالی باشد"
      }
    }


    if (propName === 'phone') {
      if (Number(target[propName])) {
        if (!target[propName].length) {
          return ('شماره تلفن نباید خالی باشد')
        }
       else if (target[propName].length < 11) {
          return ('شماره ی وارد شده صحیح نمیباشد')
        }
        else if (target[propName].length > 11) {
          return ('شماره ی وارد شده صحیح نمیباشد')
        }
        else {
          return target[propName]
        }
      }
      else {
        if(!target[propName]) return "شماره تلفن نباید خالی باشد"
        else return "شماره تلفن صحیح نیست"
      }
    }



    if (propName === 'password') {
      if (typeof target[propName] === 'string') {
        if (target[propName].length < 4) {
          return ('رمز عبور نباید کوچک تر از ۴ کلمه باشد')
        }
        else if (target[propName].length > 20) {
          return ('رمز عبور نباید بزرگ تر از ۲۰ کلمه باشد')
        }
        else {
          return target[propName]
        }
      }
      else {
        return "رمز عبور نباید خالی باشد"
      }
    }
    var conpass = target.password == target.confirmPassword
    if (propName === 'confirmPassword') {
      if (typeof target[propName] === 'string') {
        if (!conpass)
          return "تکرار رمز باید با رمز عبور برابر باشد"
        else
          return target[propName]
      }
      else {
        return "تکرار رمز نباید خالی باشد"
      }
    }



    if (propName === 'title') {
      if (typeof target[propName] === 'string') {
        if (target[propName].length < 3) {
          return ('عنوان نباید کوچک تر از ۳ کلمه باشد')
        }
        if (target[propName].length > 30) {
          return ('عنوان نباید بزرگ تر از ۱۵ کلمه باشد')
        }
        else {
          return target[propName]
        }
      }
      else {
        return "عنوان نباید خالی باشد"
      }
    }
    if (propName === 'price') {
      if (Number(target[propName])) {
        if (target[propName].length < 4 || target[propName] < 1000) {
          return ('قیمت وارد شده صحیح نمیباشد')
        }
        else {
          return target[propName]
        }
      }
      else {
        if(!target[propName]) return "قیمت نباید خالی باشد"
        else return "قیمت را صحیح وارد کنید"
    
      }
    }
    if (propName === 'imageUrl') {
      if (typeof target[propName] === 'object') {
        return target[propName]
      }
      else {
        return "لطفا از گالری یک عکس را انتخواب کنید"
      }
    }
    if (propName === 'info') {
      if (typeof target[propName] === 'string') {
        if (target[propName].length < 10) {
          return ('توضیحات نباید کوچک تر از 10 کلمه باشد')
        }
        else {
          return target[propName]
        }
      }
      else {
        return "توضیحات نباید خالی باشد"
      }
    }


    if (propName === 'message') {
      if (typeof target[propName] === 'string') {

        if (target[propName].length < 4) {
          return ('پیام نباید کوچک تر از ۴ کلمه باشد')
        }
        else if (target[propName].length > 1000) {
          return ('پیام بزرک تر از حد مجاز هست')
        }
        else {
          return target[propName]
        }
      }
      else {
        return " پیام نباید خالی باشد"
      }
    }


    if (propName === 'allstar') {
      if (target[propName] != 0) {
        return target[propName]
      }
      else {
        return "لطفا انتخاب ستاره هارا تکمیل کنید"
      }
    }


  }
}

export default yub