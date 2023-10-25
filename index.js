// -----------side bar---------
const menuItem = document.querySelectorAll('.menu-item')
// -----------messages-------------
const messageNotifications = document.querySelector('#message-notifications')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')
const theme = document.querySelector('#theme')
const customizeTheme = document.querySelector('.customize-theme')
const fontSize = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')
const themeColor = document.querySelectorAll('.choose-color span')
const chooseBg = document.querySelectorAll('.choose-bg div')
// ----------remove active class from all menu item---------------
const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active')
    })
}
// ----------add active class for click menu item---------------
menuItem.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem()
        item.classList.add('active')
        if(item.id === 'notifications'){
            document.querySelector('.notifications-popup')
            .style.display = 'block'
            document.querySelector('#notifications .notification-count')
            .style.display = 'none'
        }else{
            document.querySelector('.notifications-popup')
            .style.display = 'none'
        }
    })
})
// end
// --------------messages------------
messageNotifications.addEventListener('click',() => {
     messages.style.boxShadow = '0 0 1rem var(--color-primary)'
     messageNotifications.querySelector('.notification-count')
     .style.display = 'none'
     setTimeout(() => {
        messages.style.boxShadow = 'none'
     },2000)
})
// end

// ---------find message----------
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase()
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase()
        if (name.indexOf(val) != -1){
            user.style.display = 'flex'
        }else {
            user.style.display = 'none'
        }
    })
}
messageSearch.addEventListener('keyup',searchMessage)

// end
// theme-costumization-----------------
//open model
const openThemeModel = () => {
    customizeTheme.style.display = 'grid'
}
//close model
const closeThemeModel =(e) => {
    if(e.target.classList.contains('customize-theme')){
        customizeTheme.style.display = 'none';
    }
}
customizeTheme.addEventListener('click',closeThemeModel)
theme.addEventListener('click',openThemeModel)

// font-size-----------------
//remove active from font size span
const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active')
    })
}
fontSize.forEach(size => {
    size.addEventListener('click',() => {
        removeSizeSelector()
        let fontSize;
        size.classList.toggle('active')
    
    if(size.classList.contains('font-size-1')){
        fontSize = '12px'
        // root.style.setProperty('----sticky-top-left','5.4rem')
        // root.style.setProperty('----sticky-top-right','5.4rem')
    }else if(size.classList.contains('font-size-2')){
        fontSize = '13px'
        // root.style.setProperty('----sticky-top-left','5.4rem')
        // root.style.setProperty('----sticky-top-right','-7rem')
    }else if(size.classList.contains('font-size-3')){
        fontSize = '14px'
        // root.style.setProperty('----sticky-top-left','-2rem')
        // root.style.setProperty('----sticky-top-right','-17rem')
    }else if(size.classList.contains('font-size-4')){
        fontSize = '15px'
        // root.style.setProperty('----sticky-top-left','-5rem')
        // root.style.setProperty('----sticky-top-right','-25rem')
    }else if(size.classList.contains('font-size-5')){
        fontSize = '16px'
        // root.style.setProperty('----sticky-top-left','-12rem')
        // root.style.setProperty('----sticky-top-right','-35rem')
    }
    //change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize
    })
  })

  //theme color change

//   remove active
const changeActiveColorClass = () => {
    themeColor.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}

  themeColor.forEach(color => {
    color.addEventListener('click',() => {
        let primary;
        let secondary;
        //removing
        changeActiveColorClass()
        if(color.classList.contains('color-1')){
            primaryColor= 'rgb(89, 72, 148)'
            secondaryColor = 'rgb(110, 103, 137)'
            colorTheme = 'rgb(215, 206, 245)'
        }else if(color.classList.contains('color-2')){
            primaryColor= 'rgba(68, 130, 167)'
            secondaryColor ='rgb(126, 150, 164)'
            colorTheme = 'rgb(200, 230, 248)'
        }else if(color.classList.contains('color-3')){
            primaryColor ='rgba(0, 163, 136)'
            secondaryColor ='rgb(113, 187, 174)'
            colorTheme = 'rgb(157, 195, 188)'
        }else if(color.classList.contains('color-4')){
            primaryColor= 'rgba(230, 209, 76)'
            secondaryColor = 'rgb(222, 213, 156)'
            colorTheme = 'rgb(245, 239, 204)'
        }else if(color.classList.contains('color-5')){
            primaryColor= 'rgba(181, 37, 37)'
            secondaryColor = 'rgb(164, 106, 106)'
            colorTheme = 'rgb(247, 198, 198)'
        }
        color.classList.add('active')
        root.style.setProperty('--color-primary',primaryColor)
        root.style.setProperty('--color-secondary',secondaryColor)
        root.style.setProperty('--color-light',colorTheme)
    })
  })

    //   remove active
const changeActiveColor = () => {
    chooseBg.forEach(colorBg => {
        colorBg.classList.remove('active')
    })
}

    chooseBg.forEach(backGround => {
        backGround.addEventListener('click',() => {
            let bg;
            let text;
            //removing
            changeActiveColor()
            if(backGround.classList.contains('bg-1')){
                bgColor ='rgba(255, 255, 255, 1)'
                textColor ='rgba(0,0,0)'
            }else if(backGround.classList.contains('bg-2')){
                bgColor= 'hsl( 252 , 30% , 17%)'
                textColor ='rgba(0,0,0)'
            }else if(backGround.classList.contains('bg-3')){
                bgColor= 'rgba(0,0,0)'
                textColor = 'rgba(255, 255, 255, 1)'
            }
            backGround.classList.add('active')
            root.style.setProperty('--color-light',bgColor)
            // root.style.setProperty('--bg-text',textColor)
        })
      })