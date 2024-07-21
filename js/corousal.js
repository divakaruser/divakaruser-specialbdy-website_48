let left = document.querySelector('.left');
let right = document.querySelector('.right');
let container = document.querySelector('.container');
let count = 0;
left.style.display = 'none';
let len = container.children.length;
let compare = count;

function comparePages(compare, count) {
    if (compare < count) {
        container.children[count].classList.add('slide-left');
        container.children[count].classList.remove('slide-right');
    }
    else if(compare === count);
    else {
        container.children[count].classList.add('slide-right');
        container.children[count].classList.remove('slide-left');
    }
}

right.addEventListener('click', function () {
    rightClick();
    pageCount(count);
    pageColor();
})

left.addEventListener('click', function () {
    leftClick();
    pageCount(count);
    pageColor();
})
function pageCount(count) {
    if (count === len - 1)
        right.style.display = 'none';
    else
        right.style.display = 'block';
    if (count === 0)
        left.style.display = 'none';
    else
        left.style.display = 'block';
}

function pageColor() {
    for (let i = 0; i < page.children.length; i++) {
        page.children[i].style.backgroundColor = 'white';
        page.children[i].classList.remove('page-number');

    }
    page.children[count].style.backgroundColor = 'grey';
    page.children[count].style.border = '1px solid black';
    page.children[count].classList.add('page-number');
}

function rightClick() {
    if (count < container.children.length - 1) {
        container.children[count].style.display = "none";
        container.children[count].nextElementSibling.style.display = "block";
        count += 1;
        comparePages(compare, count);
        compare = count;
    }

}

function leftClick() {
    if (count != 0) {
        container.children[count].style.display = "none";
        container.children[count].previousElementSibling.style.display = "block";
        count -= 1;
        comparePages(compare, count);
        compare = count;
    }
}
let page = document.querySelector('.pagination')

for (let i = 0; i < container.children.length; i++) {
    let li = document.createElement('li');
    let textNode = document.createTextNode(i + 1);
    li.appendChild(textNode);
    page.appendChild(li);
    pageColor();
}

for (let i = 0; i < page.children.length; i++) {
    page.children[i].addEventListener('click', function () {
        container.children[count].style.display = 'none';
        container.children[i].style.display = 'block';
        count = i;
        pageCount(count);
        pageColor();
        comparePages(compare, count);
        compare = count;
    })
}
