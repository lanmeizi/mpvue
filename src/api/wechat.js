import { getOpenId } from './index'

export function getSetting(auth, onSuccess, onFail) {
  // getSetting判断小程序是否获得权限
  mpvue.getSetting({
    success(res) {
      if (res.authSetting[`scope.${auth}`]) {
        onSuccess(res)
      } else {
        onFail(res)
      }
    },
    fail(res) {
      console.log('res==>', res) // 直接抛出异常
    }
  })
}

export function getUserInfo(onSuccess, onFail) {
  mpvue.getUserInfo({
    success(res) {
      const { userInfo } = res
      if (userInfo) {
        onSuccess(userInfo)
      } else {
        onFail(res)
      }
    },
    fail(res) {
      console.log('res==>', res) // 直接抛出异常
    }
  })
}

export function setStorageSync(key, data) {
  mpvue.setStorageSync(key, data)
}

export function getStorageSync(key) {
  return mpvue.getStorageSync(key)
}

export function getUserOpenId(callback) {
  mpvue.login({
    success(res) {
      if (res.code) {
        const { code } = res
        getOpenId(code).then(response => {
          const { data: { data: { openid } } } = response
          setStorageSync('openId', openid)
          callback && callback(openid)
        }).catch(err => {
          console.log('err', err)
        })
      } else {
        console.log('res==>', res) // 直接抛出异常
      }
    },
    fail(res) {
      console.log('res==>', res) // 直接抛出异常
    }
  })
}

export function showLoading(title) {
  mpvue.showLoading({
    title,
    mask: true
  })
}

export function hideLoading() {
  mpvue.hideLoading()
}
