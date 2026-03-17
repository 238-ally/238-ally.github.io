// 点击菜单的 English 按钮，跳转到当前文章的英文版本
document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.querySelector('a[href="/en/"]');
  if(langBtn){
    langBtn.addEventListener('click', e => {
      e.preventDefault();
      const currentPath = location.pathname;
      if(currentPath.endsWith('/')) location.href = '/en/';
      else {
        location.href = currentPath.replace(/\.md$/, '.en.md').replace(/^\/?/, '/en/');
      }
    });
  }
});