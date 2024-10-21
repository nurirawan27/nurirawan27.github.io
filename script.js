// Misalkan Anda menggunakan tombol untuk mengubah visibilitas
document.querySelector('.toggle-button').addEventListener('click', function() {
    const encouragementDiv = document.querySelector('.encouragement');
    if (encouragementDiv.classList.contains('hidden')) {
        encouragementDiv.classList.remove('hidden');
        encouragementDiv.classList.add('visible');
    } else {
        encouragementDiv.classList.remove('visible');
        encouragementDiv.classList.add('hidden');
    }
});
