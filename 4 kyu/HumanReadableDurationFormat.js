function formatDuration (seconds) {
    if(seconds == 0) return "now"
    let str = ''
    let array = []
    let andStr = ' and '
    let commaStr = ', '
    let years = Math.floor(seconds/31536000)
    let days = Math.floor((seconds - years*31536000)/86400)
    let hours = Math.floor((seconds-years*31536000-days*86400)/3600)
    let minutes = Math.floor((seconds - years*31536000 - days*86400 - hours*3600)/60)
    let second = seconds - years*31536000 - days*86400 - hours*3600 - minutes*60

    if(days!=0) array.push(days)
    if(hours!=0) array.push(hours)
    if(minutes!=0) array.push(minutes)
    if(second!=0) array.push(second)

    if(years > 0) {
        str= str + years
        if(years>1) str = str + ' years'
        else str = str + ' year'
        if(array.length == 0) return str
        if(array.length == 1) str = str + andStr
        if(array.length > 1) str = str + commaStr
    }

    if(days > 0) {
        str= str + days
        if(days>1) str = str + ' days'
        else str = str + ' day'
        array.shift()
        if(array.length == 0) return str
        if(array.length == 1) str = str + andStr
        if(array.length > 1) str = str + commaStr
    }    

    if(hours > 0) {
        str= str + hours
        if(hours>1) str = str + ' hours'
        else str = str + ' hour'
        array.shift()
        if(array.length == 0) return str
        if(array.length == 1) str = str + andStr
        if(array.length > 1) str = str + commaStr
    }

    if(minutes > 0) {
        str= str + minutes
        if(minutes>1) str = str + ' minutes'
        else str = str + ' minute'
        array.shift()
        if(array.length == 0) return str
        if(array.length == 1) str = str + andStr
    }

    if(second > 0) {
        str= str + second
        if(second>1) str = str + ' seconds'
        else str = str + ' second'
        array.shift()
        return str
    }
  }

console.log(formatDuration(31536061))