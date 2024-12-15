// CSVデータを読み込む
const TAG = 0;
const CONTENT = 1;

fetch('data.csv')
    .then(response => response.text())
    .then(data => {
        // CSVデータを解析し、HTMLに表示する
        Papa.parse(data, {
            complete: function (results) {
                const dataDiv = document.getElementById('data');
                // results.data に解析結果が入っているので、HTMLに表示する
                results.data.forEach(row => {
                    if (row[TAG]) {
                        const tag = document.createElement(row[TAG]);
                        tag.textContent = row[CONTENT];
                        dataDiv.appendChild(tag);
                    }
                });
            }
        });
    });