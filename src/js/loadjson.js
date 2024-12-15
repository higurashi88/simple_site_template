fetch('config.json')
    .then(response => response.json())
    .then(data => {
        console.log(data.site_name);
        // ここでデータを利用する
    })
    .catch(error => {
        console.error('Error:', error);
    });