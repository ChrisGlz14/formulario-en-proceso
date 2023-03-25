const textarea = document.getElementById('text');

textarea.addEventListener('input', function() {
  this.style.fontFamily = 'sans-serif';
  this.style.fontSize = '15px';
});