var mainMenu=document.querySelector(".main-nav"),mainMenuToggle=document.querySelector(".page-header__nav-toggle"),pageHeader=document.querySelector(".page-header__color-wrap");pageHeader.classList.add("page-header__color-wrap--closed"),mainMenu.classList.add("main-nav--closed"),mainMenuToggle.classList.remove("page-header__nav-toggle--no-js"),mainMenuToggle.addEventListener("click",function(){mainMenu.classList.contains("main-nav--closed")?(mainMenu.classList.remove("main-nav--closed"),pageHeader.classList.remove("page-header__color-wrap--closed"),mainMenuToggle.classList.add("page-header__nav-toggle--opened")):(pageHeader.classList.add("page-header__color-wrap--closed"),mainMenu.classList.add("main-nav--closed"),mainMenuToggle.classList.remove("page-header__nav-toggle--opened"))});