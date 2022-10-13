
// const fileInput = document.getElementById('inputUrl').value;
// const downloadBtn = document.getElementById('downloadBtn');

// downloadBtn.addEventListener('click', (e) => {
//     console.log('i am btn');
//     e.preventDefault();
//     console.log(fileInput);
//     // fetchUrl(url);
// });

$('#downloadBtn').click(function (e) {
    e.preventDefault();
    console.log('i am here...');
    let url = $('#inputUrl').val();
    $('#downloadBtn').html('Downloading file....');
    setTimeout(() => {
        fetchUrl(url);
    }, 2000)

});

function fetchUrl(newUrl) {
    fetch(newUrl).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file)
        let aTag = document.createElement('a');
        aTag.href = tempUrl;
        aTag.download = tempUrl.replace(/^.*[\\\/]/, '');
        $('body').append(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        $('#downloadBtn').html('Download File');
    }).catch(() => {
        $('#downloadBtn').html('Download File');
        alert('Failed to Download file')
    })
}