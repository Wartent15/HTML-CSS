const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};


const toggleTheme = () => {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// При загрузке страницы:
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
}


const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('Текст скопирован!');
  } catch (err) {
    console.error('Ошибка копирования: ', err);
  }
};