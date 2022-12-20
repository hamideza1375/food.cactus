
const spacePrice = (inputPrice) => {
    try {
      let rt = String(inputPrice)
      let k = ''
      for (let i = 0; i < rt.length; i++) {
        k +=
          rt.length == 4 ?
            (i == 0 ?
              rt[i] + '.'
              :
              rt[i])
            :
            rt.length == 5 ?
              (i == 1 ?
                rt[i] + '.'
                :
                rt[i])
              :
              rt.length == 7 ?
                (i == 0 || i == 3
                  ? rt[i] + '.'
                  : rt[i])
                :
                rt.length == 8 ?
                  (i == 1 || i == 4
                    ? rt[i] + '.'
                    : rt[i])
                  :
                  rt.length == 9 ?
                    (i == 2 || i == 5
                      ? rt[i] + '.'
                      : rt[i])
                    :
                    rt.length == 10 ?
                      (i == 0 || i == 3 || i == 6
                        ? rt[i] + '.'
                        : rt[i])
                      :
                      rt.length == 11 ?
                        (i == 1 || i == 4 || i == 7
                          ? rt[i] + '.'
                          : rt[i])
                        :
                        i == 2
                          ? rt[i] + '.'
                          : rt[i]
      }
      return k
    }
    catch (err) { console.log(err) }
  }


  export default spacePrice