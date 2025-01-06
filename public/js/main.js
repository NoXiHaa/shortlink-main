document.getElementById('urlForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        url: document.getElementById('url').value,
        customSlug: document.getElementById('customSlug').value,
        password: document.getElementById('password').value,
        expiresIn: document.getElementById('expiresIn').value
    };

    try {
        const response = await fetch('/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        
        if (data.error) {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi',
                text: data.error || 'Đã xảy ra lỗi khi rút gọn URL'
            });
            return;
        }

        document.getElementById('shortUrl').value = data.shortUrl;
        document.getElementById('qrCode').src = data.qrCode;
        document.getElementById('qrDownload').href = data.qrCode;
        document.getElementById('result').style.display = 'block';

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while shortening the URL'
        });
    }
});

function copyToClipboard() {
    const shortUrl = document.getElementById('shortUrl');
    shortUrl.select();
    document.execCommand('copy');
    
    Swal.fire({
        icon: 'success',
        title: 'Đã sao chép!',
        text: 'URL rút gọn đã được sao chép vào clipboard',
        showConfirmButton: false,
        timer: 1500
    });
}