const bubblegum_prefix = "_";

function checkElements(parent) {
    let elements = parent.querySelectorAll("*");
    elements.forEach((e) => {
        const len = e.attributes.length;
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                let attr = e.attributes[i].name;
                if (attr.charAt(0) === bubblegum_prefix) {
                    attr = attr.slice(1);
                    let cl = attr;

                    if (e.attributes[i].nodeValue.length > 0) {
                        e.attributes[i].nodeValue.split(" ").forEach((v) => {
                            if (v === '!') {
                                e.classList.add(cl)
                            } else {
                                e.classList.add(cl + "-" + v);
                            }
                        })
                    } else {
                        e.classList.add(cl)
                    }
                    e.removeAttribute(e.attributes[i].name)
                }
            }
        }
    })
}

window.addEventListener('load', function () {
    checkElements(document.querySelector('body'));
})