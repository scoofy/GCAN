var testing = false;
var dimPercentage = "10%";
var notablePercentage = "60%"

var body = returnSubTagSingleton(document, 'body');
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "space-between";
addBorder(body, 'red', px = 10);

function setAvatarSizesToDataSets(bodyTag) {
    let avatar_divs = bodyTag.getElementsByClassName('avatar');
    for (avatar of avatar_divs) {
        if (avatar.tagName == "IMG") {
            //console.log('setAvatarSizesToDataSets');
            //console.log('height:', avatar.height);
            //console.log('width:', avatar.width);
        }
    }
}

var addedStyleSheet = document.createElement("style");
var myStyle = `
    .container {
        min-height: 0px !important;
    }
    .hideShowNavPillsList:hover {
        background: #eeeeee;
    }
    @media screen and (max-width: 575px), (max-device-width: 575px), (pointer: coarse) {
        .wide_flex {
            flex-direction: column;
            justify-content: center;
        }
        .signature {
            visibility: collapse;
        }
        .new_right_col {
            min-width: 100%;
            width: 100%;
            flex-shrink: 1;
            flex-grow: 1;
            padding: 0;
        }
    }
    `;
addedStyleSheet.innerText = myStyle;
document.head.appendChild(addedStyleSheet);

var base_flex = document.createElement("div");
base_flex.style.display = "flex";
base_flex.style.gap = "5px";
base_flex.style.padding = "5px";
addBorder(base_flex, "#ccc");

var base_col_flex = base_flex.cloneNode();
base_col_flex.style.flexDirection = "column";

function baseFlex() {
    return base_flex.cloneNode();
}

function baseColFlex() {
    return base_col_flex.cloneNode();
}



function resizeImages() {
    let imgs = document.getElementsByTagName('img');
    for (elem of imgs) {
        if (elem.className != 'avatar') {
            elem.style.maxWidth = "100%";
            elem.style.height = "auto";
        }
    }
}



function minFontSize(minPxSize = 10, minEmSize = 0.8) {
    let elements = document.querySelectorAll('.bbc_size');
    for (elem of elements) {
        let fontSize = elem.style.fontSize;
        //console.log('fontSize:', fontSize);
        if (fontSize.endsWith('px')) {
            let sizeNum = parseInt(fontSize.slice(0, -2));
            if (sizeNum < minPxSize) {
                elem.style.fontSize = `${minPxSize}px`;
            }
        }
        if (fontSize.endsWith('em')) {
            let sizeNum = parseFloat(fontSize.slice(0, -2));
            if (sizeNum < minEmSize) {
                elem.style.fontSize = `${minEmSize}em`;
            }
        }
    }
}

function maxFontSize(maxPxSize = 16, maxEmSize = 1.1) {
    let elements = document.querySelectorAll('.bbc_size');
    for (elem of elements) {
        let fontSize = elem.style.fontSize;
        //console.log('fontSize:', fontSize);
        if (fontSize.endsWith('px')) {
            let sizeNum = parseInt(fontSize.slice(0, -2));
            //console.log('sizeNum:', sizeNum);

            if (sizeNum > maxPxSize) {
                elem.style.fontSize = `${maxPxSize}px`;
            }
        }
        if (fontSize.endsWith('em')) {
            let sizeNum = parseFloat(fontSize.slice(0, -2));
            //console.log('sizeNum:', sizeNum);
            if (sizeNum > maxEmSize) {
                elem.style.fontSize = `${maxEmSize}em`;
            }
        }
    }
}


function hideNewbie() {
    let classesToHide = ['.postgroup', '.stars', '.karma'];
    for (namedClass of classesToHide) {
        let elements = document.querySelectorAll(namedClass);
        for (elem of elements) {
            elem.style.display = "none";
        }
    }
}

function hideFatalAndClearFix() {
    let element = document.getElementById('fatal_error');
    element.style.display = "none";
    let elements = document.querySelectorAll('.clearfix');
    for (elem of elements) {
        elem.style.display = "none";
    }
}

function dimKeyInfo() {
    let keyInfos = document.querySelectorAll('.keyinfo');
    for (keyInfo of keyInfos) {
        //keyInfo.style.opacity = dimPercentage;
    }
}

function formatInnerPostDiv() {
    let inners = document.querySelectorAll('.inner');
    for (inner of inners) {
        inner.style.borderTop = "none";
        inner.style.margin = "10px 0";
        inner.style.padding = "10px";
        inner.style.borderRadius = "5px";
    }
}

function dimSignature() {
    let signatures = document.querySelectorAll('.signature');
    for (signature of signatures) {
        signature.style.opacity = notablePercentage;
        signature.style.borderTop = "none";
    }
}

function blockquoteFormatting() {
    let blocks = document.getElementsByTagName('blockquote');
    for (block of blocks) {
        block.style.borderLeft = "2px solid #ccc";
        block.style.margin = "0 0 10px 4px";
        block.style.padding = "0 0 0 4px";

        blockImgs = block.getElementsByTagName('img');
        for (img of blockImgs) {
            img.style.maxHeight = "50px";
            img.style.maxWidth = 'none';
            img.style.width = 'auto';
            img.dataset.thumbnail = 'true';
            //console.log((img)
        }
    }

    let quoteHeaders = document.getElementsByClassName('quoteheader');
    for (header of quoteHeaders) {
        header.style.marginTop = "5px";
    }
}

function removeThirdLineBreaks(element) {
    let brsToRemove = [];
    let brs = element.getElementsByTagName('br');
    let acceptableParents = ["A", "BR", "IMG", "#text"];
    for (br of brs) {
        if (br.previousSibling) {
            //console.log('    ', br.previousSibling.nodeName);
            //console.log(br.previousSibling.textContent);
            if (!acceptableParents.includes(br.previousSibling.nodeName)) {
                brsToRemove.push(br);
            } else if (br.previousSibling.tagName == "BR") {
                if (br.previousSibling.previousSibling) {
                    if (!acceptableParents.includes(br.previousSibling.previousSibling.nodeName)) {
                        brsToRemove.push(br);
                    } else if (br.previousSibling.previousSibling.tagName == "BR") {
                        brsToRemove.push(br);
                    }
                } else {
                    brsToRemove.push(br);
                }
            }
        } else {
            brsToRemove.push(br);
        }
    }
    for (br of brsToRemove) {
        br.remove()
    }
}

function dimLogged() {
    let modified_elements = document.querySelectorAll('.modified');
    for (elem of modified_elements) {
        //elem.style.opacity = dimPercentage;
    }
    let report_elements = document.querySelectorAll('.reportlinks');
    for (elem of report_elements) {
        //elem.style.opacity = dimPercentage;
        let imgs = elem.getElementsByTagName('img');
        for (img of imgs) {
            img.style.display = "none";
        }
        let logs = elem.getElementsByClassName('help');
        for (log of logs) {
            log.style.display = "none";
        }
    }
}

function hideMessageIcons() {
    classesToRemove = ['messageicon', 'glyphicon-pencil'];
    for (className of classesToRemove) {
        let elements = document.querySelectorAll(`.${className}`);
        for (elem of elements) {
            elem.style.display = 'none';
        }
    }
}

function replyListToHamburger() {
    let navPillsList = document.querySelectorAll('.nav-pills');
    for (const [index, navPillsElement] of navPillsList.entries()) {
        navPillsElement.style.display = "flex";
        navPillsElement.style.flexDirection = "column";
        navPillsElement.style.flexWrap = "wrap";

        addedClassName = `navPillsHide${index}`;
        let navPillsChildren = navPillsElement.children;
        let count = 2;
        let replyFlex = null;
        for (elem of navPillsChildren) {
            if (elem.className.includes('active')) {
                replyFlex = elem;
                elem.style.display = 'flex';
                elem.style.order = 1
            } else {
                elem.style.visibility = 'collapse';
                elem.classList.add(addedClassName);
                elem.style.order = count;
                count += 1;
            }
        }

        let expandButtonDiv = document.createElement("div");
        expandButtonDiv.className = "hideShowNavPillsList";
        expandButtonDiv.style.display = "Flex";
        expandButtonDiv.style.justifyContent = "center";
        expandButtonDiv.style.alignItems = "center";
        expandButtonDiv.style.width = '50px';
        expandButtonDiv.style.cursor = 'pointer';

        expandButtonDiv.onclick = function() {
            let index = this.dataset.index;
            let parent = this.parentElement.parentElement;
            for (elem of parent.children) {
                if (!(elem.className.includes('active'))) {
                    if (elem.className.includes('hideShowNavPillsList')) {
                        if (elem.firstChild.textContent === "More") {
                            elem.firstChild.textContent = "Less";
                        } else {
                            elem.firstChild.textContent = "More";
                        }
                    } else if (elem.style.visibility === 'collapse') {
                        elem.style.visibility = 'visible';
                    } else {
                        elem.style.visibility = 'collapse';
                    }
                }
            }

        };

        let textSpan = document.createElement("div");
        textSpan.textContent = "More";

        expandButtonDiv.appendChild(textSpan)
        replyFlex.appendChild(expandButtonDiv);
    }
}

function warningsFullVisibility() {
    let messageContainers = document.querySelectorAll('.message_container');
    for (container of messageContainers) {
        let posterResponsive = container.getElementsByClassName('poster_responsive')[0];
        let labelWarning = container.getElementsByClassName('label-warning')[0];
        //let h4 = container.getElementsByTagName('h4')[0];

        if (posterResponsive && labelWarning) {
            //h4.style.width = "100%";
            //h4.style.display = "flex";

            posterResponsive.style.display = "flex";
            posterResponsive.style.flexDirection = "column";
            //posterResponsive.style.alignItems = "center";
            posterResponsive.style.gap = "5px";

            labelWarning.style.width = "fit-content";
            labelWarning.style.marginLeft = "20px";

            let br = document.createElement("br");
            posterResponsive.appendChild(labelWarning);
        }
    }
}
//warningsFullVisibility()


function returnSubClassSingleton(parentElement, theClassName, returnNull = false) {
    //console.log("returnSubClassSingleton()");
    let theElementList = parentElement.getElementsByClassName(theClassName);
    let theElement = theElementList.item(0);
    //console.log(theElement);
    if (!theElement) {
        if (returnNull) {
            return null;
        }
        //console.log("STYLE!");
        theElement = document.createElement("style");
        //console.log(theElement);
    }
    return theElement;
}

function returnSubTagSingleton(parentElement, theTagName, returnNull = false) {
    //console.log("returnSubClassSingleton()");
    let theElementList = parentElement.getElementsByTagName(theTagName);
    let theElement = theElementList.item(0);
    //console.log(theElement);
    if (!theElement) {
        if (returnNull) {
            return null;
        }
        //console.log("STYLE!");
        theElement = document.createElement("style");
        //console.log(theElement);
    }
    return theElement;
}

function addBorder(element, color, px = 1) {
    if (testing) {
        if (element) {
            element.style.border = `solid ${px}px ${color}`;
        } else {
            //console.log(element);
            throw new Error("element doesn't exist");
        }
    }
}

function formatExistingLeftColumn(leftCol) {
    let formatedLeftCol = baseColFlex();

    let h4 = returnSubTagSingleton(leftCol, 'h4');
    let nameSpan = leftCol.querySelector('[itemprop="name"]');
    nameSpan.textContent = nameSpan.textContent.replace('_', ' ');
    nameSpan.style.color = '#c06002';
    let avatar = leftCol.querySelector('[itemprop="image"]');

    formatedLeftCol.appendChild(h4);
    if (avatar) {
        formatedLeftCol.appendChild(avatar);
    }

    return formatedLeftCol;
}

function calculateImgAspectRatioFit(img) {
    //console.log('calculateImgAspectRatioFit(img)');
    //console.log('THIS SHOULD ALWAYS BE AN IMAGE:')
    //console.log(img);
    //console.log(img.style.height);
    //console.log(img.naturalHeight);

    let srcWidth = img.naturalWidth;
    //console.log('srcWidth:', srcWidth);

    if (!srcWidth) {
        //console.log('naturalWidth FAIL')
        srcWidth = parseInt(img.style.width);
        //console.log('style width:', srcWidth);
    }
    if (!srcWidth) {
        return
    }

    let srcHeight = img.naturalHeight;
    if (!srcHeight) {
        srcHeight = parseInt(img.style.height);
    }

    let maxWidth = 100;
    let maxHeight = 50;

    //console.log(srcWidth, srcHeight, maxWidth, maxHeight);

    let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    let ratioObj = {
        width: srcWidth * ratio || 500,
        height: srcHeight * ratio || 500,
    };
    //console.log('ratioObj:', ratioObj);


    return ratioObj;
}

function thisResizeCalculation() {
    this.maxWidth = 'none';
    this.style.maxWidth = 'none';
    this.style.maxHeight = 'none';
    //console.log('this.dataset.thumbnail == false')
    //console.log(this.dataset.thumbnail)
    //console.log(this.dataset.thumbnail == false)
    if (this.dataset.thumbnail == "false") {
        aspect = calculateImgAspectRatioFit(this);
        if (aspect) {
            this.style.width = `${aspect.width}px`;
            this.style.height = `${aspect.height}px`;
            this.dataset.thumbnail = 'true';
        }
    } else {
        this.style.width = `${this.naturalWidth}px`;
        this.style.height = `${this.naturalHeight}px`;
        this.dataset.thumbnail = 'false';
    }
    //console.log(this);
}

function resizeCalculation(img) {
    img.maxWidth = 'none';
    img.style.maxWidth = 'none';
    img.style.maxHeight = 'none';
    //console.log('this.dataset.thumbnail == false')
    //console.log(img.dataset.thumbnail)
    //console.log(img.dataset.thumbnail == false)
    if (img.dataset.thumbnail == "false") {
        aspect = calculateImgAspectRatioFit(img);
        if (aspect) {
            img.style.width = `${aspect.width}px`;
            img.style.height = `${aspect.height}px`;
            img.dataset.thumbnail = 'true';
        }
    } else {
        img.style.width = `${img.naturalWidth}px`;
        img.style.height = `${img.naturalHeight}px`;
        img.dataset.thumbnail = 'false';
    }
    //console.log(img);
}


function resizeAvatar(messageContainerElement) {
    let avatar_divs = messageContainerElement.getElementsByClassName('avatar');
    for (avatar of avatar_divs) {
        if (avatar.tagName == "IMG") {
            avatar.dataset.thumbnail = 'false';
            // this is quite complex
            // i can't get this to work without:
            //    running the function
            //    then passing a this-based function to run onload
            //    then having the this-based function fire onclick
            // but somehow this works!
            resizeCalculation(avatar);
            avatar.onload = thisResizeCalculation;
            avatar.onclick = thisResizeCalculation;
        }
    }
}


function messageIteration(messageContainerElement) {
    // class = "windowbg row message_container"
    // or
    // class = "windowbg2 row message_container"

    let col_flex = baseColFlex();
    col_flex.className = messageContainerElement.className;
    addBorder(col_flex, 'black');

    let left_col = baseColFlex();
    left_col.className = "new_left_col"
    left_col.style.width = 'fit-content';
    left_col.style.flexShrink = 3;
    let right_col = baseColFlex();
    right_col.className = "new_right_col"
    right_col.style.maxWidth = '75%';
    right_col.style.flexShrink = 1;
    right_col.style.flexGrow = 3;

    let wide_flex = baseFlex();
    wide_flex.className = "wide_flex";
    wide_flex.style.width = '100%';
    wide_flex.style.justifyContent = "space-between";
    addBorder(wide_flex, 'red');

    let footer_flex = baseFlex();
    footer_flex.className = "footer_flex";
    footer_flex.style.justifyContent = "flex-end";
    addBorder(footer_flex, 'green');

    let footer_info_col = baseColFlex();
    footer_info_col.className = "footer_info_col";
    footer_info_col.style.width = "100%";
    footer_info_col.style.visibility = 'collapse';

    let footer_button_col = baseFlex();
    footer_button_col.className = "footer_info_col";

    // get newPostWarning now, becaues the stuff it's located in will move out of the container
    let newPostWarning = returnSubClassSingleton(messageContainerElement, 'label-warning', true);

    let existing_left_col = returnSubClassSingleton(messageContainerElement, "col-md-3");
    let formattedLeftCol = formatExistingLeftColumn(existing_left_col);
    addBorder(formattedLeftCol, 'DarkOliveGreen');

    let existing_right_col = returnSubClassSingleton(messageContainerElement, "col-md-9");
    addBorder(existing_right_col, 'MistyRose');
    existing_right_col.style.width = "100%";
    existing_right_col.style.textAlign = 'justify';
    existing_right_col.style.textJustify = 'inter-word';

    let post = returnSubClassSingleton(existing_right_col, "postarea");
    removeThirdLineBreaks(post);


    let subject_info = returnSubClassSingleton(existing_right_col, "flow_hidden");
    addBorder(subject_info, "Indigo");
    let keyinfo = returnSubClassSingleton(existing_right_col, "keyinfo");
    keyinfo.style.width = "100%";
    addBorder(keyinfo, "Tomato");

    let moderation = returnSubClassSingleton(existing_right_col, "moderatorbar");
    addBorder(moderation, "Salmon");
    let signature = returnSubClassSingleton(existing_right_col, "signature");
    signature.style.width = '100%';
    addBorder(signature, "Fuchsia");
    let buttons = returnSubClassSingleton(subject_info, "quickbuttons2");
    buttons.style.display = "flex";
    buttons.style.gap = "10px";
    buttons.style.justifyContent = 'center';
    buttons.style.alignItems = 'flex-start';
    buttons.style.flexWrap = "nowrap";
    addBorder(buttons, "BurlyWood");


    let firstButton = returnSubTagSingleton(buttons, "a");
    let newButton = firstButton.cloneNode();
    //console.log(newButton);
    newButton.removeAttribute("href");
    newButton.textContent = "Info";
    newButton.onclick = function() {
        if (footer_info_col.style.visibility == 'visible') {
            footer_info_col.style.visibility = 'collapse';
        } else {
            footer_info_col.style.visibility = 'visible';
        }
    }
    buttons.appendChild(newButton);

    footer_info_col.appendChild(subject_info);
    footer_info_col.appendChild(moderation);
    footer_button_col.appendChild(buttons);
    footer_button_col.style.flexWrap = "nowrap";

    footer_flex.appendChild(footer_info_col);
    footer_flex.appendChild(footer_button_col);
    footer_flex.style.justifyContent = 'space-between';


    right_col.appendChild(post);
    left_col.appendChild(formattedLeftCol);
    left_col.appendChild(signature);
    wide_flex.appendChild(left_col);
    wide_flex.appendChild(right_col);

    //console.log('newPostWarning START!');
    //console.log(newPostWarning);
    if (newPostWarning) {
        let newPostFlex = baseFlex();
        newPostFlex.style.justifyContent = "center";
        newPostFlex.appendChild(newPostWarning);
        col_flex.appendChild(newPostFlex);
        col_flex.style.borderLeft = "solid 4px #e99002";
        col_flex.style.borderRadius = "2px";

    }


    col_flex.appendChild(wide_flex);
    col_flex.appendChild(footer_flex);

    resizeAvatar(col_flex);
    return col_flex;
}

function forumIteration() {
    forumPosts = document.getElementById('forumposts');
    if (!forumPosts) {
        return
    }
    forumPosts.style.display = "flex";
    forumPosts.style.flexDirection = "column";
    forumPosts.style.gap = "10px";


    forumForm = document.getElementById('quickModForm');
    messages = document.querySelectorAll('.message_container');
    //console.log(forumForm);

    forumPosts.replaceChildren();
    for (const [i, message] of messages.entries()) {
        let formattedMessage = messageIteration(message);
        forumPosts.appendChild(formattedMessage);
    }
}

function removePreviousAndNextPageAndBackButtons() {
    pagers = document.getElementsByClassName("pager");
    for (pager of pagers) {
        //console.log(pager);
        pager.style.display = "none";
    }
    centerTextDivs = document.getElementsByClassName("centertext");
    for (centerTextDiv of centerTextDivs) {
        //console.log(centerTextDiv);
        if (centerTextDiv.children.length == 1) {
            if (centerTextDiv.firstChild.nodeName == "A") {
                centerTextDiv.style.display = "none";
            }
        }
    }
}

function formatFirstRow() {
    let topRow = returnSubClassSingleton(body, "row");

    let searchForm = document.getElementById('search_form');

    let layoutText = `
    <div class="col-md-9">
        <form class="navbar-form navbar-left" role="search" id="search_form" action="https://www.golfclubatlas.com/forum/index.php?action=search2" method="post" accept-charset="ISO-8859-1">

                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search" name="search" />
                </div>
                <input type="hidden" name="advanced" value="0" />
                <button type="submit" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-search">
                    </span>
                    Search
                </button>
                <a href="https://www.golfclubatlas.com/forum/index.php?action=search;advanced=1">
                    <span class="glyphicon glyphicon-cog">
                    </span>
                </a>
                <input type="hidden" name="topic" value="72924" />


                <br class="clear" />
                <br class="clear" />
                <span class="glyphicon glyphicon-time"></span> May 31, 2024, 07:45:57 PM
                |
                <span class="glyphicon glyphicon-calendar"></span> <a href="https://www.golfclubatlas.com/forum/index.php?action=calendar">Calendar</a>
         </form>
    </div>
    `

    //pull out elements and reput them in to remove pesky text
    elementList = [];
    for (element of searchForm) {
        elementList.push(element);
    }
    searchForm.innerHTML = "";
    for (element of elementList) {
        searchForm.appendChild(element);
        searchForm.dataset.searchFormElement = "true";
    }
    //remove text



    // news area
    let newsDiv = returnSubClassSingleton(topRow, "col-md-3");
    // double check here
    for (child of newsDiv.children) {
        if (child.innerText.includes("News")) {
            newsDiv.style.display = "none";
            return
        }

    }
}



function removeContainerHr() {
    for (element of body.children) {
        if (element.className == "container") {
            for (child of element.children) {
                //console.log(element.tagName);
                if (child.tagName == "HR") {
                    child.remove();
                    return;
                }
            }
        }
    }
}

function cleanerPageBar() {
    let keyInfo = returnSubClassSingleton(body, 'keyinfo');
    let h5 = returnSubTagSingleton(keyInfo, 'h5');
    let titleAnchor = returnSubTagSingleton(h5, 'a');


    pageBars = document.getElementsByClassName("pagesection");
    for (pageBar of pageBars) {
        console.log(pageBar)
        addBorder(pageBar, 'orange');
        pageBar.style.width = '100%';
        pageBar.style.margin = "15px 0";

        pageBar.style.display = 'flex';
        pageBar.style.justifyContent = 'space-between';
        pageBar.style.alignItems = 'center';
        //pageBar.style.flexWrap = 'wrap';


        let newH5 = h5.cloneNode()
        let newTitleAnchor = titleAnchor.cloneNode(true);
        newH5.appendChild(newTitleAnchor);
        newH5.style.order = 1;
        newH5.style.fontWeight = 'bold';
        console.log('newH5');
        console.log(newH5);
        pageBar.appendChild(newH5);


        for (element of pageBar.children) {
            addBorder(element, 'DarkOrange');
            if (element.className.includes("floatright")) {
                //hamburger
                element.style.order = 4;
                //element.style.flexShrink = 4;
                element.style.flexBasis = '100px';


            } else if (element.className.includes("floatleft")) {
                //pages seciton
                element.style.order = 2;
                element.style.whiteSpace = "nowrap";
                element.style.padding = "0 20px";


            }
        }
    }
}

function fullPageIteration() {
    resizeImages();
    minFontSize();
    maxFontSize();
    hideFatalAndClearFix();
    hideNewbie();
    hideMessageIcons();

    dimKeyInfo()
    dimLogged();
    dimSignature();

    formatInnerPostDiv();
    blockquoteFormatting();
    replyListToHamburger();



    formatFirstRow();
    removePreviousAndNextPageAndBackButtons();
    removeContainerHr();
    cleanerPageBar();

    forumIteration();
}
fullPageIteration()



// end of line