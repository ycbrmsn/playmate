import $ from 'jquery'

class WindowHelper {
  getWinHeight (selector) {
    let height = 0
    if (selector) {
      height = $(document).find(selector).outerHeight()
    }
    return $(window).height() - height
  }
}
let windowHelper = new WindowHelper()

class DomHelper {
  setHeight (selector, height) {
    $(document).find(selector).height(height)
  }

  adapteFrame () {
    let height = windowHelper.getWinHeight('.framebox-header')
    this.setHeight('.framebox-aside', height)
    this.setHeight('.framebox-section', height)
  }
}
let domHelper = new DomHelper()

export {
  windowHelper,
  domHelper
}
