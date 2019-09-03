import "./scss/style.scss";
import bimg from "./assets/b.png";
import { data } from "./data/data";
// import ajax from "./js/ajax";
let ban = new Image();
ban.src = bimg;
let banner = document.querySelector(".banner");
banner.appendChild(ban);

function render(data) {
    return data.map(item => `<li>${item}</li>`).join("")
}
data.forEach(item => {
    if (item.type == "hot") {
        list.innerHTML = render(item.list)
    }
})

let bs = new BScroll(".content", {
    probeType: 2
})
bs.on("scroll", onScroll);
bs.on("scrollEnd", onScrollEnd);
let pup = document.querySelector("#pull-up");

let hotdata = [...data.filter(item => item.type == "hot")[0].list];
let recommenddata = [...data.filter(item => item.type == "recommend")[0].list];
let addArr = new Array(1)

function onScroll() {
    let h = pup.offsetHeight;
    if (bs.y < bs.maxScrollY - h) {
        pup.setAttribute("flag", true)
        pup.innerHTML = "释放加载"
    } else {
        pup.removeAttribute("flag");
        pup.innerHTML = "上拉加载"
    }
    if (page >= total) {
        pup.innerHTML = "没有更多了"
    } else {
        pup.innerHTML = "上拉加载"
    }
}
let page = 1,
    limit = 3,
    total;

function onScrollEnd() {
    if (pup.getAttribute("flag")) {
        page++;
        if (page > total) {
            return;
        }
        if (document.querySelector(".active").classList.contains("hot")) {
            addArr = hotdata.slice((page - 1) * limit, page * limit);
            total = Math.ceil(hotdata.length / limit);
        } else if (document.querySelector(".active").classList.contains("recommend")) {
            addArr = recommenddata.slice((page - 1) * limit, page * limit);
            total = Math.ceil(recommenddata.length / limit);
        }
        list.innerHTML += render(addArr);
        let pos = bs.maxScrollY - 50;
        bs.refresh();
        bs.scrollTo(0, pos, 0)
    }

}

let title = document.querySelector(".title ul");
let lis = [...title.children];
lis.forEach(item => {
    item.onclick = () => {
        page = 1;
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
        if (item.classList.contains("hot")) {
            list.innerHTML = render(hotdata);
        } else if (item.classList.contains("recommend")) {
            list.innerHTML = render(recommenddata)
        }
    }
})