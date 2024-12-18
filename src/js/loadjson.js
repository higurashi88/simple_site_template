fetch('config.json')
    .then(response => response.json())
    .then(data => {
        const header = document.querySelector("header");
        const footer = document.querySelector("footer");
        let headerEle = document.getElementById("header");
        let footerEle = document.getElementById("footer");

        headerEle.textContent = data.site_name;
        if (data.header_bg_color) {
            header.style.backgroundColor = data.header_bg_color;
        }
        if (data.header_font_color) {
            header.style.color = data.header_font_color;
        }

        footerEle.textContent = data.footer_msg;
        if (data.footer_bg_color) {
            footer.style.backgroundColor = data.footer_bg_color;
        }
        if (data.footer_font_color) {
            footer.style.color = data.footer_font_color;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });